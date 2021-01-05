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
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _view_user_rank_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/user-rank.js */ "./src/view/user-rank.js");
/* harmony import */ var _view_filters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/filters.js */ "./src/view/filters.js");
/* harmony import */ var _view_footer_stats_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/footer-stats.js */ "./src/view/footer-stats.js");
/* harmony import */ var _mock_film_data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock/film-data.js */ "./src/mock/film-data.js");
/* harmony import */ var _mock_filters_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock/filters.js */ "./src/mock/filters.js");
/* harmony import */ var _presenter_movies_list_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./presenter/movies-list.js */ "./src/presenter/movies-list.js");







// import StatsView from "./view/stats.js";







const FILMS_MOCK_COUNT = 17;


const films = new Array(FILMS_MOCK_COUNT).fill().map(_mock_film_data_js__WEBPACK_IMPORTED_MODULE_5__["generateFilmCard"]);
const filters = Object(_mock_filters_js__WEBPACK_IMPORTED_MODULE_6__["generateFilters"])(films);
const filmsNumber = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 100000);

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);

// рендер header'a (меню навигации)
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteHeaderElement, new _view_user_rank_js__WEBPACK_IMPORTED_MODULE_2__["default"](), _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFORE_END);

// рендер меню навигации
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteMainElement, new _view_filters_js__WEBPACK_IMPORTED_MODULE_3__["default"](filters), _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFORE_END);

const moviesList = new _presenter_movies_list_js__WEBPACK_IMPORTED_MODULE_7__["default"](siteMainElement);
moviesList.init(films);

// // рендер статистики пользователя в main
// render(siteMainElement, new StatsView(), RenderPosition.BEFORE_END);

// рендер блока статистики в  footer'е
const footerStatisticsElement = siteFooterElement.querySelector(`.footer__statistics`);
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(footerStatisticsElement, new _view_footer_stats_js__WEBPACK_IMPORTED_MODULE_4__["default"](filmsNumber), _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFORE_END);



/***/ }),

/***/ "./src/mock/comment.js":
/*!*****************************!*\
  !*** ./src/mock/comment.js ***!
  \*****************************/
/*! exports provided: generateComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateComment", function() { return generateComment; });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");


const CommentData = {
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
  EMOJIS: [
    `./images/emoji/angry.png`,
    `./images/emoji/puke.png`,
    `./images/emoji/sleeping.png`,
    `./images/emoji/smile.png`,
  ],
  RANDOM_NAMES: [
    `Vasiliy`,
    `Petr`,
    `Anna`,
    `Maxim`
  ]
};

// генерация адреса эмодзи
const generateEmoji = () => {
  return CommentData.EMOJIS[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, CommentData.EMOJIS.length - 1)];
};

// генерация текста комментария
const generateText = () => {
  return CommentData.RANDOM_SENTENCES[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, CommentData.RANDOM_SENTENCES.length - 1)];
};

// генерация автора комментария
const generateName = () => {
  return CommentData.RANDOM_NAMES[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, CommentData.RANDOM_NAMES.length - 1)];
};

// генерация даты комментария
const generateDate = () => {
  const postDate = new Date(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1930, 2020), Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 12), Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 31), Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 23), Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 59));

  return postDate;
};

// генерация случайного комментария
const generateComment = () => {

  return {
    emoji: generateEmoji(),
    text: generateText(),
    author: generateName(),
    date: generateDate()
  };
};




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
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _utils_date_time_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/date-time.js */ "./src/utils/date-time.js");



const FilmData = {
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
  return FilmData.POSTERS[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, FilmData.POSTERS.length - 1)];
};

// генерация названия фильма
const generateTitle = () => {
  return FilmData.TITLES[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, FilmData.TITLES.length - 1)];
};

// генерация рейтинга
const generateRate = () => {
  return (Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 100) / 10);
};

// генерация полного описания фильма
const generateDescription = () => {
  const SENTENCES_COUNT_MAX = 5;
  const sentencesCount = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, SENTENCES_COUNT_MAX);
  const randomDesc = [];

  for (let i = 0; i < sentencesCount; i++) {
    randomDesc.push(FilmData.RANDOM_SENTENCES[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, FilmData.RANDOM_SENTENCES.length - 1)]);
  }

  return randomDesc.join(` `);
};

// генерация списка жанров
const generateGenres = () => {
  const maxCount = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, FilmData.GENRES.length - 1);

  const genresList = [];
  for (let i = 0; i < maxCount; i++) {
    genresList.push(FilmData.GENRES[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, FilmData.GENRES.length - 1)]);
  }

  return genresList;
};

// генерация даты релиза
const generateReleaseDate = () => {
  return new Date(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1930, 2020), Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 12), Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 31));
};

// генерация длительности
const generateDuration = () => {
  return Object(_utils_date_time_js__WEBPACK_IMPORTED_MODULE_1__["turnMinutesToHours"])(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 210));
};

// генерация имени директора
const generateDirector = () => {
  return FilmData.DIRECTORS[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, FilmData.DIRECTORS.length - 1)];
};

// генерация списка сценаристов
const generateScreenwriters = () => {
  return FilmData.SCREENWRITERS.join(`, `);
};

// генерация списка актеров
const generateCast = () => {
  return FilmData.CAST.join(`, `);
};

// генерация возрастного ограничения
const generateAgeRestriction = () => {
  return FilmData.MPAA_RATING[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, FilmData.MPAA_RATING.length - 1)];
};

// генерация страны
const generateCountry = () => {
  return FilmData.COUNTRIES[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, FilmData.COUNTRIES.length - 1)];
};

// генерация случайного id
const generateId = () => Date.now() + parseInt(Math.random() * 1000, 10);

const generateFilmCard = () => {

  const COMMENT_COUNT_MAX = 5;

  return {
    id: generateId(),
    cover: generateCoverImage(),
    title: generateTitle(),
    rate: generateRate(),
    releaseDate: generateReleaseDate(),
    duration: generateDuration(),
    genres: generateGenres(),
    description: generateDescription(),
    commentsCount: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, COMMENT_COUNT_MAX),
    originalTitle: generateTitle(),
    director: generateDirector(),
    screenwriters: generateScreenwriters(),
    cast: generateCast(),
    country: generateCountry(),
    ageRestriction: generateAgeRestriction(),
    isToWatch: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    isAlreadyWatched: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    isInFavorites: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1))
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
  all: (films) => {
    return films.length;
  },
  watchlist: (films) => {
    return films.filter((film) => {
      return film.isToWatch;
    }).length;
  },
  history: (films) => {
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

/***/ "./src/presenter/movie.js":
/*!********************************!*\
  !*** ./src/presenter/movie.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Movie; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _view_movie_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/movie-card.js */ "./src/view/movie-card.js");
/* harmony import */ var _view_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/popup.js */ "./src/view/popup.js");





class Movie {
  constructor(container, changeData) {
    this._container = container;

    this._changeData = changeData;

    this._movieCardView = null;
    this._newPopupView = null;
    this._filmCardClickHandler = this._filmCardClickHandler.bind(this);
    this._closePopupHandler = this._closePopupHandler.bind(this);
    this._handleWatchlistClick = this._handleWatchlistClick.bind(this);
    this._handleHistoryClick = this._handleHistoryClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
  }

  init(movie) {
    this._movie = movie;
    this._commentsList = movie.comments;
    const prevMovieView = this._movieCardView;
    const prevPopupView = this._newPopupView;
    this._commentsComponent = [];

    this._movieCardView = new _view_movie_card_js__WEBPACK_IMPORTED_MODULE_1__["default"](movie);
    this._newPopupView = new _view_popup_js__WEBPACK_IMPORTED_MODULE_2__["default"](movie, this._commentsComponent);

    this._movieCardView.setFilmCardClickHandler(this._filmCardClickHandler);

    this._movieCardView.setWatchlistClickHandler(this._handleWatchlistClick);
    this._movieCardView.setHistoryClickHandler(this._handleHistoryClick);
    this._movieCardView.setFavoriteClickHandler(this._handleFavoriteClick);

    this._newPopupView.setClickClosePopupHandler(this._closePopupHandler);
    this._newPopupView.setEscPressClosePopupHandler(this._closePopupHandler);

    this._newPopupView.setWatchlistClickHandler(this._handleWatchlistClick);
    this._newPopupView.setHistoryClickHandler(this._handleHistoryClick);
    this._newPopupView.setFavoriteClickHandler(this._handleFavoriteClick);

    if (prevMovieView === null) {
      this._renderMovieCard();
      return;
    }

    while (this._container.contains(prevMovieView.getElement())) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["replace"])(this._movieCardView, prevMovieView);
    }

    if (prevPopupView !== null && document.body.contains(prevPopupView.getElement())) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["replace"])(this._newPopupView, prevPopupView);
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["remove"])(prevPopupView);
      this._closePopup();
      this._showPopup();
    }

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["remove"])(prevMovieView);

  }

  // удаление карточки
  destroy() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["remove"])(this._movieCardView);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["remove"])(this._newPopupView);
  }

  // обработчик клика на карточку фильма
  _filmCardClickHandler() {
    this._showPopup();
  }

  // рендер одной карточки фильма
  _renderMovieCard() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this._container, this._movieCardView, _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFORE_END);
  }

  // показ попапа
  _showPopup() {
    document.body.classList.add(`hide-overflow`);
    document.body.appendChild(this._newPopupView.getElement());
  }

  // скрытие попапа
  _closePopup() {
    document.body.classList.remove(`hide-overflow`);
    this._newPopupView.reset(this._movie);
    this._newPopupView.getElement().remove();
  }

  // обработчик закрытия попапа
  _closePopupHandler() {
    this._closePopup();
  }

  // обработчик нажатия на кнопку "Add to watchlist"
  _handleWatchlistClick() {
    this._changeData(Object.assign({}, this._movie, {isToWatch: !this._movie.isToWatch}));
  }

  // обработчик нажатия на кнопку "Mark as watched"
  _handleHistoryClick() {
    this._changeData(Object.assign({}, this._movie, {isAlreadyWatched: !this._movie.isAlreadyWatched}));
  }

  // обработчик нажатия на кнопку "Mark as favorite"
  _handleFavoriteClick() {
    this._changeData(Object.assign({}, this._movie, {isInFavorites: !this._movie.isInFavorites}));
  }
}


/***/ }),

/***/ "./src/presenter/movies-list.js":
/*!**************************************!*\
  !*** ./src/presenter/movies-list.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MoviesList; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _utils_const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/const.js */ "./src/utils/const.js");
/* harmony import */ var _utils_date_time_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/date-time.js */ "./src/utils/date-time.js");
/* harmony import */ var _view_show_more_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/show-more.js */ "./src/view/show-more.js");
/* harmony import */ var _view_films_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/films-list */ "./src/view/films-list.js");
/* harmony import */ var _view_films_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/films-wrapper.js */ "./src/view/films-wrapper.js");
/* harmony import */ var _movie_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movie.js */ "./src/presenter/movie.js");
/* harmony import */ var _view_sort_menu_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../view/sort-menu.js */ "./src/view/sort-menu.js");
/* harmony import */ var _mock_comment_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mock/comment.js */ "./src/mock/comment.js");















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
  }
};

const COMMENTS_QUANTITY = 3;

class MoviesList {
  constructor(container) {
    this._container = container;
    this._filmsWrapperComponent = new _view_films_wrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this._showMoreButtonComponent = new _view_show_more_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this._sortMenuComponent = new _view_sort_menu_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
    this._generateComment = _mock_comment_js__WEBPACK_IMPORTED_MODULE_9__["generateComment"];
    this._renderedFilmsCount = _utils_const_js__WEBPACK_IMPORTED_MODULE_2__["MoviesListData"].CARDS_MAIN_QUANTITY;
    this._currentSortButton = _utils_const_js__WEBPACK_IMPORTED_MODULE_2__["SortType"].DEFAULT;
    this._commentsCount = COMMENTS_QUANTITY;

    this._filmsElement = null;
    this._newPopupItem = null;
    this._allMoviesContainer = null;
    this._topRatedContainer = null;
    this._mostCommentedContainer = null;
    this._moviePresenter = {};
    this._moviesList = [];
    this._filmsContainerList = [];
    this._comments = [];

    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
    this._handleMovieChange = this._handleMovieChange.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
  }

  init(films) {
    this._films = films.slice();
    this._sourceFilms = films.slice();

    if (this._films.length) {
      this._renderSortMenu();
    }
    this._renderContainer();
    this._renderMoviesLists();
  }

  // рендер контейнера для списков фильмов
  _renderContainer() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this._container, this._filmsWrapperComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFORE_END);
    this._filmsElement = this._container.querySelector(`.films`);
  }

  // рендер карточки фильма
  _renderMovieCard(container, film) {
    const comments = [];
    for (let j = 0; j < this._commentsCount; j++) {
      comments.push(this._generateComment());
    }
    film.comments = comments;
    const moviePresenter = new _movie_js__WEBPACK_IMPORTED_MODULE_7__["default"](container, this._handleMovieChange);
    moviePresenter.init(film);
    this._moviePresenter[film.id] = moviePresenter;
  }

  // рендер списка карточек фильма
  _renderMovieCards(container, filmsList, cardsCount) {
    for (let i = 0; i < Math.min(filmsList.length, cardsCount); i++) {
      this._renderMovieCard(container, filmsList[i]);
    }
    this._moviesList.push(this._moviePresenter);
    this._moviePresenter = {};
  }

  // рендер пустого списка - заглушки
  _renderEmptyList() {
    const flimsListComponent = new _view_films_list__WEBPACK_IMPORTED_MODULE_5__["default"](ListTypes.EMPTY_LIST);
    this._filmsContainerList.push(flimsListComponent);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this._filmsElement, flimsListComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFORE_END);
  }

  // рендер основного списка фильмов "All Movies"
  _renderAllMoviesList() {
    const flimsListComponent = new _view_films_list__WEBPACK_IMPORTED_MODULE_5__["default"](ListTypes.ALL_MOVIES);
    this._allMoviesContainer = flimsListComponent.getElement();
    this._filmsContainerList.push(flimsListComponent);

    this._renderMovieCards(this._allMoviesContainer.querySelector(`.films-list__container`), this._films, _utils_const_js__WEBPACK_IMPORTED_MODULE_2__["MoviesListData"].CARDS_MAIN_QUANTITY);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this._filmsElement, flimsListComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFORE_END);

    if (this._films.length > _utils_const_js__WEBPACK_IMPORTED_MODULE_2__["MoviesListData"].CARDS_MAIN_QUANTITY) {
      this._renderShowMoreButton();
    }
  }

  // рендер дополнительного списка фильмов "Top Rated"
  _renderTopRated() {
    const flimsListComponent = new _view_films_list__WEBPACK_IMPORTED_MODULE_5__["default"](ListTypes.TOP_RATED);
    this._topRatedContainer = flimsListComponent.getElement();
    this._filmsContainerList.push(flimsListComponent);

    this._renderMovieCards(this._topRatedContainer.querySelector(`.films-list__container`), this._films, _utils_const_js__WEBPACK_IMPORTED_MODULE_2__["MoviesListData"].CARDS_EXTRA_QUANTITY);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this._filmsElement, flimsListComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFORE_END);
  }

  // рендер дополнительного списка фильмов "Most Commented"
  _renderMostCommented() {
    const flimsListComponent = new _view_films_list__WEBPACK_IMPORTED_MODULE_5__["default"](ListTypes.MOST_COMMENTED);
    this._mostCommentedContainer = flimsListComponent.getElement();
    this._filmsContainerList.push(flimsListComponent);

    this._renderMovieCards(this._mostCommentedContainer.querySelector(`.films-list__container`), this._films, _utils_const_js__WEBPACK_IMPORTED_MODULE_2__["MoviesListData"].CARDS_EXTRA_QUANTITY);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this._filmsElement, flimsListComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFORE_END);
  }

  // рендер основного и дополнительных списков фильмов
  _renderMainMoviesLists() {
    this._renderAllMoviesList();
    this._renderTopRated();
    this._renderMostCommented();
  }

  // отрисовка списков фильмов
  _renderMoviesLists() {
    return !this._films.length
      ? this._renderEmptyList()
      : this._renderMainMoviesLists();
  }

  // очистка списка фильмов
  _clearMoviesList() {
    this._moviesList.forEach((presenter) => {
      Object
       .values(presenter)
       .forEach((presenterItem) => presenterItem.destroy());
      presenter = {};
    });
    this._moviesList = [];

    this._filmsContainerList.forEach((filmContainer) => {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["remove"])(filmContainer);
    });
    this._filmsContainerList = [];
  }

  // обработчик изменения фильма
  _handleMovieChange(updatedMovie) {
    this._films = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["updateItem"])(this._films, updatedMovie);

    this._moviesList.forEach((presenter) => {
      if (presenter[updatedMovie.id]) {
        presenter[updatedMovie.id].init(updatedMovie);
      }
    });
  }

  // рендер кнопки show more
  _renderShowMoreButton() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this._allMoviesContainer, this._showMoreButtonComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFORE_END);

    this._showMoreButtonComponent.setShowMoreButtonClickHandler(this._handleShowMoreButtonClick);

  }

  // обработчик события нажатия на кнопку show more
  _handleShowMoreButtonClick() {
    this._renderMovieCards(
        this._allMoviesContainer.querySelector(`.films-list__container`),
        this._films
      .slice(this._renderedFilmsCount, this._renderedFilmsCount + _utils_const_js__WEBPACK_IMPORTED_MODULE_2__["MoviesListData"].CARDS_MAIN_QUANTITY),
        _utils_const_js__WEBPACK_IMPORTED_MODULE_2__["MoviesListData"].CARDS_MAIN_QUANTITY);

    this._renderedFilmsCount += _utils_const_js__WEBPACK_IMPORTED_MODULE_2__["MoviesListData"].CARDS_MAIN_QUANTITY;

    if (this._renderedFilmsCount >= this._films.length) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["remove"])(this._showMoreButtonComponent);
    }
  }

  // сортировка фильмов по дате и рейтингу
  _sortMovies(sortButton) {
    switch (sortButton) {
      case _utils_const_js__WEBPACK_IMPORTED_MODULE_2__["SortType"].BY_DATE:
        this._films.sort(_utils_date_time_js__WEBPACK_IMPORTED_MODULE_3__["sortByDate"]);
        break;
      case _utils_const_js__WEBPACK_IMPORTED_MODULE_2__["SortType"].BY_RATE:
        this._films.sort(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["sortByRate"]);
        break;
      default:
        this._films = this._sourceFilms.slice();
    }
    this._currentSortButton = sortButton;
  }

  // обработчик нажатия на кнопку сортировки
  _handleSortTypeChange(sortButton) {
    if (this._currentSortButton === sortButton) {
      return;
    }

    this._sortMenuComponent.getElement().querySelector(`[data-sort-type=${this._currentSortButton}]`).classList.remove(`sort__button--active`);
    this._sortMenuComponent.getElement().querySelector(`[data-sort-type=${sortButton}]`).classList.add(`sort__button--active`);

    this._sortMovies(sortButton);
    this._clearMoviesList();
    this._renderMoviesLists();
  }

  // рендер меню фильтров
  _renderSortMenu() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this._container, this._sortMenuComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFORE_END);
    this._sortMenuComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

}


/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: getRandomInteger, getShortText, updateItem, sortByRate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShortText", function() { return getShortText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByRate", function() { return sortByRate; });
// рандомизатор
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

// обрезание текстового фрагмента до 140 символов
const getShortText = (text) => {
  const MAX_TEXT_LENGTH = 140;
  return text.length > MAX_TEXT_LENGTH
    ? `${text.slice(0, MAX_TEXT_LENGTH - 2)}...`
    : text;
};

// обновление данных
const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1)
  ];
};

// сортировка по рейтингу
const sortByRate = (movieA, movieB) => movieB.rate - movieA.rate;





/***/ }),

/***/ "./src/utils/const.js":
/*!****************************!*\
  !*** ./src/utils/const.js ***!
  \****************************/
/*! exports provided: SortType, FilterNames, FilmDetails, MoviesListData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterNames", function() { return FilterNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmDetails", function() { return FilmDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListData", function() { return MoviesListData; });
const SortType = {
  DEFAULT: `default`,
  BY_DATE: `by-date`,
  BY_RATE: `by-rate`
};

const FilterNames = {
  all: `All movies`,
  watchlist: `Watchlist`,
  history: `History`,
  favorites: `Favorites`
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




/***/ }),

/***/ "./src/utils/date-time.js":
/*!********************************!*\
  !*** ./src/utils/date-time.js ***!
  \********************************/
/*! exports provided: turnMinutesToHours, getYDate, getDMYDate, getYMDHMDate, sortByDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turnMinutesToHours", function() { return turnMinutesToHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYDate", function() { return getYDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDMYDate", function() { return getDMYDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYMDHMDate", function() { return getYMDHMDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByDate", function() { return sortByDate; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


// перевод минут в часы
const turnMinutesToHours = (number) => {
  const MINUTES_IN_HOUR = 60;
  const hours = Math.floor(number / MINUTES_IN_HOUR);
  const minutes = number % MINUTES_IN_HOUR;

  return hours < 1
    ? `${minutes}m`
    : `${hours}h ${minutes}m`;
};

// формирование даты в формате (год)
const getYDate = (date) => {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format(`YYYY`);
};

// формирование даты в формате (день месяц год)
const getDMYDate = (date) => {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format(`DD MMMM YYYY`);
};

// формирование даты в формате (год / месяц / день часы : минуты)
const getYMDHMDate = (date) => {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format(`YYYY/MM/DD HH:mm`);
};

// определение разницы в дате
const sortByDate = (movieA, movieB) => dayjs__WEBPACK_IMPORTED_MODULE_0___default()(movieB.releaseDate).diff(movieA.releaseDate);





/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: RenderPosition, KeyBindings, renderTemplate, render, createElement, replace, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyBindings", function() { return KeyBindings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract.js */ "./src/view/abstract.js");


const RenderPosition = {
  BEFORE_END: `beforeend`,
  AFTER_BEGIN: `afterbegin`
};

const KeyBindings = {
  ESCAPE: `Escape`,
  ENTER: `Enter`
};

// рендер шаблона
const renderTemplate = (container, template, place) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  container.insertAdjacentHTML(place, template);
};

// рендер DOM-элемента
const render = (container, child, place = RenderPosition.BEFORE_END) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  if (child instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    child = child.getElement();
  }

  switch (place) {
    case RenderPosition.AFTER_BEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFORE_END:
      container.append(child);
      break;
  }
};

// создание DOM-элемента
const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

// замена одного экземпляра Abstract на другой
const replace = (newChild, oldChild) => {
  if (oldChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
};

// удаление компонента
const remove = (component) => {
  if (!(component instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }
  component.getElement().remove();
  component.removeElement();
};




/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }

    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}



/***/ }),

/***/ "./src/view/films-list.js":
/*!********************************!*\
  !*** ./src/view/films-list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsList; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmsListTemplate = (listType) => {
  const {title, isHidden, isExtra} = listType;
  return (
    `<section class="films-list
    ${isExtra
      ? ` films-list--extra`
      : ``
    }">
      <h2 class="films-list__title ${isHidden
      ? ` visually-hidden`
      : ``
    }">${title}</h2>

      <div class="films-list__container">

      </div>
     </section>`
  );
};


class FilmsList extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(listType) {
    super();
    this._element = null;
    this._listType = listType;
  }

  getTemplate() {
    return createFilmsListTemplate(this._listType);
  }
}


/***/ }),

/***/ "./src/view/films-wrapper.js":
/*!***********************************!*\
  !*** ./src/view/films-wrapper.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsWrapper; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmsSectionTemplate = () => {
  return (
    `<section class="films">

     </section>`
  );
};

class FilmsWrapper extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createFilmsSectionTemplate();
  }
}


/***/ }),

/***/ "./src/view/filters.js":
/*!*****************************!*\
  !*** ./src/view/filters.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filters; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");
/* harmony import */ var _utils_const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/const.js */ "./src/utils/const.js");



const createFilterItemTemplate = (filter, isActive) => {
  const {name, count} = filter;

  return (
    `<a
      href="#${name}"
      class="main-navigation__item ${isActive
      ? `main-navigation__item--active`
      : ``}"
    >
      ${_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["FilterNames"][name]}

      ${name !== `all`
      ? `<span class="main-navigation__item-count">
            ${count}
          </span>`
      : ``
    }
    </a>`
  );
};

const createNavMenuTemplate = (filters) => {
  const filterItemsTemplate = filters
  .map((filter, isActive) => createFilterItemTemplate(filter, isActive === false)).join(``);

  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        ${filterItemsTemplate}
      </div>
        <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`);
};


class Filters extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createNavMenuTemplate(this._filters);
  }
}


/***/ }),

/***/ "./src/view/footer-stats.js":
/*!**********************************!*\
  !*** ./src/view/footer-stats.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterStats; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmsStatistics = (number) => {
  return `<p>${number} movies inside</p>`;
};

class FooterStats extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(number) {
    super();
    this._number = number;
  }

  getTemplate() {
    return createFilmsStatistics(this._number);
  }
}


/***/ }),

/***/ "./src/view/movie-card.js":
/*!********************************!*\
  !*** ./src/view/movie-card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovieCard; });
/* harmony import */ var _utils_date_time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/date-time.js */ "./src/utils/date-time.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");




const createFilmArticle = (filmCard) => {
  let {cover, title, rate, releaseDate, duration, genres, description, commentsCount, isToWatch, isAlreadyWatched, isInFavorites} = filmCard;

  const controls = [
    {
      name: `Add to watchlist`,
      modifier: `add-to-watchlist`,
      isActive: isToWatch
    },
    {
      name: `Mark as watched`,
      modifier: `mark-as-watched`,
      isActive: isAlreadyWatched
    },
    {
      name: `Mark as favorite`,
      modifier: `favorite`,
      isActive: isInFavorites
    }
  ];

  const shortDescription = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getShortText"])(description);
  const genre = genres[0];

  return (
    `<article class="film-card">
        <h3 class="film-card__title">${title}</h3>
        <p class="film-card__rating">${rate}</p>
        <p class="film-card__info">
          <span class="film-card__year">${Object(_utils_date_time_js__WEBPACK_IMPORTED_MODULE_0__["getYDate"])(releaseDate)}</span>
          <span class="film-card__duration">${duration}</span>
          <span class="film-card__genre">${genre}</span>
        </p>
        <img src="${cover}" alt="${title}" class="film-card__poster">
        <p class="film-card__description">${shortDescription}</p>
        <a class="film-card__comments">${commentsCount} comments</a>
        <div class="film-card__controls">
           ${controls.map(({name, modifier, isActive}) => {
      return (
        `<button class="film-card__controls-item button film-card__controls-item--${modifier}
        ${isActive
          ? ` film-card__controls-item--active`
          : ``}"
         type="button">${name}</button>`
      );
    }).join(``)}

        </div>
     </article>`
  );
};

class MovieCard extends _abstract_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(filmCard) {
    super();
    this._filmCard = filmCard;
    this._filmCardClickHandler = this._filmCardClickHandler.bind(this);
    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._historyClickHandler = this._historyClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  getTemplate() {
    return createFilmArticle(this._filmCard);
  }

  _filmCardClickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  _watchlistClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchlistClick();
  }

  _historyClickHandler(evt) {
    evt.preventDefault();
    this._callback.historyClick();
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  setFilmCardClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.film-card__title`).addEventListener(`click`, this._filmCardClickHandler);
    this.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, this._filmCardClickHandler);
    this.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, this._filmCardClickHandler);
  }

  setWatchlistClickHandler(callback) {
    this._callback.watchlistClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`).addEventListener(`click`, this._watchlistClickHandler);
  }

  setHistoryClickHandler(callback) {
    this._callback.historyClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`).addEventListener(`click`, this._historyClickHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._favoriteClickHandler);
  }
}


/***/ }),

/***/ "./src/view/popup.js":
/*!***************************!*\
  !*** ./src/view/popup.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popup; });
/* harmony import */ var _utils_date_time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/date-time.js */ "./src/utils/date-time.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _utils_const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/const.js */ "./src/utils/const.js");
/* harmony import */ var _smart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smart.js */ "./src/view/smart.js");






// создание шаблона сведения о фильме
const createFilmDetailItemTemplate = (detail, detailName) => {

  return (
    `<tr class="film-details__row">
      <td class="film-details__term">${_utils_const_js__WEBPACK_IMPORTED_MODULE_2__["FilmDetails"][detailName]}</td>
      <td class="film-details__cell">${detail}</td>
    </tr>`);
};

// создание элемента эмоджи
const createEmojiItem = (emoji) => {
  return (`<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${emoji}" value="${emoji}">
           <label class="film-details__emoji-label" for="emoji-${emoji}">
            <img src="./images/emoji/${emoji}.png" width="30" height="30" alt="emoji">
           </label>`);
};

// создание списка эмоджи
const createEmojiSection = (emojiList) => {
  let emojiSection = ``;
  for (let i = 0; i < emojiList.length; i++) {
    emojiSection += createEmojiItem(emojiList[i]);
  }
  return (emojiSection);
};

// создание комментария
const createCommentItem = (comment) => {
  const {emoji, text, author, date} = comment;

  return (
    `<li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="${emoji}" width="55" height="55" alt="emoji-smile">
      </span>
      <div>
        <p class="film-details__comment-text">${text}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${author}</span>
          <span class="film-details__comment-day">${Object(_utils_date_time_js__WEBPACK_IMPORTED_MODULE_0__["getYMDHMDate"])(date)}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>`
  );
};

// создание списка комментариев
const createCommentsSection = (comments) => {
  let commentsSection = ``;
  for (let i = 0; i < comments.length; i++) {
    commentsSection += createCommentItem(comments[i]);
  }
  return (commentsSection);
};

// создание шаблона информации о фильме
const createPopUpTemplate = (data) => {

  const {cover, title, rate, description, originalTitle, ageRestriction, releaseDate, duration, genres, director, screenwriters, cast, country, isToWatch, isAlreadyWatched, isInFavorites, commentEmoji, newComment, comments} = data;

  const controls = [
    {
      name: `Add to watchlist`,
      modifier: `watchlist`,
      isActive: isToWatch
    },
    {
      name: `Already watched`,
      modifier: `watched`,
      isActive: isAlreadyWatched
    },
    {
      name: `Add to favorites`,
      modifier: `favorite`,
      isActive: isInFavorites
    }
  ];

  const emojis = [
    `smile`,
    `sleeping`,
    `puke`,
    `angry`
  ];

  const genresTemplate = genres.map((item) => `<span class="film-details__genre">${item}</span>`).join(``);

  return (
    `<section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="film-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="${cover}" alt="">

              <p class="film-details__age">${ageRestriction}</p>
            </div>

            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${title}</h3>
                  <p class="film-details__title-original">Original: ${originalTitle}</p>
                </div>

                <div class="film-details__rating">
                  <p class="film-details__total-rating">${rate}</p>
                </div>
              </div>

              <table class="film-details__table">
                ${createFilmDetailItemTemplate(director, `director`)}
                ${createFilmDetailItemTemplate(screenwriters, `screenwriters`)}
                ${createFilmDetailItemTemplate(cast, `cast`)}
                ${createFilmDetailItemTemplate(Object(_utils_date_time_js__WEBPACK_IMPORTED_MODULE_0__["getDMYDate"])(releaseDate), `releaseDate`)}
                ${createFilmDetailItemTemplate(duration, `duration`)}
                ${createFilmDetailItemTemplate(country, `country`)}
                ${createFilmDetailItemTemplate(genresTemplate, `${
      genres.length === 1
        ? `genre`
        : `genres`}`)}
                </tr>
              </table>

              <p class="film-details__film-description">
                    ${description}
              </p>
            </div>
          </div>

          <section class="film-details__controls">
            ${controls.map(({name, modifier, isActive}) => {
      return (`
            <input type="checkbox" class="film-details__control-input visually-hidden" id="${modifier}" name="${modifier}" ${isActive
          ? `checked`
          : ``}>
            <label for="${modifier}" class="film-details__control-label film-details__control-label--${modifier}">${name}</label>
            `);
    }).join(``)}
          </section>
        </div>

        <div class="film-details__bottom-container">
          <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>

            <ul class="film-details__comments-list">
              ${createCommentsSection(comments)}
            </ul>

            <div class="film-details__new-comment">
              <div class="film-details__add-emoji-label">
              ${commentEmoji
      ? `<img src="./images/emoji/${commentEmoji}.png" width="55" height="55" alt="emoji-${commentEmoji}">`
      : ``}
              </div>

              <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment">${newComment
      ? `${newComment}</textarea>`
      : `</textarea>`}

              </label>

              <div class="film-details__emoji-list">
                  ${createEmojiSection(emojis)}
              </div>
            </div>
          </section>
        </div>
      </form>
    </section>`
  );
};

class Popup extends _smart_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(filmCard) {
    super();
    this._data = Popup.parseFilmToData(filmCard);
    this._scrollPosition = 0;

    this._clickClosePopupHandler = this._clickClosePopupHandler.bind(this);
    this._escPressClosePopupHandler = this._escPressClosePopupHandler.bind(this);
    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._historyClickHandler = this._historyClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._emojiChangeHandler = this._emojiChangeHandler.bind(this);
    this._commentInputHandler = this._commentInputHandler.bind(this);

    this._setInnerHandlers();
  }

  getTemplate() {
    return createPopUpTemplate(this._data, this._commentsComponent);
  }

  _clickClosePopupHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  _escPressClosePopupHandler(evt) {
    if (evt.key === _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["KeyBindings"].ESCAPE && document.body.contains(this.getElement())) {
      evt.preventDefault();
      this._callback.escKeydown();
    }
  }

  _watchlistClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchlistClick();
  }

  _historyClickHandler(evt) {
    evt.preventDefault();
    this._callback.historyClick();
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();
    this.callback.formSubmit(Popup.parseDataToFilm(this._data));
  }

  setClickClosePopupHandler(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, this._clickClosePopupHandler);
  }

  setEscPressClosePopupHandler(callback) {
    this._callback.escKeydown = callback;
    document.addEventListener(`keydown`, this._escPressClosePopupHandler);
  }

  setWatchlistClickHandler(callback) {
    this._callback.watchlistClick = callback;
    this.getElement().querySelector(`.film-details__control-label--watchlist`).addEventListener(`click`, this._watchlistClickHandler);
  }

  setHistoryClickHandler(callback) {
    this._callback.historyClick = callback;
    this.getElement().querySelector(`.film-details__control-label--watched`).addEventListener(`click`, this._historyClickHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`.film-details__control-label--favorite`).addEventListener(`click`, this._favoriteClickHandler);
  }

  setFormSubmitHandler(callback) {
    this._callback.formSubmit = callback;
    this.getElement().querySelector(`form`).addEventListener(`submit`, this._formSubmitHandler);
  }

  static parseFilmToData(film) {
    return Object.assign(
        {},
        film,
        {
          commentEmoji: null,
          newComment: null
        }
    );
  }

  static parseDataToFilm(data) {
    data = Object.assign({}, data);

    if (!data.commentEmoji) {
      data.commentEmoji = null;
    }

    if (!data.newComment) {
      data.newComment = null;
    }

    delete data.commentEmoji;
    delete data.newComment;

    return data;
  }

  _emojiChangeHandler(evt) {
    evt.preventDefault();
    this._scrollPosition = this.getElement().scrollTop;

    this.updateData({
      commentEmoji: evt.target.value,
    });
  }

  _commentInputHandler(evt) {
    evt.preventDefault();

    this._scrollPosition = this.getElement().scrollTop;
    this.updateData({
      newComment: evt.target.value,
    }, true);
  }

  _setInnerHandlers() {
    this.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, this._clickClosePopupHandler);
    document.addEventListener(`keydown`, this._escPressClosePopupHandler);

    this.getElement().querySelector(`.film-details__control-label--watchlist`).addEventListener(`click`, this._watchlistClickHandler);
    this.getElement().querySelector(`.film-details__control-label--watched`).addEventListener(`click`, this._historyClickHandler);
    this.getElement().querySelector(`.film-details__control-label--favorite`).addEventListener(`click`, this._favoriteClickHandler);
    this.getElement().querySelector(`form`).addEventListener(`submit`, this._formSubmitHandler);

    this.getElement().querySelector(`.film-details__emoji-list`).addEventListener(`change`, this._emojiChangeHandler);
    this.getElement().querySelector(`.film-details__comment-input`).addEventListener(`input`, this._commentInputHandler);

  }

  restoreHandlers() {
    document.removeEventListener(`keydown`, this._escPressClosePopupHandler);
    this._setInnerHandlers();
    this.getElement().scrollTop = this._scrollPosition;
  }

  reset(film) {
    this.updateData(
        Popup.parseFilmToData(film)
    );
  }

}


/***/ }),

/***/ "./src/view/show-more.js":
/*!*******************************!*\
  !*** ./src/view/show-more.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowMoreButton; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createShowMoreButton = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

class ShowMoreButton extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._showMoreButtonClickHandler = this._showMoreButtonClickHandler.bind(this);
  }

  getTemplate() {
    return createShowMoreButton();
  }

  _showMoreButtonClickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setShowMoreButtonClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._showMoreButtonClickHandler);
  }
}


/***/ }),

/***/ "./src/view/smart.js":
/*!***************************!*\
  !*** ./src/view/smart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Smart; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


class Smart extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._data = {};
  }

  updateData(update, justDataUpdating) {
    if (!update) {
      return;
    }

    this._data = Object.assign(
        {},
        this._data,
        update
    );

    if (justDataUpdating) {
      return;
    }

    this.updateElement();
  }

  updateElement() {
    let prevElement = this.getElement();
    const parent = prevElement.parentElement;
    this.removeElement();

    const newElement = this.getElement();

    parent.replaceChild(newElement, prevElement);

    this.restoreHandlers();
  }

  restoreHandlers() {
    throw new Error(`Abstract method not implemented: reserHadlsers`);
  }

}


/***/ }),

/***/ "./src/view/sort-menu.js":
/*!*******************************!*\
  !*** ./src/view/sort-menu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortMenu; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");
/* harmony import */ var _utils_const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/const.js */ "./src/utils/const.js");



const createSortMenuTemplate = () => {
  return (
    `<ul class="sort">
      <li><a href="#" class="sort__button sort__button--active" data-sort-type=${_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].DEFAULT}>Sort by default</a></li>
      <li><a href="#" class="sort__button" data-sort-type=${_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].BY_DATE}>Sort by date</a></li>
      <li><a href="#" class="sort__button" data-sort-type=${_utils_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].BY_RATE}>Sort by rating</a></li>
    </ul>`
  );
};

class SortMenu extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createSortMenuTemplate();
  }

  _sortTypeChangeHandler(evt) {
    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }
}


/***/ }),

/***/ "./src/view/user-rank.js":
/*!*******************************!*\
  !*** ./src/view/user-rank.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserRank; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createProfileTemplate = () => {
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">Sci-Fighter</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};

class UserRank extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createProfileTemplate();
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map