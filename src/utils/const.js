const SortType = {
  DEFAULT: `default`,
  BY_DATE: `by-date`,
  BY_RATE: `by-rate`,
  BY_COMMENTS: `by-comments`
};

const FilmDetails = {
  director: `Director`,
  screenwriters: `Writers`,
  cast: `Actors`,
  releaseDate: `Release Date`,
  duration: `Runtime`,
  country: `Country`,
  genres: `Genres`,
  genre: `Genre`
};

const MoviesListData = {
  CARDS_MAIN_QUANTITY: 5,
  CARDS_EXTRA_QUANTITY: 2,
  CARDS_EMPTY_QUANTITY: 0
};

const UserAction = {
  UPDATE_MOVIE: `UPDATE_MOVIE`,
  DELETE_COMMENT: `DELETE_COMMENT`,
  ADD_COMMENT: `ADD_COMMENT`
};

const UpdateType = {
  PATCH: `PATCH`,
  MINOR: `MINOR`,
  MAJOR: `MAJOR`,
  STATS: `STATS`,
  INIT: `INIT`
};

const FilterType = {
  ALL_MOVIES: `all`,
  WATCHLIST: `watchlist`,
  HISTORY: `history`,
  FAVORITES: `favorites`,
  STATS: `stats`
};

const ListTypes = {
  ALL_MOVIES: {
    title: `All movies. Upcoming`,
    isHidden: true,
    isExtra: false
  },
  TOP_RATED: {
    title: `Top rated`,
    isHidden: false,
    isExtra: true
  },
  MOST_COMMENTED: {
    title: `Most commented`,
    isHidden: false,
    isExtra: true
  },
  EMPTY_LIST: {
    title: `There are no movies in our database`,
    isHidden: false,
    isExtra: false
  },
  LOADING: {
    title: `Loading...`,
    isHidden: false,
    isExtra: false
  }
};

const KeyBindings = {
  ESCAPE: `Escape`,
  ENTER: `Enter`,
  CONTROL: `Control`
};

const StatsFilters = {
  ALL_TIME: `all-time`,
  TODAY: `today`,
  WEEK: `week`,
  MONTH: `month`,
  YEAR: `year`
};

const NetworkValues = {
  AUTHORIZATION: `Basic PEYMlSIwGLp6JKVJo`,
  END_POINT: `https://13.ecmascript.pages.academy/cinemaddict`
};

const State = {
  DELETING: `DELETING`,
  SAVING: `SAVING`,
  ABORTING_DELETING: `ABORTING_DELETING`,
  ABORTING_SAVING: `ABORTING_SAVING`
};

const RatesLevels = {
  NOVICE: {
    score: 10,
    title: `novice`
  },
  FAN: {
    score: 20,
    title: `fan`
  },
  MOVIE_BUFF: {
    score: 10,
    title: `movie buff`
  },
};

export {
  SortType,
  FilmDetails,
  MoviesListData,
  UserAction,
  UpdateType,
  FilterType,
  ListTypes,
  KeyBindings,
  StatsFilters,
  NetworkValues,
  State,
  RatesLevels
};
