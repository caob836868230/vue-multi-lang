const LANG_TYPE = {
  ZH: 'zh',
  EN: 'en'
};

function addClass(el, className) {
  const curClassNameArr = el.className.split(' ').filter(c => c !== '');

  if (curClassNameArr.includes(className)) {
    return;
  }

  curClassNameArr.push(className);
  el.className = curClassNameArr.join(' ');
}

function removeClass(el, className) {
  const curClassNameArr = el.className.split(' ').filter(c => c !== '');
  const idx = curClassNameArr.findIndex(n => n === className);

  if (idx !== -1) {
    curClassNameArr.splice(idx, 1);
    el.className = curClassNameArr.join(' ');
  }
}

function createClass(langType, prefixClassName = 'lang') {
  return `${prefixClassName}-${langType}`;
}

class TbLang {
  constructor() {
    this.el = null;
    this._instance = null;
    this._className = {};
  }

  install(Vue, options = {}) {
    const {
      el,
      lang = {},
      langType = LANG_TYPE.ZH,
      targetName = '$TbLang',
      prefixClassName = 'tb-lang'
    } = options;
    this.el = el;
    this._prefixClassName = prefixClassName || '';
    this._instance = new Vue({
      data: {
        lang,
        langType
      }
    });
    Vue.prototype[targetName] = this;
  }

  changeLang(langType, lang) {
    if (!this._className[langType]) {
      this._className[langType] = createClass(langType, this._prefixClassName);
    }

    const el = document.querySelector(this.el);
    Object.keys(this._className).forEach(item => {
      if (item === langType) {
        addClass(el, this._className[langType]);
      } else {
        removeClass(el, this._className[item]);
      }
    });
    this._instance.lang = lang;
    this._instance.langType = langType;
  }

  cleanLang() {
    const el = document.querySelector(this.el);
    Object.keys(this._className).forEach(item => {
      removeClass(el, this._className[item]);
    });
    this._instance.lang = {};
    this._instance.langType = '';
  }

  get langEnv() {
    return this._instance.langType;
  }

  get lang() {
    return this._instance.lang;
  }

}

var index = (function () {
  if (!TbLang.target) {
    TbLang.target = new TbLang();
  }

  return TbLang.target;
})();

export { index as default };
