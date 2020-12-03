/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _view_user_rank_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/user-rank.js */ "./src/view/user-rank.js");
/* harmony import */ var _view_filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/filters.js */ "./src/view/filters.js");
/* harmony import */ var _view_sort_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/sort-menu.js */ "./src/view/sort-menu.js");
/* harmony import */ var _view_show_more_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/show-more.js */ "./src/view/show-more.js");
/* harmony import */ var _view_movie_card_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/movie-card.js */ "./src/view/movie-card.js");
/* harmony import */ var _view_films_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/films-list */ "./src/view/films-list.js");
/* harmony import */ var _view_films_wrapper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/films-wrapper.js */ "./src/view/films-wrapper.js");
/* harmony import */ var _view_footer_stats_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/footer-stats.js */ "./src/view/footer-stats.js");
/* harmony import */ var _mock_film_data_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mock/film-data.js */ "./src/mock/film-data.js");
/* harmony import */ var _mock_filters_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mock/filters.js */ "./src/mock/filters.js");










// import {createPopUpTemplate} from "./view/popup.js";
// import {createUserStatsTemplate} from "./view/stats.js";
// import {createCommentTemplate} from "./view/comments.js";


// import {generateComment} from "./mock/comment.js";


const CARDS_MAIN_QUANTITY = 5;
const CARDS_EXTRA_QUANTITY = 2;
const FILMS_MOCK_COUNT = 20;
// const COMMENTS_QUANTITY = 3;

const RenderPosition = {
  BEFORE_END: `beforeend`,
  AFTER_END: `afterend`
};

const films = new Array(FILMS_MOCK_COUNT).fill().map(_mock_film_data_js__WEBPACK_IMPORTED_MODULE_9__["generateFilmCard"]);
const filters = Object(_mock_filters_js__WEBPACK_IMPORTED_MODULE_10__["generateFilters"])(films);

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};


// рендер header'a (меню навигации)
render(siteHeaderElement, Object(_view_user_rank_js__WEBPACK_IMPORTED_MODULE_1__["createProfileTemplate"])(), RenderPosition.BEFORE_END);

// рендер меню навигации
render(siteMainElement, Object(_view_filters_js__WEBPACK_IMPORTED_MODULE_2__["createNavMenuTemplate"])(filters), RenderPosition.BEFORE_END);

// рендер меню фильтров
render(siteMainElement, Object(_view_sort_menu_js__WEBPACK_IMPORTED_MODULE_3__["createSortMenuTemplate"])(), RenderPosition.BEFORE_END);

// рендер контейнера для списков фильмов
render(siteMainElement, Object(_view_films_wrapper_js__WEBPACK_IMPORTED_MODULE_7__["createFilmsSectionTemplate"])(), RenderPosition.BEFORE_END);
const filmsElement = siteMainElement.querySelector(`.films`);

// рендер основого списка фильмов (CARDS_MAIN_QUANTITY штук)
render(filmsElement, Object(_view_films_list__WEBPACK_IMPORTED_MODULE_6__["createFilmsListTemplate"])(`All movies. Upcoming`), RenderPosition.BEFORE_END);
const filmsListSection = siteMainElement.querySelector(`.films-list`);
const filmsListContainer = filmsListSection.querySelector(`.films-list__container`);
for (let i = 0; i < CARDS_MAIN_QUANTITY; i++) {
  render(filmsListContainer, Object(_view_movie_card_js__WEBPACK_IMPORTED_MODULE_5__["createFilmArticle"])(films[i]), RenderPosition.BEFORE_END);
}

// рендер списка фильмов с высоким рейтингом (CARDS_EXTRA_QUANTITY штук)
render(filmsElement, Object(_view_films_list__WEBPACK_IMPORTED_MODULE_6__["createFilmsListTemplate"])(`Top rated`, `films-list--extra`), RenderPosition.BEFORE_END);
const filmsExtraSection = siteMainElement.querySelector(`.films-list--extra`);
const filmsExtraContainer = filmsExtraSection.querySelector(`.films-list__container`);
for (let i = 0; i < CARDS_EXTRA_QUANTITY; i++) {
  render(filmsExtraContainer, Object(_view_movie_card_js__WEBPACK_IMPORTED_MODULE_5__["createFilmArticle"])(films[i]), RenderPosition.BEFORE_END);
}

// рендер списка самых комментируемых фильмов (CARDS_EXTRA_QUANTITY штук)
render(filmsElement, Object(_view_films_list__WEBPACK_IMPORTED_MODULE_6__["createFilmsListTemplate"])(`Most commented`, `films-list--extra`), RenderPosition.BEFORE_END);
const filmsMostCommentedSection = siteMainElement.querySelectorAll(`.films-list--extra`)[1];
const filmsMostCommentedContainer = filmsMostCommentedSection.querySelector(`.films-list__container`);
for (let i = 0; i < CARDS_EXTRA_QUANTITY; i++) {
  render(filmsMostCommentedContainer, Object(_view_movie_card_js__WEBPACK_IMPORTED_MODULE_5__["createFilmArticle"])(films[i]), RenderPosition.BEFORE_END);
}

// рендер кнопки show more
const filmsListElement = filmsElement.querySelector(`.films-list`);
render(filmsListElement, Object(_view_show_more_js__WEBPACK_IMPORTED_MODULE_4__["createShowMoreButton"])(), RenderPosition.BEFORE_END);

// // рендер статистики пользователя в main
// render(siteMainElement, createUserStatsTemplate(), RenderPosition.BEFORE_END);

// рендер блока статистики в  footer'е
const footerStatisticsElement = siteFooterElement.querySelector(`.footer__statistics`);
render(footerStatisticsElement, Object(_view_footer_stats_js__WEBPACK_IMPORTED_MODULE_8__["createFilmsStatistics"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 100000)), RenderPosition.BEFORE_END);

// // рендер попапа с подробной информацией о фильме c комментариями (COMMENTS_QUANTITY штук)
// render(siteFooterElement, createPopUpTemplate(films[0]), RenderPosition.AFTER_END);
// const commentsListContainer = document.querySelector(`.film-details__comments-list`);
// for (let i = 0; i < COMMENTS_QUANTITY; i++) {
//   render(commentsListContainer, createCommentTemplate(generateComment()), RenderPosition.BEFORE_END);
// }



/***/ }),

/***/ "./src/mock/film-data.js":
/*!*******************************!*\
  !*** ./src/mock/film-data.js ***!
  \*******************************/
/*! exports provided: generateFilmCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilmCard", function() { return generateFilmCard; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);



const CONSTANTS = {
  RANDOM_SENTENCES: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`
  ],
  POSTERS: [
    `./images/posters/made-for-each-other.png`,
    `./images/posters/popeye-meets-sinbad.png`,
    `./images/posters/sagebrush-trail.jpg`,
    `./images/posters/santa-claus-conquers-the-martians.jpg`,
    `./images/posters/the-dance-of-life.jpg`
  ],
  TITLES: [
    `Black Mass`,
    `Guard`,
    `In Bruges`,
    `Big Lebowski`
  ],
  GENRES: [
    `comedy`,
    `drama`,
    `thriller`,
    `action`,
    `biopic`
  ],
  DIRECTORS: [
    `Scott Cooper`,
    `Martin Scorsese`,
    `Martin McDonagh`,
    `Coen`
  ],
  SCREENWRITERS: [`Dick Lerr`, `Patrick o'Neil`],
  CAST: [`J.Depp`, `D.Johnson`, `J.Edgerton`, `B.Camberbetch`],
  MPAA_RATING: [`G`, `PG`, `PG-13`, `R`, `NC-17`],
  COUNTRIES: [
    `Russia`,
    `USA`,
    `Ireland`,
    `S.Korea`
  ]
};


// генерация адреса обложки фильма
const generateCoverImage = () => {
  return CONSTANTS.POSTERS[Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, CONSTANTS.POSTERS.length - 1)];
};

// генерация названия фильма
const generateTitle = () => {
  return CONSTANTS.TITLES[Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, CONSTANTS.TITLES.length - 1)];
};

// генерация рейтинга
const generateRate = () => {
  return (Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 100) / 10);
};

// генерация полного описания фильма
const generateFullDescription = () => {
  const SENTENCES_COUNT_MAX = 5;
  const sentencesCount = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, SENTENCES_COUNT_MAX);
  const randomDesc = [];

  for (let i = 0; i < sentencesCount; i++) {
    randomDesc.push(CONSTANTS.RANDOM_SENTENCES[Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, CONSTANTS.RANDOM_SENTENCES.length - 1)]);
  }

  return randomDesc.join(` `);
};

// генерация сокращенного описания фильма
const generateShortDescription = (text) => {
  const MAX_TEXT_LENGTH = 140;
  if (text.length >= MAX_TEXT_LENGTH) {
    return (`${text.slice(MAX_TEXT_LENGTH - 2)}...`);
  }
  return text;
};

// генерация списка жанров
const generateGenres = () => {
  const maxCount = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, CONSTANTS.GENRES.length - 1);

  const genresList = [];
  for (let i = 0; i < maxCount; i++) {
    genresList.push(CONSTANTS.GENRES[Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, CONSTANTS.GENRES.length - 1)]);
  }

  return genresList;
};

// генерация даты релиза
const generateReleaseDate = () => {
  return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1930, 2020)).format(`YYYY`);
};

// генерация длительности
const generateDuration = () => {
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["turnMinutesToHours"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 210));
};

// генерация имени директора
const generateDirector = () => {
  return CONSTANTS.DIRECTORS[Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, CONSTANTS.DIRECTORS.length - 1)];
};

// генерация списка сценаристов
const generateScreenwriters = () => {
  return CONSTANTS.SCREENWRITERS.join(`, `);
};

// генерация списка актеров
const generateCast = () => {
  return CONSTANTS.CAST.join(`, `);
};

// генерация возрастного ограничения
const generateAgeRestriction = () => {
  return CONSTANTS.MPAA_RATING[Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, CONSTANTS.MPAA_RATING.length - 1)];
};

// генерация страны
const generateCountry = () => {
  return CONSTANTS.COUNTRIES[Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, CONSTANTS.COUNTRIES.length - 1)];
};

const generateFilmCard = () => {

  const COMMENT_COUNT_MAX = 5;

  return {
    cover: generateCoverImage(),
    title: generateTitle(),
    rate: generateRate(),
    releaseDate: generateReleaseDate(),
    duration: generateDuration(),
    genres: generateGenres(),
    fullDescription: generateFullDescription(),
    shortDescription: generateShortDescription(generateFullDescription()),
    commentsCount: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, COMMENT_COUNT_MAX),
    originalTitle: generateTitle(),
    director: generateDirector(),
    screenwriters: generateScreenwriters(),
    cast: generateCast(),
    country: generateCountry(),
    ageRestriction: generateAgeRestriction(),
    isToWatch: Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    isAlreadyWatched: Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    isInFavorites: Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1))
  };
};




/***/ }),

/***/ "./src/mock/filters.js":
/*!*****************************!*\
  !*** ./src/mock/filters.js ***!
  \*****************************/
/*! exports provided: generateFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilters", function() { return generateFilters; });

const filmsToFilterMap = {
  allMovies: (films) => {
    return films.length;
  },
  watchlist: (films) => {
    return films.filter((film) => {
      return film.isToWatch;
    }).length;
  },
  alreadyWatched: (films) => {
    return films.filter((film) => {
      return film.isAlreadyWatched;
    }).length;
  },
  favorites: (films) => {
    return films.filter((film) => {
      return film.isInFavorites;
    }).length;
  }
};

// генерация фильтров
const generateFilters = (films) => {
  return Object.entries(filmsToFilterMap).map(([filterName, countFilms]) => {
    return {
      name: filterName,
      count: countFilms(films)
    };
  });
};




/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomInteger, turnMinutesToHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turnMinutesToHours", function() { return turnMinutesToHours; });
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const turnMinutesToHours = (number) => {
  const MINUTES_IN_HOUR = 60;
  const hours = Math.floor(number / MINUTES_IN_HOUR);
  const minutes = number - hours * MINUTES_IN_HOUR;

  if (hours < 1) {
    return `${minutes}m`;
  }
  return `${hours}h ${minutes}m`;
};




/***/ }),

/***/ "./src/view/films-list.js":
/*!********************************!*\
  !*** ./src/view/films-list.js ***!
  \********************************/
/*! exports provided: createFilmsListTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsListTemplate", function() { return createFilmsListTemplate; });

const createFilmsListTemplate = (listType, additionalClass = ``) => {
  return (
    `<section class="films-list ${additionalClass}">
      <h2 class="films-list__title">${listType}</h2>

       <div class="films-list__container">

       </div>
    </section>`
  );
};





/***/ }),

/***/ "./src/view/films-wrapper.js":
/*!***********************************!*\
  !*** ./src/view/films-wrapper.js ***!
  \***********************************/
/*! exports provided: createFilmsSectionTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsSectionTemplate", function() { return createFilmsSectionTemplate; });
const createFilmsSectionTemplate = () => {
  return (
    `<section class="films">

     </section>`
  );
};




/***/ }),

/***/ "./src/view/filters.js":
/*!*****************************!*\
  !*** ./src/view/filters.js ***!
  \*****************************/
/*! exports provided: createNavMenuTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNavMenuTemplate", function() { return createNavMenuTemplate; });
const createNavMenuTemplate = (filters) => {
  const filterCounts = [];
  const getFilterCounts = () => {
    return filters.map((filter) => {
      filterCounts.push(filter.count);
    });
  };
  getFilterCounts();

  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${filterCounts[0]}</span></a>
        <a href="#history" class="main-navigation__item main-navigation__item--active">History <span class="main-navigation__item-count">${filterCounts[1]}</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${filterCounts[2]}</span></a>
      </div>
        <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`);
};





/***/ }),

/***/ "./src/view/footer-stats.js":
/*!**********************************!*\
  !*** ./src/view/footer-stats.js ***!
  \**********************************/
/*! exports provided: createFilmsStatistics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsStatistics", function() { return createFilmsStatistics; });
const createFilmsStatistics = (number) => {
  return `<p>${number} movies inside</p>`;
};




/***/ }),

/***/ "./src/view/movie-card.js":
/*!********************************!*\
  !*** ./src/view/movie-card.js ***!
  \********************************/
/*! exports provided: createFilmArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmArticle", function() { return createFilmArticle; });

const createFilmArticle = (filmCard) => {
  const {cover, title, rate, releaseDate, duration, genres: genresList, shortDescription, commentsCount} = filmCard;

  const genres = genresList.join(`, `);

  return (
    `<article class="film-card">
        <h3 class="film-card__title">${title}</h3>
        <p class="film-card__rating">${rate}</p>
        <p class="film-card__info">
          <span class="film-card__year">${releaseDate}</span>
          <span class="film-card__duration">${duration}</span>
          <span class="film-card__genre">${genres}</span>
        </p>
        <img src="${cover}" alt="" class="film-card__poster">
        <p class="film-card__description">${shortDescription}</p>
        <a class="film-card__comments">${commentsCount} comments</a>
        <div class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active" type="button">Add to watchlist</button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
          <button class="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active" type="button">Mark as favorite</button>
        </div>
     </article>`
  );
};




/***/ }),

/***/ "./src/view/show-more.js":
/*!*******************************!*\
  !*** ./src/view/show-more.js ***!
  \*******************************/
/*! exports provided: createShowMoreButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShowMoreButton", function() { return createShowMoreButton; });
const createShowMoreButton = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};




/***/ }),

/***/ "./src/view/sort-menu.js":
/*!*******************************!*\
  !*** ./src/view/sort-menu.js ***!
  \*******************************/
/*! exports provided: createSortMenuTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSortMenuTemplate", function() { return createSortMenuTemplate; });
const createSortMenuTemplate = () => {
  return (
    `<ul class="sort">
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" class="sort__button">Sort by date</a></li>
      <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>`
  );
};




/***/ }),

/***/ "./src/view/user-rank.js":
/*!*******************************!*\
  !*** ./src/view/user-rank.js ***!
  \*******************************/
/*! exports provided: createProfileTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProfileTemplate", function() { return createProfileTemplate; });
const createProfileTemplate = () => {
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">Sci-Fighter</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map