import {RenderPosition, render, replace, remove} from "../utils/render.js";
import {UserAction, UpdateType, NetworkValues} from "../utils/const.js";

import Api from "../api.js";

import MovieCardView from "../view/movie-card.js";
import PopupView from "../view/popup.js";

const api = new Api(NetworkValues.END_POINT, NetworkValues.AUTHORIZATION);

export default class Movie {
  constructor(container, changeData, commentsModel) {
    this._container = container;
    this._commentsModel = commentsModel;

    this._changeData = changeData;

    this._movieCardView = null;
    this._popupView = null;
    this._isLoading = true;

    this._filmCardClickHandler = this._filmCardClickHandler.bind(this);
    this._closePopupHandler = this._closePopupHandler.bind(this);

    this._handleWatchlistClick = this._handleWatchlistClick.bind(this);
    this._handleHistoryClick = this._handleHistoryClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);

    this._handleDeleteClick = this._handleDeleteClick.bind(this);
    this._handleCommentsViewAction = this._handleCommentsViewAction.bind(this);
    this._handleCommentsModelEvent = this._handleCommentsModelEvent.bind(this);
    this._handleAddComment = this._handleAddComment.bind(this);
  }

  init(movie) {
    this._movie = movie;
    this._commentsCount = this._movie.comments.length;
    const prevMovieView = this._movieCardView;

    this._movieCardView = new MovieCardView(this._movie, this._commentsCount);

    this._movieCardView.setFilmCardClickHandler(this._filmCardClickHandler);

    this._movieCardView.setWatchlistClickHandler(this._handleWatchlistClick);
    this._movieCardView.setHistoryClickHandler(this._handleHistoryClick);
    this._movieCardView.setFavoriteClickHandler(this._handleFavoriteClick);

    if (prevMovieView === null) {
      this._renderMovieCard();
      return;
    }

    while (this._container.contains(prevMovieView.getElement())) {
      replace(this._movieCardView, prevMovieView);
    }

    remove(prevMovieView);
  }

  // удаление карточки
  destroy() {
    remove(this._movieCardView);
  }

  // обработчик клика на карточку фильма
  _filmCardClickHandler() {
    this._showPopup();
  }

  // рендер одной карточки фильма
  _renderMovieCard() {
    render(this._container, this._movieCardView, RenderPosition.BEFORE_END);
  }

  // показ попапа
  _showPopup() {
    const prevPopupView = this._popupView;

    if (prevPopupView !== null && document.body.contains(prevPopupView.getElement())) {
      remove(prevPopupView);
    }

    if (document.body.contains(document.querySelector(`.film-details`))) {
      document.querySelector(`.film-details`).remove();
    }

    document.body.classList.add(`hide-overflow`);

    this._comments = [];
    this._popupView = new PopupView(this._movie, this._comments, this._isLoading);

    this._popupView.setClickClosePopupHandler(this._closePopupHandler);
    this._popupView.setEscPressClosePopupHandler(this._closePopupHandler);

    render(document.body, this._popupView.getElement(), RenderPosition.BEFORE_END);

    this._commentsModel.addObserver(this._handleCommentsModelEvent);

    api.getComments(this._movie).then((commentsList) => {
      this._commentsModel.setComments(UpdateType.INIT, commentsList);

      this._popupView.setWatchlistClickHandler(this._handleWatchlistClick);
      this._popupView.setHistoryClickHandler(this._handleHistoryClick);
      this._popupView.setFavoriteClickHandler(this._handleFavoriteClick);

      this._popupView.setDeleteClickHandler(this._handleDeleteClick);
      this._popupView.setFormSubmitHandler(this._handleAddComment);
    })
    .catch(() => {
      this._commentsModel.setComments(UpdateType.INIT, []);
    });
  }

  // скрытие попапа
  _closePopup() {
    document.body.classList.remove(`hide-overflow`);
    this._popupView.reset(this._movie, this._comments);
    this._commentsModel.removeObserver(this._handleCommentsModelEvent);

    document.removeEventListener(`keydown`, this._escPressClosePopupHandler);
    document.removeEventListener(`keydown`, this._formSubmitHandler);

    remove(this._popupView);
  }

  // обработчик закрытия попапа
  _closePopupHandler() {
    this._closePopup();
  }

  // изменения состояния "add to watchlist"
  _changeWatchlistStatus() {
    this._changeData(
        UserAction.UPDATE_MOVIE,
        UpdateType.MINOR,
        Object.assign({}, this._movie, {isToWatch: !this._movie.isToWatch}));
  }

  // изменения состояния "Mark as watched"
  _changeHistoryStatus() {
    this._changeData(
        UserAction.UPDATE_MOVIE,
        UpdateType.MINOR,
        Object.assign({}, this._movie, {isAlreadyWatched: !this._movie.isAlreadyWatched}));
  }

  // изменение состояния "Mark as favorite"
  _changeFavoriteStatus() {
    this._changeData(
        UserAction.UPDATE_MOVIE,
        UpdateType.MINOR,
        Object.assign({}, this._movie, {isInFavorites: !this._movie.isInFavorites}));
  }

  // обработчик нажатия на кнопку "Add to watchlist"
  _handleWatchlistClick() {
    this._changeWatchlistStatus();
  }

  // обработчик нажатия на кнопку "Mark as watched"
  _handleHistoryClick() {
    this._changeHistoryStatus();
  }

  // обработчик нажатия на кнопку "Mark as favorite"
  _handleFavoriteClick() {
    this._changeFavoriteStatus();
  }

  // обработчик удаления комментария
  _handleDeleteClick(deletedCommentId) {
    this._handleCommentsViewAction(
        UserAction.DELETE_COMMENT,
        UpdateType.PATCH,
        parseInt(deletedCommentId, 10)
    );
    this._popupView.updateData({
      comments: this._comments
    });
  }

  // обработчик добавления комментария
  _handleAddComment(newComment) {
    if (newComment.emoji && newComment.text) {
      this._handleCommentsViewAction(
          UserAction.ADD_COMMENT,
          UpdateType.PATCH,
          Object.assign({}, newComment)
      );
      this._popupView.updateData({
        comments: this._comments
      });
    }
  }

  // обработчик изменения представления
  _handleCommentsViewAction(actionType, updateType, update) {
    switch (actionType) {
      case UserAction.DELETE_COMMENT:
        this._commentsModel.deleteComment(updateType, update);
        break;
      case UserAction.ADD_COMMENT:
        this._commentsModel.addComment(updateType, update);
        break;
    }
  }

  // обработчик изменения модели комментариев
  _handleCommentsModelEvent(updateType) {
    switch (updateType) {
      case UpdateType.PATCH:
        this.init(this._movie);
        break;
      case UpdateType.INIT:
        this._isLoading = false;
        this._comments = this._commentsModel.getComments();
        this._popupView.updateData({
          comments: this._comments,
          isLoading: this._isLoading
        });
        break;
    }
  }
}
