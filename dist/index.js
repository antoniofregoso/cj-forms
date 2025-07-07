(() => {
  // node_modules/@customerjourney/cj-core/src/components/AppElement.js
  var AppElement = class extends HTMLElement {
    #default = {};
    /**
     * 
     * @param {Object} props Attributes necessary to render the HTML element
     */
    constructor(props = {}) {
      super();
      this.state = this.initState(props);
    }
    /**
     * Applies default values to props that are not defined in the component state
     * @param {Object} defValues Default values
     * @param {Object} props Values to be applied in the rendering
     * @returns {Object} - Default attributes combined with shipped attributes
     */
    initState(defValues, props) {
      if (props != void 0) {
        let state2 = Object.assign({}, defValues, props);
        if (defValues != void 0) {
          if (Object.keys(defValues).lenght != 0) {
            Object.keys(defValues).forEach((prop) => {
              if (props[prop] != void 0) {
                if (typeof props[prop] === "string" || Array.isArray(props[prop])) {
                  state2[prop] = props[prop];
                } else {
                  state2[prop] = Object.assign({}, defValues[prop], props[prop]);
                }
              }
            });
          }
        }
        return state2;
      } else {
        return defValues;
      }
    }
    /**
     * convierte el nombre de un atributo a camel case
     * @param {String} attribute 
     * @returns {String}
     */
    attribute2CamelCase(attribute2) {
      const pattern = new RegExp("-([a-z])", "g");
      return attribute2.replace(pattern, (match, capture) => capture.toUpperCase());
    }
    /**
     * Remove capitalization of an attribute name
     * @param {String} camelCase 
     * @returns  {String}
     */
    camelCase2attribute(camelCase) {
      return camelCase.replace(new RegExp("-([a-z])", "g"), (m, c) => c.toUpperCase());
    }
    /**
     * Initializes the component state and renders it.
     * @param {Object} props Attributes and properties to render the component
     */
    setState(props) {
      this.state = this.initState(this.#default, props);
      this.render();
    }
    /**
     * Update state and render the component
     * 
     * @param {Object} props Attributes and properties to update the component
     */
    updateState(props) {
      this.state = this.initState(this.state, props);
      this.render();
    }
    /**
     * Generate data attributes to generate component animations
     * 
     * @param {Object} props Attributes to define animation
     *  @param {string} props.animation Animation name
     *  @param {string} props.delay 2s, 3s, 4s or 5s
     *  @param {string} props.speed slower, slow, fast or faster. Default 1s
     *  @param {string} props.repeat 1, 2, 3, infinite. Default 0
     * @returns Animation data- params
     */
    setAnimation(props) {
      if (props === void 0 || props === null) {
        return "";
      } else {
        let animation = ` data-animation=${props.effect}`;
        props.delay != void 0 ? animation += ` data-delay=${props.delay}` : false;
        props.speed != void 0 ? animation += ` data-speed=${props.speed}` : false;
        props.repeat != void 0 ? animation += ` data-repeat=${props.repeat}` : false;
        return animation;
      }
    }
    /**
     * 
     */
    cleanValue(prop) {
      return prop != void 0 ? prop : "";
    }
    /**
     * 
     */
    updateClassList() {
      if (this.state.classList) {
        this.classList.add(...this.state.classList);
      }
    }
    /**
     * Add the additional classes sent to the component props
     * 
     * @param {string} defaultClass 
     * @param {string} optionalClasses 
     */
    getClasses(defaultClass = [], optionalClasses) {
      let resultClasses = [];
      if (optionalClasses === void 0) {
        resultClasses = defaultClass;
      } else {
        resultClasses = [...defaultClass, ...optionalClasses];
      }
      let classes = "";
      if (resultClasses.length > 0) {
        classes = `class="${resultClasses.toString().replaceAll(",", " ")}"`;
      }
      return classes;
    }
    /**
     * 
     * @returns {string} The styles needed to add the background image
     */
    getBackground() {
      let style = "";
      if (this.state.backgroundImage?.url != void 0) {
        style = `background-image: url('${this.state.backgroundImage.url}'); background-repeat: no-repeat; background-position: center; background-size: cover;`;
        if (this.state.backgroundImage?.fixed) {
          style = `${style} background-attachment: fixed;`;
        }
      } else {
        style = "";
      }
      return ` style="${style}"`;
    }
    /**
     * Generate caption, title and subtitle of the component
     */
    getTitles() {
      let titles = "";
      if (this.state != void 0) {
        titles = /* HTML */
        `
            <div class="content">    
            ${this.state.caption?.text[this.state.context.lang] != void 0 ? `
            <h2 ${this.getClasses(["subtitle"], this.state.caption?.classList)}  ${this.setAnimation(this.state.caption?.animation)}>${this.state.caption.text[this.state.context.lang]}</h2>` : ""}          
            ${this.state.title?.text[this.state.context.lang] != void 0 ? `
            <h1 ${this.getClasses([], this.state.title?.classList)}  ${this.setAnimation(this.state.title?.animation)}>${this.state.title.text[this.state.context.lang]}</h1>` : ``}
            ${this.state.subtitle?.text[this.state.context.lang] != void 0 ? `
            <h2 ${this.getClasses([], this.state.subtitle?.classList)}  ${this.setAnimation(this.state.subtitle?.animation)}>${this.state.subtitle.text[this.state.context.lang]}</h2>` : ``}
           </div>`;
      }
      return titles;
    }
    handleEvent(event) {
      if (event.type === "click") {
        if (this.state.buttons?.eventName != void 0) {
          this.eventName = this.state.buttons.eventName;
        }
        const clickFunnel = new CustomEvent(this.eventName, {
          detail: { source: event.target.id },
          bubbles: true,
          composed: true
        });
        this.dispatchEvent(clickFunnel);
      }
    }
    registerExtraEvents() {
    }
    /**
     * Generate click events on the component's CTA buttons
     */
    addEvents() {
      let buttons = this.querySelectorAll("button");
      if (buttons.length > 0) {
        buttons.forEach((item) => {
          item.addEventListener("click", this);
        });
      }
    }
    /**
     * Create the CTA buttons of the component from the props sent
     * @param {Object} props 
     */
    #getButtons(props) {
      if (props != void 0) {
        let buttons = "";
        props.forEach((el) => {
          buttons += `<${el.href != void 0 ? "a" : "button"} id="${el.id}" ${this.getClasses(["button"], el.classList)} ${el.href != void 0 ? `href="${el.href}"` : ""}>${el?.text[this.state.context.lang]}</${el.href != void 0 ? "a" : "button"}>`;
        });
        return buttons;
      } else return "";
    }
    /**
     * Generate the CTA button container and insert the buttons described in the props
     * @param {Object} props 
     */
    buttonsRender(props) {
      if (props != void 0) {
        let buttons = (
          /* html */
          `
                <p ${this.getClasses(["buttons", "mt-4"], props.classList)}>
                    ${this.#getButtons(props.buttons)}
                </p>
            `
        );
        return buttons;
      } else return "";
    }
    /**
     * Render the component
     */
    render() {
      console.error("Nothing to render");
    }
    /**
     * Renders the component when inserted into the DOM
     */
    connectedCallback() {
      this.render();
    }
    disconnectedCallback() {
      let buttons = this.querySelectorAll("button");
      if (buttons.length > 0) {
        buttons.forEach((item) => {
          item.removeEventListener("click", this);
        });
      }
    }
  };
  customElements.define("app-element", AppElement);

  // node_modules/@customerjourney/cj-core/src/components/AppPage.js
  var AppPage = class extends AppElement {
    #default = {
      events: {
        viewedElement: void 0,
        leavingApp: false,
        leavedApp: false
      },
      classList: []
    };
    /**
     * constructor description
     * @param {Object} data - The properties, animations, events and head of the page & context
     * @param {String} template - The layout of the funnel page components
     */
    constructor(data = {}, template = null) {
      super();
      this.data = data;
      this.template = template;
      try {
        let app = document.querySelector("#app");
        app.innerHTML = "";
        app.appendChild(this);
      } catch (error) {
        console.error('The element with id "app" does not exist to insert the element "app-page".', error);
      }
    }
    /**
     * Disable browser cache
     */
    #noCache() {
      let head = document.getElementsByTagName("head")[0];
      let cacheControl = document.createElement("meta");
      cacheControl.name = "Cache-Control";
      cacheControl.content = "no-cache, no-store, must-revalidate";
      head.appendChild(cacheControl);
      let pragma = document.createElement("meta");
      pragma.name = "Pragma";
      pragma.content = "no-cache";
      head.appendChild(pragma);
      let expires = document.createElement("meta");
      expires.name = "Expires";
      expires.content = "0";
      head.appendChild(expires);
    }
    #setSEO() {
      let props = this.data.props;
      let context = this.data.context;
      let head = document.getElementsByTagName("head")[0];
      if (document.title != void 0) {
        document.title = props.title[context.lang];
        let description = document.querySelector("meta[name=description]");
        if (description === null) {
          let meta = document.createElement("meta");
          meta.name = "description";
          meta.content = props.description[context.lang];
          head.appendChild(meta);
        } else {
          description.content = props.description[context.lang];
        }
        let metaTitle = document.createElement("meta");
        metaTitle.setAttribute("property", "og:title");
        metaTitle.content = props.title[context.lang];
        head.appendChild(metaTitle);
        let metaDescription = document.createElement("meta");
        metaDescription.setAttribute("property", "og:description");
        metaDescription.content = props.description[context.lang];
        head.appendChild(metaDescription);
        let metaType = document.createElement("meta");
        metaType.setAttribute("property", "og:type");
        metaType.content = props.type;
        head.appendChild(metaType);
        let metaImage = document.createElement("meta");
        metaImage.setAttribute("property", "og:image");
        metaImage.content = props.image;
        head.appendChild(metaImage);
        let twitterCard = document.createElement("meta");
        twitterCard.name = "twitter:card";
        twitterCard.content = "summary_large_image";
        head.appendChild(twitterCard);
        let twitterTitle = document.createElement("meta");
        twitterTitle.name = "twitter:title";
        twitterTitle.content = props.title[context.lang];
        head.appendChild(twitterTitle);
        let twitterDescription = document.createElement("meta");
        twitterDescription.name = "twitter:description";
        twitterDescription.content = props.title[context.lang];
        head.appendChild(twitterDescription);
        let twitterImage = document.createElement("meta");
        twitterImage.name = "twitter:image";
        twitterImage.content = props.image;
        head.appendChild(twitterImage);
        let cannonical = document.createElement("link");
        cannonical.setAttribute("rel", "canonical");
        cannonical.setAttribute("href", props.canonical);
        head.appendChild(cannonical);
      }
    }
    /**
     * Add the page body css
     */
    #setStyles() {
      if (this.data.props?.classList?.length > 0) {
        document.body.classList.add(...this.data.props.classList);
      }
    }
    /**
     * 
     * @param {Object} props 
     * @param {Object} context 
     * @returns 
     */
    #setContext(props, context = {}) {
      if (props != void 0) {
        props.context = context;
      }
      return props;
    }
    /**
     * Update the props to each of the components
     */
    loadData() {
      this.data.props = this.initState(this.#default, this.data.props);
      if (this.data.props.id != void 0) {
        this.getAttribute("id") || this.setAttribute("id", this.data.props.id || `component-${Math.floor(Math.random() * 100)}`);
        this.#setSEO();
        this.#setStyles();
        if (this.state.Cache === false) {
          this.#noCache();
        }
        this.data.props.components.forEach((el) => {
          try {
            this.querySelector(`#${el.id}`).updateState(this.#setContext(el, this.data.context));
          } catch (error) {
            console.error(`The Element with id ${el.id} does not exist or is not an object of type AppElement`, error);
          }
        });
        let loading = document.querySelector(".pageloader");
        if (loading != null) {
          loading.classList.remove("is-active");
        }
      }
    }
    /**
     * 
     * @param {String} webhookUrl - The webhook URI
     * @param {Object} data - The parameters that are sent in the JSON body of the webhook
     * @param {Object} [context={}] - The context of the app
     * @param {Boolean} [render=true] - true to render the page, false to just receive the data
     * @returns {Object} - If render is false it returns the body of the webhook response, if render is true it renders the page with the data from the response body.
     * 
     */
    async sendWebhook(webhookUrl, data, context = {}, render2 = true) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      };
      let loading = document.querySelector(".pageloader");
      if (loading != null) {
        loading.classList.add("is-active");
      }
      try {
        const response = await fetch(webhookUrl, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        if (render2 == true) {
          try {
            responseData.context = context;
            this.data = responseData;
            this.loadData();
          } catch (error) {
            console.error('Cannot load data to render "app-page" components', error);
          }
        } else {
          return responseData;
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    /**
     * Detects if the component has already been viewed
     * @param {HTMLElement} el 
     * @returns { Boolean} - True if the element was viewed in its entirety, false if it is not yet visible
     */
    #isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
    /**
     * Add the events that the page responds to
     */
    #addEvents() {
      if (Array.isArray(this.data.props.events.trackViewed)) {
        document.addEventListener("scroll", () => {
          this.data.props.events.trackViewed.forEach((id) => {
            var el = this.querySelector(`#${id}`);
            if (this.#isInViewport(el) == true) {
              let viewedElement = new CustomEvent("viewedelement", {
                detail: { viewed: el.id },
                bubbles: true,
                composed: true
              });
              this.dispatchEvent(viewedElement);
            }
          });
        }, {
          passive: true
        });
      }
      if (this.data.props?.events?.leavingapp === true) {
        let leavingApp = new CustomEvent("leavingapp", {
          detail: { source: this.data.props.id },
          bubbles: true,
          composed: true
        });
        document.addEventListener("mouseleave", (e2) => {
          if (e2.clientY <= 0 || e2.clientX <= 0 || (e2.clientX >= window.innerWidth || e2.clientY >= window.innerHeight)) {
            this.dispatchEvent(leavingApp);
          }
        });
      }
      if (this.data.props?.events?.leavedapp === true) {
        let leavedApp = new CustomEvent("leavedapp", {
          detail: { source: this.data.props.id },
          bubbles: true,
          composed: true
        });
        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "hidden") {
            this.dispatchEvent(leavedApp);
          }
        });
      }
    }
    /**
     * Add listeners to each of the events
     * @param {Array} events - List of all events to follow generated within the funnel
     */
    eventsToListen(events, handleEvents) {
      events.forEach((value, index) => {
        this.addEventListener(value, handleEvents);
      });
    }
    /**
     * Fires on connectedCallback to render funnel page
     */
    render() {
      if (this.template === null) {
        console.error("No component template provided");
      } else {
        this.innerHTML = this.template;
        if (this.data.props?.id != void 0) {
          this.loadData(this.data);
          this.#addEvents();
        }
      }
    }
  };
  customElements.define("app-page", AppPage);

  // node_modules/@customerjourney/cj-core/src/components/PageFooter.js
  var PageFooter = class extends AppElement {
    #default = {};
    constructor(props = {}) {
      super();
      this.state = this.initState(this.#default, props);
      this.getAttribute("id") || this.setAttribute("id", this.state.id || `component-${Math.floor(Math.random() * 100)}`);
    }
    render() {
      this.innerHTML = /* html */
      `
        <footer ${this.getClasses(["footer"], this.state.classList)} >
            <div class="content has-text-centered">
                    <img  src="${this.state.context?.theme === "light" ? this.state.brand?.src : this.state.brand?.srcDark === void 0 ? this.state.brand?.src : this.state.brand?.srcDark}" style="max-width:200px">
                <p>${this.state.content?.text[this.state.context.lang]}</p>
                <p><a href="${this.state.privacyPolicy?.url}">${this.state.privacyPolicy?.text === void 0 ? "" : this.state.privacyPolicy?.text[this.state.context.lang]}</a></p>
            </div>
            <div class="has-text-left" >
                <h4>Powered by <a href="https://www.conference.com.mx/comercializacion-digital">Conference</a></h4>
            </div>
        </footer>
        `;
    }
  };
  customElements.define("page-footer", PageFooter);

  // node_modules/@fortawesome/fontawesome-svg-core/index.mjs
  function _defineProperty(e2, r2, t2) {
    return (r2 = _toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, {
      value: t2,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e2[r2] = t2, e2;
  }
  function ownKeys(e2, r2) {
    var t2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var o2 = Object.getOwnPropertySymbols(e2);
      r2 && (o2 = o2.filter(function(r3) {
        return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
      })), t2.push.apply(t2, o2);
    }
    return t2;
  }
  function _objectSpread2(e2) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t2 = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
        _defineProperty(e2, r3, t2[r3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
        Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
      });
    }
    return e2;
  }
  function _toPrimitive(t2, r2) {
    if ("object" != typeof t2 || !t2) return t2;
    var e2 = t2[Symbol.toPrimitive];
    if (void 0 !== e2) {
      var i = e2.call(t2, r2 || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t2);
  }
  function _toPropertyKey(t2) {
    var i = _toPrimitive(t2, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  var noop = () => {
  };
  var _WINDOW = {};
  var _DOCUMENT = {};
  var _MUTATION_OBSERVER = null;
  var _PERFORMANCE = {
    mark: noop,
    measure: noop
  };
  try {
    if (typeof window !== "undefined") _WINDOW = window;
    if (typeof document !== "undefined") _DOCUMENT = document;
    if (typeof MutationObserver !== "undefined") _MUTATION_OBSERVER = MutationObserver;
    if (typeof performance !== "undefined") _PERFORMANCE = performance;
  } catch (e2) {
  }
  var {
    userAgent = ""
  } = _WINDOW.navigator || {};
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var MUTATION_OBSERVER = _MUTATION_OBSERVER;
  var PERFORMANCE = _PERFORMANCE;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === "function" && typeof DOCUMENT.createElement === "function";
  var IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/");
  var p = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/;
  var g = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;
  var S = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fab: "brands",
      "fa-brands": "brands"
    },
    duotone: {
      fa: "solid",
      fad: "solid",
      "fa-solid": "solid",
      "fa-duotone": "solid",
      fadr: "regular",
      "fa-regular": "regular",
      fadl: "light",
      "fa-light": "light",
      fadt: "thin",
      "fa-thin": "thin"
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin"
    },
    "sharp-duotone": {
      fa: "solid",
      fasds: "solid",
      "fa-solid": "solid",
      fasdr: "regular",
      "fa-regular": "regular",
      fasdl: "light",
      "fa-light": "light",
      fasdt: "thin",
      "fa-thin": "thin"
    }
  };
  var A = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
  };
  var P = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"];
  var s = "classic";
  var t = "duotone";
  var r = "sharp";
  var o = "sharp-duotone";
  var L = [s, t, r, o];
  var G = {
    classic: {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat"
    },
    duotone: {
      900: "fad",
      400: "fadr",
      300: "fadl",
      100: "fadt"
    },
    sharp: {
      900: "fass",
      400: "fasr",
      300: "fasl",
      100: "fast"
    },
    "sharp-duotone": {
      900: "fasds",
      400: "fasdr",
      300: "fasdl",
      100: "fasdt"
    }
  };
  var lt = {
    "Font Awesome 6 Free": {
      900: "fas",
      400: "far"
    },
    "Font Awesome 6 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat"
    },
    "Font Awesome 6 Brands": {
      400: "fab",
      normal: "fab"
    },
    "Font Awesome 6 Duotone": {
      900: "fad",
      400: "fadr",
      normal: "fadr",
      300: "fadl",
      100: "fadt"
    },
    "Font Awesome 6 Sharp": {
      900: "fass",
      400: "fasr",
      normal: "fasr",
      300: "fasl",
      100: "fast"
    },
    "Font Awesome 6 Sharp Duotone": {
      900: "fasds",
      400: "fasdr",
      normal: "fasdr",
      300: "fasdl",
      100: "fasdt"
    }
  };
  var pt = /* @__PURE__ */ new Map([["classic", {
    defaultShortPrefixId: "fas",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin", "brands"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["sharp", {
    defaultShortPrefixId: "fass",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["duotone", {
    defaultShortPrefixId: "fad",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["sharp-duotone", {
    defaultShortPrefixId: "fasds",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }]]);
  var xt = {
    classic: {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      brands: "fab"
    },
    duotone: {
      solid: "fad",
      regular: "fadr",
      light: "fadl",
      thin: "fadt"
    },
    sharp: {
      solid: "fass",
      regular: "fasr",
      light: "fasl",
      thin: "fast"
    },
    "sharp-duotone": {
      solid: "fasds",
      regular: "fasdr",
      light: "fasdl",
      thin: "fasdt"
    }
  };
  var Ft = ["fak", "fa-kit", "fakd", "fa-kit-duotone"];
  var St = {
    kit: {
      fak: "kit",
      "fa-kit": "kit"
    },
    "kit-duotone": {
      fakd: "kit-duotone",
      "fa-kit-duotone": "kit-duotone"
    }
  };
  var At = ["kit"];
  var Ct = {
    kit: {
      "fa-kit": "fak"
    },
    "kit-duotone": {
      "fa-kit-duotone": "fakd"
    }
  };
  var Lt = ["fak", "fakd"];
  var Wt = {
    kit: {
      fak: "fa-kit"
    },
    "kit-duotone": {
      fakd: "fa-kit-duotone"
    }
  };
  var Et = {
    kit: {
      kit: "fak"
    },
    "kit-duotone": {
      "kit-duotone": "fakd"
    }
  };
  var t$1 = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
  };
  var r$1 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"];
  var bt$1 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"];
  var Yt = {
    "Font Awesome Kit": {
      400: "fak",
      normal: "fak"
    },
    "Font Awesome Kit Duotone": {
      400: "fakd",
      normal: "fakd"
    }
  };
  var ua = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat"
    },
    duotone: {
      "fa-regular": "fadr",
      "fa-light": "fadl",
      "fa-thin": "fadt"
    },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast"
    },
    "sharp-duotone": {
      "fa-solid": "fasds",
      "fa-regular": "fasdr",
      "fa-light": "fasdl",
      "fa-thin": "fasdt"
    }
  };
  var I$1 = {
    classic: ["fas", "far", "fal", "fat", "fad"],
    duotone: ["fadr", "fadl", "fadt"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
  };
  var ga = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin"
    },
    duotone: {
      fadr: "fa-regular",
      fadl: "fa-light",
      fadt: "fa-thin"
    },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin"
    },
    "sharp-duotone": {
      fasds: "fa-solid",
      fasdr: "fa-regular",
      fasdl: "fa-light",
      fasdt: "fa-thin"
    }
  };
  var x = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"];
  var Ia = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...r$1, ...x];
  var m$1 = ["solid", "regular", "light", "thin", "duotone", "brands"];
  var c$1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var F$1 = c$1.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  var ma = [...Object.keys(I$1), ...m$1, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", t$1.GROUP, t$1.SWAP_OPACITY, t$1.PRIMARY, t$1.SECONDARY].concat(c$1.map((a) => "".concat(a, "x"))).concat(F$1.map((a) => "w-".concat(a)));
  var wa = {
    "Font Awesome 5 Free": {
      900: "fas",
      400: "far"
    },
    "Font Awesome 5 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal"
    },
    "Font Awesome 5 Brands": {
      400: "fab",
      normal: "fab"
    },
    "Font Awesome 5 Duotone": {
      900: "fad"
    }
  };
  var NAMESPACE_IDENTIFIER = "___FONT_AWESOME___";
  var UNITS_IN_GRID = 16;
  var DEFAULT_CSS_PREFIX = "fa";
  var DEFAULT_REPLACEMENT_CLASS = "svg-inline--fa";
  var DATA_FA_I2SVG = "data-fa-i2svg";
  var DATA_FA_PSEUDO_ELEMENT = "data-fa-pseudo-element";
  var DATA_FA_PSEUDO_ELEMENT_PENDING = "data-fa-pseudo-element-pending";
  var DATA_PREFIX = "data-prefix";
  var DATA_ICON = "data-icon";
  var HTML_CLASS_I2SVG_BASE_CLASS = "fontawesome-i2svg";
  var MUTATION_APPROACH_ASYNC = "async";
  var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ["HTML", "HEAD", "STYLE", "SCRIPT"];
  var PRODUCTION = (() => {
    try {
      return false;
    } catch (e$$1) {
      return false;
    }
  })();
  function familyProxy(obj) {
    return new Proxy(obj, {
      get(target, prop) {
        return prop in target ? target[prop] : target[s];
      }
    });
  }
  var _PREFIX_TO_STYLE = _objectSpread2({}, S);
  _PREFIX_TO_STYLE[s] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
    "fa-duotone": "duotone"
  }), S[s]), St["kit"]), St["kit-duotone"]);
  var PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
  var _STYLE_TO_PREFIX = _objectSpread2({}, xt);
  _STYLE_TO_PREFIX[s] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
    duotone: "fad"
  }), _STYLE_TO_PREFIX[s]), Et["kit"]), Et["kit-duotone"]);
  var STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
  var _PREFIX_TO_LONG_STYLE = _objectSpread2({}, ga);
  _PREFIX_TO_LONG_STYLE[s] = _objectSpread2(_objectSpread2({}, _PREFIX_TO_LONG_STYLE[s]), Wt["kit"]);
  var PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
  var _LONG_STYLE_TO_PREFIX = _objectSpread2({}, ua);
  _LONG_STYLE_TO_PREFIX[s] = _objectSpread2(_objectSpread2({}, _LONG_STYLE_TO_PREFIX[s]), Ct["kit"]);
  var LONG_STYLE_TO_PREFIX = familyProxy(_LONG_STYLE_TO_PREFIX);
  var ICON_SELECTION_SYNTAX_PATTERN = p;
  var LAYERS_TEXT_CLASSNAME = "fa-layers-text";
  var FONT_FAMILY_PATTERN = g;
  var _FONT_WEIGHT_TO_PREFIX = _objectSpread2({}, G);
  var FONT_WEIGHT_TO_PREFIX = familyProxy(_FONT_WEIGHT_TO_PREFIX);
  var ATTRIBUTES_WATCHED_FOR_MUTATION = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"];
  var DUOTONE_CLASSES = A;
  var RESERVED_CLASSES = [...At, ...ma];
  var initial = WINDOW.FontAwesomeConfig || {};
  function getAttrConfig(attr) {
    var element = DOCUMENT.querySelector("script[" + attr + "]");
    if (element) {
      return element.getAttribute(attr);
    }
  }
  function coerce(val) {
    if (val === "") return true;
    if (val === "false") return false;
    if (val === "true") return true;
    return val;
  }
  if (DOCUMENT && typeof DOCUMENT.querySelector === "function") {
    const attrs = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
    attrs.forEach((_ref) => {
      let [attr, key] = _ref;
      const val = coerce(getAttrConfig(attr));
      if (val !== void 0 && val !== null) {
        initial[key] = val;
      }
    });
  }
  var _default = {
    styleDefault: "solid",
    familyDefault: s,
    cssPrefix: DEFAULT_CSS_PREFIX,
    replacementClass: DEFAULT_REPLACEMENT_CLASS,
    autoReplaceSvg: true,
    autoAddCss: true,
    autoA11y: true,
    searchPseudoElements: false,
    observeMutations: true,
    mutateApproach: "async",
    keepOriginalSource: true,
    measurePerformance: false,
    showMissingIcons: true
  };
  if (initial.familyPrefix) {
    initial.cssPrefix = initial.familyPrefix;
  }
  var _config = _objectSpread2(_objectSpread2({}, _default), initial);
  if (!_config.autoReplaceSvg) _config.observeMutations = false;
  var config = {};
  Object.keys(_default).forEach((key) => {
    Object.defineProperty(config, key, {
      enumerable: true,
      set: function(val) {
        _config[key] = val;
        _onChangeCb.forEach((cb) => cb(config));
      },
      get: function() {
        return _config[key];
      }
    });
  });
  Object.defineProperty(config, "familyPrefix", {
    enumerable: true,
    set: function(val) {
      _config.cssPrefix = val;
      _onChangeCb.forEach((cb) => cb(config));
    },
    get: function() {
      return _config.cssPrefix;
    }
  });
  WINDOW.FontAwesomeConfig = config;
  var _onChangeCb = [];
  function onChange(cb) {
    _onChangeCb.push(cb);
    return () => {
      _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
    };
  }
  var d$2 = UNITS_IN_GRID;
  var meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
  };
  function insertCss(css2) {
    if (!css2 || !IS_DOM) {
      return;
    }
    const style = DOCUMENT.createElement("style");
    style.setAttribute("type", "text/css");
    style.innerHTML = css2;
    const headChildren = DOCUMENT.head.childNodes;
    let beforeChild = null;
    for (let i = headChildren.length - 1; i > -1; i--) {
      const child = headChildren[i];
      const tagName = (child.tagName || "").toUpperCase();
      if (["STYLE", "LINK"].indexOf(tagName) > -1) {
        beforeChild = child;
      }
    }
    DOCUMENT.head.insertBefore(style, beforeChild);
    return css2;
  }
  var idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  function nextUniqueId() {
    let size = 12;
    let id = "";
    while (size-- > 0) {
      id += idPool[Math.random() * 62 | 0];
    }
    return id;
  }
  function toArray(obj) {
    const array = [];
    for (let i = (obj || []).length >>> 0; i--; ) {
      array[i] = obj[i];
    }
    return array;
  }
  function classArray(node) {
    if (node.classList) {
      return toArray(node.classList);
    } else {
      return (node.getAttribute("class") || "").split(" ").filter((i) => i);
    }
  }
  function htmlEscape(str) {
    return "".concat(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function joinAttributes(attributes) {
    return Object.keys(attributes || {}).reduce((acc, attributeName) => {
      return acc + "".concat(attributeName, '="').concat(htmlEscape(attributes[attributeName]), '" ');
    }, "").trim();
  }
  function joinStyles(styles3) {
    return Object.keys(styles3 || {}).reduce((acc, styleName) => {
      return acc + "".concat(styleName, ": ").concat(styles3[styleName].trim(), ";");
    }, "");
  }
  function transformIsMeaningful(transform) {
    return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
  }
  function transformForSvg(_ref) {
    let {
      transform,
      containerWidth,
      iconWidth
    } = _ref;
    const outer = {
      transform: "translate(".concat(containerWidth / 2, " 256)")
    };
    const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
    const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
    const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
    const inner = {
      transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
    };
    const path = {
      transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
    };
    return {
      outer,
      inner,
      path
    };
  }
  function transformForCss(_ref2) {
    let {
      transform,
      width = UNITS_IN_GRID,
      height = UNITS_IN_GRID,
      startCentered = false
    } = _ref2;
    let val = "";
    if (startCentered && IS_IE) {
      val += "translate(".concat(transform.x / d$2 - width / 2, "em, ").concat(transform.y / d$2 - height / 2, "em) ");
    } else if (startCentered) {
      val += "translate(calc(-50% + ".concat(transform.x / d$2, "em), calc(-50% + ").concat(transform.y / d$2, "em)) ");
    } else {
      val += "translate(".concat(transform.x / d$2, "em, ").concat(transform.y / d$2, "em) ");
    }
    val += "scale(".concat(transform.size / d$2 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d$2 * (transform.flipY ? -1 : 1), ") ");
    val += "rotate(".concat(transform.rotate, "deg) ");
    return val;
  }
  var baseStyles = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}';
  function css() {
    const dcp = DEFAULT_CSS_PREFIX;
    const drc = DEFAULT_REPLACEMENT_CLASS;
    const fp = config.cssPrefix;
    const rc = config.replacementClass;
    let s2 = baseStyles;
    if (fp !== dcp || rc !== drc) {
      const dPatt = new RegExp("\\.".concat(dcp, "\\-"), "g");
      const customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), "g");
      const rPatt = new RegExp("\\.".concat(drc), "g");
      s2 = s2.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
    }
    return s2;
  }
  var _cssInserted = false;
  function ensureCss() {
    if (config.autoAddCss && !_cssInserted) {
      insertCss(css());
      _cssInserted = true;
    }
  }
  var InjectCSS = {
    mixout() {
      return {
        dom: {
          css,
          insertCss: ensureCss
        }
      };
    },
    hooks() {
      return {
        beforeDOMElementCreation() {
          ensureCss();
        },
        beforeI2svg() {
          ensureCss();
        }
      };
    }
  };
  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];
  var functions = [];
  var listener = function() {
    DOCUMENT.removeEventListener("DOMContentLoaded", listener);
    loaded = 1;
    functions.map((fn) => fn());
  };
  var loaded = false;
  if (IS_DOM) {
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
    if (!loaded) DOCUMENT.addEventListener("DOMContentLoaded", listener);
  }
  function domready(fn) {
    if (!IS_DOM) return;
    loaded ? setTimeout(fn, 0) : functions.push(fn);
  }
  function toHtml(abstractNodes) {
    const {
      tag,
      attributes = {},
      children = []
    } = abstractNodes;
    if (typeof abstractNodes === "string") {
      return htmlEscape(abstractNodes);
    } else {
      return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(""), "</").concat(tag, ">");
    }
  }
  function iconFromMapping(mapping, prefix, iconName) {
    if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
      return {
        prefix,
        iconName,
        icon: mapping[prefix][iconName]
      };
    }
  }
  var bindInternal4 = function bindInternal42(func, thisContext) {
    return function(a, b, c, d) {
      return func.call(thisContext, a, b, c, d);
    };
  };
  var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
    var keys = Object.keys(subject), length = keys.length, iterator = thisContext !== void 0 ? bindInternal4(fn, thisContext) : fn, i, key, result2;
    if (initialValue === void 0) {
      i = 1;
      result2 = subject[keys[0]];
    } else {
      i = 0;
      result2 = initialValue;
    }
    for (; i < length; i++) {
      key = keys[i];
      result2 = iterator(result2, subject[key], key, subject);
    }
    return result2;
  };
  function ucs2decode(string) {
    const output = [];
    let counter2 = 0;
    const length = string.length;
    while (counter2 < length) {
      const value = string.charCodeAt(counter2++);
      if (value >= 55296 && value <= 56319 && counter2 < length) {
        const extra = string.charCodeAt(counter2++);
        if ((extra & 64512) == 56320) {
          output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
        } else {
          output.push(value);
          counter2--;
        }
      } else {
        output.push(value);
      }
    }
    return output;
  }
  function toHex(unicode) {
    const decoded = ucs2decode(unicode);
    return decoded.length === 1 ? decoded[0].toString(16) : null;
  }
  function codePointAt(string, index) {
    const size = string.length;
    let first = string.charCodeAt(index);
    let second;
    if (first >= 55296 && first <= 56319 && size > index + 1) {
      second = string.charCodeAt(index + 1);
      if (second >= 56320 && second <= 57343) {
        return (first - 55296) * 1024 + second - 56320 + 65536;
      }
    }
    return first;
  }
  function normalizeIcons(icons) {
    return Object.keys(icons).reduce((acc, iconName) => {
      const icon2 = icons[iconName];
      const expanded = !!icon2.icon;
      if (expanded) {
        acc[icon2.iconName] = icon2.icon;
      } else {
        acc[iconName] = icon2;
      }
      return acc;
    }, {});
  }
  function defineIcons(prefix, icons) {
    let params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const {
      skipHooks = false
    } = params;
    const normalized = normalizeIcons(icons);
    if (typeof namespace.hooks.addPack === "function" && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    if (prefix === "fas") {
      defineIcons("fa", icons);
    }
  }
  var {
    styles,
    shims
  } = namespace;
  var FAMILY_NAMES = Object.keys(PREFIX_TO_LONG_STYLE);
  var PREFIXES_FOR_FAMILY = FAMILY_NAMES.reduce((acc, familyId) => {
    acc[familyId] = Object.keys(PREFIX_TO_LONG_STYLE[familyId]);
    return acc;
  }, {});
  var _defaultUsablePrefix = null;
  var _byUnicode = {};
  var _byLigature = {};
  var _byOldName = {};
  var _byOldUnicode = {};
  var _byAlias = {};
  function isReserved(name) {
    return ~RESERVED_CLASSES.indexOf(name);
  }
  function getIconName(cssPrefix, cls) {
    const parts = cls.split("-");
    const prefix = parts[0];
    const iconName = parts.slice(1).join("-");
    if (prefix === cssPrefix && iconName !== "" && !isReserved(iconName)) {
      return iconName;
    } else {
      return null;
    }
  }
  var build = () => {
    const lookup = (reducer) => {
      return reduce(styles, (o$$1, style, prefix) => {
        o$$1[prefix] = reduce(style, reducer, {});
        return o$$1;
      }, {});
    };
    _byUnicode = lookup((acc, icon2, iconName) => {
      if (icon2[3]) {
        acc[icon2[3]] = iconName;
      }
      if (icon2[2]) {
        const aliases = icon2[2].filter((a$$1) => {
          return typeof a$$1 === "number";
        });
        aliases.forEach((alias) => {
          acc[alias.toString(16)] = iconName;
        });
      }
      return acc;
    });
    _byLigature = lookup((acc, icon2, iconName) => {
      acc[iconName] = iconName;
      if (icon2[2]) {
        const aliases = icon2[2].filter((a$$1) => {
          return typeof a$$1 === "string";
        });
        aliases.forEach((alias) => {
          acc[alias] = iconName;
        });
      }
      return acc;
    });
    _byAlias = lookup((acc, icon2, iconName) => {
      const aliases = icon2[2];
      acc[iconName] = iconName;
      aliases.forEach((alias) => {
        acc[alias] = iconName;
      });
      return acc;
    });
    const hasRegular = "far" in styles || config.autoFetchSvg;
    const shimLookups = reduce(shims, (acc, shim) => {
      const maybeNameMaybeUnicode = shim[0];
      let prefix = shim[1];
      const iconName = shim[2];
      if (prefix === "far" && !hasRegular) {
        prefix = "fas";
      }
      if (typeof maybeNameMaybeUnicode === "string") {
        acc.names[maybeNameMaybeUnicode] = {
          prefix,
          iconName
        };
      }
      if (typeof maybeNameMaybeUnicode === "number") {
        acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
          prefix,
          iconName
        };
      }
      return acc;
    }, {
      names: {},
      unicodes: {}
    });
    _byOldName = shimLookups.names;
    _byOldUnicode = shimLookups.unicodes;
    _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
      family: config.familyDefault
    });
  };
  onChange((c$$1) => {
    _defaultUsablePrefix = getCanonicalPrefix(c$$1.styleDefault, {
      family: config.familyDefault
    });
  });
  build();
  function byUnicode(prefix, unicode) {
    return (_byUnicode[prefix] || {})[unicode];
  }
  function byLigature(prefix, ligature) {
    return (_byLigature[prefix] || {})[ligature];
  }
  function byAlias(prefix, alias) {
    return (_byAlias[prefix] || {})[alias];
  }
  function byOldName(name) {
    return _byOldName[name] || {
      prefix: null,
      iconName: null
    };
  }
  function byOldUnicode(unicode) {
    const oldUnicode = _byOldUnicode[unicode];
    const newUnicode = byUnicode("fas", unicode);
    return oldUnicode || (newUnicode ? {
      prefix: "fas",
      iconName: newUnicode
    } : null) || {
      prefix: null,
      iconName: null
    };
  }
  function getDefaultUsablePrefix() {
    return _defaultUsablePrefix;
  }
  var emptyCanonicalIcon = () => {
    return {
      prefix: null,
      iconName: null,
      rest: []
    };
  };
  function getFamilyId(values) {
    let family = s;
    const famProps = FAMILY_NAMES.reduce((acc, familyId) => {
      acc[familyId] = "".concat(config.cssPrefix, "-").concat(familyId);
      return acc;
    }, {});
    L.forEach((familyId) => {
      if (values.includes(famProps[familyId]) || values.some((v$$1) => PREFIXES_FOR_FAMILY[familyId].includes(v$$1))) {
        family = familyId;
      }
    });
    return family;
  }
  function getCanonicalPrefix(styleOrPrefix) {
    let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {
      family = s
    } = params;
    const style = PREFIX_TO_STYLE[family][styleOrPrefix];
    if (family === t && !styleOrPrefix) {
      return "fad";
    }
    const prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
    const defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
    const result2 = prefix || defined || null;
    return result2;
  }
  function moveNonFaClassesToRest(classNames) {
    let rest = [];
    let iconName = null;
    classNames.forEach((cls) => {
      const result2 = getIconName(config.cssPrefix, cls);
      if (result2) {
        iconName = result2;
      } else if (cls) {
        rest.push(cls);
      }
    });
    return {
      iconName,
      rest
    };
  }
  function sortedUniqueValues(arr) {
    return arr.sort().filter((value, index, arr2) => {
      return arr2.indexOf(value) === index;
    });
  }
  function getCanonicalIcon(values) {
    let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {
      skipLookups = false
    } = params;
    let givenPrefix = null;
    const faCombinedClasses = Ia.concat(bt$1);
    const faStyleOrFamilyClasses = sortedUniqueValues(values.filter((cls) => faCombinedClasses.includes(cls)));
    const nonStyleOrFamilyClasses = sortedUniqueValues(values.filter((cls) => !Ia.includes(cls)));
    const faStyles = faStyleOrFamilyClasses.filter((cls) => {
      givenPrefix = cls;
      return !P.includes(cls);
    });
    const [styleFromValues = null] = faStyles;
    const family = getFamilyId(faStyleOrFamilyClasses);
    const canonical = _objectSpread2(_objectSpread2({}, moveNonFaClassesToRest(nonStyleOrFamilyClasses)), {}, {
      prefix: getCanonicalPrefix(styleFromValues, {
        family
      })
    });
    return _objectSpread2(_objectSpread2(_objectSpread2({}, canonical), getDefaultCanonicalPrefix({
      values,
      family,
      styles,
      config,
      canonical,
      givenPrefix
    })), applyShimAndAlias(skipLookups, givenPrefix, canonical));
  }
  function applyShimAndAlias(skipLookups, givenPrefix, canonical) {
    let {
      prefix,
      iconName
    } = canonical;
    if (skipLookups || !prefix || !iconName) {
      return {
        prefix,
        iconName
      };
    }
    const shim = givenPrefix === "fa" ? byOldName(iconName) : {};
    const aliasIconName = byAlias(prefix, iconName);
    iconName = shim.iconName || aliasIconName || iconName;
    prefix = shim.prefix || prefix;
    if (prefix === "far" && !styles["far"] && styles["fas"] && !config.autoFetchSvg) {
      prefix = "fas";
    }
    return {
      prefix,
      iconName
    };
  }
  var newCanonicalFamilies = L.filter((familyId) => {
    return familyId !== s || familyId !== t;
  });
  var newCanonicalStyles = Object.keys(ga).filter((key) => key !== s).map((key) => Object.keys(ga[key])).flat();
  function getDefaultCanonicalPrefix(prefixOptions) {
    const {
      values,
      family,
      canonical,
      givenPrefix = "",
      styles: styles3 = {},
      config: config$$1 = {}
    } = prefixOptions;
    const isDuotoneFamily = family === t;
    const valuesHasDuotone = values.includes("fa-duotone") || values.includes("fad");
    const defaultFamilyIsDuotone = config$$1.familyDefault === "duotone";
    const canonicalPrefixIsDuotone = canonical.prefix === "fad" || canonical.prefix === "fa-duotone";
    if (!isDuotoneFamily && (valuesHasDuotone || defaultFamilyIsDuotone || canonicalPrefixIsDuotone)) {
      canonical.prefix = "fad";
    }
    if (values.includes("fa-brands") || values.includes("fab")) {
      canonical.prefix = "fab";
    }
    if (!canonical.prefix && newCanonicalFamilies.includes(family)) {
      const validPrefix = Object.keys(styles3).find((key) => newCanonicalStyles.includes(key));
      if (validPrefix || config$$1.autoFetchSvg) {
        const defaultPrefix = pt.get(family).defaultShortPrefixId;
        canonical.prefix = defaultPrefix;
        canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
      }
    }
    if (canonical.prefix === "fa" || givenPrefix === "fa") {
      canonical.prefix = getDefaultUsablePrefix() || "fas";
    }
    return canonical;
  }
  var Library = class {
    constructor() {
      this.definitions = {};
    }
    add() {
      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }
      const additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach((key) => {
        this.definitions[key] = _objectSpread2(_objectSpread2({}, this.definitions[key] || {}), additions[key]);
        defineIcons(key, additions[key]);
        const longPrefix = PREFIX_TO_LONG_STYLE[s][key];
        if (longPrefix) defineIcons(longPrefix, additions[key]);
        build();
      });
    }
    reset() {
      this.definitions = {};
    }
    _pullDefinitions(additions, definition) {
      const normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map((key) => {
        const {
          prefix,
          iconName,
          icon: icon2
        } = normalized[key];
        const aliases = icon2[2];
        if (!additions[prefix]) additions[prefix] = {};
        if (aliases.length > 0) {
          aliases.forEach((alias) => {
            if (typeof alias === "string") {
              additions[prefix][alias] = icon2;
            }
          });
        }
        additions[prefix][iconName] = icon2;
      });
      return additions;
    }
  };
  var _plugins = [];
  var _hooks = {};
  var providers = {};
  var defaultProviderKeys = Object.keys(providers);
  function registerPlugins(nextPlugins, _ref) {
    let {
      mixoutsTo: obj
    } = _ref;
    _plugins = nextPlugins;
    _hooks = {};
    Object.keys(providers).forEach((k) => {
      if (defaultProviderKeys.indexOf(k) === -1) {
        delete providers[k];
      }
    });
    _plugins.forEach((plugin) => {
      const mixout = plugin.mixout ? plugin.mixout() : {};
      Object.keys(mixout).forEach((tk) => {
        if (typeof mixout[tk] === "function") {
          obj[tk] = mixout[tk];
        }
        if (typeof mixout[tk] === "object") {
          Object.keys(mixout[tk]).forEach((sk) => {
            if (!obj[tk]) {
              obj[tk] = {};
            }
            obj[tk][sk] = mixout[tk][sk];
          });
        }
      });
      if (plugin.hooks) {
        const hooks = plugin.hooks();
        Object.keys(hooks).forEach((hook) => {
          if (!_hooks[hook]) {
            _hooks[hook] = [];
          }
          _hooks[hook].push(hooks[hook]);
        });
      }
      if (plugin.provides) {
        plugin.provides(providers);
      }
    });
    return obj;
  }
  function chainHooks(hook, accumulator) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    const hookFns = _hooks[hook] || [];
    hookFns.forEach((hookFn) => {
      accumulator = hookFn.apply(null, [accumulator, ...args]);
    });
    return accumulator;
  }
  function callHooks(hook) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    const hookFns = _hooks[hook] || [];
    hookFns.forEach((hookFn) => {
      hookFn.apply(null, args);
    });
    return void 0;
  }
  function callProvided() {
    const hook = arguments[0];
    const args = Array.prototype.slice.call(arguments, 1);
    return providers[hook] ? providers[hook].apply(null, args) : void 0;
  }
  function findIconDefinition(iconLookup) {
    if (iconLookup.prefix === "fa") {
      iconLookup.prefix = "fas";
    }
    let {
      iconName
    } = iconLookup;
    const prefix = iconLookup.prefix || getDefaultUsablePrefix();
    if (!iconName) return;
    iconName = byAlias(prefix, iconName) || iconName;
    return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
  }
  var library = new Library();
  var noAuto = () => {
    config.autoReplaceSvg = false;
    config.observeMutations = false;
    callHooks("noAuto");
  };
  var dom = {
    i2svg: function() {
      let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (IS_DOM) {
        callHooks("beforeI2svg", params);
        callProvided("pseudoElements2svg", params);
        return callProvided("i2svg", params);
      } else {
        return Promise.reject(new Error("Operation requires a DOM of some kind."));
      }
    },
    watch: function() {
      let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const {
        autoReplaceSvgRoot
      } = params;
      if (config.autoReplaceSvg === false) {
        config.autoReplaceSvg = true;
      }
      config.observeMutations = true;
      domready(() => {
        autoReplace({
          autoReplaceSvgRoot
        });
        callHooks("watch", params);
      });
    }
  };
  var parse = {
    icon: (icon2) => {
      if (icon2 === null) {
        return null;
      }
      if (typeof icon2 === "object" && icon2.prefix && icon2.iconName) {
        return {
          prefix: icon2.prefix,
          iconName: byAlias(icon2.prefix, icon2.iconName) || icon2.iconName
        };
      }
      if (Array.isArray(icon2) && icon2.length === 2) {
        const iconName = icon2[1].indexOf("fa-") === 0 ? icon2[1].slice(3) : icon2[1];
        const prefix = getCanonicalPrefix(icon2[0]);
        return {
          prefix,
          iconName: byAlias(prefix, iconName) || iconName
        };
      }
      if (typeof icon2 === "string" && (icon2.indexOf("".concat(config.cssPrefix, "-")) > -1 || icon2.match(ICON_SELECTION_SYNTAX_PATTERN))) {
        const canonicalIcon = getCanonicalIcon(icon2.split(" "), {
          skipLookups: true
        });
        return {
          prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
          iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
        };
      }
      if (typeof icon2 === "string") {
        const prefix = getDefaultUsablePrefix();
        return {
          prefix,
          iconName: byAlias(prefix, icon2) || icon2
        };
      }
    }
  };
  var api = {
    noAuto,
    config,
    dom,
    parse,
    library,
    findIconDefinition,
    toHtml
  };
  var autoReplace = function() {
    let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot = DOCUMENT
    } = params;
    if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
      node: autoReplaceSvgRoot
    });
  };
  function domVariants(val, abstractCreator) {
    Object.defineProperty(val, "abstract", {
      get: abstractCreator
    });
    Object.defineProperty(val, "html", {
      get: function() {
        return val.abstract.map((a) => toHtml(a));
      }
    });
    Object.defineProperty(val, "node", {
      get: function() {
        if (!IS_DOM) return;
        const container = DOCUMENT.createElement("div");
        container.innerHTML = val.html;
        return container.children;
      }
    });
    return val;
  }
  function asIcon(_ref) {
    let {
      children,
      main,
      mask,
      attributes,
      styles: styles3,
      transform
    } = _ref;
    if (transformIsMeaningful(transform) && main.found && !mask.found) {
      const {
        width,
        height
      } = main;
      const offset = {
        x: width / height / 2,
        y: 0.5
      };
      attributes["style"] = joinStyles(_objectSpread2(_objectSpread2({}, styles3), {}, {
        "transform-origin": "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
      }));
    }
    return [{
      tag: "svg",
      attributes,
      children
    }];
  }
  function asSymbol(_ref) {
    let {
      prefix,
      iconName,
      children,
      attributes,
      symbol
    } = _ref;
    const id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
    return [{
      tag: "svg",
      attributes: {
        style: "display: none;"
      },
      children: [{
        tag: "symbol",
        attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
          id
        }),
        children
      }]
    }];
  }
  function makeInlineSvgAbstract(params) {
    const {
      icons: {
        main,
        mask
      },
      prefix,
      iconName,
      transform,
      symbol,
      title,
      maskId,
      titleId,
      extra,
      watchable = false
    } = params;
    const {
      width,
      height
    } = mask.found ? mask : main;
    const isUploadedIcon = Lt.includes(prefix);
    const attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ""].filter((c$$1) => extra.classes.indexOf(c$$1) === -1).filter((c$$1) => c$$1 !== "" || !!c$$1).concat(extra.classes).join(" ");
    let content = {
      children: [],
      attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
        "data-prefix": prefix,
        "data-icon": iconName,
        "class": attrClass,
        "role": extra.attributes.role || "img",
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 ".concat(width, " ").concat(height)
      })
    };
    const uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf("fa-fw") ? {
      width: "".concat(width / height * 16 * 0.0625, "em")
    } : {};
    if (watchable) {
      content.attributes[DATA_FA_I2SVG] = "";
    }
    if (title) {
      content.children.push({
        tag: "title",
        attributes: {
          id: content.attributes["aria-labelledby"] || "title-".concat(titleId || nextUniqueId())
        },
        children: [title]
      });
      delete content.attributes.title;
    }
    const args = _objectSpread2(_objectSpread2({}, content), {}, {
      prefix,
      iconName,
      main,
      mask,
      maskId,
      transform,
      symbol,
      styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
    });
    const {
      children,
      attributes
    } = mask.found && main.found ? callProvided("generateAbstractMask", args) || {
      children: [],
      attributes: {}
    } : callProvided("generateAbstractIcon", args) || {
      children: [],
      attributes: {}
    };
    args.children = children;
    args.attributes = attributes;
    if (symbol) {
      return asSymbol(args);
    } else {
      return asIcon(args);
    }
  }
  function makeLayersTextAbstract(params) {
    const {
      content,
      width,
      height,
      transform,
      title,
      extra,
      watchable = false
    } = params;
    const attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
      "title": title
    } : {}), {}, {
      "class": extra.classes.join(" ")
    });
    if (watchable) {
      attributes[DATA_FA_I2SVG] = "";
    }
    const styles3 = _objectSpread2({}, extra.styles);
    if (transformIsMeaningful(transform)) {
      styles3["transform"] = transformForCss({
        transform,
        startCentered: true,
        width,
        height
      });
      styles3["-webkit-transform"] = styles3["transform"];
    }
    const styleString = joinStyles(styles3);
    if (styleString.length > 0) {
      attributes["style"] = styleString;
    }
    const val = [];
    val.push({
      tag: "span",
      attributes,
      children: [content]
    });
    if (title) {
      val.push({
        tag: "span",
        attributes: {
          class: "sr-only"
        },
        children: [title]
      });
    }
    return val;
  }
  function makeLayersCounterAbstract(params) {
    const {
      content,
      title,
      extra
    } = params;
    const attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
      "title": title
    } : {}), {}, {
      "class": extra.classes.join(" ")
    });
    const styleString = joinStyles(extra.styles);
    if (styleString.length > 0) {
      attributes["style"] = styleString;
    }
    const val = [];
    val.push({
      tag: "span",
      attributes,
      children: [content]
    });
    if (title) {
      val.push({
        tag: "span",
        attributes: {
          class: "sr-only"
        },
        children: [title]
      });
    }
    return val;
  }
  var {
    styles: styles$1
  } = namespace;
  function asFoundIcon(icon2) {
    const width = icon2[0];
    const height = icon2[1];
    const [vectorData] = icon2.slice(4);
    let element = null;
    if (Array.isArray(vectorData)) {
      element = {
        tag: "g",
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
        },
        children: [{
          tag: "path",
          attributes: {
            class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
            fill: "currentColor",
            d: vectorData[0]
          }
        }, {
          tag: "path",
          attributes: {
            class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
            fill: "currentColor",
            d: vectorData[1]
          }
        }]
      };
    } else {
      element = {
        tag: "path",
        attributes: {
          fill: "currentColor",
          d: vectorData
        }
      };
    }
    return {
      found: true,
      width,
      height,
      icon: element
    };
  }
  var missingIconResolutionMixin = {
    found: false,
    width: 512,
    height: 512
  };
  function maybeNotifyMissing(iconName, prefix) {
    if (!PRODUCTION && !config.showMissingIcons && iconName) {
      console.error('Icon with name "'.concat(iconName, '" and prefix "').concat(prefix, '" is missing.'));
    }
  }
  function findIcon(iconName, prefix) {
    let givenPrefix = prefix;
    if (prefix === "fa" && config.styleDefault !== null) {
      prefix = getDefaultUsablePrefix();
    }
    return new Promise((resolve, reject) => {
      if (givenPrefix === "fa") {
        const shim = byOldName(iconName) || {};
        iconName = shim.iconName || iconName;
        prefix = shim.prefix || prefix;
      }
      if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
        const icon2 = styles$1[prefix][iconName];
        return resolve(asFoundIcon(icon2));
      }
      maybeNotifyMissing(iconName, prefix);
      resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
        icon: config.showMissingIcons && iconName ? callProvided("missingIconAbstract") || {} : {}
      }));
    });
  }
  var noop$1 = () => {
  };
  var p$2 = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
    mark: noop$1,
    measure: noop$1
  };
  var preamble = 'FA "6.7.2"';
  var begin = (name) => {
    p$2.mark("".concat(preamble, " ").concat(name, " begins"));
    return () => end(name);
  };
  var end = (name) => {
    p$2.mark("".concat(preamble, " ").concat(name, " ends"));
    p$2.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
  };
  var perf = {
    begin,
    end
  };
  var noop$2 = () => {
  };
  function isWatched(node) {
    const i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
    return typeof i2svg === "string";
  }
  function hasPrefixAndIcon(node) {
    const prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
    const icon2 = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
    return prefix && icon2;
  }
  function hasBeenReplaced(node) {
    return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
  }
  function getMutator() {
    if (config.autoReplaceSvg === true) {
      return mutators.replace;
    }
    const mutator = mutators[config.autoReplaceSvg];
    return mutator || mutators.replace;
  }
  function createElementNS(tag) {
    return DOCUMENT.createElementNS("http://www.w3.org/2000/svg", tag);
  }
  function createElement(tag) {
    return DOCUMENT.createElement(tag);
  }
  function convertSVG(abstractObj) {
    let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {
      ceFn = abstractObj.tag === "svg" ? createElementNS : createElement
    } = params;
    if (typeof abstractObj === "string") {
      return DOCUMENT.createTextNode(abstractObj);
    }
    const tag = ceFn(abstractObj.tag);
    Object.keys(abstractObj.attributes || []).forEach(function(key) {
      tag.setAttribute(key, abstractObj.attributes[key]);
    });
    const children = abstractObj.children || [];
    children.forEach(function(child) {
      tag.appendChild(convertSVG(child, {
        ceFn
      }));
    });
    return tag;
  }
  function nodeAsComment(node) {
    let comment2 = " ".concat(node.outerHTML, " ");
    comment2 = "".concat(comment2, "Font Awesome fontawesome.com ");
    return comment2;
  }
  var mutators = {
    replace: function(mutation) {
      const node = mutation[0];
      if (node.parentNode) {
        mutation[1].forEach((abstract) => {
          node.parentNode.insertBefore(convertSVG(abstract), node);
        });
        if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
          let comment2 = DOCUMENT.createComment(nodeAsComment(node));
          node.parentNode.replaceChild(comment2, node);
        } else {
          node.remove();
        }
      }
    },
    nest: function(mutation) {
      const node = mutation[0];
      const abstract = mutation[1];
      if (~classArray(node).indexOf(config.replacementClass)) {
        return mutators.replace(mutation);
      }
      const forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
      delete abstract[0].attributes.id;
      if (abstract[0].attributes.class) {
        const splitClasses = abstract[0].attributes.class.split(" ").reduce((acc, cls) => {
          if (cls === config.replacementClass || cls.match(forSvg)) {
            acc.toSvg.push(cls);
          } else {
            acc.toNode.push(cls);
          }
          return acc;
        }, {
          toNode: [],
          toSvg: []
        });
        abstract[0].attributes.class = splitClasses.toSvg.join(" ");
        if (splitClasses.toNode.length === 0) {
          node.removeAttribute("class");
        } else {
          node.setAttribute("class", splitClasses.toNode.join(" "));
        }
      }
      const newInnerHTML = abstract.map((a) => toHtml(a)).join("\n");
      node.setAttribute(DATA_FA_I2SVG, "");
      node.innerHTML = newInnerHTML;
    }
  };
  function performOperationSync(op) {
    op();
  }
  function perform(mutations, callback) {
    const callbackFunction = typeof callback === "function" ? callback : noop$2;
    if (mutations.length === 0) {
      callbackFunction();
    } else {
      let frame = performOperationSync;
      if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
        frame = WINDOW.requestAnimationFrame || performOperationSync;
      }
      frame(() => {
        const mutator = getMutator();
        const mark2 = perf.begin("mutate");
        mutations.map(mutator);
        mark2();
        callbackFunction();
      });
    }
  }
  var disabled = false;
  function disableObservation() {
    disabled = true;
  }
  function enableObservation() {
    disabled = false;
  }
  var mo = null;
  function observe(options) {
    if (!MUTATION_OBSERVER) {
      return;
    }
    if (!config.observeMutations) {
      return;
    }
    const {
      treeCallback = noop$2,
      nodeCallback = noop$2,
      pseudoElementsCallback = noop$2,
      observeMutationsRoot = DOCUMENT
    } = options;
    mo = new MUTATION_OBSERVER((objects) => {
      if (disabled) return;
      const defaultPrefix = getDefaultUsablePrefix();
      toArray(objects).forEach((mutationRecord) => {
        if (mutationRecord.type === "childList" && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
          if (config.searchPseudoElements) {
            pseudoElementsCallback(mutationRecord.target);
          }
          treeCallback(mutationRecord.target);
        }
        if (mutationRecord.type === "attributes" && mutationRecord.target.parentNode && config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target.parentNode);
        }
        if (mutationRecord.type === "attributes" && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
          if (mutationRecord.attributeName === "class" && hasPrefixAndIcon(mutationRecord.target)) {
            const {
              prefix,
              iconName
            } = getCanonicalIcon(classArray(mutationRecord.target));
            mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
            if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
          } else if (hasBeenReplaced(mutationRecord.target)) {
            nodeCallback(mutationRecord.target);
          }
        }
      });
    });
    if (!IS_DOM) return;
    mo.observe(observeMutationsRoot, {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true
    });
  }
  function disconnect() {
    if (!mo) return;
    mo.disconnect();
  }
  function styleParser(node) {
    const style = node.getAttribute("style");
    let val = [];
    if (style) {
      val = style.split(";").reduce((acc, style2) => {
        const styles3 = style2.split(":");
        const prop = styles3[0];
        const value = styles3.slice(1);
        if (prop && value.length > 0) {
          acc[prop] = value.join(":").trim();
        }
        return acc;
      }, {});
    }
    return val;
  }
  function classParser(node) {
    const existingPrefix = node.getAttribute("data-prefix");
    const existingIconName = node.getAttribute("data-icon");
    const innerText = node.innerText !== void 0 ? node.innerText.trim() : "";
    let val = getCanonicalIcon(classArray(node));
    if (!val.prefix) {
      val.prefix = getDefaultUsablePrefix();
    }
    if (existingPrefix && existingIconName) {
      val.prefix = existingPrefix;
      val.iconName = existingIconName;
    }
    if (val.iconName && val.prefix) {
      return val;
    }
    if (val.prefix && innerText.length > 0) {
      val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
    }
    if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
      val.iconName = node.firstChild.data;
    }
    return val;
  }
  function attributesParser(node) {
    const extraAttributes = toArray(node.attributes).reduce((acc, attr) => {
      if (acc.name !== "class" && acc.name !== "style") {
        acc[attr.name] = attr.value;
      }
      return acc;
    }, {});
    const title = node.getAttribute("title");
    const titleId = node.getAttribute("data-fa-title-id");
    if (config.autoA11y) {
      if (title) {
        extraAttributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        extraAttributes["aria-hidden"] = "true";
        extraAttributes["focusable"] = "false";
      }
    }
    return extraAttributes;
  }
  function blankMeta() {
    return {
      iconName: null,
      title: null,
      titleId: null,
      prefix: null,
      transform: meaninglessTransform,
      symbol: false,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      extra: {
        classes: [],
        styles: {},
        attributes: {}
      }
    };
  }
  function parseMeta(node) {
    let parser = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      styleParser: true
    };
    const {
      iconName,
      prefix,
      rest: extraClasses
    } = classParser(node);
    const extraAttributes = attributesParser(node);
    const pluginMeta = chainHooks("parseNodeAttributes", {}, node);
    let extraStyles = parser.styleParser ? styleParser(node) : [];
    return _objectSpread2({
      iconName,
      title: node.getAttribute("title"),
      titleId: node.getAttribute("data-fa-title-id"),
      prefix,
      transform: meaninglessTransform,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      symbol: false,
      extra: {
        classes: extraClasses,
        styles: extraStyles,
        attributes: extraAttributes
      }
    }, pluginMeta);
  }
  var {
    styles: styles$2
  } = namespace;
  function generateMutation(node) {
    const nodeMeta = config.autoReplaceSvg === "nest" ? parseMeta(node, {
      styleParser: false
    }) : parseMeta(node);
    if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
      return callProvided("generateLayersText", node, nodeMeta);
    } else {
      return callProvided("generateSvgReplacementMutation", node, nodeMeta);
    }
  }
  function getKnownPrefixes() {
    return [...Ft, ...Ia];
  }
  function onTree(root) {
    let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!IS_DOM) return Promise.resolve();
    const htmlClassList = DOCUMENT.documentElement.classList;
    const hclAdd = (suffix) => htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    const hclRemove = (suffix) => htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    const prefixes = config.autoFetchSvg ? getKnownPrefixes() : P.concat(Object.keys(styles$2));
    if (!prefixes.includes("fa")) {
      prefixes.push("fa");
    }
    const prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map((p$$1) => ".".concat(p$$1, ":not([").concat(DATA_FA_I2SVG, "])"))).join(", ");
    if (prefixesDomQuery.length === 0) {
      return Promise.resolve();
    }
    let candidates = [];
    try {
      candidates = toArray(root.querySelectorAll(prefixesDomQuery));
    } catch (e$$1) {
    }
    if (candidates.length > 0) {
      hclAdd("pending");
      hclRemove("complete");
    } else {
      return Promise.resolve();
    }
    const mark2 = perf.begin("onTree");
    const mutations = candidates.reduce((acc, node) => {
      try {
        const mutation = generateMutation(node);
        if (mutation) {
          acc.push(mutation);
        }
      } catch (e$$1) {
        if (!PRODUCTION) {
          if (e$$1.name === "MissingIcon") {
            console.error(e$$1);
          }
        }
      }
      return acc;
    }, []);
    return new Promise((resolve, reject) => {
      Promise.all(mutations).then((resolvedMutations) => {
        perform(resolvedMutations, () => {
          hclAdd("active");
          hclAdd("complete");
          hclRemove("pending");
          if (typeof callback === "function") callback();
          mark2();
          resolve();
        });
      }).catch((e$$1) => {
        mark2();
        reject(e$$1);
      });
    });
  }
  function onNode(node) {
    let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    generateMutation(node).then((mutation) => {
      if (mutation) {
        perform([mutation], callback);
      }
    });
  }
  function resolveIcons(next) {
    return function(maybeIconDefinition) {
      let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
      let {
        mask
      } = params;
      if (mask) {
        mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
      }
      return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
        mask
      }));
    };
  }
  var render = function(iconDefinition) {
    let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {
      transform = meaninglessTransform,
      symbol = false,
      mask = null,
      maskId = null,
      title = null,
      titleId = null,
      classes = [],
      attributes = {},
      styles: styles3 = {}
    } = params;
    if (!iconDefinition) return;
    const {
      prefix,
      iconName,
      icon: icon2
    } = iconDefinition;
    return domVariants(_objectSpread2({
      type: "icon"
    }, iconDefinition), () => {
      callHooks("beforeDOMElementCreation", {
        iconDefinition,
        params
      });
      if (config.autoA11y) {
        if (title) {
          attributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
        } else {
          attributes["aria-hidden"] = "true";
          attributes["focusable"] = "false";
        }
      }
      return makeInlineSvgAbstract({
        icons: {
          main: asFoundIcon(icon2),
          mask: mask ? asFoundIcon(mask.icon) : {
            found: false,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix,
        iconName,
        transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
        symbol,
        title,
        maskId,
        titleId,
        extra: {
          attributes,
          styles: styles3,
          classes
        }
      });
    });
  };
  var ReplaceElements = {
    mixout() {
      return {
        icon: resolveIcons(render)
      };
    },
    hooks() {
      return {
        mutationObserverCallbacks(accumulator) {
          accumulator.treeCallback = onTree;
          accumulator.nodeCallback = onNode;
          return accumulator;
        }
      };
    },
    provides(providers$$1) {
      providers$$1.i2svg = function(params) {
        const {
          node = DOCUMENT,
          callback = () => {
          }
        } = params;
        return onTree(node, callback);
      };
      providers$$1.generateSvgReplacementMutation = function(node, nodeMeta) {
        const {
          iconName,
          title,
          titleId,
          prefix,
          transform,
          symbol,
          mask,
          maskId,
          extra
        } = nodeMeta;
        return new Promise((resolve, reject) => {
          Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
            found: false,
            width: 512,
            height: 512,
            icon: {}
          })]).then((_ref) => {
            let [main, mask2] = _ref;
            resolve([node, makeInlineSvgAbstract({
              icons: {
                main,
                mask: mask2
              },
              prefix,
              iconName,
              transform,
              symbol,
              maskId,
              title,
              titleId,
              extra,
              watchable: true
            })]);
          }).catch(reject);
        });
      };
      providers$$1.generateAbstractIcon = function(_ref2) {
        let {
          children,
          attributes,
          main,
          transform,
          styles: styles3
        } = _ref2;
        const styleString = joinStyles(styles3);
        if (styleString.length > 0) {
          attributes["style"] = styleString;
        }
        let nextChild;
        if (transformIsMeaningful(transform)) {
          nextChild = callProvided("generateAbstractTransformGrouping", {
            main,
            transform,
            containerWidth: main.width,
            iconWidth: main.width
          });
        }
        children.push(nextChild || main.icon);
        return {
          children,
          attributes
        };
      };
    }
  };
  var Layers = {
    mixout() {
      return {
        layer(assembler) {
          let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            classes = []
          } = params;
          return domVariants({
            type: "layer"
          }, () => {
            callHooks("beforeDOMElementCreation", {
              assembler,
              params
            });
            let children = [];
            assembler((args) => {
              Array.isArray(args) ? args.map((a) => {
                children = children.concat(a.abstract);
              }) : children = children.concat(args.abstract);
            });
            return [{
              tag: "span",
              attributes: {
                class: ["".concat(config.cssPrefix, "-layers"), ...classes].join(" ")
              },
              children
            }];
          });
        }
      };
    }
  };
  var LayersCounter = {
    mixout() {
      return {
        counter(content) {
          let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            title = null,
            classes = [],
            attributes = {},
            styles: styles3 = {}
          } = params;
          return domVariants({
            type: "counter",
            content
          }, () => {
            callHooks("beforeDOMElementCreation", {
              content,
              params
            });
            return makeLayersCounterAbstract({
              content: content.toString(),
              title,
              extra: {
                attributes,
                styles: styles3,
                classes: ["".concat(config.cssPrefix, "-layers-counter"), ...classes]
              }
            });
          });
        }
      };
    }
  };
  var LayersText = {
    mixout() {
      return {
        text(content) {
          let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            transform = meaninglessTransform,
            title = null,
            classes = [],
            attributes = {},
            styles: styles3 = {}
          } = params;
          return domVariants({
            type: "text",
            content
          }, () => {
            callHooks("beforeDOMElementCreation", {
              content,
              params
            });
            return makeLayersTextAbstract({
              content,
              transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
              title,
              extra: {
                attributes,
                styles: styles3,
                classes: ["".concat(config.cssPrefix, "-layers-text"), ...classes]
              }
            });
          });
        }
      };
    },
    provides(providers$$1) {
      providers$$1.generateLayersText = function(node, nodeMeta) {
        const {
          title,
          transform,
          extra
        } = nodeMeta;
        let width = null;
        let height = null;
        if (IS_IE) {
          const computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
          const boundingClientRect = node.getBoundingClientRect();
          width = boundingClientRect.width / computedFontSize;
          height = boundingClientRect.height / computedFontSize;
        }
        if (config.autoA11y && !title) {
          extra.attributes["aria-hidden"] = "true";
        }
        return Promise.resolve([node, makeLayersTextAbstract({
          content: node.innerHTML,
          width,
          height,
          transform,
          title,
          extra,
          watchable: true
        })]);
      };
    }
  };
  var CLEAN_CONTENT_PATTERN = new RegExp('"', "ug");
  var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
  var _FONT_FAMILY_WEIGHT_TO_PREFIX = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
    FontAwesome: {
      normal: "fas",
      400: "fas"
    }
  }), lt), wa), Yt);
  var FONT_FAMILY_WEIGHT_TO_PREFIX = Object.keys(_FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, key) => {
    acc[key.toLowerCase()] = _FONT_FAMILY_WEIGHT_TO_PREFIX[key];
    return acc;
  }, {});
  var FONT_FAMILY_WEIGHT_FALLBACK = Object.keys(FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, fontFamily) => {
    const weights = FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamily];
    acc[fontFamily] = weights[900] || [...Object.entries(weights)][0][1];
    return acc;
  }, {});
  function hexValueFromContent(content) {
    const cleaned = content.replace(CLEAN_CONTENT_PATTERN, "");
    const codePoint = codePointAt(cleaned, 0);
    const isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
    const isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
    return {
      value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
      isSecondary: isPrependTen || isDoubled
    };
  }
  function getPrefix(fontFamily, fontWeight) {
    const fontFamilySanitized = fontFamily.replace(/^['"]|['"]$/g, "").toLowerCase();
    const fontWeightInteger = parseInt(fontWeight);
    const fontWeightSanitized = isNaN(fontWeightInteger) ? "normal" : fontWeightInteger;
    return (FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamilySanitized] || {})[fontWeightSanitized] || FONT_FAMILY_WEIGHT_FALLBACK[fontFamilySanitized];
  }
  function replaceForPosition(node, position) {
    const pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(":", "-"));
    return new Promise((resolve, reject) => {
      if (node.getAttribute(pendingAttribute) !== null) {
        return resolve();
      }
      const children = toArray(node.children);
      const alreadyProcessedPseudoElement = children.filter((c$$1) => c$$1.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position)[0];
      const styles3 = WINDOW.getComputedStyle(node, position);
      const fontFamily = styles3.getPropertyValue("font-family");
      const fontFamilyMatch = fontFamily.match(FONT_FAMILY_PATTERN);
      const fontWeight = styles3.getPropertyValue("font-weight");
      const content = styles3.getPropertyValue("content");
      if (alreadyProcessedPseudoElement && !fontFamilyMatch) {
        node.removeChild(alreadyProcessedPseudoElement);
        return resolve();
      } else if (fontFamilyMatch && content !== "none" && content !== "") {
        const content2 = styles3.getPropertyValue("content");
        let prefix = getPrefix(fontFamily, fontWeight);
        const {
          value: hexValue,
          isSecondary
        } = hexValueFromContent(content2);
        const isV4 = fontFamilyMatch[0].startsWith("FontAwesome");
        let iconName = byUnicode(prefix, hexValue);
        let iconIdentifier = iconName;
        if (isV4) {
          const iconName4 = byOldUnicode(hexValue);
          if (iconName4.iconName && iconName4.prefix) {
            iconName = iconName4.iconName;
            prefix = iconName4.prefix;
          }
        }
        if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
          node.setAttribute(pendingAttribute, iconIdentifier);
          if (alreadyProcessedPseudoElement) {
            node.removeChild(alreadyProcessedPseudoElement);
          }
          const meta = blankMeta();
          const {
            extra
          } = meta;
          extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
          findIcon(iconName, prefix).then((main) => {
            const abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
              icons: {
                main,
                mask: emptyCanonicalIcon()
              },
              prefix,
              iconName: iconIdentifier,
              extra,
              watchable: true
            }));
            const element = DOCUMENT.createElementNS("http://www.w3.org/2000/svg", "svg");
            if (position === "::before") {
              node.insertBefore(element, node.firstChild);
            } else {
              node.appendChild(element);
            }
            element.outerHTML = abstract.map((a$$1) => toHtml(a$$1)).join("\n");
            node.removeAttribute(pendingAttribute);
            resolve();
          }).catch(reject);
        } else {
          resolve();
        }
      } else {
        resolve();
      }
    });
  }
  function replace(node) {
    return Promise.all([replaceForPosition(node, "::before"), replaceForPosition(node, "::after")]);
  }
  function processable(node) {
    return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== "svg");
  }
  function searchPseudoElements(root) {
    if (!IS_DOM) return;
    return new Promise((resolve, reject) => {
      const operations = toArray(root.querySelectorAll("*")).filter(processable).map(replace);
      const end2 = perf.begin("searchPseudoElements");
      disableObservation();
      Promise.all(operations).then(() => {
        end2();
        enableObservation();
        resolve();
      }).catch(() => {
        end2();
        enableObservation();
        reject();
      });
    });
  }
  var PseudoElements = {
    hooks() {
      return {
        mutationObserverCallbacks(accumulator) {
          accumulator.pseudoElementsCallback = searchPseudoElements;
          return accumulator;
        }
      };
    },
    provides(providers2) {
      providers2.pseudoElements2svg = function(params) {
        const {
          node = DOCUMENT
        } = params;
        if (config.searchPseudoElements) {
          searchPseudoElements(node);
        }
      };
    }
  };
  var _unwatched = false;
  var MutationObserver$1 = {
    mixout() {
      return {
        dom: {
          unwatch() {
            disableObservation();
            _unwatched = true;
          }
        }
      };
    },
    hooks() {
      return {
        bootstrap() {
          observe(chainHooks("mutationObserverCallbacks", {}));
        },
        noAuto() {
          disconnect();
        },
        watch(params) {
          const {
            observeMutationsRoot
          } = params;
          if (_unwatched) {
            enableObservation();
          } else {
            observe(chainHooks("mutationObserverCallbacks", {
              observeMutationsRoot
            }));
          }
        }
      };
    }
  };
  var parseTransformString = (transformString) => {
    let transform = {
      size: 16,
      x: 0,
      y: 0,
      flipX: false,
      flipY: false,
      rotate: 0
    };
    return transformString.toLowerCase().split(" ").reduce((acc, n) => {
      const parts = n.toLowerCase().split("-");
      const first = parts[0];
      let rest = parts.slice(1).join("-");
      if (first && rest === "h") {
        acc.flipX = true;
        return acc;
      }
      if (first && rest === "v") {
        acc.flipY = true;
        return acc;
      }
      rest = parseFloat(rest);
      if (isNaN(rest)) {
        return acc;
      }
      switch (first) {
        case "grow":
          acc.size = acc.size + rest;
          break;
        case "shrink":
          acc.size = acc.size - rest;
          break;
        case "left":
          acc.x = acc.x - rest;
          break;
        case "right":
          acc.x = acc.x + rest;
          break;
        case "up":
          acc.y = acc.y - rest;
          break;
        case "down":
          acc.y = acc.y + rest;
          break;
        case "rotate":
          acc.rotate = acc.rotate + rest;
          break;
      }
      return acc;
    }, transform);
  };
  var PowerTransforms = {
    mixout() {
      return {
        parse: {
          transform: (transformString) => {
            return parseTransformString(transformString);
          }
        }
      };
    },
    hooks() {
      return {
        parseNodeAttributes(accumulator, node) {
          const transformString = node.getAttribute("data-fa-transform");
          if (transformString) {
            accumulator.transform = parseTransformString(transformString);
          }
          return accumulator;
        }
      };
    },
    provides(providers2) {
      providers2.generateAbstractTransformGrouping = function(_ref) {
        let {
          main,
          transform,
          containerWidth,
          iconWidth
        } = _ref;
        const outer = {
          transform: "translate(".concat(containerWidth / 2, " 256)")
        };
        const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
        const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
        const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
        const inner = {
          transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
        };
        const path = {
          transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
        };
        const operations = {
          outer,
          inner,
          path
        };
        return {
          tag: "g",
          attributes: _objectSpread2({}, operations.outer),
          children: [{
            tag: "g",
            attributes: _objectSpread2({}, operations.inner),
            children: [{
              tag: main.icon.tag,
              children: main.icon.children,
              attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
            }]
          }]
        };
      };
    }
  };
  var ALL_SPACE = {
    x: 0,
    y: 0,
    width: "100%",
    height: "100%"
  };
  function fillBlack(abstract) {
    let force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (abstract.attributes && (abstract.attributes.fill || force)) {
      abstract.attributes.fill = "black";
    }
    return abstract;
  }
  function deGroup(abstract) {
    if (abstract.tag === "g") {
      return abstract.children;
    } else {
      return [abstract];
    }
  }
  var Masks = {
    hooks() {
      return {
        parseNodeAttributes(accumulator, node) {
          const maskData = node.getAttribute("data-fa-mask");
          const mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(" ").map((i) => i.trim()));
          if (!mask.prefix) {
            mask.prefix = getDefaultUsablePrefix();
          }
          accumulator.mask = mask;
          accumulator.maskId = node.getAttribute("data-fa-mask-id");
          return accumulator;
        }
      };
    },
    provides(providers2) {
      providers2.generateAbstractMask = function(_ref) {
        let {
          children,
          attributes,
          main,
          mask,
          maskId: explicitMaskId,
          transform
        } = _ref;
        const {
          width: mainWidth,
          icon: mainPath
        } = main;
        const {
          width: maskWidth,
          icon: maskPath
        } = mask;
        const trans = transformForSvg({
          transform,
          containerWidth: maskWidth,
          iconWidth: mainWidth
        });
        const maskRect = {
          tag: "rect",
          attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
            fill: "white"
          })
        };
        const maskInnerGroupChildrenMixin = mainPath.children ? {
          children: mainPath.children.map(fillBlack)
        } : {};
        const maskInnerGroup = {
          tag: "g",
          attributes: _objectSpread2({}, trans.inner),
          children: [fillBlack(_objectSpread2({
            tag: mainPath.tag,
            attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
          }, maskInnerGroupChildrenMixin))]
        };
        const maskOuterGroup = {
          tag: "g",
          attributes: _objectSpread2({}, trans.outer),
          children: [maskInnerGroup]
        };
        const maskId = "mask-".concat(explicitMaskId || nextUniqueId());
        const clipId = "clip-".concat(explicitMaskId || nextUniqueId());
        const maskTag = {
          tag: "mask",
          attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
            id: maskId,
            maskUnits: "userSpaceOnUse",
            maskContentUnits: "userSpaceOnUse"
          }),
          children: [maskRect, maskOuterGroup]
        };
        const defs = {
          tag: "defs",
          children: [{
            tag: "clipPath",
            attributes: {
              id: clipId
            },
            children: deGroup(maskPath)
          }, maskTag]
        };
        children.push(defs, {
          tag: "rect",
          attributes: _objectSpread2({
            fill: "currentColor",
            "clip-path": "url(#".concat(clipId, ")"),
            mask: "url(#".concat(maskId, ")")
          }, ALL_SPACE)
        });
        return {
          children,
          attributes
        };
      };
    }
  };
  var MissingIconIndicator = {
    provides(providers2) {
      let reduceMotion = false;
      if (WINDOW.matchMedia) {
        reduceMotion = WINDOW.matchMedia("(prefers-reduced-motion: reduce)").matches;
      }
      providers2.missingIconAbstract = function() {
        const gChildren = [];
        const FILL = {
          fill: "currentColor"
        };
        const ANIMATION_BASE = {
          attributeType: "XML",
          repeatCount: "indefinite",
          dur: "2s"
        };
        gChildren.push({
          tag: "path",
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
          })
        });
        const OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
          attributeName: "opacity"
        });
        const dot = {
          tag: "circle",
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            cx: "256",
            cy: "364",
            r: "28"
          }),
          children: []
        };
        if (!reduceMotion) {
          dot.children.push({
            tag: "animate",
            attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
              attributeName: "r",
              values: "28;14;28;28;14;28;"
            })
          }, {
            tag: "animate",
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: "1;0;1;1;0;1;"
            })
          });
        }
        gChildren.push(dot);
        gChildren.push({
          tag: "path",
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: "1",
            d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
          }),
          children: reduceMotion ? [] : [{
            tag: "animate",
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: "1;0;0;0;0;1;"
            })
          }]
        });
        if (!reduceMotion) {
          gChildren.push({
            tag: "path",
            attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
              opacity: "0",
              d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
            }),
            children: [{
              tag: "animate",
              attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
                values: "0;0;1;1;0;0;"
              })
            }]
          });
        }
        return {
          tag: "g",
          attributes: {
            "class": "missing"
          },
          children: gChildren
        };
      };
    }
  };
  var SvgSymbols = {
    hooks() {
      return {
        parseNodeAttributes(accumulator, node) {
          const symbolData = node.getAttribute("data-fa-symbol");
          const symbol = symbolData === null ? false : symbolData === "" ? true : symbolData;
          accumulator["symbol"] = symbol;
          return accumulator;
        }
      };
    }
  };
  var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];
  registerPlugins(plugins, {
    mixoutsTo: api
  });
  var noAuto$1 = api.noAuto;
  var config$1 = api.config;
  var library$1 = api.library;
  var dom$1 = api.dom;
  var parse$1 = api.parse;
  var findIconDefinition$1 = api.findIconDefinition;
  var toHtml$1 = api.toHtml;
  var icon = api.icon;
  var layer = api.layer;
  var text = api.text;
  var counter = api.counter;

  // node_modules/@fortawesome/free-solid-svg-icons/index.mjs
  var faSun = {
    prefix: "fas",
    iconName: "sun",
    icon: [512, 512, [9728], "f185", "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]
  };
  var faMoon = {
    prefix: "fas",
    iconName: "moon",
    icon: [384, 512, [127769, 9214], "f186", "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]
  };
  var faDesktop = {
    prefix: "fas",
    iconName: "desktop",
    icon: [576, 512, [128421, 61704, "desktop-alt"], "f390", "M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"]
  };

  // node_modules/@customerjourney/cj-core/src/components/PageHeader.js
  var PageHeader = class extends AppElement {
    #default = {
      brand: {
        src: "https://customerjourney.ninja/assets/images/cj-js.png"
      },
      theme: {
        text: {
          es: "Tema",
          en: "Theme",
          fr: "Th\xE8me"
        }
      },
      themeValues: {
        light: {
          text: {
            es: "Claro",
            en: "Light",
            fr: "Clair"
          }
        },
        dark: {
          text: {
            es: "Oscuro",
            en: "Dark",
            fr: "Sombre"
          }
        },
        system: {
          text: {
            es: "Sistema",
            en: "System",
            fr: "Syst\xE8me"
          }
        }
      }
    };
    #sunIcon = icon(faSun, { classes: ["fa-1x", "has-text-warning"] }).html[0];
    #moonIcon = icon(faMoon, { classes: ["fa-1x", "has-text-grey-light"] }).html[0];
    #desktopIcon = icon(faDesktop, { classes: ["fa-1x", "has-text-info"] }).html[0];
    constructor(props = {}) {
      super();
      this.state = this.initState(this.#default, props);
      this.getAttribute("id") || this.setAttribute("id", this.state.id || `header-${Math.floor(Math.random() * 100)}`);
      this.setAttribute("i18n", this.state.context?.lang);
      this.setAttribute("theme", this.state.context?.theme);
    }
    handleEvent(event) {
      if (event.type === "click") {
        let theme = "";
        switch (event.currentTarget.id) {
          case "themes":
            let themes = document.getElementById(event.currentTarget.id);
            themes.parentNode.classList.toggle("is-active");
            break;
          case "light-theme":
            document.getElementById("themes").parentNode.classList.toggle("is-active");
            document.documentElement.setAttribute("data-theme", "light");
            theme = "light";
            break;
          case "dark-theme":
            document.getElementById("themes").parentNode.classList.toggle("is-active");
            document.documentElement.setAttribute("data-theme", "dark");
            document.documentElement.classList.add("cc--darkmode");
            theme = "dark";
            break;
          case "system-theme":
            document.getElementById("themes").parentNode.classList.toggle("is-active");
            document.documentElement.removeAttribute("data-theme");
            theme = "system";
            break;
          default:
            const selectLang = new CustomEvent("user:select-lang", {
              detail: event.target.id.slice(4),
              bubbles: true,
              composed: true
            });
            this.dispatchEvent(selectLang);
            break;
        }
        if (theme !== "") {
          const selectTheme = new CustomEvent("user:select-theme", {
            detail: theme,
            bubbles: true,
            composed: true
          });
          this.dispatchEvent(selectTheme);
        }
      }
    }
    #getButtons() {
      let lngButtons = ``;
      Object.entries(this.state.i18n.lang).forEach(([key, value]) => {
        let focus = ["button"];
        if (key === this.state.context.lang) {
          focus.push("is-focused");
        }
        lngButtons += `<button id="btn-${key}" ${this.getClasses(focus, this.state.i18n?.classList)}">${value}</button>`;
      });
      return lngButtons;
    }
    addEvents() {
      let themes = document.querySelector("#themes");
      themes.addEventListener("click", this);
      let lightTheme = document.querySelector("#light-theme");
      lightTheme.addEventListener("click", this);
      let darkTheme = document.querySelector("#dark-theme");
      darkTheme.addEventListener("click", this);
      let systemTheme = document.querySelector("#system-theme");
      systemTheme.addEventListener("click", this);
      if (this.state.i18n?.lang != void 0) {
        Object.entries(this.state.i18n.lang).forEach(([key, value]) => {
          this.querySelector(`#btn-${key}`).addEventListener("click", this);
        });
      }
    }
    #setTheme() {
      switch (this.state.context?.theme) {
        case "light":
          return this.#sunIcon;
          break;
        case "dark":
          return this.#moonIcon;
          break;
        default:
          return this.#desktopIcon;
          break;
      }
    }
    render() {
      this.innerHTML = /* html */
      `
            <header>
            <nav ${this.getClasses(["navbar"], this.state.classList)} role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                <img class="navbar-item"  src="${this.state.context?.theme === "light" ? this.state.brand?.src : this.state.brand?.srcDark === void 0 ? this.state.brand?.src : this.state.brand?.srcDark}" width="180" height="28">
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                </div>
                <div class="navbar-menu">
                <div class="navbar-start">
                <div class="navbar-item has-dropdown">
                    <a id="themes" class="navbar-link is-arrowless">
                        ${this.state.theme?.text[this.state.context?.lang]} ${this.#setTheme()}
                    </a>
                    <div class="navbar-dropdown">                   
                        <a id="light-theme" class="navbar-item">
                            ${this.#sunIcon} ${this.state.themeValues.light.text[this.state.context?.lang]}
                        </a>
                        <a id="dark-theme" class="navbar-item">
                            ${this.#moonIcon} ${this.state.themeValues.dark.text[this.state.context?.lang]}
                        </a>
                        <a id="system-theme" class="navbar-item">
                            ${this.#desktopIcon} ${this.state.themeValues.system.text[this.state.context?.lang]}
                        </a>
                    </div>
                </div>
                </div>
                ${this.state.i18n === void 0 ? "" : `
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons are-small">
                            ${this.#getButtons()}
                        </div>
                    </div>
                </div>
                `}
                </div>
            </nav>
        </header>
        `;
      this.addEvents();
      let burger = this.querySelector(".navbar-burger");
      let menu = this.querySelector(".navbar-menu");
      burger.addEventListener("click", () => {
        burger.classList.toggle("is-active");
        menu.classList.toggle("is-active");
      });
    }
  };
  customElements.define("page-header", PageHeader);

  // src/components/countryCodes.json
  var countryCodes_default = {
    codes: [
      {
        name: "Afghanistan",
        dial_code: "+93",
        code: "AF"
      },
      {
        name: "Aland Islands",
        dial_code: "+358",
        code: "AX"
      },
      {
        name: "Albania",
        dial_code: "+355",
        code: "AL"
      },
      {
        name: "Algeria",
        dial_code: "+213",
        code: "DZ"
      },
      {
        name: "AmericanSamoa",
        dial_code: "+1684",
        code: "AS"
      },
      {
        name: "Andorra",
        dial_code: "+376",
        code: "AD"
      },
      {
        name: "Angola",
        dial_code: "+244",
        code: "AO"
      },
      {
        name: "Anguilla",
        dial_code: "+1264",
        code: "AI"
      },
      {
        name: "Antarctica",
        dial_code: "+672",
        code: "AQ"
      },
      {
        name: "Antigua and Barbuda",
        dial_code: "+1268",
        code: "AG"
      },
      {
        name: "Argentina",
        dial_code: "+54",
        code: "AR"
      },
      {
        name: "Armenia",
        dial_code: "+374",
        code: "AM"
      },
      {
        name: "Aruba",
        dial_code: "+297",
        code: "AW"
      },
      {
        name: "Australia",
        dial_code: "+61",
        code: "AU"
      },
      {
        name: "Austria",
        dial_code: "+43",
        code: "AT"
      },
      {
        name: "Azerbaijan",
        dial_code: "+994",
        code: "AZ"
      },
      {
        name: "Bahamas",
        dial_code: "+1242",
        code: "BS"
      },
      {
        name: "Bahrain",
        dial_code: "+973",
        code: "BH"
      },
      {
        name: "Bangladesh",
        dial_code: "+880",
        code: "BD"
      },
      {
        name: "Barbados",
        dial_code: "+1246",
        code: "BB"
      },
      {
        name: "Belarus",
        dial_code: "+375",
        code: "BY"
      },
      {
        name: "Belgium",
        dial_code: "+32",
        code: "BE"
      },
      {
        name: "Belize",
        dial_code: "+501",
        code: "BZ"
      },
      {
        name: "Benin",
        dial_code: "+229",
        code: "BJ"
      },
      {
        name: "Bermuda",
        dial_code: "+1441",
        code: "BM"
      },
      {
        name: "Bhutan",
        dial_code: "+975",
        code: "BT"
      },
      {
        name: "Bolivia, Plurinational State of",
        dial_code: "+591",
        code: "BO"
      },
      {
        name: "Bosnia and Herzegovina",
        dial_code: "+387",
        code: "BA"
      },
      {
        name: "Botswana",
        dial_code: "+267",
        code: "BW"
      },
      {
        name: "Brazil",
        dial_code: "+55",
        code: "BR"
      },
      {
        name: "British Indian Ocean Territory",
        dial_code: "+246",
        code: "IO"
      },
      {
        name: "Brunei Darussalam",
        dial_code: "+673",
        code: "BN"
      },
      {
        name: "Bulgaria",
        dial_code: "+359",
        code: "BG"
      },
      {
        name: "Burkina Faso",
        dial_code: "+226",
        code: "BF"
      },
      {
        name: "Burundi",
        dial_code: "+257",
        code: "BI"
      },
      {
        name: "Cambodia",
        dial_code: "+855",
        code: "KH"
      },
      {
        name: "Cameroon",
        dial_code: "+237",
        code: "CM"
      },
      {
        name: "Canada",
        dial_code: "+1",
        code: "CA"
      },
      {
        name: "Cape Verde",
        dial_code: "+238",
        code: "CV"
      },
      {
        name: "Cayman Islands",
        dial_code: "+ 345",
        code: "KY"
      },
      {
        name: "Central African Republic",
        dial_code: "+236",
        code: "CF"
      },
      {
        name: "Chad",
        dial_code: "+235",
        code: "TD"
      },
      {
        name: "Chile",
        dial_code: "+56",
        code: "CL"
      },
      {
        name: "China",
        dial_code: "+86",
        code: "CN"
      },
      {
        name: "Christmas Island",
        dial_code: "+61",
        code: "CX"
      },
      {
        name: "Cocos (Keeling) Islands",
        dial_code: "+61",
        code: "CC"
      },
      {
        name: "Colombia",
        dial_code: "+57",
        code: "CO"
      },
      {
        name: "Comoros",
        dial_code: "+269",
        code: "KM"
      },
      {
        name: "Congo",
        dial_code: "+242",
        code: "CG"
      },
      {
        name: "Congo, The Democratic Republic of the Congo",
        dial_code: "+243",
        code: "CD"
      },
      {
        name: "Cook Islands",
        dial_code: "+682",
        code: "CK"
      },
      {
        name: "Costa Rica",
        dial_code: "+506",
        code: "CR"
      },
      {
        name: "Cote d'Ivoire",
        dial_code: "+225",
        code: "CI"
      },
      {
        name: "Croatia",
        dial_code: "+385",
        code: "HR"
      },
      {
        name: "Cuba",
        dial_code: "+53",
        code: "CU"
      },
      {
        name: "Cyprus",
        dial_code: "+357",
        code: "CY"
      },
      {
        name: "Czech Republic",
        dial_code: "+420",
        code: "CZ"
      },
      {
        name: "Denmark",
        dial_code: "+45",
        code: "DK"
      },
      {
        name: "Djibouti",
        dial_code: "+253",
        code: "DJ"
      },
      {
        name: "Dominica",
        dial_code: "+1767",
        code: "DM"
      },
      {
        name: "Dominican Republic",
        dial_code: "+1849",
        code: "DO"
      },
      {
        name: "Ecuador",
        dial_code: "+593",
        code: "EC"
      },
      {
        name: "Egypt",
        dial_code: "+20",
        code: "EG"
      },
      {
        name: "El Salvador",
        dial_code: "+503",
        code: "SV"
      },
      {
        name: "Equatorial Guinea",
        dial_code: "+240",
        code: "GQ"
      },
      {
        name: "Eritrea",
        dial_code: "+291",
        code: "ER"
      },
      {
        name: "Estonia",
        dial_code: "+372",
        code: "EE"
      },
      {
        name: "Ethiopia",
        dial_code: "+251",
        code: "ET"
      },
      {
        name: "Falkland Islands (Malvinas)",
        dial_code: "+500",
        code: "FK"
      },
      {
        name: "Faroe Islands",
        dial_code: "+298",
        code: "FO"
      },
      {
        name: "Fiji",
        dial_code: "+679",
        code: "FJ"
      },
      {
        name: "Finland",
        dial_code: "+358",
        code: "FI"
      },
      {
        name: "France",
        dial_code: "+33",
        code: "FR"
      },
      {
        name: "French Guiana",
        dial_code: "+594",
        code: "GF"
      },
      {
        name: "French Polynesia",
        dial_code: "+689",
        code: "PF"
      },
      {
        name: "Gabon",
        dial_code: "+241",
        code: "GA"
      },
      {
        name: "Gambia",
        dial_code: "+220",
        code: "GM"
      },
      {
        name: "Georgia",
        dial_code: "+995",
        code: "GE"
      },
      {
        name: "Germany",
        dial_code: "+49",
        code: "DE"
      },
      {
        name: "Ghana",
        dial_code: "+233",
        code: "GH"
      },
      {
        name: "Gibraltar",
        dial_code: "+350",
        code: "GI"
      },
      {
        name: "Greece",
        dial_code: "+30",
        code: "GR"
      },
      {
        name: "Greenland",
        dial_code: "+299",
        code: "GL"
      },
      {
        name: "Grenada",
        dial_code: "+1473",
        code: "GD"
      },
      {
        name: "Guadeloupe",
        dial_code: "+590",
        code: "GP"
      },
      {
        name: "Guam",
        dial_code: "+1671",
        code: "GU"
      },
      {
        name: "Guatemala",
        dial_code: "+502",
        code: "GT"
      },
      {
        name: "Guernsey",
        dial_code: "+44",
        code: "GG"
      },
      {
        name: "Guinea",
        dial_code: "+224",
        code: "GN"
      },
      {
        name: "Guinea-Bissau",
        dial_code: "+245",
        code: "GW"
      },
      {
        name: "Guyana",
        dial_code: "+595",
        code: "GY"
      },
      {
        name: "Haiti",
        dial_code: "+509",
        code: "HT"
      },
      {
        name: "Holy See (Vatican City State)",
        dial_code: "+379",
        code: "VA"
      },
      {
        name: "Honduras",
        dial_code: "+504",
        code: "HN"
      },
      {
        name: "Hong Kong",
        dial_code: "+852",
        code: "HK"
      },
      {
        name: "Hungary",
        dial_code: "+36",
        code: "HU"
      },
      {
        name: "Iceland",
        dial_code: "+354",
        code: "IS"
      },
      {
        name: "India",
        dial_code: "+91",
        code: "IN"
      },
      {
        name: "Indonesia",
        dial_code: "+62",
        code: "ID"
      },
      {
        name: "Iran, Islamic Republic of Persian Gulf",
        dial_code: "+98",
        code: "IR"
      },
      {
        name: "Iraq",
        dial_code: "+964",
        code: "IQ"
      },
      {
        name: "Ireland",
        dial_code: "+353",
        code: "IE"
      },
      {
        name: "Isle of Man",
        dial_code: "+44",
        code: "IM"
      },
      {
        name: "Israel",
        dial_code: "+972",
        code: "IL"
      },
      {
        name: "Italy",
        dial_code: "+39",
        code: "IT"
      },
      {
        name: "Jamaica",
        dial_code: "+1876",
        code: "JM"
      },
      {
        name: "Japan",
        dial_code: "+81",
        code: "JP"
      },
      {
        name: "Jersey",
        dial_code: "+44",
        code: "JE"
      },
      {
        name: "Jordan",
        dial_code: "+962",
        code: "JO"
      },
      {
        name: "Kazakhstan",
        dial_code: "+77",
        code: "KZ"
      },
      {
        name: "Kenya",
        dial_code: "+254",
        code: "KE"
      },
      {
        name: "Kiribati",
        dial_code: "+686",
        code: "KI"
      },
      {
        name: "Korea, Democratic People's Republic of Korea",
        dial_code: "+850",
        code: "KP"
      },
      {
        name: "Korea, Republic of South Korea",
        dial_code: "+82",
        code: "KR"
      },
      {
        name: "Kuwait",
        dial_code: "+965",
        code: "KW"
      },
      {
        name: "Kyrgyzstan",
        dial_code: "+996",
        code: "KG"
      },
      {
        name: "Laos",
        dial_code: "+856",
        code: "LA"
      },
      {
        name: "Latvia",
        dial_code: "+371",
        code: "LV"
      },
      {
        name: "Lebanon",
        dial_code: "+961",
        code: "LB"
      },
      {
        name: "Lesotho",
        dial_code: "+266",
        code: "LS"
      },
      {
        name: "Liberia",
        dial_code: "+231",
        code: "LR"
      },
      {
        name: "Libyan Arab Jamahiriya",
        dial_code: "+218",
        code: "LY"
      },
      {
        name: "Liechtenstein",
        dial_code: "+423",
        code: "LI"
      },
      {
        name: "Lithuania",
        dial_code: "+370",
        code: "LT"
      },
      {
        name: "Luxembourg",
        dial_code: "+352",
        code: "LU"
      },
      {
        name: "Macao",
        dial_code: "+853",
        code: "MO"
      },
      {
        name: "Macedonia",
        dial_code: "+389",
        code: "MK"
      },
      {
        name: "Madagascar",
        dial_code: "+261",
        code: "MG"
      },
      {
        name: "Malawi",
        dial_code: "+265",
        code: "MW"
      },
      {
        name: "Malaysia",
        dial_code: "+60",
        code: "MY"
      },
      {
        name: "Maldives",
        dial_code: "+960",
        code: "MV"
      },
      {
        name: "Mali",
        dial_code: "+223",
        code: "ML"
      },
      {
        name: "Malta",
        dial_code: "+356",
        code: "MT"
      },
      {
        name: "Marshall Islands",
        dial_code: "+692",
        code: "MH"
      },
      {
        name: "Martinique",
        dial_code: "+596",
        code: "MQ"
      },
      {
        name: "Mauritania",
        dial_code: "+222",
        code: "MR"
      },
      {
        name: "Mauritius",
        dial_code: "+230",
        code: "MU"
      },
      {
        name: "Mayotte",
        dial_code: "+262",
        code: "YT"
      },
      {
        name: "Mexico",
        dial_code: "+52",
        code: "MX"
      },
      {
        name: "Micronesia, Federated States of Micronesia",
        dial_code: "+691",
        code: "FM"
      },
      {
        name: "Moldova",
        dial_code: "+373",
        code: "MD"
      },
      {
        name: "Monaco",
        dial_code: "+377",
        code: "MC"
      },
      {
        name: "Mongolia",
        dial_code: "+976",
        code: "MN"
      },
      {
        name: "Montenegro",
        dial_code: "+382",
        code: "ME"
      },
      {
        name: "Montserrat",
        dial_code: "+1664",
        code: "MS"
      },
      {
        name: "Morocco",
        dial_code: "+212",
        code: "MA"
      },
      {
        name: "Mozambique",
        dial_code: "+258",
        code: "MZ"
      },
      {
        name: "Myanmar",
        dial_code: "+95",
        code: "MM"
      },
      {
        name: "Namibia",
        dial_code: "+264",
        code: "NA"
      },
      {
        name: "Nauru",
        dial_code: "+674",
        code: "NR"
      },
      {
        name: "Nepal",
        dial_code: "+977",
        code: "NP"
      },
      {
        name: "Netherlands",
        dial_code: "+31",
        code: "NL"
      },
      {
        name: "Netherlands Antilles",
        dial_code: "+599",
        code: "AN"
      },
      {
        name: "New Caledonia",
        dial_code: "+687",
        code: "NC"
      },
      {
        name: "New Zealand",
        dial_code: "+64",
        code: "NZ"
      },
      {
        name: "Nicaragua",
        dial_code: "+505",
        code: "NI"
      },
      {
        name: "Niger",
        dial_code: "+227",
        code: "NE"
      },
      {
        name: "Nigeria",
        dial_code: "+234",
        code: "NG"
      },
      {
        name: "Niue",
        dial_code: "+683",
        code: "NU"
      },
      {
        name: "Norfolk Island",
        dial_code: "+672",
        code: "NF"
      },
      {
        name: "Northern Mariana Islands",
        dial_code: "+1670",
        code: "MP"
      },
      {
        name: "Norway",
        dial_code: "+47",
        code: "NO"
      },
      {
        name: "Oman",
        dial_code: "+968",
        code: "OM"
      },
      {
        name: "Pakistan",
        dial_code: "+92",
        code: "PK"
      },
      {
        name: "Palau",
        dial_code: "+680",
        code: "PW"
      },
      {
        name: "Palestinian Territory, Occupied",
        dial_code: "+970",
        code: "PS"
      },
      {
        name: "Panama",
        dial_code: "+507",
        code: "PA"
      },
      {
        name: "Papua New Guinea",
        dial_code: "+675",
        code: "PG"
      },
      {
        name: "Paraguay",
        dial_code: "+595",
        code: "PY"
      },
      {
        name: "Peru",
        dial_code: "+51",
        code: "PE"
      },
      {
        name: "Philippines",
        dial_code: "+63",
        code: "PH"
      },
      {
        name: "Pitcairn",
        dial_code: "+872",
        code: "PN"
      },
      {
        name: "Poland",
        dial_code: "+48",
        code: "PL"
      },
      {
        name: "Portugal",
        dial_code: "+351",
        code: "PT"
      },
      {
        name: "Puerto Rico",
        dial_code: "+1939",
        code: "PR"
      },
      {
        name: "Qatar",
        dial_code: "+974",
        code: "QA"
      },
      {
        name: "Romania",
        dial_code: "+40",
        code: "RO"
      },
      {
        name: "Russia",
        dial_code: "+7",
        code: "RU"
      },
      {
        name: "Rwanda",
        dial_code: "+250",
        code: "RW"
      },
      {
        name: "Reunion",
        dial_code: "+262",
        code: "RE"
      },
      {
        name: "Saint Barthelemy",
        dial_code: "+590",
        code: "BL"
      },
      {
        name: "Saint Helena, Ascension and Tristan Da Cunha",
        dial_code: "+290",
        code: "SH"
      },
      {
        name: "Saint Kitts and Nevis",
        dial_code: "+1869",
        code: "KN"
      },
      {
        name: "Saint Lucia",
        dial_code: "+1758",
        code: "LC"
      },
      {
        name: "Saint Martin",
        dial_code: "+590",
        code: "MF"
      },
      {
        name: "Saint Pierre and Miquelon",
        dial_code: "+508",
        code: "PM"
      },
      {
        name: "Saint Vincent and the Grenadines",
        dial_code: "+1784",
        code: "VC"
      },
      {
        name: "Samoa",
        dial_code: "+685",
        code: "WS"
      },
      {
        name: "San Marino",
        dial_code: "+378",
        code: "SM"
      },
      {
        name: "Sao Tome and Principe",
        dial_code: "+239",
        code: "ST"
      },
      {
        name: "Saudi Arabia",
        dial_code: "+966",
        code: "SA"
      },
      {
        name: "Senegal",
        dial_code: "+221",
        code: "SN"
      },
      {
        name: "Serbia",
        dial_code: "+381",
        code: "RS"
      },
      {
        name: "Seychelles",
        dial_code: "+248",
        code: "SC"
      },
      {
        name: "Sierra Leone",
        dial_code: "+232",
        code: "SL"
      },
      {
        name: "Singapore",
        dial_code: "+65",
        code: "SG"
      },
      {
        name: "Slovakia",
        dial_code: "+421",
        code: "SK"
      },
      {
        name: "Slovenia",
        dial_code: "+386",
        code: "SI"
      },
      {
        name: "Solomon Islands",
        dial_code: "+677",
        code: "SB"
      },
      {
        name: "Somalia",
        dial_code: "+252",
        code: "SO"
      },
      {
        name: "South Africa",
        dial_code: "+27",
        code: "ZA"
      },
      {
        name: "South Sudan",
        dial_code: "+211",
        code: "SS"
      },
      {
        name: "South Georgia and the South Sandwich Islands",
        dial_code: "+500",
        code: "GS"
      },
      {
        name: "Spain",
        dial_code: "+34",
        code: "ES"
      },
      {
        name: "Sri Lanka",
        dial_code: "+94",
        code: "LK"
      },
      {
        name: "Sudan",
        dial_code: "+249",
        code: "SD"
      },
      {
        name: "Suriname",
        dial_code: "+597",
        code: "SR"
      },
      {
        name: "Svalbard and Jan Mayen",
        dial_code: "+47",
        code: "SJ"
      },
      {
        name: "Swaziland",
        dial_code: "+268",
        code: "SZ"
      },
      {
        name: "Sweden",
        dial_code: "+46",
        code: "SE"
      },
      {
        name: "Switzerland",
        dial_code: "+41",
        code: "CH"
      },
      {
        name: "Syrian Arab Republic",
        dial_code: "+963",
        code: "SY"
      },
      {
        name: "Taiwan",
        dial_code: "+886",
        code: "TW"
      },
      {
        name: "Tajikistan",
        dial_code: "+992",
        code: "TJ"
      },
      {
        name: "Tanzania, United Republic of Tanzania",
        dial_code: "+255",
        code: "TZ"
      },
      {
        name: "Thailand",
        dial_code: "+66",
        code: "TH"
      },
      {
        name: "Timor-Leste",
        dial_code: "+670",
        code: "TL"
      },
      {
        name: "Togo",
        dial_code: "+228",
        code: "TG"
      },
      {
        name: "Tokelau",
        dial_code: "+690",
        code: "TK"
      },
      {
        name: "Tonga",
        dial_code: "+676",
        code: "TO"
      },
      {
        name: "Trinidad and Tobago",
        dial_code: "+1868",
        code: "TT"
      },
      {
        name: "Tunisia",
        dial_code: "+216",
        code: "TN"
      },
      {
        name: "Turkey",
        dial_code: "+90",
        code: "TR"
      },
      {
        name: "Turkmenistan",
        dial_code: "+993",
        code: "TM"
      },
      {
        name: "Turks and Caicos Islands",
        dial_code: "+1649",
        code: "TC"
      },
      {
        name: "Tuvalu",
        dial_code: "+688",
        code: "TV"
      },
      {
        name: "Uganda",
        dial_code: "+256",
        code: "UG"
      },
      {
        name: "Ukraine",
        dial_code: "+380",
        code: "UA"
      },
      {
        name: "United Arab Emirates",
        dial_code: "+971",
        code: "AE"
      },
      {
        name: "United Kingdom",
        dial_code: "+44",
        code: "GB"
      },
      {
        name: "United States",
        dial_code: "+1",
        code: "US"
      },
      {
        name: "Uruguay",
        dial_code: "+598",
        code: "UY"
      },
      {
        name: "Uzbekistan",
        dial_code: "+998",
        code: "UZ"
      },
      {
        name: "Vanuatu",
        dial_code: "+678",
        code: "VU"
      },
      {
        name: "Venezuela, Bolivarian Republic of Venezuela",
        dial_code: "+58",
        code: "VE"
      },
      {
        name: "Vietnam",
        dial_code: "+84",
        code: "VN"
      },
      {
        name: "Virgin Islands, British",
        dial_code: "+1284",
        code: "VG"
      },
      {
        name: "Virgin Islands, U.S.",
        dial_code: "+1340",
        code: "VI"
      },
      {
        name: "Wallis and Futuna",
        dial_code: "+681",
        code: "WF"
      },
      {
        name: "Yemen",
        dial_code: "+967",
        code: "YE"
      },
      {
        name: "Zambia",
        dial_code: "+260",
        code: "ZM"
      },
      {
        name: "Zimbabwe",
        dial_code: "+263",
        code: "ZW"
      }
    ]
  };

  // src/components/Form.js
  function addFormEvents(component) {
    let btnCancel = component.querySelector("#cancel-lead");
    let form = component.querySelector("form");
    let email = component.querySelector("#email");
    let phone = component.querySelector("#phone");
    if (btnCancel != null) {
      btnCancel.addEventListener("click", component);
    }
    ;
    if (form != null) {
      form.addEventListener("submit", component);
    }
    ;
    if (email != null) {
      email.addEventListener("change", component);
    }
    ;
    if (phone != null) {
      phone.addEventListener("change", component);
    }
    ;
  }
  var CjForm = class {
    #default = {
      name: {
        label: {
          es: "Nombre",
          en: "Name",
          fr: "Nom"
        },
        help: {
          es: "El campo Nombre es obligatorio.",
          en: "The Name field is required.",
          fr: "Il est requis de compl\xE9ter le champ correspondant au nom."
        }
      },
      function: {
        label: {
          es: "Puesto de Trabajo",
          en: "Job Position",
          fr: "Poste"
        },
        help: {
          es: "El campo Puesto de Trabajo es obligatorio.",
          en: "The Job Position field is required.",
          fr: "Le champ Poste est obligatoire."
        }
      },
      email: {
        label: {
          es: "Correo Electr\xF3nico",
          en: "e-mail",
          fr: "e-mail"
        },
        help: {
          es: "El campo Correo Electr\xF3nico es obligatorio.",
          en: "The Email field is required.",
          fr: "Le champ E-mail est obligatoire."
        },
        help2: {
          es: "El correo electr\xF3nico es invalido.",
          en: "Email is invalid.",
          fr: "Le courriel est invalide."
        }
      },
      phone: {
        label: {
          es: "Tel\xE9fono",
          en: "Phone",
          fr: "T\xE9l\xE9phone"
        },
        help: {
          es: "El campo Tel\xE9fono es obligatorio.",
          en: "The Telephone field is required.",
          fr: "Le champ T\xE9l\xE9phone est obligatoire."
        },
        help2: {
          es: "El N\xFAmero Telef\xF3nico es inv\xE1lido.",
          en: "The Telephone Number is invalid.",
          fr: "Le num\xE9ro de t\xE9l\xE9phone n'est pas valide."
        }
      },
      company: {
        label: {
          es: "Compa\xF1\xEDa",
          en: "Company",
          fr: "Entreprise"
        },
        help: {
          es: "El campo Compa\xF1ia es obligatorio.",
          en: "The Company field is required.",
          fr: "Le champ Soci\xE9t\xE9 est obligatoire."
        }
      },
      subject: {
        label: {
          es: "Asunto",
          en: "Subject",
          fr: "Objet"
        },
        help: {
          es: "El campo Asunto es obligatorio.",
          en: "The Subject field is required.",
          fr: "Le champ Objet est obligatoire."
        }
      },
      description: {
        label: {
          es: "Descripci\xF3n",
          en: "Description",
          fr: "Description"
        },
        help: {
          es: "El campo Descripci\xF3n es obligatorio.",
          en: "The Description field is required.",
          fr: "Le champ Description est obligatoire."
        }
      },
      terms: {
        text: {
          es: "Estoy de acuerdo con los",
          en: "I agree to the",
          fr: "J'accepte les"
        },
        help: {
          es: "Tienes que aceptar los T\xE9rminos y Condiciones.",
          en: "You have to accept the Terms and Conditions.",
          fr: "Vous devez accepter les termes et conditions."
        },
        required: true
      },
      termsLink: {
        text: {
          es: "t\xE9rminos y condiciones",
          en: "terms and conditions",
          fr: "termes et conditions"
        }
      },
      submit: {
        text: {
          es: "Enviar",
          en: "Submit",
          fr: "Soumettre"
        }
      },
      cancel: {
        text: {
          es: "Cancelar",
          en: "Cancel",
          fr: "Annuler"
        }
      },
      context: {
        lang: "en"
      }
    };
    constructor(props = {}, context = {}) {
      this.state = this.initState(this.#default, props);
      this.state.context = context;
    }
    initState(defValues, props) {
      if (props != void 0) {
        let state2 = Object.assign({}, defValues, props);
        if (defValues != void 0) {
          if (Object.keys(defValues).lenght != 0) {
            Object.keys(defValues).forEach((prop) => {
              if (props[prop] != void 0) {
                if (typeof props[prop] === "string" || Array.isArray(props[prop])) {
                  state2[prop] = props[prop];
                } else {
                  state2[prop] = Object.assign({}, defValues[prop], props[prop]);
                }
              }
            });
          }
        }
        return state2;
      } else {
        return defValues;
      }
    }
    setAnimation(props) {
      if (props === void 0 || props === null) {
        return "";
      } else {
        let animation = ` data-animation=${props.effect}`;
        props.delay != void 0 ? animation += ` data-delay=${props.delay}` : false;
        props.speed != void 0 ? animation += ` data-speed=${props.speed}` : false;
        props.repeat != void 0 ? animation += ` data-repeat=${props.repeat}` : false;
        return animation;
      }
    }
    getClasses(defaultClass = [], optionalClasses) {
      let resultClasses = [];
      if (optionalClasses === void 0) {
        resultClasses = defaultClass;
      } else {
        resultClasses = [...defaultClass, ...optionalClasses];
      }
      let classes = "";
      if (resultClasses.length > 0) {
        classes = `class="${resultClasses.toString().replaceAll(",", " ")}"`;
      }
      return classes;
    }
    #getFlagEmoji(countryCode) {
      const codePoints = countryCode.toUpperCase().split("").map((char) => 127397 + char.charCodeAt());
      return String.fromCodePoint(...codePoints);
    }
    #getCodes() {
      let values = ``;
      if (this.state.phoneCodes === void 0) {
        countryCodes_default.codes.forEach((country) => {
          values += `<option value="${country.dial_code}" ${this.state.code === country.code ? "selected" : ""}>${this.#getFlagEmoji(country.code)}</option>`;
        });
      } else {
        if (this.state.phoneCodes.length > 0) {
          this.state.phoneCodes.forEach((code2) => {
            let country = countryCodes_default.codes.find((item) => item.code === code2);
            values += `<option value="${country.dial_code}" ${this.state.code === country.code ? "selected" : ""}>${this.#getFlagEmoji(country.code) + " " + country.dial_code}</option>`;
          });
        }
      }
      return values;
    }
    render() {
      return `
        <form id="${this.state.id}" ${this.getClasses(["box"], this.state?.classList)}  ${this.setAnimation(this.state.form?.animation)} novalidate>
            <fieldset>
                ${this.state.name?.disabled != true ? `
                    <div class="field" ${this.setAnimation(this.state.name?.animation)}>
                        <label class="label">${this.state.name?.label[this.state.context.lang]}</label>
                        <div class="control">
                        <input id="contact" class="input" type="text" ${this.state.name?.placeholder != void 0 ? `placeholder="${this.state.name.placeholder[this.state.context.lang]}"` : ``}  ${this.state.name?.required === true ? "required" : ""} >
                        </div>
                        <p class="help is-danger is-hidden" id="help-contact">${this.state.name?.help[this.state.context.lang]}</p>
                    </div>` : ""}
                    ${this.state.function?.disabled != true ? `
                    <div class="field" ${this.setAnimation(this.state.function?.animation)}>
                        <label class="label">${this.state.function?.label[this.state.context.lang]}</label>
                        <div class="control">
                        <input id="function" class="input" type="text" ${this.state.function?.placeholder != void 0 ? `placeholder="${this.state.function.placeholder[this.state.context.lang]}"` : ``}  ${this.state.function?.required === true ? "required" : ""}>
                        </div>
                        <p class="help is-danger is-hidden" id="help-function">${this.state.function?.help[this.state.context.lang]}</p>
                    </div>` : ""}
                    ${this.state.email?.disabled != true ? `
                    <div class="field" ${this.setAnimation(this.state.email?.animation)}>
                        <label class="label">${this.state.email?.label[this.state.context.lang]}</label>
                        <div class="control">
                        <input id="email" class="input" type="text" ${this.state.email?.placeholder != void 0 ? `placeholder="${this.state.email.placeholder[this.state.context.lang]}"` : ``}   ${this.state.email?.required === true ? "required" : ""}>
                        </div>
                        <p class="help is-danger is-hidden" id="help-email">${this.state.email?.help[this.state.context.lang]}</p>
                        <p class="help is-danger is-hidden" id="help2-email">${this.state.email?.help2[this.state.context.lang]}</p>
                    </div>` : ""}
                    ${this.state.phone?.disabled != true ? `
                    <div class="field" ${this.setAnimation(this.state.phone?.animation)}>
                        <label class="label">${this.state.phone?.label[this.state.context.lang]}</label>                       
                        <div class="control">
                            <div class="field has-addons">
                            <div class="select">
                            <select id="codes">
                                ${this.#getCodes()}
                            </select>
                          </div>
                                <div class="control is-expanded">
                                    <input id="phone" class="input" type="text" ${this.state.phone?.placeholder != void 0 ? `placeholder="${this.state.phone.placeholder[this.state.context.lang]}"` : ``} ${this.state.phone.required === true ? `required` : ``}  ${this.state.phone?.required === true ? "required" : ""}>
                                </div>
                            </div>
                        </div>
                        <p class="help is-danger is-hidden" id="help-phone">${this.state.phone?.help[this.state.context.lang]}</p>
                        <p class="help is-danger is-hidden" id="help2-phone">${this.state.phone?.help2[this.state.context.lang]}</p>
                    </div>` : ""}
                    ${this.state.company?.disabled != true ? `
                    <div class="field" ${this.setAnimation(this.state.company.animation)}>
                        <label class="label">${this.state.company?.label[this.state.context.lang]}</label>
                        <div class="control">
                        <input id="company" class="input" type="text" ${this.state.company?.placeholder != void 0 ? `placeholder="${this.state.company.placeholder[this.state.context.lang]}"` : ``}  ${this.state.company?.required === true ? "required" : ""}>
                        </div>
                        <p class="help is-danger is-hidden" id="help-company">${this.state.company?.help[this.state.context.lang]}</p>
                    </div>` : ""}
                    ${this.state.subject?.disabled != true ? `
                    <div class="field" ${this.setAnimation(this.state.subject.animation)}>
                        <label class="label">${this.state.subject?.label[this.state.context.lang]}</label>
                        <div class="control">
                        <input id="subject" class="input" type="text" ${this.state.subject?.placeholder != void 0 ? `placeholder="${this.state.subject.placeholder[this.state.context.lang]}"` : ``}  ${this.state.subject?.required === true ? "required" : ""}>
                        </div>
                        <p class="help is-danger is-hidden" id="help-subject">${this.state.subject?.help[this.state.context.lang]}</p>
                    </div>` : ""}
                    ${this.state.description?.disabled != true ? `
                    <div class="field" ${this.setAnimation(this.state.description.animation)}>
                        <label class="label">${this.state.description?.label[this.state.context.lang]}</label>
                        <div class="control">
                            <textarea id="description" class="textarea has-fixed-size" ${this.state.description?.placeholder != void 0 ? `placeholder="${this.state.description.placeholder[this.state.context.lang]}"` : ``} ${this.state.description?.required === true ? "required" : ""}></textarea>
                        </div>
                        <p class="help is-danger is-hidden" id="help-description">${this.state.description?.help[this.state.context.lang]}</p>
                    </div>` : ""}
                    ${this.state.terms?.disabled != true ? `
                    <div class="field" ${this.setAnimation(this.state.terms.animation)}>
                        <div class="control">
                            <label class="checkbox">
                            <input  id="terms" type="checkbox"  ${this.state.terms?.required === true ? "required" : ""} >
                            ${this.state.terms?.text[this.state.context.lang]} <a href="${this.state.termsLink?.url != void 0 ? this.state.termsLink?.url : "#"}">${this.state.termsLink?.text[this.state.context.lang]}</a>
                            </label>
                        </div>
                        <p class="help is-danger is-hidden" id="help-terms">${this.state.terms?.help[this.state.context.lang]}</p>
                    </div>` : ""}
                    <div class="field is-grouped">
                        <div class="control" ${this.setAnimation(this.state.submit?.animation)}>
                            <button type="submit" id="submit-lead" ${this.getClasses(["button"], this.state.submit?.classList)}>${this.state.submit?.text[this.state.context.lang]}</button>
                        </div>
                        <div class="control" ${this.setAnimation(this.state.cancel?.animation)}>
                            <button type="button" id="cancel-lead" ${this.getClasses(["button"], this.state.cancel?.classList)}>${this.state.cancel?.text[this.state.context.lang]}</button>
                        </div>
                    </div>
                    </fieldset>
                </form>        
        `;
    }
  };

  // node_modules/libphonenumber-js/metadata.min.json.js
  var metadata_min_json_default = { "version": 4, "country_calling_codes": { "1": ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], "7": ["RU", "KZ"], "20": ["EG"], "27": ["ZA"], "30": ["GR"], "31": ["NL"], "32": ["BE"], "33": ["FR"], "34": ["ES"], "36": ["HU"], "39": ["IT", "VA"], "40": ["RO"], "41": ["CH"], "43": ["AT"], "44": ["GB", "GG", "IM", "JE"], "45": ["DK"], "46": ["SE"], "47": ["NO", "SJ"], "48": ["PL"], "49": ["DE"], "51": ["PE"], "52": ["MX"], "53": ["CU"], "54": ["AR"], "55": ["BR"], "56": ["CL"], "57": ["CO"], "58": ["VE"], "60": ["MY"], "61": ["AU", "CC", "CX"], "62": ["ID"], "63": ["PH"], "64": ["NZ"], "65": ["SG"], "66": ["TH"], "81": ["JP"], "82": ["KR"], "84": ["VN"], "86": ["CN"], "90": ["TR"], "91": ["IN"], "92": ["PK"], "93": ["AF"], "94": ["LK"], "95": ["MM"], "98": ["IR"], "211": ["SS"], "212": ["MA", "EH"], "213": ["DZ"], "216": ["TN"], "218": ["LY"], "220": ["GM"], "221": ["SN"], "222": ["MR"], "223": ["ML"], "224": ["GN"], "225": ["CI"], "226": ["BF"], "227": ["NE"], "228": ["TG"], "229": ["BJ"], "230": ["MU"], "231": ["LR"], "232": ["SL"], "233": ["GH"], "234": ["NG"], "235": ["TD"], "236": ["CF"], "237": ["CM"], "238": ["CV"], "239": ["ST"], "240": ["GQ"], "241": ["GA"], "242": ["CG"], "243": ["CD"], "244": ["AO"], "245": ["GW"], "246": ["IO"], "247": ["AC"], "248": ["SC"], "249": ["SD"], "250": ["RW"], "251": ["ET"], "252": ["SO"], "253": ["DJ"], "254": ["KE"], "255": ["TZ"], "256": ["UG"], "257": ["BI"], "258": ["MZ"], "260": ["ZM"], "261": ["MG"], "262": ["RE", "YT"], "263": ["ZW"], "264": ["NA"], "265": ["MW"], "266": ["LS"], "267": ["BW"], "268": ["SZ"], "269": ["KM"], "290": ["SH", "TA"], "291": ["ER"], "297": ["AW"], "298": ["FO"], "299": ["GL"], "350": ["GI"], "351": ["PT"], "352": ["LU"], "353": ["IE"], "354": ["IS"], "355": ["AL"], "356": ["MT"], "357": ["CY"], "358": ["FI", "AX"], "359": ["BG"], "370": ["LT"], "371": ["LV"], "372": ["EE"], "373": ["MD"], "374": ["AM"], "375": ["BY"], "376": ["AD"], "377": ["MC"], "378": ["SM"], "380": ["UA"], "381": ["RS"], "382": ["ME"], "383": ["XK"], "385": ["HR"], "386": ["SI"], "387": ["BA"], "389": ["MK"], "420": ["CZ"], "421": ["SK"], "423": ["LI"], "500": ["FK"], "501": ["BZ"], "502": ["GT"], "503": ["SV"], "504": ["HN"], "505": ["NI"], "506": ["CR"], "507": ["PA"], "508": ["PM"], "509": ["HT"], "590": ["GP", "BL", "MF"], "591": ["BO"], "592": ["GY"], "593": ["EC"], "594": ["GF"], "595": ["PY"], "596": ["MQ"], "597": ["SR"], "598": ["UY"], "599": ["CW", "BQ"], "670": ["TL"], "672": ["NF"], "673": ["BN"], "674": ["NR"], "675": ["PG"], "676": ["TO"], "677": ["SB"], "678": ["VU"], "679": ["FJ"], "680": ["PW"], "681": ["WF"], "682": ["CK"], "683": ["NU"], "685": ["WS"], "686": ["KI"], "687": ["NC"], "688": ["TV"], "689": ["PF"], "690": ["TK"], "691": ["FM"], "692": ["MH"], "850": ["KP"], "852": ["HK"], "853": ["MO"], "855": ["KH"], "856": ["LA"], "880": ["BD"], "886": ["TW"], "960": ["MV"], "961": ["LB"], "962": ["JO"], "963": ["SY"], "964": ["IQ"], "965": ["KW"], "966": ["SA"], "967": ["YE"], "968": ["OM"], "970": ["PS"], "971": ["AE"], "972": ["IL"], "973": ["BH"], "974": ["QA"], "975": ["BT"], "976": ["MN"], "977": ["NP"], "992": ["TJ"], "993": ["TM"], "994": ["AZ"], "995": ["GE"], "996": ["KG"], "998": ["UZ"] }, "countries": { "AC": ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], "AD": ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], "AE": ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], "AF": ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], "AG": ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], "AI": ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], "AL": ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], "AM": ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], "AO": ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], "AR": ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], "AS": ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], "AT": ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], "AU": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|7(?:[013-57-9]\\d|2[0-8]))\\d|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90)))\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|3\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], "AW": ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], "AX": ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], "AZ": ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], "BA": ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], "BB": ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], "BD": ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], "BE": ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], "BF": ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]]], "BG": ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], "BH": ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], "BI": ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], "BJ": ["229", "00", "[24-689]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]]], "BL": ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]]], "BM": ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], "BN": ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], "BO": ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], "BQ": ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], "BR": ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], "BS": ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], "BT": ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]]], "BW": ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], "BY": ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], "BZ": ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], "CA": ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|90[25])[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], "CC": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], "CD": ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], "CF": ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]], "CG": ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], "CH": ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], "CI": ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], "CK": ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], "CL": ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], "CM": ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], "CN": ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "10(?:10|9[56])|2[0-57-9](?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], "CO": ["57", "00(?:4(?:[14]4|56)|[579])", "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}", [10, 11], [["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], "CR": ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], "CU": ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], "CV": ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], "CW": ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], "CX": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], "CY": ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], "CZ": ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], "DE": ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|31)"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], "DJ": ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], "DK": ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], "DM": ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], "DO": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], "DZ": ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], "EC": ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], "EE": ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], "EG": ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], "EH": ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"], "ER": ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], "ES": ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], "ET": ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"], "FI": ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:1[3-79]|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], "FJ": ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "FK": ["500", "00", "[2-7]\\d{4}", [5]], "FM": ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], "FO": ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], "FR": ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], "GA": ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], "GB": ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], "GD": ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], "GE": ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], "GF": ["594", "00", "[56]94\\d{6}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], "GG": ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], "GH": ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"], "GI": ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], "GL": ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], "GM": ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], "GN": ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], "GP": ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]]], "GQ": ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], "GR": ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], "GT": ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], "GU": ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], "GW": ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], "GY": ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], "HK": ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "HN": ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], "HR": ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], "HT": ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], "HU": ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], "ID": ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], "IE": ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "IL": ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], "IM": ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24"], "IN": ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], "IO": ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], "IQ": ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], "IR": ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], "IS": ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "IT": ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], "JE": ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], "JM": ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], "JO": ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], "JP": ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], "0", 0, "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1"], "KE": ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], "KG": ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "KH": ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], "KI": ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], "KM": ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], "KN": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], "KP": ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], "KR": ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], "KW": ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], "KY": ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], "KZ": ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"], "LA": ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], "LB": ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], "LC": ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], "LI": ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], "LK": ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], "LR": ["231", "00", "(?:[245]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"], "LS": ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], "LT": ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]], "0", 0, "[08]"], "LU": ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], "LV": ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]], "LY": ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], "MA": ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-4]|5[01]|8[0-3]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], "MC": ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"], "MD": ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], "ME": ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], "MF": ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]]], "MG": ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], "MH": ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], "MK": ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], "ML": ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], "MM": ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], "MN": ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], "MO": ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], "MP": ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], "MQ": ["596", "00", "596\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "MR": ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], "MS": ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], "MT": ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], "MU": ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], "MV": ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "MW": ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], "MX": ["52", "0[09]", "[2-9]\\d{9}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "MY": ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], "MZ": ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], "NA": ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], "NC": ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], "NE": ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]]], "NF": ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], "NG": ["234", "009", "2[0-24-9]\\d{8}|[78]\\d{10,13}|[7-9]\\d{9}|[1-9]\\d{7}|[124-7]\\d{6}", [7, 8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-6]|7(?:0[0-689]|[1-79])|8[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], "NI": ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], "NL": ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], "NO": ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], "NP": ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], "NR": ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]]], "NU": ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], "NZ": ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], "OM": ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], "PA": ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], "PE": ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], "PF": ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], "PG": ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "PH": ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], "PK": ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], "PL": ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], "PM": ["508", "00", "[45]\\d{5}|(?:708|80\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "PR": ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], "PS": ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], "PT": ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], "PW": ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], "PY": ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], "QA": ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], "RE": ["262", "00", "(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"], ["69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-5]|76(?:2[278]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], "RO": ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], "RS": ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], "RU": ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"], "RW": ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], "SA": ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], "SB": ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], "SC": ["248", "010|0[0-2]", "800\\d{4}|(?:[249]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "SD": ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], "SE": ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], "SG": ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], "SH": ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], "SI": ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], "SJ": ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], "SK": ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"], "SL": ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], "SM": ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], "SN": ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], "SO": ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|77|9[2-9]"]]], "0"], "SR": ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]], "SS": ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], "ST": ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], "SV": ["503", "00", "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], "SX": ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], "SY": ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0"], "SZ": ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], "TA": ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], "TC": ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], "TD": ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "TG": ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], "TH": ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], "TJ": ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], "TK": ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], "TL": ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], "TM": ["993", "810", "(?:[1-6]\\d|71)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], "TN": ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], "TO": ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], "TR": ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], "TT": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], "TV": ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], "TW": ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], "TZ": ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], "UA": ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], "UG": ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], "US": ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:3052(?:0[0-8]|[1-9]\\d)|5056(?:[0-35-9]\\d|4[468])|7302[0-4]\\d)\\d{4}|(?:305[3-9]|472[24]|505[2-57-9]|7306|983[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[013569]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["305209\\d{4}"]]], "UY": ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], "UZ": ["998", "00", "(?:20|33|[5-79]\\d|88)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]]], "VA": ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"], "VC": ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], "VE": ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], "VG": ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], "VI": ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], "VN": ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], "VU": ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], "WF": ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], "WS": ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], "XK": ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]], "0"], "YE": ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], "YT": ["262", "00", "(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"], ["639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], "ZA": ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], "ZM": ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0"], "ZW": ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, "nonGeographic": { "800": ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], "808": ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], "870": ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]], "878": ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], "881": ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], "882": ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], "883": ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], "888": ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], "979": ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };

  // node_modules/libphonenumber-js/min/exports/withMetadataArgument.js
  function withMetadataArgument(func, _arguments) {
    var args = Array.prototype.slice.call(_arguments);
    args.push(metadata_min_json_default);
    return func.apply(this, args);
  }

  // node_modules/libphonenumber-js/es6/ParseError.js
  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result2;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result2 = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result2 = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result2);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
    _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
      if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
      if (typeof Class2 !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2)) return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
      return _setPrototypeOf(Wrapper, Class2);
    };
    return _wrapNativeSuper(Class);
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct2(Parent2, args2, Class2) {
        var a = [null];
        a.push.apply(a, args2);
        var Constructor = Function.bind.apply(Parent2, a);
        var instance = new Constructor();
        if (Class2) _setPrototypeOf(instance, Class2.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e2) {
      return false;
    }
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _setPrototypeOf(o2, p2) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
      o3.__proto__ = p3;
      return o3;
    };
    return _setPrototypeOf(o2, p2);
  }
  function _getPrototypeOf(o2) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
      return o3.__proto__ || Object.getPrototypeOf(o3);
    };
    return _getPrototypeOf(o2);
  }
  var ParseError = /* @__PURE__ */ function(_Error) {
    _inherits(ParseError2, _Error);
    var _super = _createSuper(ParseError2);
    function ParseError2(code2) {
      var _this;
      _classCallCheck(this, ParseError2);
      _this = _super.call(this, code2);
      Object.setPrototypeOf(_assertThisInitialized(_this), ParseError2.prototype);
      _this.name = _this.constructor.name;
      return _this;
    }
    return _createClass(ParseError2);
  }(/* @__PURE__ */ _wrapNativeSuper(Error));

  // node_modules/libphonenumber-js/es6/constants.js
  var MIN_LENGTH_FOR_NSN = 2;
  var MAX_LENGTH_FOR_NSN = 17;
  var MAX_LENGTH_COUNTRY_CODE = 3;
  var VALID_DIGITS = "0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9";
  var DASHES = "-\u2010-\u2015\u2212\u30FC\uFF0D";
  var SLASHES = "\uFF0F/";
  var DOTS = "\uFF0E.";
  var WHITESPACE = " \xA0\xAD\u200B\u2060\u3000";
  var BRACKETS = "()\uFF08\uFF09\uFF3B\uFF3D\\[\\]";
  var TILDES = "~\u2053\u223C\uFF5E";
  var VALID_PUNCTUATION = "".concat(DASHES).concat(SLASHES).concat(DOTS).concat(WHITESPACE).concat(BRACKETS).concat(TILDES);
  var PLUS_CHARS = "+\uFF0B";

  // node_modules/libphonenumber-js/es6/tools/semver-compare.js
  function semver_compare_default(a, b) {
    a = a.split("-");
    b = b.split("-");
    var pa = a[0].split(".");
    var pb = b[0].split(".");
    for (var i = 0; i < 3; i++) {
      var na = Number(pa[i]);
      var nb = Number(pb[i]);
      if (na > nb) return 1;
      if (nb > na) return -1;
      if (!isNaN(na) && isNaN(nb)) return 1;
      if (isNaN(na) && !isNaN(nb)) return -1;
    }
    if (a[1] && b[1]) {
      return a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0;
    }
    return !a[1] && b[1] ? 1 : a[1] && !b[1] ? -1 : 0;
  }

  // node_modules/libphonenumber-js/es6/helpers/isObject.js
  var objectConstructor = {}.constructor;
  function isObject(object) {
    return object !== void 0 && object !== null && object.constructor === objectConstructor;
  }

  // node_modules/libphonenumber-js/es6/metadata.js
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof2(obj);
  }
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties2(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties2(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var V3 = "1.2.0";
  var V4 = "1.7.35";
  var DEFAULT_EXT_PREFIX = " ext. ";
  var CALLING_CODE_REG_EXP = /^\d+$/;
  var Metadata = /* @__PURE__ */ function() {
    function Metadata2(metadata) {
      _classCallCheck2(this, Metadata2);
      validateMetadata(metadata);
      this.metadata = metadata;
      setVersion.call(this, metadata);
    }
    _createClass2(Metadata2, [{
      key: "getCountries",
      value: function getCountries() {
        return Object.keys(this.metadata.countries).filter(function(_) {
          return _ !== "001";
        });
      }
    }, {
      key: "getCountryMetadata",
      value: function getCountryMetadata(countryCode) {
        return this.metadata.countries[countryCode];
      }
    }, {
      key: "nonGeographic",
      value: function nonGeographic() {
        if (this.v1 || this.v2 || this.v3) return;
        return this.metadata.nonGeographic || this.metadata.nonGeographical;
      }
    }, {
      key: "hasCountry",
      value: function hasCountry(country) {
        return this.getCountryMetadata(country) !== void 0;
      }
    }, {
      key: "hasCallingCode",
      value: function hasCallingCode(callingCode) {
        if (this.getCountryCodesForCallingCode(callingCode)) {
          return true;
        }
        if (this.nonGeographic()) {
          if (this.nonGeographic()[callingCode]) {
            return true;
          }
        } else {
          var countryCodes = this.countryCallingCodes()[callingCode];
          if (countryCodes && countryCodes.length === 1 && countryCodes[0] === "001") {
            return true;
          }
        }
      }
    }, {
      key: "isNonGeographicCallingCode",
      value: function isNonGeographicCallingCode(callingCode) {
        if (this.nonGeographic()) {
          return this.nonGeographic()[callingCode] ? true : false;
        } else {
          return this.getCountryCodesForCallingCode(callingCode) ? false : true;
        }
      }
      // Deprecated.
    }, {
      key: "country",
      value: function country(countryCode) {
        return this.selectNumberingPlan(countryCode);
      }
    }, {
      key: "selectNumberingPlan",
      value: function selectNumberingPlan(countryCode, callingCode) {
        if (countryCode && CALLING_CODE_REG_EXP.test(countryCode)) {
          callingCode = countryCode;
          countryCode = null;
        }
        if (countryCode && countryCode !== "001") {
          if (!this.hasCountry(countryCode)) {
            throw new Error("Unknown country: ".concat(countryCode));
          }
          this.numberingPlan = new NumberingPlan(this.getCountryMetadata(countryCode), this);
        } else if (callingCode) {
          if (!this.hasCallingCode(callingCode)) {
            throw new Error("Unknown calling code: ".concat(callingCode));
          }
          this.numberingPlan = new NumberingPlan(this.getNumberingPlanMetadata(callingCode), this);
        } else {
          this.numberingPlan = void 0;
        }
        return this;
      }
    }, {
      key: "getCountryCodesForCallingCode",
      value: function getCountryCodesForCallingCode(callingCode) {
        var countryCodes = this.countryCallingCodes()[callingCode];
        if (countryCodes) {
          if (countryCodes.length === 1 && countryCodes[0].length === 3) {
            return;
          }
          return countryCodes;
        }
      }
    }, {
      key: "getCountryCodeForCallingCode",
      value: function getCountryCodeForCallingCode(callingCode) {
        var countryCodes = this.getCountryCodesForCallingCode(callingCode);
        if (countryCodes) {
          return countryCodes[0];
        }
      }
    }, {
      key: "getNumberingPlanMetadata",
      value: function getNumberingPlanMetadata(callingCode) {
        var countryCode = this.getCountryCodeForCallingCode(callingCode);
        if (countryCode) {
          return this.getCountryMetadata(countryCode);
        }
        if (this.nonGeographic()) {
          var metadata = this.nonGeographic()[callingCode];
          if (metadata) {
            return metadata;
          }
        } else {
          var countryCodes = this.countryCallingCodes()[callingCode];
          if (countryCodes && countryCodes.length === 1 && countryCodes[0] === "001") {
            return this.metadata.countries["001"];
          }
        }
      }
      // Deprecated.
    }, {
      key: "countryCallingCode",
      value: function countryCallingCode() {
        return this.numberingPlan.callingCode();
      }
      // Deprecated.
    }, {
      key: "IDDPrefix",
      value: function IDDPrefix() {
        return this.numberingPlan.IDDPrefix();
      }
      // Deprecated.
    }, {
      key: "defaultIDDPrefix",
      value: function defaultIDDPrefix() {
        return this.numberingPlan.defaultIDDPrefix();
      }
      // Deprecated.
    }, {
      key: "nationalNumberPattern",
      value: function nationalNumberPattern() {
        return this.numberingPlan.nationalNumberPattern();
      }
      // Deprecated.
    }, {
      key: "possibleLengths",
      value: function possibleLengths() {
        return this.numberingPlan.possibleLengths();
      }
      // Deprecated.
    }, {
      key: "formats",
      value: function formats() {
        return this.numberingPlan.formats();
      }
      // Deprecated.
    }, {
      key: "nationalPrefixForParsing",
      value: function nationalPrefixForParsing() {
        return this.numberingPlan.nationalPrefixForParsing();
      }
      // Deprecated.
    }, {
      key: "nationalPrefixTransformRule",
      value: function nationalPrefixTransformRule() {
        return this.numberingPlan.nationalPrefixTransformRule();
      }
      // Deprecated.
    }, {
      key: "leadingDigits",
      value: function leadingDigits() {
        return this.numberingPlan.leadingDigits();
      }
      // Deprecated.
    }, {
      key: "hasTypes",
      value: function hasTypes() {
        return this.numberingPlan.hasTypes();
      }
      // Deprecated.
    }, {
      key: "type",
      value: function type(_type) {
        return this.numberingPlan.type(_type);
      }
      // Deprecated.
    }, {
      key: "ext",
      value: function ext() {
        return this.numberingPlan.ext();
      }
    }, {
      key: "countryCallingCodes",
      value: function countryCallingCodes() {
        if (this.v1) return this.metadata.country_phone_code_to_countries;
        return this.metadata.country_calling_codes;
      }
      // Deprecated.
    }, {
      key: "chooseCountryByCountryCallingCode",
      value: function chooseCountryByCountryCallingCode(callingCode) {
        return this.selectNumberingPlan(callingCode);
      }
    }, {
      key: "hasSelectedNumberingPlan",
      value: function hasSelectedNumberingPlan() {
        return this.numberingPlan !== void 0;
      }
    }]);
    return Metadata2;
  }();
  var NumberingPlan = /* @__PURE__ */ function() {
    function NumberingPlan2(metadata, globalMetadataObject) {
      _classCallCheck2(this, NumberingPlan2);
      this.globalMetadataObject = globalMetadataObject;
      this.metadata = metadata;
      setVersion.call(this, globalMetadataObject.metadata);
    }
    _createClass2(NumberingPlan2, [{
      key: "callingCode",
      value: function callingCode() {
        return this.metadata[0];
      }
      // Formatting information for regions which share
      // a country calling code is contained by only one region
      // for performance reasons. For example, for NANPA region
      // ("North American Numbering Plan Administration",
      //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
      // it will be contained in the metadata for `US`.
    }, {
      key: "getDefaultCountryMetadataForRegion",
      value: function getDefaultCountryMetadataForRegion() {
        return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
      }
      // Is always present.
    }, {
      key: "IDDPrefix",
      value: function IDDPrefix() {
        if (this.v1 || this.v2) return;
        return this.metadata[1];
      }
      // Is only present when a country supports multiple IDD prefixes.
    }, {
      key: "defaultIDDPrefix",
      value: function defaultIDDPrefix() {
        if (this.v1 || this.v2) return;
        return this.metadata[12];
      }
    }, {
      key: "nationalNumberPattern",
      value: function nationalNumberPattern() {
        if (this.v1 || this.v2) return this.metadata[1];
        return this.metadata[2];
      }
      // "possible length" data is always present in Google's metadata.
    }, {
      key: "possibleLengths",
      value: function possibleLengths() {
        if (this.v1) return;
        return this.metadata[this.v2 ? 2 : 3];
      }
    }, {
      key: "_getFormats",
      value: function _getFormats(metadata) {
        return metadata[this.v1 ? 2 : this.v2 ? 3 : 4];
      }
      // For countries of the same region (e.g. NANPA)
      // formats are all stored in the "main" country for that region.
      // E.g. "RU" and "KZ", "US" and "CA".
    }, {
      key: "formats",
      value: function formats() {
        var _this = this;
        var formats2 = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
        return formats2.map(function(_) {
          return new Format(_, _this);
        });
      }
    }, {
      key: "nationalPrefix",
      value: function nationalPrefix() {
        return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
      }
    }, {
      key: "_getNationalPrefixFormattingRule",
      value: function _getNationalPrefixFormattingRule(metadata) {
        return metadata[this.v1 ? 4 : this.v2 ? 5 : 6];
      }
      // For countries of the same region (e.g. NANPA)
      // national prefix formatting rule is stored in the "main" country for that region.
      // E.g. "RU" and "KZ", "US" and "CA".
    }, {
      key: "nationalPrefixFormattingRule",
      value: function nationalPrefixFormattingRule() {
        return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
      }
    }, {
      key: "_nationalPrefixForParsing",
      value: function _nationalPrefixForParsing() {
        return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
      }
    }, {
      key: "nationalPrefixForParsing",
      value: function nationalPrefixForParsing() {
        return this._nationalPrefixForParsing() || this.nationalPrefix();
      }
    }, {
      key: "nationalPrefixTransformRule",
      value: function nationalPrefixTransformRule() {
        return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
      }
    }, {
      key: "_getNationalPrefixIsOptionalWhenFormatting",
      value: function _getNationalPrefixIsOptionalWhenFormatting() {
        return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
      }
      // For countries of the same region (e.g. NANPA)
      // "national prefix is optional when formatting" flag is
      // stored in the "main" country for that region.
      // E.g. "RU" and "KZ", "US" and "CA".
    }, {
      key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
      value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
        return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
      }
    }, {
      key: "leadingDigits",
      value: function leadingDigits() {
        return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
      }
    }, {
      key: "types",
      value: function types() {
        return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
      }
    }, {
      key: "hasTypes",
      value: function hasTypes() {
        if (this.types() && this.types().length === 0) {
          return false;
        }
        return !!this.types();
      }
    }, {
      key: "type",
      value: function type(_type2) {
        if (this.hasTypes() && getType(this.types(), _type2)) {
          return new Type(getType(this.types(), _type2), this);
        }
      }
    }, {
      key: "ext",
      value: function ext() {
        if (this.v1 || this.v2) return DEFAULT_EXT_PREFIX;
        return this.metadata[13] || DEFAULT_EXT_PREFIX;
      }
    }]);
    return NumberingPlan2;
  }();
  var Format = /* @__PURE__ */ function() {
    function Format2(format, metadata) {
      _classCallCheck2(this, Format2);
      this._format = format;
      this.metadata = metadata;
    }
    _createClass2(Format2, [{
      key: "pattern",
      value: function pattern() {
        return this._format[0];
      }
    }, {
      key: "format",
      value: function format() {
        return this._format[1];
      }
    }, {
      key: "leadingDigitsPatterns",
      value: function leadingDigitsPatterns() {
        return this._format[2] || [];
      }
    }, {
      key: "nationalPrefixFormattingRule",
      value: function nationalPrefixFormattingRule() {
        return this._format[3] || this.metadata.nationalPrefixFormattingRule();
      }
    }, {
      key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
      value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
        return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
      }
    }, {
      key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
      value: function nationalPrefixIsMandatoryWhenFormattingInNationalFormat() {
        return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
      }
      // Checks whether national prefix formatting rule contains national prefix.
    }, {
      key: "usesNationalPrefix",
      value: function usesNationalPrefix() {
        return this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
        !FIRST_GROUP_ONLY_PREFIX_PATTERN.test(this.nationalPrefixFormattingRule()) ? true : false;
      }
    }, {
      key: "internationalFormat",
      value: function internationalFormat() {
        return this._format[5] || this.format();
      }
    }]);
    return Format2;
  }();
  var FIRST_GROUP_ONLY_PREFIX_PATTERN = /^\(?\$1\)?$/;
  var Type = /* @__PURE__ */ function() {
    function Type2(type, metadata) {
      _classCallCheck2(this, Type2);
      this.type = type;
      this.metadata = metadata;
    }
    _createClass2(Type2, [{
      key: "pattern",
      value: function pattern() {
        if (this.metadata.v1) return this.type;
        return this.type[0];
      }
    }, {
      key: "possibleLengths",
      value: function possibleLengths() {
        if (this.metadata.v1) return;
        return this.type[1] || this.metadata.possibleLengths();
      }
    }]);
    return Type2;
  }();
  function getType(types, type) {
    switch (type) {
      case "FIXED_LINE":
        return types[0];
      case "MOBILE":
        return types[1];
      case "TOLL_FREE":
        return types[2];
      case "PREMIUM_RATE":
        return types[3];
      case "PERSONAL_NUMBER":
        return types[4];
      case "VOICEMAIL":
        return types[5];
      case "UAN":
        return types[6];
      case "PAGER":
        return types[7];
      case "VOIP":
        return types[8];
      case "SHARED_COST":
        return types[9];
    }
  }
  function validateMetadata(metadata) {
    if (!metadata) {
      throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
    }
    if (!isObject(metadata) || !isObject(metadata.countries)) {
      throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(isObject(metadata) ? "an object of shape: { " + Object.keys(metadata).join(", ") + " }" : "a " + typeOf(metadata) + ": " + metadata, "."));
    }
  }
  var typeOf = function typeOf2(_) {
    return _typeof2(_);
  };
  function getCountryCallingCode(country, metadata) {
    metadata = new Metadata(metadata);
    if (metadata.hasCountry(country)) {
      return metadata.country(country).countryCallingCode();
    }
    throw new Error("Unknown country: ".concat(country));
  }
  function isSupportedCountry(country, metadata) {
    return metadata.countries.hasOwnProperty(country);
  }
  function setVersion(metadata) {
    var version = metadata.version;
    if (typeof version === "number") {
      this.v1 = version === 1;
      this.v2 = version === 2;
      this.v3 = version === 3;
      this.v4 = version === 4;
    } else {
      if (!version) {
        this.v1 = true;
      } else if (semver_compare_default(version, V3) === -1) {
        this.v2 = true;
      } else if (semver_compare_default(version, V4) === -1) {
        this.v3 = true;
      } else {
        this.v4 = true;
      }
    }
  }

  // node_modules/libphonenumber-js/es6/helpers/extension/createExtensionPattern.js
  var RFC3966_EXTN_PREFIX = ";ext=";
  var getExtensionDigitsPattern = function getExtensionDigitsPattern2(maxLength) {
    return "([".concat(VALID_DIGITS, "]{1,").concat(maxLength, "})");
  };
  function createExtensionPattern(purpose) {
    var extLimitAfterExplicitLabel = "20";
    var extLimitAfterLikelyLabel = "15";
    var extLimitAfterAmbiguousChar = "9";
    var extLimitWhenNotSure = "6";
    var possibleSeparatorsBetweenNumberAndExtLabel = "[ \xA0\\t,]*";
    var possibleCharsAfterExtLabel = "[:\\.\uFF0E]?[ \xA0\\t,-]*";
    var optionalExtnSuffix = "#?";
    var explicitExtLabels = "(?:e?xt(?:ensi(?:o\u0301?|\xF3))?n?|\uFF45?\uFF58\uFF54\uFF4E?|\u0434\u043E\u0431|anexo)";
    var ambiguousExtLabels = "(?:[x\uFF58#\uFF03~\uFF5E]|int|\uFF49\uFF4E\uFF54)";
    var ambiguousSeparator = "[- ]+";
    var possibleSeparatorsNumberExtLabelNoComma = "[ \xA0\\t]*";
    var autoDiallingAndExtLabelsFound = "(?:,{2}|;)";
    var rfcExtn = RFC3966_EXTN_PREFIX + getExtensionDigitsPattern(extLimitAfterExplicitLabel);
    var explicitExtn = possibleSeparatorsBetweenNumberAndExtLabel + explicitExtLabels + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterExplicitLabel) + optionalExtnSuffix;
    var ambiguousExtn = possibleSeparatorsBetweenNumberAndExtLabel + ambiguousExtLabels + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix;
    var americanStyleExtnWithSuffix = ambiguousSeparator + getExtensionDigitsPattern(extLimitWhenNotSure) + "#";
    var autoDiallingExtn = possibleSeparatorsNumberExtLabelNoComma + autoDiallingAndExtLabelsFound + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterLikelyLabel) + optionalExtnSuffix;
    var onlyCommasExtn = possibleSeparatorsNumberExtLabelNoComma + "(?:,)+" + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix;
    return rfcExtn + "|" + explicitExtn + "|" + ambiguousExtn + "|" + americanStyleExtnWithSuffix + "|" + autoDiallingExtn + "|" + onlyCommasExtn;
  }

  // node_modules/libphonenumber-js/es6/helpers/isViablePhoneNumber.js
  var MIN_LENGTH_PHONE_NUMBER_PATTERN = "[" + VALID_DIGITS + "]{" + MIN_LENGTH_FOR_NSN + "}";
  var VALID_PHONE_NUMBER = "[" + PLUS_CHARS + "]{0,1}(?:[" + VALID_PUNCTUATION + "]*[" + VALID_DIGITS + "]){3,}[" + VALID_PUNCTUATION + VALID_DIGITS + "]*";
  var VALID_PHONE_NUMBER_START_REG_EXP = new RegExp("^[" + PLUS_CHARS + "]{0,1}(?:[" + VALID_PUNCTUATION + "]*[" + VALID_DIGITS + "]){1,2}$", "i");
  var VALID_PHONE_NUMBER_WITH_EXTENSION = VALID_PHONE_NUMBER + // Phone number extensions
  "(?:" + createExtensionPattern() + ")?";
  var VALID_PHONE_NUMBER_PATTERN = new RegExp(
    // Either a short two-digit-only phone number
    "^" + MIN_LENGTH_PHONE_NUMBER_PATTERN + "$|^" + VALID_PHONE_NUMBER_WITH_EXTENSION + "$",
    "i"
  );
  function isViablePhoneNumber(number) {
    return number.length >= MIN_LENGTH_FOR_NSN && VALID_PHONE_NUMBER_PATTERN.test(number);
  }
  function isViablePhoneNumberStart(number) {
    return VALID_PHONE_NUMBER_START_REG_EXP.test(number);
  }

  // node_modules/libphonenumber-js/es6/helpers/extension/extractExtension.js
  var EXTN_PATTERN = new RegExp("(?:" + createExtensionPattern() + ")$", "i");
  function extractExtension(number) {
    var start = number.search(EXTN_PATTERN);
    if (start < 0) {
      return {};
    }
    var numberWithoutExtension = number.slice(0, start);
    var matches = number.match(EXTN_PATTERN);
    var i = 1;
    while (i < matches.length) {
      if (matches[i]) {
        return {
          number: numberWithoutExtension,
          ext: matches[i]
        };
      }
      i++;
    }
  }

  // node_modules/libphonenumber-js/es6/helpers/parseDigits.js
  var DIGITS = {
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "\uFF10": "0",
    // Fullwidth digit 0
    "\uFF11": "1",
    // Fullwidth digit 1
    "\uFF12": "2",
    // Fullwidth digit 2
    "\uFF13": "3",
    // Fullwidth digit 3
    "\uFF14": "4",
    // Fullwidth digit 4
    "\uFF15": "5",
    // Fullwidth digit 5
    "\uFF16": "6",
    // Fullwidth digit 6
    "\uFF17": "7",
    // Fullwidth digit 7
    "\uFF18": "8",
    // Fullwidth digit 8
    "\uFF19": "9",
    // Fullwidth digit 9
    "\u0660": "0",
    // Arabic-indic digit 0
    "\u0661": "1",
    // Arabic-indic digit 1
    "\u0662": "2",
    // Arabic-indic digit 2
    "\u0663": "3",
    // Arabic-indic digit 3
    "\u0664": "4",
    // Arabic-indic digit 4
    "\u0665": "5",
    // Arabic-indic digit 5
    "\u0666": "6",
    // Arabic-indic digit 6
    "\u0667": "7",
    // Arabic-indic digit 7
    "\u0668": "8",
    // Arabic-indic digit 8
    "\u0669": "9",
    // Arabic-indic digit 9
    "\u06F0": "0",
    // Eastern-Arabic digit 0
    "\u06F1": "1",
    // Eastern-Arabic digit 1
    "\u06F2": "2",
    // Eastern-Arabic digit 2
    "\u06F3": "3",
    // Eastern-Arabic digit 3
    "\u06F4": "4",
    // Eastern-Arabic digit 4
    "\u06F5": "5",
    // Eastern-Arabic digit 5
    "\u06F6": "6",
    // Eastern-Arabic digit 6
    "\u06F7": "7",
    // Eastern-Arabic digit 7
    "\u06F8": "8",
    // Eastern-Arabic digit 8
    "\u06F9": "9"
    // Eastern-Arabic digit 9
  };
  function parseDigit(character) {
    return DIGITS[character];
  }

  // node_modules/libphonenumber-js/es6/parseIncompletePhoneNumber.js
  function _createForOfIteratorHelperLoose(o2, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
    if (it) return (it = it.call(o2)).next.bind(it);
    if (Array.isArray(o2) || (it = _unsupportedIterableToArray(o2)) || allowArrayLike && o2 && typeof o2.length === "number") {
      if (it) o2 = it;
      var i = 0;
      return function() {
        if (i >= o2.length) return { done: true };
        return { done: false, value: o2[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o2, minLen) {
    if (!o2) return;
    if (typeof o2 === "string") return _arrayLikeToArray(o2, minLen);
    var n = Object.prototype.toString.call(o2).slice(8, -1);
    if (n === "Object" && o2.constructor) n = o2.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o2);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o2, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function parseIncompletePhoneNumber(string) {
    var result2 = "";
    for (var _iterator = _createForOfIteratorHelperLoose(string.split("")), _step; !(_step = _iterator()).done; ) {
      var character = _step.value;
      result2 += parsePhoneNumberCharacter(character, result2) || "";
    }
    return result2;
  }
  function parsePhoneNumberCharacter(character, prevParsedCharacters, emitEvent) {
    if (character === "+") {
      if (prevParsedCharacters) {
        if (typeof emitEvent === "function") {
          emitEvent("end");
        }
        return;
      }
      return "+";
    }
    return parseDigit(character);
  }

  // node_modules/libphonenumber-js/es6/helpers/mergeArrays.js
  function _createForOfIteratorHelperLoose2(o2, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
    if (it) return (it = it.call(o2)).next.bind(it);
    if (Array.isArray(o2) || (it = _unsupportedIterableToArray2(o2)) || allowArrayLike && o2 && typeof o2.length === "number") {
      if (it) o2 = it;
      var i = 0;
      return function() {
        if (i >= o2.length) return { done: true };
        return { done: false, value: o2[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray2(o2, minLen) {
    if (!o2) return;
    if (typeof o2 === "string") return _arrayLikeToArray2(o2, minLen);
    var n = Object.prototype.toString.call(o2).slice(8, -1);
    if (n === "Object" && o2.constructor) n = o2.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o2);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray2(o2, minLen);
  }
  function _arrayLikeToArray2(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function mergeArrays(a, b) {
    var merged = a.slice();
    for (var _iterator = _createForOfIteratorHelperLoose2(b), _step; !(_step = _iterator()).done; ) {
      var element = _step.value;
      if (a.indexOf(element) < 0) {
        merged.push(element);
      }
    }
    return merged.sort(function(a2, b2) {
      return a2 - b2;
    });
  }

  // node_modules/libphonenumber-js/es6/helpers/checkNumberLength.js
  function checkNumberLength(nationalNumber, metadata) {
    return checkNumberLengthForType(nationalNumber, void 0, metadata);
  }
  function checkNumberLengthForType(nationalNumber, type, metadata) {
    var type_info = metadata.type(type);
    var possible_lengths = type_info && type_info.possibleLengths() || metadata.possibleLengths();
    if (!possible_lengths) {
      return "IS_POSSIBLE";
    }
    if (type === "FIXED_LINE_OR_MOBILE") {
      if (!metadata.type("FIXED_LINE")) {
        return checkNumberLengthForType(nationalNumber, "MOBILE", metadata);
      }
      var mobile_type = metadata.type("MOBILE");
      if (mobile_type) {
        possible_lengths = mergeArrays(possible_lengths, mobile_type.possibleLengths());
      }
    } else if (type && !type_info) {
      return "INVALID_LENGTH";
    }
    var actual_length = nationalNumber.length;
    var minimum_length = possible_lengths[0];
    if (minimum_length === actual_length) {
      return "IS_POSSIBLE";
    }
    if (minimum_length > actual_length) {
      return "TOO_SHORT";
    }
    if (possible_lengths[possible_lengths.length - 1] < actual_length) {
      return "TOO_LONG";
    }
    return possible_lengths.indexOf(actual_length, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
  }

  // node_modules/libphonenumber-js/es6/isPossible.js
  function isPossiblePhoneNumber(input, options, metadata) {
    if (options === void 0) {
      options = {};
    }
    metadata = new Metadata(metadata);
    if (options.v2) {
      if (!input.countryCallingCode) {
        throw new Error("Invalid phone number object passed");
      }
      metadata.selectNumberingPlan(input.countryCallingCode);
    } else {
      if (!input.phone) {
        return false;
      }
      if (input.country) {
        if (!metadata.hasCountry(input.country)) {
          throw new Error("Unknown country: ".concat(input.country));
        }
        metadata.country(input.country);
      } else {
        if (!input.countryCallingCode) {
          throw new Error("Invalid phone number object passed");
        }
        metadata.selectNumberingPlan(input.countryCallingCode);
      }
    }
    if (metadata.possibleLengths()) {
      return isPossibleNumber(input.phone || input.nationalNumber, metadata);
    } else {
      if (input.countryCallingCode && metadata.isNonGeographicCallingCode(input.countryCallingCode)) {
        return true;
      } else {
        throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
      }
    }
  }
  function isPossibleNumber(nationalNumber, metadata) {
    switch (checkNumberLength(nationalNumber, metadata)) {
      case "IS_POSSIBLE":
        return true;
      // This library ignores "local-only" phone numbers (for simplicity).
      // See the readme for more info on what are "local-only" phone numbers.
      // case 'IS_POSSIBLE_LOCAL_ONLY':
      // 	return !isInternational
      default:
        return false;
    }
  }

  // node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js
  function matchesEntirely(text3, regular_expression) {
    text3 = text3 || "";
    return new RegExp("^(?:" + regular_expression + ")$").test(text3);
  }

  // node_modules/libphonenumber-js/es6/helpers/getNumberType.js
  function _createForOfIteratorHelperLoose3(o2, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
    if (it) return (it = it.call(o2)).next.bind(it);
    if (Array.isArray(o2) || (it = _unsupportedIterableToArray3(o2)) || allowArrayLike && o2 && typeof o2.length === "number") {
      if (it) o2 = it;
      var i = 0;
      return function() {
        if (i >= o2.length) return { done: true };
        return { done: false, value: o2[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray3(o2, minLen) {
    if (!o2) return;
    if (typeof o2 === "string") return _arrayLikeToArray3(o2, minLen);
    var n = Object.prototype.toString.call(o2).slice(8, -1);
    if (n === "Object" && o2.constructor) n = o2.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o2);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray3(o2, minLen);
  }
  function _arrayLikeToArray3(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  var NON_FIXED_LINE_PHONE_TYPES = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
  function getNumberType(input, options, metadata) {
    options = options || {};
    if (!input.country && !input.countryCallingCode) {
      return;
    }
    metadata = new Metadata(metadata);
    metadata.selectNumberingPlan(input.country, input.countryCallingCode);
    var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
    if (!matchesEntirely(nationalNumber, metadata.nationalNumberPattern())) {
      return;
    }
    if (isNumberTypeEqualTo(nationalNumber, "FIXED_LINE", metadata)) {
      if (metadata.type("MOBILE") && metadata.type("MOBILE").pattern() === "") {
        return "FIXED_LINE_OR_MOBILE";
      }
      if (!metadata.type("MOBILE")) {
        return "FIXED_LINE_OR_MOBILE";
      }
      if (isNumberTypeEqualTo(nationalNumber, "MOBILE", metadata)) {
        return "FIXED_LINE_OR_MOBILE";
      }
      return "FIXED_LINE";
    }
    for (var _iterator = _createForOfIteratorHelperLoose3(NON_FIXED_LINE_PHONE_TYPES), _step; !(_step = _iterator()).done; ) {
      var type = _step.value;
      if (isNumberTypeEqualTo(nationalNumber, type, metadata)) {
        return type;
      }
    }
  }
  function isNumberTypeEqualTo(nationalNumber, type, metadata) {
    type = metadata.type(type);
    if (!type || !type.pattern()) {
      return false;
    }
    if (type.possibleLengths() && type.possibleLengths().indexOf(nationalNumber.length) < 0) {
      return false;
    }
    return matchesEntirely(nationalNumber, type.pattern());
  }

  // node_modules/libphonenumber-js/es6/isValid.js
  function isValidNumber(input, options, metadata) {
    options = options || {};
    metadata = new Metadata(metadata);
    metadata.selectNumberingPlan(input.country, input.countryCallingCode);
    if (metadata.hasTypes()) {
      return getNumberType(input, options, metadata.metadata) !== void 0;
    }
    var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
    return matchesEntirely(nationalNumber, metadata.nationalNumberPattern());
  }

  // node_modules/libphonenumber-js/es6/helpers/getPossibleCountriesForNumber.js
  function getPossibleCountriesForNumber(callingCode, nationalNumber, metadata) {
    var _metadata = new Metadata(metadata);
    var possibleCountries = _metadata.getCountryCodesForCallingCode(callingCode);
    if (!possibleCountries) {
      return [];
    }
    return possibleCountries.filter(function(country) {
      return couldNationalNumberBelongToCountry(nationalNumber, country, metadata);
    });
  }
  function couldNationalNumberBelongToCountry(nationalNumber, country, metadata) {
    var _metadata = new Metadata(metadata);
    _metadata.selectNumberingPlan(country);
    if (_metadata.numberingPlan.possibleLengths().indexOf(nationalNumber.length) >= 0) {
      return true;
    }
    return false;
  }

  // node_modules/libphonenumber-js/es6/helpers/applyInternationalSeparatorStyle.js
  function applyInternationalSeparatorStyle(formattedNumber) {
    return formattedNumber.replace(new RegExp("[".concat(VALID_PUNCTUATION, "]+"), "g"), " ").trim();
  }

  // node_modules/libphonenumber-js/es6/helpers/formatNationalNumberUsingFormat.js
  var FIRST_GROUP_PATTERN = /(\$\d)/;
  function formatNationalNumberUsingFormat(number, format, _ref) {
    var useInternationalFormat = _ref.useInternationalFormat, withNationalPrefix = _ref.withNationalPrefix, carrierCode = _ref.carrierCode, metadata = _ref.metadata;
    var formattedNumber = number.replace(new RegExp(format.pattern()), useInternationalFormat ? format.internationalFormat() : (
      // This library doesn't use `domestic_carrier_code_formatting_rule`,
      // because that one is only used when formatting phone numbers
      // for dialing from a mobile phone, and this is not a dialing library.
      // carrierCode && format.domesticCarrierCodeFormattingRule()
      // 	// First, replace the $CC in the formatting rule with the desired carrier code.
      // 	// Then, replace the $FG in the formatting rule with the first group
      // 	// and the carrier code combined in the appropriate way.
      // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
      // 	: (
      // 		withNationalPrefix && format.nationalPrefixFormattingRule()
      // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
      // 			: format.format()
      // 	)
      withNationalPrefix && format.nationalPrefixFormattingRule() ? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule()) : format.format()
    ));
    if (useInternationalFormat) {
      return applyInternationalSeparatorStyle(formattedNumber);
    }
    return formattedNumber;
  }

  // node_modules/libphonenumber-js/es6/helpers/getIddPrefix.js
  var SINGLE_IDD_PREFIX_REG_EXP = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
  function getIddPrefix(country, callingCode, metadata) {
    var countryMetadata = new Metadata(metadata);
    countryMetadata.selectNumberingPlan(country, callingCode);
    if (countryMetadata.defaultIDDPrefix()) {
      return countryMetadata.defaultIDDPrefix();
    }
    if (SINGLE_IDD_PREFIX_REG_EXP.test(countryMetadata.IDDPrefix())) {
      return countryMetadata.IDDPrefix();
    }
  }

  // node_modules/libphonenumber-js/es6/helpers/RFC3966.js
  function formatRFC3966(_ref) {
    var number = _ref.number, ext = _ref.ext;
    if (!number) {
      return "";
    }
    if (number[0] !== "+") {
      throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
    }
    return "tel:".concat(number).concat(ext ? ";ext=" + ext : "");
  }

  // node_modules/libphonenumber-js/es6/format.js
  function _createForOfIteratorHelperLoose4(o2, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
    if (it) return (it = it.call(o2)).next.bind(it);
    if (Array.isArray(o2) || (it = _unsupportedIterableToArray4(o2)) || allowArrayLike && o2 && typeof o2.length === "number") {
      if (it) o2 = it;
      var i = 0;
      return function() {
        if (i >= o2.length) return { done: true };
        return { done: false, value: o2[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray4(o2, minLen) {
    if (!o2) return;
    if (typeof o2 === "string") return _arrayLikeToArray4(o2, minLen);
    var n = Object.prototype.toString.call(o2).slice(8, -1);
    if (n === "Object" && o2.constructor) n = o2.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o2);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray4(o2, minLen);
  }
  function _arrayLikeToArray4(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function ownKeys2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var DEFAULT_OPTIONS = {
    formatExtension: function formatExtension(formattedNumber, extension, metadata) {
      return "".concat(formattedNumber).concat(metadata.ext()).concat(extension);
    }
  };
  function formatNumber(input, format, options, metadata) {
    if (options) {
      options = _objectSpread(_objectSpread({}, DEFAULT_OPTIONS), options);
    } else {
      options = DEFAULT_OPTIONS;
    }
    metadata = new Metadata(metadata);
    if (input.country && input.country !== "001") {
      if (!metadata.hasCountry(input.country)) {
        throw new Error("Unknown country: ".concat(input.country));
      }
      metadata.country(input.country);
    } else if (input.countryCallingCode) {
      metadata.selectNumberingPlan(input.countryCallingCode);
    } else return input.phone || "";
    var countryCallingCode = metadata.countryCallingCode();
    var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
    var number;
    switch (format) {
      case "NATIONAL":
        if (!nationalNumber) {
          return "";
        }
        number = formatNationalNumber(nationalNumber, input.carrierCode, "NATIONAL", metadata, options);
        return addExtension(number, input.ext, metadata, options.formatExtension);
      case "INTERNATIONAL":
        if (!nationalNumber) {
          return "+".concat(countryCallingCode);
        }
        number = formatNationalNumber(nationalNumber, null, "INTERNATIONAL", metadata, options);
        number = "+".concat(countryCallingCode, " ").concat(number);
        return addExtension(number, input.ext, metadata, options.formatExtension);
      case "E.164":
        return "+".concat(countryCallingCode).concat(nationalNumber);
      case "RFC3966":
        return formatRFC3966({
          number: "+".concat(countryCallingCode).concat(nationalNumber),
          ext: input.ext
        });
      // For reference, here's Google's IDD formatter:
      // https://github.com/google/libphonenumber/blob/32719cf74e68796788d1ca45abc85dcdc63ba5b9/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L1546
      // Not saying that this IDD formatter replicates it 1:1, but it seems to work.
      // Who would even need to format phone numbers in IDD format anyway?
      case "IDD":
        if (!options.fromCountry) {
          return;
        }
        var formattedNumber = formatIDD(nationalNumber, input.carrierCode, countryCallingCode, options.fromCountry, metadata);
        return addExtension(formattedNumber, input.ext, metadata, options.formatExtension);
      default:
        throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(format, '"'));
    }
  }
  function formatNationalNumber(number, carrierCode, formatAs, metadata, options) {
    var format = chooseFormatForNumber(metadata.formats(), number);
    if (!format) {
      return number;
    }
    return formatNationalNumberUsingFormat(number, format, {
      useInternationalFormat: formatAs === "INTERNATIONAL",
      withNationalPrefix: format.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && options && options.nationalPrefix === false ? false : true,
      carrierCode,
      metadata
    });
  }
  function chooseFormatForNumber(availableFormats, nationalNnumber) {
    for (var _iterator = _createForOfIteratorHelperLoose4(availableFormats), _step; !(_step = _iterator()).done; ) {
      var format = _step.value;
      if (format.leadingDigitsPatterns().length > 0) {
        var lastLeadingDigitsPattern = format.leadingDigitsPatterns()[format.leadingDigitsPatterns().length - 1];
        if (nationalNnumber.search(lastLeadingDigitsPattern) !== 0) {
          continue;
        }
      }
      if (matchesEntirely(nationalNnumber, format.pattern())) {
        return format;
      }
    }
  }
  function addExtension(formattedNumber, ext, metadata, formatExtension2) {
    return ext ? formatExtension2(formattedNumber, ext, metadata) : formattedNumber;
  }
  function formatIDD(nationalNumber, carrierCode, countryCallingCode, fromCountry, metadata) {
    var fromCountryCallingCode = getCountryCallingCode(fromCountry, metadata.metadata);
    if (fromCountryCallingCode === countryCallingCode) {
      var formattedNumber = formatNationalNumber(nationalNumber, carrierCode, "NATIONAL", metadata);
      if (countryCallingCode === "1") {
        return countryCallingCode + " " + formattedNumber;
      }
      return formattedNumber;
    }
    var iddPrefix = getIddPrefix(fromCountry, void 0, metadata.metadata);
    if (iddPrefix) {
      return "".concat(iddPrefix, " ").concat(countryCallingCode, " ").concat(formatNationalNumber(nationalNumber, null, "INTERNATIONAL", metadata));
    }
  }

  // node_modules/libphonenumber-js/es6/PhoneNumber.js
  function ownKeys3(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread3(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys3(Object(source), true).forEach(function(key) {
        _defineProperty3(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys3(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty3(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _classCallCheck3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties3(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass3(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties3(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties3(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var USE_NON_GEOGRAPHIC_COUNTRY_CODE = false;
  var PhoneNumber = /* @__PURE__ */ function() {
    function PhoneNumber2(countryOrCountryCallingCode, nationalNumber, metadata) {
      _classCallCheck3(this, PhoneNumber2);
      if (!countryOrCountryCallingCode) {
        throw new TypeError("`country` or `countryCallingCode` not passed");
      }
      if (!nationalNumber) {
        throw new TypeError("`nationalNumber` not passed");
      }
      if (!metadata) {
        throw new TypeError("`metadata` not passed");
      }
      var _getCountryAndCountry = getCountryAndCountryCallingCode(countryOrCountryCallingCode, metadata), country = _getCountryAndCountry.country, countryCallingCode = _getCountryAndCountry.countryCallingCode;
      this.country = country;
      this.countryCallingCode = countryCallingCode;
      this.nationalNumber = nationalNumber;
      this.number = "+" + this.countryCallingCode + this.nationalNumber;
      this.getMetadata = function() {
        return metadata;
      };
    }
    _createClass3(PhoneNumber2, [{
      key: "setExt",
      value: function setExt(ext) {
        this.ext = ext;
      }
    }, {
      key: "getPossibleCountries",
      value: function getPossibleCountries() {
        if (this.country) {
          return [this.country];
        }
        return getPossibleCountriesForNumber(this.countryCallingCode, this.nationalNumber, this.getMetadata());
      }
    }, {
      key: "isPossible",
      value: function isPossible() {
        return isPossiblePhoneNumber(this, {
          v2: true
        }, this.getMetadata());
      }
    }, {
      key: "isValid",
      value: function isValid() {
        return isValidNumber(this, {
          v2: true
        }, this.getMetadata());
      }
    }, {
      key: "isNonGeographic",
      value: function isNonGeographic() {
        var metadata = new Metadata(this.getMetadata());
        return metadata.isNonGeographicCallingCode(this.countryCallingCode);
      }
    }, {
      key: "isEqual",
      value: function isEqual(phoneNumber) {
        return this.number === phoneNumber.number && this.ext === phoneNumber.ext;
      }
      // This function was originally meant to be an equivalent for `validatePhoneNumberLength()`,
      // but later it was found out that it doesn't include the possible `TOO_SHORT` result
      // returned from `parsePhoneNumberWithError()` in the original `validatePhoneNumberLength()`,
      // so eventually I simply commented out this method from the `PhoneNumber` class
      // and just left the `validatePhoneNumberLength()` function, even though that one would require
      // and additional step to also validate the actual country / calling code of the phone number.
      // validateLength() {
      // 	const metadata = new Metadata(this.getMetadata())
      // 	metadata.selectNumberingPlan(this.countryCallingCode)
      // 	const result = checkNumberLength(this.nationalNumber, metadata)
      // 	if (result !== 'IS_POSSIBLE') {
      // 		return result
      // 	}
      // }
    }, {
      key: "getType",
      value: function getType2() {
        return getNumberType(this, {
          v2: true
        }, this.getMetadata());
      }
    }, {
      key: "format",
      value: function format(_format, options) {
        return formatNumber(this, _format, options ? _objectSpread3(_objectSpread3({}, options), {}, {
          v2: true
        }) : {
          v2: true
        }, this.getMetadata());
      }
    }, {
      key: "formatNational",
      value: function formatNational(options) {
        return this.format("NATIONAL", options);
      }
    }, {
      key: "formatInternational",
      value: function formatInternational(options) {
        return this.format("INTERNATIONAL", options);
      }
    }, {
      key: "getURI",
      value: function getURI(options) {
        return this.format("RFC3966", options);
      }
    }]);
    return PhoneNumber2;
  }();
  var isCountryCode = function isCountryCode2(value) {
    return /^[A-Z]{2}$/.test(value);
  };
  function getCountryAndCountryCallingCode(countryOrCountryCallingCode, metadataJson) {
    var country;
    var countryCallingCode;
    var metadata = new Metadata(metadataJson);
    if (isCountryCode(countryOrCountryCallingCode)) {
      country = countryOrCountryCallingCode;
      metadata.selectNumberingPlan(country);
      countryCallingCode = metadata.countryCallingCode();
    } else {
      countryCallingCode = countryOrCountryCallingCode;
      if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
        if (metadata.isNonGeographicCallingCode(countryCallingCode)) {
          country = "001";
        }
      }
    }
    return {
      country,
      countryCallingCode
    };
  }

  // node_modules/libphonenumber-js/es6/helpers/stripIddPrefix.js
  var CAPTURING_DIGIT_PATTERN = new RegExp("([" + VALID_DIGITS + "])");
  function stripIddPrefix(number, country, callingCode, metadata) {
    if (!country) {
      return;
    }
    var countryMetadata = new Metadata(metadata);
    countryMetadata.selectNumberingPlan(country, callingCode);
    var IDDPrefixPattern = new RegExp(countryMetadata.IDDPrefix());
    if (number.search(IDDPrefixPattern) !== 0) {
      return;
    }
    number = number.slice(number.match(IDDPrefixPattern)[0].length);
    var matchedGroups = number.match(CAPTURING_DIGIT_PATTERN);
    if (matchedGroups && matchedGroups[1] != null && matchedGroups[1].length > 0) {
      if (matchedGroups[1] === "0") {
        return;
      }
    }
    return number;
  }

  // node_modules/libphonenumber-js/es6/helpers/extractNationalNumberFromPossiblyIncompleteNumber.js
  function extractNationalNumberFromPossiblyIncompleteNumber(number, metadata) {
    if (number && metadata.numberingPlan.nationalPrefixForParsing()) {
      var prefixPattern = new RegExp("^(?:" + metadata.numberingPlan.nationalPrefixForParsing() + ")");
      var prefixMatch = prefixPattern.exec(number);
      if (prefixMatch) {
        var nationalNumber;
        var carrierCode;
        var capturedGroupsCount = prefixMatch.length - 1;
        var hasCapturedGroups = capturedGroupsCount > 0 && prefixMatch[capturedGroupsCount];
        if (metadata.nationalPrefixTransformRule() && hasCapturedGroups) {
          nationalNumber = number.replace(prefixPattern, metadata.nationalPrefixTransformRule());
          if (capturedGroupsCount > 1) {
            carrierCode = prefixMatch[1];
          }
        } else {
          var prefixBeforeNationalNumber = prefixMatch[0];
          nationalNumber = number.slice(prefixBeforeNationalNumber.length);
          if (hasCapturedGroups) {
            carrierCode = prefixMatch[1];
          }
        }
        var nationalPrefix;
        if (hasCapturedGroups) {
          var possiblePositionOfTheFirstCapturedGroup = number.indexOf(prefixMatch[1]);
          var possibleNationalPrefix = number.slice(0, possiblePositionOfTheFirstCapturedGroup);
          if (possibleNationalPrefix === metadata.numberingPlan.nationalPrefix()) {
            nationalPrefix = metadata.numberingPlan.nationalPrefix();
          }
        } else {
          nationalPrefix = prefixMatch[0];
        }
        return {
          nationalNumber,
          nationalPrefix,
          carrierCode
        };
      }
    }
    return {
      nationalNumber: number
    };
  }

  // node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.js
  function extractNationalNumber(number, metadata) {
    var _extractNationalNumbe = extractNationalNumberFromPossiblyIncompleteNumber(number, metadata), carrierCode = _extractNationalNumbe.carrierCode, nationalNumber = _extractNationalNumbe.nationalNumber;
    if (nationalNumber !== number) {
      if (!shouldHaveExtractedNationalPrefix(number, nationalNumber, metadata)) {
        return {
          nationalNumber: number
        };
      }
      if (metadata.possibleLengths()) {
        if (!isPossibleIncompleteNationalNumber(nationalNumber, metadata)) {
          return {
            nationalNumber: number
          };
        }
      }
    }
    return {
      nationalNumber,
      carrierCode
    };
  }
  function shouldHaveExtractedNationalPrefix(nationalNumberBefore, nationalNumberAfter, metadata) {
    if (matchesEntirely(nationalNumberBefore, metadata.nationalNumberPattern()) && !matchesEntirely(nationalNumberAfter, metadata.nationalNumberPattern())) {
      return false;
    }
    return true;
  }
  function isPossibleIncompleteNationalNumber(nationalNumber, metadata) {
    switch (checkNumberLength(nationalNumber, metadata)) {
      case "TOO_SHORT":
      case "INVALID_LENGTH":
        return false;
      default:
        return true;
    }
  }

  // node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js
  function extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country, callingCode, metadata) {
    var countryCallingCode = country ? getCountryCallingCode(country, metadata) : callingCode;
    if (number.indexOf(countryCallingCode) === 0) {
      metadata = new Metadata(metadata);
      metadata.selectNumberingPlan(country, callingCode);
      var possibleShorterNumber = number.slice(countryCallingCode.length);
      var _extractNationalNumbe = extractNationalNumber(possibleShorterNumber, metadata), possibleShorterNationalNumber = _extractNationalNumbe.nationalNumber;
      var _extractNationalNumbe2 = extractNationalNumber(number, metadata), nationalNumber = _extractNationalNumbe2.nationalNumber;
      if (!matchesEntirely(nationalNumber, metadata.nationalNumberPattern()) && matchesEntirely(possibleShorterNationalNumber, metadata.nationalNumberPattern()) || checkNumberLength(nationalNumber, metadata) === "TOO_LONG") {
        return {
          countryCallingCode,
          number: possibleShorterNumber
        };
      }
    }
    return {
      number
    };
  }

  // node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCode.js
  function extractCountryCallingCode(number, country, callingCode, metadata) {
    if (!number) {
      return {};
    }
    var isNumberWithIddPrefix;
    if (number[0] !== "+") {
      var numberWithoutIDD = stripIddPrefix(number, country, callingCode, metadata);
      if (numberWithoutIDD && numberWithoutIDD !== number) {
        isNumberWithIddPrefix = true;
        number = "+" + numberWithoutIDD;
      } else {
        if (country || callingCode) {
          var _extractCountryCallin = extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country, callingCode, metadata), countryCallingCode = _extractCountryCallin.countryCallingCode, shorterNumber = _extractCountryCallin.number;
          if (countryCallingCode) {
            return {
              countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
              countryCallingCode,
              number: shorterNumber
            };
          }
        }
        return {
          // No need to set it to `UNSPECIFIED`. It can be just `undefined`.
          // countryCallingCodeSource: 'UNSPECIFIED',
          number
        };
      }
    }
    if (number[1] === "0") {
      return {};
    }
    metadata = new Metadata(metadata);
    var i = 2;
    while (i - 1 <= MAX_LENGTH_COUNTRY_CODE && i <= number.length) {
      var _countryCallingCode = number.slice(1, i);
      if (metadata.hasCallingCode(_countryCallingCode)) {
        metadata.selectNumberingPlan(_countryCallingCode);
        return {
          countryCallingCodeSource: isNumberWithIddPrefix ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
          countryCallingCode: _countryCallingCode,
          number: number.slice(i)
        };
      }
      i++;
    }
    return {};
  }

  // node_modules/libphonenumber-js/es6/helpers/getCountryByNationalNumber.js
  function _createForOfIteratorHelperLoose5(o2, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
    if (it) return (it = it.call(o2)).next.bind(it);
    if (Array.isArray(o2) || (it = _unsupportedIterableToArray5(o2)) || allowArrayLike && o2 && typeof o2.length === "number") {
      if (it) o2 = it;
      var i = 0;
      return function() {
        if (i >= o2.length) return { done: true };
        return { done: false, value: o2[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray5(o2, minLen) {
    if (!o2) return;
    if (typeof o2 === "string") return _arrayLikeToArray5(o2, minLen);
    var n = Object.prototype.toString.call(o2).slice(8, -1);
    if (n === "Object" && o2.constructor) n = o2.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o2);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray5(o2, minLen);
  }
  function _arrayLikeToArray5(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function getCountryByNationalNumber(nationalPhoneNumber, _ref) {
    var countries = _ref.countries, defaultCountry = _ref.defaultCountry, metadata = _ref.metadata;
    metadata = new Metadata(metadata);
    var matchingCountries = [];
    for (var _iterator = _createForOfIteratorHelperLoose5(countries), _step; !(_step = _iterator()).done; ) {
      var country = _step.value;
      metadata.country(country);
      if (metadata.leadingDigits()) {
        if (nationalPhoneNumber && nationalPhoneNumber.search(metadata.leadingDigits()) === 0) {
          return country;
        }
      } else if (getNumberType({
        phone: nationalPhoneNumber,
        country
      }, void 0, metadata.metadata)) {
        if (defaultCountry) {
          if (country === defaultCountry) {
            return country;
          }
          matchingCountries.push(country);
        } else {
          return country;
        }
      }
    }
    if (matchingCountries.length > 0) {
      return matchingCountries[0];
    }
  }

  // node_modules/libphonenumber-js/es6/helpers/getCountryByCallingCode.js
  var USE_NON_GEOGRAPHIC_COUNTRY_CODE2 = false;
  function getCountryByCallingCode(callingCode, _ref) {
    var nationalPhoneNumber = _ref.nationalNumber, defaultCountry = _ref.defaultCountry, metadata = _ref.metadata;
    if (USE_NON_GEOGRAPHIC_COUNTRY_CODE2) {
      if (metadata.isNonGeographicCallingCode(callingCode)) {
        return "001";
      }
    }
    var possibleCountries = metadata.getCountryCodesForCallingCode(callingCode);
    if (!possibleCountries) {
      return;
    }
    if (possibleCountries.length === 1) {
      return possibleCountries[0];
    }
    return getCountryByNationalNumber(nationalPhoneNumber, {
      countries: possibleCountries,
      defaultCountry,
      metadata: metadata.metadata
    });
  }

  // node_modules/libphonenumber-js/es6/helpers/extractPhoneContext.js
  var PLUS_SIGN = "+";
  var RFC3966_VISUAL_SEPARATOR_ = "[\\-\\.\\(\\)]?";
  var RFC3966_PHONE_DIGIT_ = "([" + VALID_DIGITS + "]|" + RFC3966_VISUAL_SEPARATOR_ + ")";
  var RFC3966_GLOBAL_NUMBER_DIGITS_ = "^\\" + PLUS_SIGN + RFC3966_PHONE_DIGIT_ + "*[" + VALID_DIGITS + "]" + RFC3966_PHONE_DIGIT_ + "*$";
  var RFC3966_GLOBAL_NUMBER_DIGITS_PATTERN_ = new RegExp(RFC3966_GLOBAL_NUMBER_DIGITS_, "g");
  var ALPHANUM_ = VALID_DIGITS;
  var RFC3966_DOMAINLABEL_ = "[" + ALPHANUM_ + "]+((\\-)*[" + ALPHANUM_ + "])*";
  var VALID_ALPHA_ = "a-zA-Z";
  var RFC3966_TOPLABEL_ = "[" + VALID_ALPHA_ + "]+((\\-)*[" + ALPHANUM_ + "])*";
  var RFC3966_DOMAINNAME_ = "^(" + RFC3966_DOMAINLABEL_ + "\\.)*" + RFC3966_TOPLABEL_ + "\\.?$";
  var RFC3966_DOMAINNAME_PATTERN_ = new RegExp(RFC3966_DOMAINNAME_, "g");
  var RFC3966_PREFIX_ = "tel:";
  var RFC3966_PHONE_CONTEXT_ = ";phone-context=";
  var RFC3966_ISDN_SUBADDRESS_ = ";isub=";
  function extractPhoneContext(numberToExtractFrom) {
    var indexOfPhoneContext = numberToExtractFrom.indexOf(RFC3966_PHONE_CONTEXT_);
    if (indexOfPhoneContext < 0) {
      return null;
    }
    var phoneContextStart = indexOfPhoneContext + RFC3966_PHONE_CONTEXT_.length;
    if (phoneContextStart >= numberToExtractFrom.length) {
      return "";
    }
    var phoneContextEnd = numberToExtractFrom.indexOf(";", phoneContextStart);
    if (phoneContextEnd >= 0) {
      return numberToExtractFrom.substring(phoneContextStart, phoneContextEnd);
    } else {
      return numberToExtractFrom.substring(phoneContextStart);
    }
  }
  function isPhoneContextValid(phoneContext) {
    if (phoneContext === null) {
      return true;
    }
    if (phoneContext.length === 0) {
      return false;
    }
    return RFC3966_GLOBAL_NUMBER_DIGITS_PATTERN_.test(phoneContext) || RFC3966_DOMAINNAME_PATTERN_.test(phoneContext);
  }

  // node_modules/libphonenumber-js/es6/helpers/extractFormattedPhoneNumberFromPossibleRfc3966NumberUri.js
  function extractFormattedPhoneNumberFromPossibleRfc3966NumberUri(numberToParse, _ref) {
    var extractFormattedPhoneNumber = _ref.extractFormattedPhoneNumber;
    var phoneContext = extractPhoneContext(numberToParse);
    if (!isPhoneContextValid(phoneContext)) {
      throw new ParseError("NOT_A_NUMBER");
    }
    var phoneNumberString;
    if (phoneContext === null) {
      phoneNumberString = extractFormattedPhoneNumber(numberToParse) || "";
    } else {
      phoneNumberString = "";
      if (phoneContext.charAt(0) === PLUS_SIGN) {
        phoneNumberString += phoneContext;
      }
      var indexOfRfc3966Prefix = numberToParse.indexOf(RFC3966_PREFIX_);
      var indexOfNationalNumber;
      if (indexOfRfc3966Prefix >= 0) {
        indexOfNationalNumber = indexOfRfc3966Prefix + RFC3966_PREFIX_.length;
      } else {
        indexOfNationalNumber = 0;
      }
      var indexOfPhoneContext = numberToParse.indexOf(RFC3966_PHONE_CONTEXT_);
      phoneNumberString += numberToParse.substring(indexOfNationalNumber, indexOfPhoneContext);
    }
    var indexOfIsdn = phoneNumberString.indexOf(RFC3966_ISDN_SUBADDRESS_);
    if (indexOfIsdn > 0) {
      phoneNumberString = phoneNumberString.substring(0, indexOfIsdn);
    }
    if (phoneNumberString !== "") {
      return phoneNumberString;
    }
  }

  // node_modules/libphonenumber-js/es6/parse.js
  var MAX_INPUT_STRING_LENGTH = 250;
  var PHONE_NUMBER_START_PATTERN = new RegExp("[" + PLUS_CHARS + VALID_DIGITS + "]");
  var AFTER_PHONE_NUMBER_END_PATTERN = new RegExp("[^" + VALID_DIGITS + "#]+$");
  var USE_NON_GEOGRAPHIC_COUNTRY_CODE3 = false;
  function parse2(text3, options, metadata) {
    options = options || {};
    metadata = new Metadata(metadata);
    if (options.defaultCountry && !metadata.hasCountry(options.defaultCountry)) {
      if (options.v2) {
        throw new ParseError("INVALID_COUNTRY");
      }
      throw new Error("Unknown country: ".concat(options.defaultCountry));
    }
    var _parseInput = parseInput(text3, options.v2, options.extract), formattedPhoneNumber = _parseInput.number, ext = _parseInput.ext, error = _parseInput.error;
    if (!formattedPhoneNumber) {
      if (options.v2) {
        if (error === "TOO_SHORT") {
          throw new ParseError("TOO_SHORT");
        }
        throw new ParseError("NOT_A_NUMBER");
      }
      return {};
    }
    var _parsePhoneNumber = parsePhoneNumber(formattedPhoneNumber, options.defaultCountry, options.defaultCallingCode, metadata), country = _parsePhoneNumber.country, nationalNumber = _parsePhoneNumber.nationalNumber, countryCallingCode = _parsePhoneNumber.countryCallingCode, countryCallingCodeSource = _parsePhoneNumber.countryCallingCodeSource, carrierCode = _parsePhoneNumber.carrierCode;
    if (!metadata.hasSelectedNumberingPlan()) {
      if (options.v2) {
        throw new ParseError("INVALID_COUNTRY");
      }
      return {};
    }
    if (!nationalNumber || nationalNumber.length < MIN_LENGTH_FOR_NSN) {
      if (options.v2) {
        throw new ParseError("TOO_SHORT");
      }
      return {};
    }
    if (nationalNumber.length > MAX_LENGTH_FOR_NSN) {
      if (options.v2) {
        throw new ParseError("TOO_LONG");
      }
      return {};
    }
    if (options.v2) {
      var phoneNumber = new PhoneNumber(countryCallingCode, nationalNumber, metadata.metadata);
      if (country) {
        phoneNumber.country = country;
      }
      if (carrierCode) {
        phoneNumber.carrierCode = carrierCode;
      }
      if (ext) {
        phoneNumber.ext = ext;
      }
      phoneNumber.__countryCallingCodeSource = countryCallingCodeSource;
      return phoneNumber;
    }
    var valid = (options.extended ? metadata.hasSelectedNumberingPlan() : country) ? matchesEntirely(nationalNumber, metadata.nationalNumberPattern()) : false;
    if (!options.extended) {
      return valid ? result(country, nationalNumber, ext) : {};
    }
    return {
      country,
      countryCallingCode,
      carrierCode,
      valid,
      possible: valid ? true : options.extended === true && metadata.possibleLengths() && isPossibleNumber(nationalNumber, metadata) ? true : false,
      phone: nationalNumber,
      ext
    };
  }
  function _extractFormattedPhoneNumber(text3, extract, throwOnError) {
    if (!text3) {
      return;
    }
    if (text3.length > MAX_INPUT_STRING_LENGTH) {
      if (throwOnError) {
        throw new ParseError("TOO_LONG");
      }
      return;
    }
    if (extract === false) {
      return text3;
    }
    var startsAt = text3.search(PHONE_NUMBER_START_PATTERN);
    if (startsAt < 0) {
      return;
    }
    return text3.slice(startsAt).replace(AFTER_PHONE_NUMBER_END_PATTERN, "");
  }
  function parseInput(text3, v2, extract) {
    var number = extractFormattedPhoneNumberFromPossibleRfc3966NumberUri(text3, {
      extractFormattedPhoneNumber: function extractFormattedPhoneNumber(text4) {
        return _extractFormattedPhoneNumber(text4, extract, v2);
      }
    });
    if (!number) {
      return {};
    }
    if (!isViablePhoneNumber(number)) {
      if (isViablePhoneNumberStart(number)) {
        return {
          error: "TOO_SHORT"
        };
      }
      return {};
    }
    var withExtensionStripped = extractExtension(number);
    if (withExtensionStripped.ext) {
      return withExtensionStripped;
    }
    return {
      number
    };
  }
  function result(country, nationalNumber, ext) {
    var result2 = {
      country,
      phone: nationalNumber
    };
    if (ext) {
      result2.ext = ext;
    }
    return result2;
  }
  function parsePhoneNumber(formattedPhoneNumber, defaultCountry, defaultCallingCode, metadata) {
    var _extractCountryCallin = extractCountryCallingCode(parseIncompletePhoneNumber(formattedPhoneNumber), defaultCountry, defaultCallingCode, metadata.metadata), countryCallingCodeSource = _extractCountryCallin.countryCallingCodeSource, countryCallingCode = _extractCountryCallin.countryCallingCode, number = _extractCountryCallin.number;
    var country;
    if (countryCallingCode) {
      metadata.selectNumberingPlan(countryCallingCode);
    } else if (number && (defaultCountry || defaultCallingCode)) {
      metadata.selectNumberingPlan(defaultCountry, defaultCallingCode);
      if (defaultCountry) {
        country = defaultCountry;
      } else {
        if (USE_NON_GEOGRAPHIC_COUNTRY_CODE3) {
          if (metadata.isNonGeographicCallingCode(defaultCallingCode)) {
            country = "001";
          }
        }
      }
      countryCallingCode = defaultCallingCode || getCountryCallingCode(defaultCountry, metadata.metadata);
    } else return {};
    if (!number) {
      return {
        countryCallingCodeSource,
        countryCallingCode
      };
    }
    var _extractNationalNumbe = extractNationalNumber(parseIncompletePhoneNumber(number), metadata), nationalNumber = _extractNationalNumbe.nationalNumber, carrierCode = _extractNationalNumbe.carrierCode;
    var exactCountry = getCountryByCallingCode(countryCallingCode, {
      nationalNumber,
      defaultCountry,
      metadata
    });
    if (exactCountry) {
      country = exactCountry;
      if (exactCountry === "001") {
      } else {
        metadata.country(country);
      }
    }
    return {
      country,
      countryCallingCode,
      countryCallingCodeSource,
      nationalNumber,
      carrierCode
    };
  }

  // node_modules/libphonenumber-js/es6/parsePhoneNumberWithError_.js
  function ownKeys4(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread4(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys4(Object(source), true).forEach(function(key) {
        _defineProperty4(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys4(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty4(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function parsePhoneNumberWithError(text3, options, metadata) {
    return parse2(text3, _objectSpread4(_objectSpread4({}, options), {}, {
      v2: true
    }), metadata);
  }

  // node_modules/libphonenumber-js/es6/normalizeArguments.js
  function ownKeys5(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread5(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys5(Object(source), true).forEach(function(key) {
        _defineProperty5(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys5(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty5(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray6(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray6(o2, minLen) {
    if (!o2) return;
    if (typeof o2 === "string") return _arrayLikeToArray6(o2, minLen);
    var n = Object.prototype.toString.call(o2).slice(8, -1);
    if (n === "Object" && o2.constructor) n = o2.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o2);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray6(o2, minLen);
  }
  function _arrayLikeToArray6(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function normalizeArguments(args) {
    var _Array$prototype$slic = Array.prototype.slice.call(args), _Array$prototype$slic2 = _slicedToArray(_Array$prototype$slic, 4), arg_1 = _Array$prototype$slic2[0], arg_2 = _Array$prototype$slic2[1], arg_3 = _Array$prototype$slic2[2], arg_4 = _Array$prototype$slic2[3];
    var text3;
    var options;
    var metadata;
    if (typeof arg_1 === "string") {
      text3 = arg_1;
    } else throw new TypeError("A text for parsing must be a string.");
    if (!arg_2 || typeof arg_2 === "string") {
      if (arg_4) {
        options = arg_3;
        metadata = arg_4;
      } else {
        options = void 0;
        metadata = arg_3;
      }
      if (arg_2) {
        options = _objectSpread5({
          defaultCountry: arg_2
        }, options);
      }
    } else if (isObject(arg_2)) {
      if (arg_3) {
        options = arg_2;
        metadata = arg_3;
      } else {
        metadata = arg_2;
      }
    } else throw new Error("Invalid second argument: ".concat(arg_2));
    return {
      text: text3,
      options,
      metadata
    };
  }

  // node_modules/libphonenumber-js/es6/parsePhoneNumber_.js
  function ownKeys6(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread6(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys6(Object(source), true).forEach(function(key) {
        _defineProperty6(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys6(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty6(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function parsePhoneNumber2(text3, options, metadata) {
    if (options && options.defaultCountry && !isSupportedCountry(options.defaultCountry, metadata)) {
      options = _objectSpread6(_objectSpread6({}, options), {}, {
        defaultCountry: void 0
      });
    }
    try {
      return parsePhoneNumberWithError(text3, options, metadata);
    } catch (error) {
      if (error instanceof ParseError) {
      } else {
        throw error;
      }
    }
  }

  // node_modules/libphonenumber-js/es6/isValidPhoneNumber.js
  function ownKeys7(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread7(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys7(Object(source), true).forEach(function(key) {
        _defineProperty7(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys7(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty7(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function isValidPhoneNumber() {
    var _normalizeArguments = normalizeArguments(arguments), text3 = _normalizeArguments.text, options = _normalizeArguments.options, metadata = _normalizeArguments.metadata;
    options = _objectSpread7(_objectSpread7({}, options), {}, {
      extract: false
    });
    var phoneNumber = parsePhoneNumber2(text3, options, metadata);
    return phoneNumber && phoneNumber.isValid() || false;
  }

  // node_modules/libphonenumber-js/min/exports/isValidPhoneNumber.js
  function isValidPhoneNumber2() {
    return withMetadataArgument(isValidPhoneNumber, arguments);
  }

  // src/components/FormLead.js
  var FormLead = class extends AppElement {
    #default = {
      form: {}
    };
    constructor(props = {}) {
      super();
      this.eventName = "user:click-form-lead";
      this.state = this.initState(this.#default, props);
      this.getAttribute("id") || this.setAttribute("id", this.state.id || `component-${Math.floor(Math.random() * 100)}`);
      this.ok = false;
    }
    static get observedAttributes() {
      return ["stage"];
    }
    handleEvent(event) {
      let leadForm = this.querySelector("form");
      if (event.type === "click" && event.target.id === "cancel-lead") {
        const lead = new CustomEvent(this.state.eventName, {
          detail: { click: event.target.id },
          bubbles: true,
          composed: true
        });
        this.dispatchEvent(lead);
      } else if (event.type === "change" && event.target.id === "phone") {
        let code2 = leadForm.codes.options[leadForm.codes.selectedIndex].value;
        let country = countryCodes_default.codes.find((country2) => country2.dial_code == code2);
        let phone = code2 + " " + event.target.value;
        if (isValidPhoneNumber2(phone, country.code)) {
          this.querySelector("#help-phone").classList.add("is-hidden");
          this.querySelector("#help2-phone").classList.add("is-hidden");
          this.ok = true;
        } else {
          this.querySelector("#help2-phone").classList.remove("is-hidden");
          this.ok = false;
        }
      } else if (event.type === "change" && event.target.id === "email") {
        let regex = /^(?!\.)((?!.*\.{2})[a-zA-Z0-9\u00E0-\u00FC.!#$%&'*+-/=?^_`{|}~\-\d]+)@(?!\.)([a-zA-Z0-9\u00E0-\u00FC\-\.\d]+)((\.([a-zA-Z]){2,63})+)$/;
        if (regex.test(event.target.value)) {
          this.querySelector("#help-email").classList.add("is-hidden");
          this.querySelector("#help2-email").classList.add("is-hidden");
          this.ok = true;
        } else {
          this.querySelector("#help2-email").classList.remove("is-hidden");
          this.ok = false;
        }
      } else if (event.type === "click" && event.target.id === "cancel-lead") {
        event.preventDefault();
        const cancelLead = new CustomEvent(this.state.eventName, {
          detail: { click: event.target.id },
          bubbles: true,
          composed: true
        });
        this.dispatchEvent(cancelLead);
      } else if (event.type === "submit") {
        event.preventDefault();
        let contact = this.querySelector("#contact");
        let position = this.querySelector("#function");
        let phone = this.querySelector("#phone");
        let email = this.querySelector("#email");
        let company = this.querySelector("#company");
        let subject = this.querySelector("#subject");
        let description = this.querySelector("#description");
        let terms = this.querySelector("#terms");
        if (contact != null && contact.required && contact.value.trim() === "") {
          this.querySelector("#help-contact").classList.remove("is-hidden");
          this.ok = false;
        } else if (contact != null) {
          this.querySelector("#help-contact").classList.add("is-hidden");
          this.ok = true;
        }
        if (position != null && position.required && position.value.trim() === "") {
          this.querySelector("#help-function").classList.remove("is-hidden");
          this.ok = false;
        } else if (position != null) {
          this.querySelector("#help-function").classList.add("is-hidden");
          this.ok = true;
        }
        if (company != null && company.required && company.value.trim() === "") {
          this.querySelector("#help-company").classList.remove("is-hidden");
          this.ok = false;
        } else if (company != null) {
          this.querySelector("#help-company").classList.add("is-hidden");
          this.ok = true;
        }
        if (phone != null && phone.required && phone.value.trim() === "") {
          this.querySelector("#help-phone").classList.remove("is-hidden");
          this.ok = false;
        } else if (phone != null) {
          this.querySelector("#help-phone").classList.add("is-hidden");
          this.ok = true;
        }
        if (email != null && email.required && email.value.trim() === "") {
          this.querySelector("#help-email").classList.remove("is-hidden");
          this.ok = false;
        } else if (email != null) {
          this.querySelector("#help-email").classList.add("is-hidden");
          this.ok = true;
        }
        if (subject != null && subject.required && subject.value.trim() === "") {
          this.querySelector("#help-subject").classList.remove("is-hidden");
          this.ok = false;
        } else if (subject != null) {
          this.querySelector("#help-subject").classList.add("is-hidden");
          this.ok = true;
        }
        if (description != null && description.required && description.value.trim() === "") {
          this.querySelector("#help-description").classList.remove("is-hidden");
          this.ok = false;
        } else if (description != null) {
          this.querySelector("#help-description").classList.add("is-hidden");
          this.ok = true;
        }
        if (terms != null && terms.required && terms.checked == false) {
          this.querySelector("#help-terms").classList.remove("is-hidden");
          this.ok = false;
        } else if (terms != null) {
          this.querySelector("#help-terms").classList.add("is-hidden");
          this.ok = true;
        }
        if (this.ok === true) {
          if (this.form?.eventName != void 0) {
            this.eventName = this.state.form.eventName;
          }
          let data = {};
          if (leadForm?.contact != void 0) {
            data["name"] = leadForm.contact.value;
          }
          if (leadForm?.function != void 0) {
            data["function"] = leadForm.function.value;
          }
          if (leadForm?.email != void 0) {
            data["email"] = leadForm.email.value;
          }
          if (leadForm?.phone != void 0) {
            data["phone"] = leadForm.codes.options[leadForm.codes.selectedIndex].value + " " + leadForm.phone.value;
          }
          if (leadForm?.company != void 0) {
            data["company"] = leadForm.company.value;
          }
          if (leadForm?.subject != void 0) {
            data["subject"] = leadForm.subject.value;
          }
          if (leadForm?.description != void 0) {
            data["description"] = leadForm.description.value;
          }
          const hiddenInputs = leadForm.querySelectorAll('input[type="hidden"]');
          if (hiddenInputs.length > 0) {
            hiddenInputs.forEach((input) => {
              data[input.id] = input.value;
            });
          }
          const lead = new CustomEvent(this.state.eventName, {
            detail: { click: event.target.id, lead: data },
            bubbles: true,
            composed: true
          });
          this.dispatchEvent(lead);
        }
      }
    }
    render() {
      this.state?.id != void 0 ? this.state.form.id = `${this.state.id}-form` : `form-${Math.floor(Math.random() * 100)}`;
      this.innerHTML = /* html */
      `
        <section ${this.getClasses(["section"], this.state?.classList)} ${this.setAnimation(this.state.animation)} ${this.getBackground()}>
            <div class="container py-4">
                ${this.getTitles()}
                <div class="columns is-centered">
                    <div class="column ${this.state?.size != void 0 ? this.state.size : "is-4"}">
                       ${this.state?.form != void 0 ? new CjForm(this.state.form, this.state.context).render() : ""}
                    </div>
                </div>
            </div>
        </section>
        `;
      addFormEvents(this);
    }
  };
  customElements.define("form-lead", FormLead);

  // node_modules/remarkable/dist/esm/index.browser.js
  var textarea;
  function decodeEntity(name) {
    textarea = textarea || document.createElement("textarea");
    textarea.innerHTML = "&" + name + ";";
    return textarea.value;
  }
  var hasOwn = Object.prototype.hasOwnProperty;
  function has(object, key) {
    return object ? hasOwn.call(object, key) : false;
  }
  function assign(obj) {
    var sources = [].slice.call(arguments, 1);
    sources.forEach(function(source) {
      if (!source) {
        return;
      }
      if (typeof source !== "object") {
        throw new TypeError(source + "must be object");
      }
      Object.keys(source).forEach(function(key) {
        obj[key] = source[key];
      });
    });
    return obj;
  }
  var UNESCAPE_MD_RE = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
  function unescapeMd(str) {
    if (str.indexOf("\\") < 0) {
      return str;
    }
    return str.replace(UNESCAPE_MD_RE, "$1");
  }
  function isValidEntityCode(c) {
    if (c >= 55296 && c <= 57343) {
      return false;
    }
    if (c >= 64976 && c <= 65007) {
      return false;
    }
    if ((c & 65535) === 65535 || (c & 65535) === 65534) {
      return false;
    }
    if (c >= 0 && c <= 8) {
      return false;
    }
    if (c === 11) {
      return false;
    }
    if (c >= 14 && c <= 31) {
      return false;
    }
    if (c >= 127 && c <= 159) {
      return false;
    }
    if (c > 1114111) {
      return false;
    }
    return true;
  }
  function fromCodePoint(c) {
    if (c > 65535) {
      c -= 65536;
      var surrogate1 = 55296 + (c >> 10), surrogate2 = 56320 + (c & 1023);
      return String.fromCharCode(surrogate1, surrogate2);
    }
    return String.fromCharCode(c);
  }
  var NAMED_ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
  var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
  function replaceEntityPattern(match, name) {
    var code2 = 0;
    var decoded = decodeEntity(name);
    if (name !== decoded) {
      return decoded;
    } else if (name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name)) {
      code2 = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
      if (isValidEntityCode(code2)) {
        return fromCodePoint(code2);
      }
    }
    return match;
  }
  function replaceEntities(str) {
    if (str.indexOf("&") < 0) {
      return str;
    }
    return str.replace(NAMED_ENTITY_RE, replaceEntityPattern);
  }
  var HTML_ESCAPE_TEST_RE = /[&<>"]/;
  var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
  var HTML_REPLACEMENTS = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  function replaceUnsafeChar(ch) {
    return HTML_REPLACEMENTS[ch];
  }
  function escapeHtml(str) {
    if (HTML_ESCAPE_TEST_RE.test(str)) {
      return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
    }
    return str;
  }
  var rules = {};
  rules.blockquote_open = function() {
    return "<blockquote>\n";
  };
  rules.blockquote_close = function(tokens, idx) {
    return "</blockquote>" + getBreak(tokens, idx);
  };
  rules.code = function(tokens, idx) {
    if (tokens[idx].block) {
      return "<pre><code>" + escapeHtml(tokens[idx].content) + "</code></pre>" + getBreak(tokens, idx);
    }
    return "<code>" + escapeHtml(tokens[idx].content) + "</code>";
  };
  rules.fence = function(tokens, idx, options, env, instance) {
    var token = tokens[idx];
    var langClass = "";
    var langPrefix = options.langPrefix;
    var langName = "", fences2, fenceName;
    var highlighted;
    if (token.params) {
      fences2 = token.params.split(/\s+/g);
      fenceName = fences2.join(" ");
      if (has(instance.rules.fence_custom, fences2[0])) {
        return instance.rules.fence_custom[fences2[0]](tokens, idx, options, env, instance);
      }
      langName = escapeHtml(replaceEntities(unescapeMd(fenceName)));
      langClass = ' class="' + langPrefix + langName + '"';
    }
    if (options.highlight) {
      highlighted = options.highlight.apply(options.highlight, [token.content].concat(fences2)) || escapeHtml(token.content);
    } else {
      highlighted = escapeHtml(token.content);
    }
    return "<pre><code" + langClass + ">" + highlighted + "</code></pre>" + getBreak(tokens, idx);
  };
  rules.fence_custom = {};
  rules.heading_open = function(tokens, idx) {
    return "<h" + tokens[idx].hLevel + ">";
  };
  rules.heading_close = function(tokens, idx) {
    return "</h" + tokens[idx].hLevel + ">\n";
  };
  rules.hr = function(tokens, idx, options) {
    return (options.xhtmlOut ? "<hr />" : "<hr>") + getBreak(tokens, idx);
  };
  rules.bullet_list_open = function() {
    return "<ul>\n";
  };
  rules.bullet_list_close = function(tokens, idx) {
    return "</ul>" + getBreak(tokens, idx);
  };
  rules.list_item_open = function() {
    return "<li>";
  };
  rules.list_item_close = function() {
    return "</li>\n";
  };
  rules.ordered_list_open = function(tokens, idx) {
    var token = tokens[idx];
    var order = token.order > 1 ? ' start="' + token.order + '"' : "";
    return "<ol" + order + ">\n";
  };
  rules.ordered_list_close = function(tokens, idx) {
    return "</ol>" + getBreak(tokens, idx);
  };
  rules.paragraph_open = function(tokens, idx) {
    return tokens[idx].tight ? "" : "<p>";
  };
  rules.paragraph_close = function(tokens, idx) {
    var addBreak = !(tokens[idx].tight && idx && tokens[idx - 1].type === "inline" && !tokens[idx - 1].content);
    return (tokens[idx].tight ? "" : "</p>") + (addBreak ? getBreak(tokens, idx) : "");
  };
  rules.link_open = function(tokens, idx, options) {
    var title = tokens[idx].title ? ' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"' : "";
    var target = options.linkTarget ? ' target="' + options.linkTarget + '"' : "";
    return '<a href="' + escapeHtml(tokens[idx].href) + '"' + title + target + ">";
  };
  rules.link_close = function() {
    return "</a>";
  };
  rules.image = function(tokens, idx, options) {
    var src = ' src="' + escapeHtml(tokens[idx].src) + '"';
    var title = tokens[idx].title ? ' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"' : "";
    var alt = ' alt="' + (tokens[idx].alt ? escapeHtml(replaceEntities(unescapeMd(tokens[idx].alt))) : "") + '"';
    var suffix = options.xhtmlOut ? " /" : "";
    return "<img" + src + alt + title + suffix + ">";
  };
  rules.table_open = function() {
    return "<table>\n";
  };
  rules.table_close = function() {
    return "</table>\n";
  };
  rules.thead_open = function() {
    return "<thead>\n";
  };
  rules.thead_close = function() {
    return "</thead>\n";
  };
  rules.tbody_open = function() {
    return "<tbody>\n";
  };
  rules.tbody_close = function() {
    return "</tbody>\n";
  };
  rules.tr_open = function() {
    return "<tr>";
  };
  rules.tr_close = function() {
    return "</tr>\n";
  };
  rules.th_open = function(tokens, idx) {
    var token = tokens[idx];
    return "<th" + (token.align ? ' style="text-align:' + token.align + '"' : "") + ">";
  };
  rules.th_close = function() {
    return "</th>";
  };
  rules.td_open = function(tokens, idx) {
    var token = tokens[idx];
    return "<td" + (token.align ? ' style="text-align:' + token.align + '"' : "") + ">";
  };
  rules.td_close = function() {
    return "</td>";
  };
  rules.strong_open = function() {
    return "<strong>";
  };
  rules.strong_close = function() {
    return "</strong>";
  };
  rules.em_open = function() {
    return "<em>";
  };
  rules.em_close = function() {
    return "</em>";
  };
  rules.del_open = function() {
    return "<del>";
  };
  rules.del_close = function() {
    return "</del>";
  };
  rules.ins_open = function() {
    return "<ins>";
  };
  rules.ins_close = function() {
    return "</ins>";
  };
  rules.mark_open = function() {
    return "<mark>";
  };
  rules.mark_close = function() {
    return "</mark>";
  };
  rules.sub = function(tokens, idx) {
    return "<sub>" + escapeHtml(tokens[idx].content) + "</sub>";
  };
  rules.sup = function(tokens, idx) {
    return "<sup>" + escapeHtml(tokens[idx].content) + "</sup>";
  };
  rules.hardbreak = function(tokens, idx, options) {
    return options.xhtmlOut ? "<br />\n" : "<br>\n";
  };
  rules.softbreak = function(tokens, idx, options) {
    return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
  };
  rules.text = function(tokens, idx) {
    return escapeHtml(tokens[idx].content);
  };
  rules.htmlblock = function(tokens, idx) {
    return tokens[idx].content;
  };
  rules.htmltag = function(tokens, idx) {
    return tokens[idx].content;
  };
  rules.abbr_open = function(tokens, idx) {
    return '<abbr title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '">';
  };
  rules.abbr_close = function() {
    return "</abbr>";
  };
  rules.footnote_ref = function(tokens, idx) {
    var n = Number(tokens[idx].id + 1).toString();
    var id = "fnref" + n;
    if (tokens[idx].subId > 0) {
      id += ":" + tokens[idx].subId;
    }
    return '<sup class="footnote-ref"><a href="#fn' + n + '" id="' + id + '">[' + n + "]</a></sup>";
  };
  rules.footnote_block_open = function(tokens, idx, options) {
    var hr2 = options.xhtmlOut ? '<hr class="footnotes-sep" />\n' : '<hr class="footnotes-sep">\n';
    return hr2 + '<section class="footnotes">\n<ol class="footnotes-list">\n';
  };
  rules.footnote_block_close = function() {
    return "</ol>\n</section>\n";
  };
  rules.footnote_open = function(tokens, idx) {
    var id = Number(tokens[idx].id + 1).toString();
    return '<li id="fn' + id + '"  class="footnote-item">';
  };
  rules.footnote_close = function() {
    return "</li>\n";
  };
  rules.footnote_anchor = function(tokens, idx) {
    var n = Number(tokens[idx].id + 1).toString();
    var id = "fnref" + n;
    if (tokens[idx].subId > 0) {
      id += ":" + tokens[idx].subId;
    }
    return ' <a href="#' + id + '" class="footnote-backref">\u21A9</a>';
  };
  rules.dl_open = function() {
    return "<dl>\n";
  };
  rules.dt_open = function() {
    return "<dt>";
  };
  rules.dd_open = function() {
    return "<dd>";
  };
  rules.dl_close = function() {
    return "</dl>\n";
  };
  rules.dt_close = function() {
    return "</dt>\n";
  };
  rules.dd_close = function() {
    return "</dd>\n";
  };
  function nextToken(tokens, idx) {
    if (++idx >= tokens.length - 2) {
      return idx;
    }
    if (tokens[idx].type === "paragraph_open" && tokens[idx].tight && (tokens[idx + 1].type === "inline" && tokens[idx + 1].content.length === 0) && (tokens[idx + 2].type === "paragraph_close" && tokens[idx + 2].tight)) {
      return nextToken(tokens, idx + 2);
    }
    return idx;
  }
  var getBreak = rules.getBreak = function getBreak2(tokens, idx) {
    idx = nextToken(tokens, idx);
    if (idx < tokens.length && tokens[idx].type === "list_item_close") {
      return "";
    }
    return "\n";
  };
  function Renderer() {
    this.rules = assign({}, rules);
    this.getBreak = rules.getBreak;
  }
  Renderer.prototype.renderInline = function(tokens, options, env) {
    var _rules2 = this.rules;
    var len = tokens.length, i = 0;
    var result2 = "";
    while (len--) {
      result2 += _rules2[tokens[i].type](tokens, i++, options, env, this);
    }
    return result2;
  };
  Renderer.prototype.render = function(tokens, options, env) {
    var _rules2 = this.rules;
    var len = tokens.length, i = -1;
    var result2 = "";
    while (++i < len) {
      if (tokens[i].type === "inline") {
        result2 += this.renderInline(tokens[i].children, options, env);
      } else {
        result2 += _rules2[tokens[i].type](tokens, i, options, env, this);
      }
    }
    return result2;
  };
  function Ruler() {
    this.__rules__ = [];
    this.__cache__ = null;
  }
  Ruler.prototype.__find__ = function(name) {
    var len = this.__rules__.length;
    var i = -1;
    while (len--) {
      if (this.__rules__[++i].name === name) {
        return i;
      }
    }
    return -1;
  };
  Ruler.prototype.__compile__ = function() {
    var self = this;
    var chains = [""];
    self.__rules__.forEach(function(rule) {
      if (!rule.enabled) {
        return;
      }
      rule.alt.forEach(function(altName) {
        if (chains.indexOf(altName) < 0) {
          chains.push(altName);
        }
      });
    });
    self.__cache__ = {};
    chains.forEach(function(chain) {
      self.__cache__[chain] = [];
      self.__rules__.forEach(function(rule) {
        if (!rule.enabled) {
          return;
        }
        if (chain && rule.alt.indexOf(chain) < 0) {
          return;
        }
        self.__cache__[chain].push(rule.fn);
      });
    });
  };
  Ruler.prototype.at = function(name, fn, options) {
    var idx = this.__find__(name);
    var opt = options || {};
    if (idx === -1) {
      throw new Error("Parser rule not found: " + name);
    }
    this.__rules__[idx].fn = fn;
    this.__rules__[idx].alt = opt.alt || [];
    this.__cache__ = null;
  };
  Ruler.prototype.before = function(beforeName, ruleName, fn, options) {
    var idx = this.__find__(beforeName);
    var opt = options || {};
    if (idx === -1) {
      throw new Error("Parser rule not found: " + beforeName);
    }
    this.__rules__.splice(idx, 0, {
      name: ruleName,
      enabled: true,
      fn,
      alt: opt.alt || []
    });
    this.__cache__ = null;
  };
  Ruler.prototype.after = function(afterName, ruleName, fn, options) {
    var idx = this.__find__(afterName);
    var opt = options || {};
    if (idx === -1) {
      throw new Error("Parser rule not found: " + afterName);
    }
    this.__rules__.splice(idx + 1, 0, {
      name: ruleName,
      enabled: true,
      fn,
      alt: opt.alt || []
    });
    this.__cache__ = null;
  };
  Ruler.prototype.push = function(ruleName, fn, options) {
    var opt = options || {};
    this.__rules__.push({
      name: ruleName,
      enabled: true,
      fn,
      alt: opt.alt || []
    });
    this.__cache__ = null;
  };
  Ruler.prototype.enable = function(list2, strict) {
    list2 = !Array.isArray(list2) ? [list2] : list2;
    if (strict) {
      this.__rules__.forEach(function(rule) {
        rule.enabled = false;
      });
    }
    list2.forEach(function(name) {
      var idx = this.__find__(name);
      if (idx < 0) {
        throw new Error("Rules manager: invalid rule name " + name);
      }
      this.__rules__[idx].enabled = true;
    }, this);
    this.__cache__ = null;
  };
  Ruler.prototype.disable = function(list2) {
    list2 = !Array.isArray(list2) ? [list2] : list2;
    list2.forEach(function(name) {
      var idx = this.__find__(name);
      if (idx < 0) {
        throw new Error("Rules manager: invalid rule name " + name);
      }
      this.__rules__[idx].enabled = false;
    }, this);
    this.__cache__ = null;
  };
  Ruler.prototype.getRules = function(chainName) {
    if (this.__cache__ === null) {
      this.__compile__();
    }
    return this.__cache__[chainName] || [];
  };
  function block(state2) {
    if (state2.inlineMode) {
      state2.tokens.push({
        type: "inline",
        content: state2.src.replace(/\n/g, " ").trim(),
        level: 0,
        lines: [0, 1],
        children: []
      });
    } else {
      state2.block.parse(state2.src, state2.options, state2.env, state2.tokens);
    }
  }
  function StateInline(src, parserInline, options, env, outTokens) {
    this.src = src;
    this.env = env;
    this.options = options;
    this.parser = parserInline;
    this.tokens = outTokens;
    this.pos = 0;
    this.posMax = this.src.length;
    this.level = 0;
    this.pending = "";
    this.pendingLevel = 0;
    this.cache = [];
    this.isInLabel = false;
    this.linkLevel = 0;
    this.linkContent = "";
    this.labelUnmatchedScopes = 0;
  }
  StateInline.prototype.pushPending = function() {
    this.tokens.push({
      type: "text",
      content: this.pending,
      level: this.pendingLevel
    });
    this.pending = "";
  };
  StateInline.prototype.push = function(token) {
    if (this.pending) {
      this.pushPending();
    }
    this.tokens.push(token);
    this.pendingLevel = this.level;
  };
  StateInline.prototype.cacheSet = function(key, val) {
    for (var i = this.cache.length; i <= key; i++) {
      this.cache.push(0);
    }
    this.cache[key] = val;
  };
  StateInline.prototype.cacheGet = function(key) {
    return key < this.cache.length ? this.cache[key] : 0;
  };
  function parseLinkLabel(state2, start) {
    var level, found, marker, labelEnd = -1, max = state2.posMax, oldPos = state2.pos, oldFlag = state2.isInLabel;
    if (state2.isInLabel) {
      return -1;
    }
    if (state2.labelUnmatchedScopes) {
      state2.labelUnmatchedScopes--;
      return -1;
    }
    state2.pos = start + 1;
    state2.isInLabel = true;
    level = 1;
    while (state2.pos < max) {
      marker = state2.src.charCodeAt(state2.pos);
      if (marker === 91) {
        level++;
      } else if (marker === 93) {
        level--;
        if (level === 0) {
          found = true;
          break;
        }
      }
      state2.parser.skipToken(state2);
    }
    if (found) {
      labelEnd = state2.pos;
      state2.labelUnmatchedScopes = 0;
    } else {
      state2.labelUnmatchedScopes = level - 1;
    }
    state2.pos = oldPos;
    state2.isInLabel = oldFlag;
    return labelEnd;
  }
  function parseAbbr(str, parserInline, options, env) {
    var state2, labelEnd, pos, max, label, title;
    if (str.charCodeAt(0) !== 42) {
      return -1;
    }
    if (str.charCodeAt(1) !== 91) {
      return -1;
    }
    if (str.indexOf("]:") === -1) {
      return -1;
    }
    state2 = new StateInline(str, parserInline, options, env, []);
    labelEnd = parseLinkLabel(state2, 1);
    if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
      return -1;
    }
    max = state2.posMax;
    for (pos = labelEnd + 2; pos < max; pos++) {
      if (state2.src.charCodeAt(pos) === 10) {
        break;
      }
    }
    label = str.slice(2, labelEnd);
    title = str.slice(labelEnd + 2, pos).trim();
    if (title.length === 0) {
      return -1;
    }
    if (!env.abbreviations) {
      env.abbreviations = {};
    }
    if (typeof env.abbreviations[":" + label] === "undefined") {
      env.abbreviations[":" + label] = title;
    }
    return pos;
  }
  function abbr(state2) {
    var tokens = state2.tokens, i, l, content, pos;
    if (state2.inlineMode) {
      return;
    }
    for (i = 1, l = tokens.length - 1; i < l; i++) {
      if (tokens[i - 1].type === "paragraph_open" && tokens[i].type === "inline" && tokens[i + 1].type === "paragraph_close") {
        content = tokens[i].content;
        while (content.length) {
          pos = parseAbbr(content, state2.inline, state2.options, state2.env);
          if (pos < 0) {
            break;
          }
          content = content.slice(pos).trim();
        }
        tokens[i].content = content;
        if (!content.length) {
          tokens[i - 1].tight = true;
          tokens[i + 1].tight = true;
        }
      }
    }
  }
  function normalizeLink(url) {
    var normalized = replaceEntities(url);
    try {
      normalized = decodeURI(normalized);
    } catch (err) {
    }
    return encodeURI(normalized);
  }
  function parseLinkDestination(state2, pos) {
    var code2, level, link, start = pos, max = state2.posMax;
    if (state2.src.charCodeAt(pos) === 60) {
      pos++;
      while (pos < max) {
        code2 = state2.src.charCodeAt(pos);
        if (code2 === 10) {
          return false;
        }
        if (code2 === 62) {
          link = normalizeLink(unescapeMd(state2.src.slice(start + 1, pos)));
          if (!state2.parser.validateLink(link)) {
            return false;
          }
          state2.pos = pos + 1;
          state2.linkContent = link;
          return true;
        }
        if (code2 === 92 && pos + 1 < max) {
          pos += 2;
          continue;
        }
        pos++;
      }
      return false;
    }
    level = 0;
    while (pos < max) {
      code2 = state2.src.charCodeAt(pos);
      if (code2 === 32) {
        break;
      }
      if (code2 < 32 || code2 === 127) {
        break;
      }
      if (code2 === 92 && pos + 1 < max) {
        pos += 2;
        continue;
      }
      if (code2 === 40) {
        level++;
        if (level > 1) {
          break;
        }
      }
      if (code2 === 41) {
        level--;
        if (level < 0) {
          break;
        }
      }
      pos++;
    }
    if (start === pos) {
      return false;
    }
    link = unescapeMd(state2.src.slice(start, pos));
    if (!state2.parser.validateLink(link)) {
      return false;
    }
    state2.linkContent = link;
    state2.pos = pos;
    return true;
  }
  function parseLinkTitle(state2, pos) {
    var code2, start = pos, max = state2.posMax, marker = state2.src.charCodeAt(pos);
    if (marker !== 34 && marker !== 39 && marker !== 40) {
      return false;
    }
    pos++;
    if (marker === 40) {
      marker = 41;
    }
    while (pos < max) {
      code2 = state2.src.charCodeAt(pos);
      if (code2 === marker) {
        state2.pos = pos + 1;
        state2.linkContent = unescapeMd(state2.src.slice(start + 1, pos));
        return true;
      }
      if (code2 === 92 && pos + 1 < max) {
        pos += 2;
        continue;
      }
      pos++;
    }
    return false;
  }
  function normalizeReference(str) {
    return str.trim().replace(/\s+/g, " ").toUpperCase();
  }
  function parseReference(str, parser, options, env) {
    var state2, labelEnd, pos, max, code2, start, href, title, label;
    if (str.charCodeAt(0) !== 91) {
      return -1;
    }
    if (str.indexOf("]:") === -1) {
      return -1;
    }
    state2 = new StateInline(str, parser, options, env, []);
    labelEnd = parseLinkLabel(state2, 0);
    if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
      return -1;
    }
    max = state2.posMax;
    for (pos = labelEnd + 2; pos < max; pos++) {
      code2 = state2.src.charCodeAt(pos);
      if (code2 !== 32 && code2 !== 10) {
        break;
      }
    }
    if (!parseLinkDestination(state2, pos)) {
      return -1;
    }
    href = state2.linkContent;
    pos = state2.pos;
    start = pos;
    for (pos = pos + 1; pos < max; pos++) {
      code2 = state2.src.charCodeAt(pos);
      if (code2 !== 32 && code2 !== 10) {
        break;
      }
    }
    if (pos < max && start !== pos && parseLinkTitle(state2, pos)) {
      title = state2.linkContent;
      pos = state2.pos;
    } else {
      title = "";
      pos = start;
    }
    while (pos < max && state2.src.charCodeAt(pos) === 32) {
      pos++;
    }
    if (pos < max && state2.src.charCodeAt(pos) !== 10) {
      return -1;
    }
    label = normalizeReference(str.slice(1, labelEnd));
    if (typeof env.references[label] === "undefined") {
      env.references[label] = { title, href };
    }
    return pos;
  }
  function references(state2) {
    var tokens = state2.tokens, i, l, content, pos;
    state2.env.references = state2.env.references || {};
    if (state2.inlineMode) {
      return;
    }
    for (i = 1, l = tokens.length - 1; i < l; i++) {
      if (tokens[i].type === "inline" && tokens[i - 1].type === "paragraph_open" && tokens[i + 1].type === "paragraph_close") {
        content = tokens[i].content;
        while (content.length) {
          pos = parseReference(content, state2.inline, state2.options, state2.env);
          if (pos < 0) {
            break;
          }
          content = content.slice(pos).trim();
        }
        tokens[i].content = content;
        if (!content.length) {
          tokens[i - 1].tight = true;
          tokens[i + 1].tight = true;
        }
      }
    }
  }
  function inline(state2) {
    var tokens = state2.tokens, tok, i, l;
    for (i = 0, l = tokens.length; i < l; i++) {
      tok = tokens[i];
      if (tok.type === "inline") {
        state2.inline.parse(tok.content, state2.options, state2.env, tok.children);
      }
    }
  }
  function footnote_block(state2) {
    var i, l, j, t2, lastParagraph, list2, tokens, current, currentLabel, level = 0, insideRef = false, refTokens = {};
    if (!state2.env.footnotes) {
      return;
    }
    state2.tokens = state2.tokens.filter(function(tok) {
      if (tok.type === "footnote_reference_open") {
        insideRef = true;
        current = [];
        currentLabel = tok.label;
        return false;
      }
      if (tok.type === "footnote_reference_close") {
        insideRef = false;
        refTokens[":" + currentLabel] = current;
        return false;
      }
      if (insideRef) {
        current.push(tok);
      }
      return !insideRef;
    });
    if (!state2.env.footnotes.list) {
      return;
    }
    list2 = state2.env.footnotes.list;
    state2.tokens.push({
      type: "footnote_block_open",
      level: level++
    });
    for (i = 0, l = list2.length; i < l; i++) {
      state2.tokens.push({
        type: "footnote_open",
        id: i,
        level: level++
      });
      if (list2[i].tokens) {
        tokens = [];
        tokens.push({
          type: "paragraph_open",
          tight: false,
          level: level++
        });
        tokens.push({
          type: "inline",
          content: "",
          level,
          children: list2[i].tokens
        });
        tokens.push({
          type: "paragraph_close",
          tight: false,
          level: --level
        });
      } else if (list2[i].label) {
        tokens = refTokens[":" + list2[i].label];
      }
      state2.tokens = state2.tokens.concat(tokens);
      if (state2.tokens[state2.tokens.length - 1].type === "paragraph_close") {
        lastParagraph = state2.tokens.pop();
      } else {
        lastParagraph = null;
      }
      t2 = list2[i].count > 0 ? list2[i].count : 1;
      for (j = 0; j < t2; j++) {
        state2.tokens.push({
          type: "footnote_anchor",
          id: i,
          subId: j,
          level
        });
      }
      if (lastParagraph) {
        state2.tokens.push(lastParagraph);
      }
      state2.tokens.push({
        type: "footnote_close",
        level: --level
      });
    }
    state2.tokens.push({
      type: "footnote_block_close",
      level: --level
    });
  }
  var PUNCT_CHARS = ` 
()[]'".,!?-`;
  function regEscape(s2) {
    return s2.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1");
  }
  function abbr2(state2) {
    var i, j, l, tokens, token, text3, nodes, pos, level, reg, m, regText, blockTokens = state2.tokens;
    if (!state2.env.abbreviations) {
      return;
    }
    if (!state2.env.abbrRegExp) {
      regText = "(^|[" + PUNCT_CHARS.split("").map(regEscape).join("") + "])(" + Object.keys(state2.env.abbreviations).map(function(x2) {
        return x2.substr(1);
      }).sort(function(a, b) {
        return b.length - a.length;
      }).map(regEscape).join("|") + ")($|[" + PUNCT_CHARS.split("").map(regEscape).join("") + "])";
      state2.env.abbrRegExp = new RegExp(regText, "g");
    }
    reg = state2.env.abbrRegExp;
    for (j = 0, l = blockTokens.length; j < l; j++) {
      if (blockTokens[j].type !== "inline") {
        continue;
      }
      tokens = blockTokens[j].children;
      for (i = tokens.length - 1; i >= 0; i--) {
        token = tokens[i];
        if (token.type !== "text") {
          continue;
        }
        pos = 0;
        text3 = token.content;
        reg.lastIndex = 0;
        level = token.level;
        nodes = [];
        while (m = reg.exec(text3)) {
          if (reg.lastIndex > pos) {
            nodes.push({
              type: "text",
              content: text3.slice(pos, m.index + m[1].length),
              level
            });
          }
          nodes.push({
            type: "abbr_open",
            title: state2.env.abbreviations[":" + m[2]],
            level: level++
          });
          nodes.push({
            type: "text",
            content: m[2],
            level
          });
          nodes.push({
            type: "abbr_close",
            level: --level
          });
          pos = reg.lastIndex - m[3].length;
        }
        if (!nodes.length) {
          continue;
        }
        if (pos < text3.length) {
          nodes.push({
            type: "text",
            content: text3.slice(pos),
            level
          });
        }
        blockTokens[j].children = tokens = [].concat(tokens.slice(0, i), nodes, tokens.slice(i + 1));
      }
    }
  }
  var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
  var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
  var SCOPED_ABBR = {
    "c": "\xA9",
    "r": "\xAE",
    "p": "\xA7",
    "tm": "\u2122"
  };
  function replaceScopedAbbr(str) {
    if (str.indexOf("(") < 0) {
      return str;
    }
    return str.replace(SCOPED_ABBR_RE, function(match, name) {
      return SCOPED_ABBR[name.toLowerCase()];
    });
  }
  function replace2(state2) {
    var i, token, text3, inlineTokens, blkIdx;
    if (!state2.options.typographer) {
      return;
    }
    for (blkIdx = state2.tokens.length - 1; blkIdx >= 0; blkIdx--) {
      if (state2.tokens[blkIdx].type !== "inline") {
        continue;
      }
      inlineTokens = state2.tokens[blkIdx].children;
      for (i = inlineTokens.length - 1; i >= 0; i--) {
        token = inlineTokens[i];
        if (token.type === "text") {
          text3 = token.content;
          text3 = replaceScopedAbbr(text3);
          if (RARE_RE.test(text3)) {
            text3 = text3.replace(/\+-/g, "\xB1").replace(/\.{2,}/g, "\u2026").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/mg, "$1\u2014$2").replace(/(^|\s)--(\s|$)/mg, "$1\u2013$2").replace(/(^|[^-\s])--([^-\s]|$)/mg, "$1\u2013$2");
          }
          token.content = text3;
        }
      }
    }
  }
  var QUOTE_TEST_RE = /['"]/;
  var QUOTE_RE = /['"]/g;
  var PUNCT_RE = /[-\s()\[\]]/;
  var APOSTROPHE = "\u2019";
  function isLetter(str, pos) {
    if (pos < 0 || pos >= str.length) {
      return false;
    }
    return !PUNCT_RE.test(str[pos]);
  }
  function replaceAt(str, index, ch) {
    return str.substr(0, index) + ch + str.substr(index + 1);
  }
  function smartquotes(state2) {
    var i, token, text3, t2, pos, max, thisLevel, lastSpace, nextSpace, item, canOpen, canClose, j, isSingle, blkIdx, tokens, stack;
    if (!state2.options.typographer) {
      return;
    }
    stack = [];
    for (blkIdx = state2.tokens.length - 1; blkIdx >= 0; blkIdx--) {
      if (state2.tokens[blkIdx].type !== "inline") {
        continue;
      }
      tokens = state2.tokens[blkIdx].children;
      stack.length = 0;
      for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        if (token.type !== "text" || QUOTE_TEST_RE.test(token.text)) {
          continue;
        }
        thisLevel = tokens[i].level;
        for (j = stack.length - 1; j >= 0; j--) {
          if (stack[j].level <= thisLevel) {
            break;
          }
        }
        stack.length = j + 1;
        text3 = token.content;
        pos = 0;
        max = text3.length;
        OUTER:
          while (pos < max) {
            QUOTE_RE.lastIndex = pos;
            t2 = QUOTE_RE.exec(text3);
            if (!t2) {
              break;
            }
            lastSpace = !isLetter(text3, t2.index - 1);
            pos = t2.index + 1;
            isSingle = t2[0] === "'";
            nextSpace = !isLetter(text3, pos);
            if (!nextSpace && !lastSpace) {
              if (isSingle) {
                token.content = replaceAt(token.content, t2.index, APOSTROPHE);
              }
              continue;
            }
            canOpen = !nextSpace;
            canClose = !lastSpace;
            if (canClose) {
              for (j = stack.length - 1; j >= 0; j--) {
                item = stack[j];
                if (stack[j].level < thisLevel) {
                  break;
                }
                if (item.single === isSingle && stack[j].level === thisLevel) {
                  item = stack[j];
                  if (isSingle) {
                    tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state2.options.quotes[2]);
                    token.content = replaceAt(token.content, t2.index, state2.options.quotes[3]);
                  } else {
                    tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state2.options.quotes[0]);
                    token.content = replaceAt(token.content, t2.index, state2.options.quotes[1]);
                  }
                  stack.length = j;
                  continue OUTER;
                }
              }
            }
            if (canOpen) {
              stack.push({
                token: i,
                pos: t2.index,
                single: isSingle,
                level: thisLevel
              });
            } else if (canClose && isSingle) {
              token.content = replaceAt(token.content, t2.index, APOSTROPHE);
            }
          }
      }
    }
  }
  var _rules = [
    ["block", block],
    ["abbr", abbr],
    ["references", references],
    ["inline", inline],
    ["footnote_tail", footnote_block],
    ["abbr2", abbr2],
    ["replacements", replace2],
    ["smartquotes", smartquotes]
  ];
  function Core() {
    this.options = {};
    this.ruler = new Ruler();
    for (var i = 0; i < _rules.length; i++) {
      this.ruler.push(_rules[i][0], _rules[i][1]);
    }
  }
  Core.prototype.process = function(state2) {
    var i, l, rules2;
    rules2 = this.ruler.getRules("");
    for (i = 0, l = rules2.length; i < l; i++) {
      rules2[i](state2);
    }
  };
  function StateBlock(src, parser, options, env, tokens) {
    var ch, s2, start, pos, len, indent, indent_found;
    this.src = src;
    this.parser = parser;
    this.options = options;
    this.env = env;
    this.tokens = tokens;
    this.bMarks = [];
    this.eMarks = [];
    this.tShift = [];
    this.blkIndent = 0;
    this.line = 0;
    this.lineMax = 0;
    this.tight = false;
    this.parentType = "root";
    this.ddIndent = -1;
    this.level = 0;
    this.result = "";
    s2 = this.src;
    indent = 0;
    indent_found = false;
    for (start = pos = indent = 0, len = s2.length; pos < len; pos++) {
      ch = s2.charCodeAt(pos);
      if (!indent_found) {
        if (ch === 32) {
          indent++;
          continue;
        } else {
          indent_found = true;
        }
      }
      if (ch === 10 || pos === len - 1) {
        if (ch !== 10) {
          pos++;
        }
        this.bMarks.push(start);
        this.eMarks.push(pos);
        this.tShift.push(indent);
        indent_found = false;
        indent = 0;
        start = pos + 1;
      }
    }
    this.bMarks.push(s2.length);
    this.eMarks.push(s2.length);
    this.tShift.push(0);
    this.lineMax = this.bMarks.length - 1;
  }
  StateBlock.prototype.isEmpty = function isEmpty(line) {
    return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
  };
  StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
    for (var max = this.lineMax; from < max; from++) {
      if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
        break;
      }
    }
    return from;
  };
  StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
    for (var max = this.src.length; pos < max; pos++) {
      if (this.src.charCodeAt(pos) !== 32) {
        break;
      }
    }
    return pos;
  };
  StateBlock.prototype.skipChars = function skipChars(pos, code2) {
    for (var max = this.src.length; pos < max; pos++) {
      if (this.src.charCodeAt(pos) !== code2) {
        break;
      }
    }
    return pos;
  };
  StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code2, min) {
    if (pos <= min) {
      return pos;
    }
    while (pos > min) {
      if (code2 !== this.src.charCodeAt(--pos)) {
        return pos + 1;
      }
    }
    return pos;
  };
  StateBlock.prototype.getLines = function getLines(begin2, end2, indent, keepLastLF) {
    var i, first, last, queue, shift, line = begin2;
    if (begin2 >= end2) {
      return "";
    }
    if (line + 1 === end2) {
      first = this.bMarks[line] + Math.min(this.tShift[line], indent);
      last = keepLastLF ? this.eMarks[line] + 1 : this.eMarks[line];
      return this.src.slice(first, last);
    }
    queue = new Array(end2 - begin2);
    for (i = 0; line < end2; line++, i++) {
      shift = this.tShift[line];
      if (shift > indent) {
        shift = indent;
      }
      if (shift < 0) {
        shift = 0;
      }
      first = this.bMarks[line] + shift;
      if (line + 1 < end2 || keepLastLF) {
        last = this.eMarks[line] + 1;
      } else {
        last = this.eMarks[line];
      }
      queue[i] = this.src.slice(first, last);
    }
    return queue.join("");
  };
  function code(state2, startLine, endLine) {
    var nextLine, last;
    if (state2.tShift[startLine] - state2.blkIndent < 4) {
      return false;
    }
    last = nextLine = startLine + 1;
    while (nextLine < endLine) {
      if (state2.isEmpty(nextLine)) {
        nextLine++;
        continue;
      }
      if (state2.tShift[nextLine] - state2.blkIndent >= 4) {
        nextLine++;
        last = nextLine;
        continue;
      }
      break;
    }
    state2.line = nextLine;
    state2.tokens.push({
      type: "code",
      content: state2.getLines(startLine, last, 4 + state2.blkIndent, true),
      block: true,
      lines: [startLine, state2.line],
      level: state2.level
    });
    return true;
  }
  function fences(state2, startLine, endLine, silent) {
    var marker, len, params, nextLine, mem, haveEndMarker = false, pos = state2.bMarks[startLine] + state2.tShift[startLine], max = state2.eMarks[startLine];
    if (pos + 3 > max) {
      return false;
    }
    marker = state2.src.charCodeAt(pos);
    if (marker !== 126 && marker !== 96) {
      return false;
    }
    mem = pos;
    pos = state2.skipChars(pos, marker);
    len = pos - mem;
    if (len < 3) {
      return false;
    }
    params = state2.src.slice(pos, max).trim();
    if (params.indexOf("`") >= 0) {
      return false;
    }
    if (silent) {
      return true;
    }
    nextLine = startLine;
    for (; ; ) {
      nextLine++;
      if (nextLine >= endLine) {
        break;
      }
      pos = mem = state2.bMarks[nextLine] + state2.tShift[nextLine];
      max = state2.eMarks[nextLine];
      if (pos < max && state2.tShift[nextLine] < state2.blkIndent) {
        break;
      }
      if (state2.src.charCodeAt(pos) !== marker) {
        continue;
      }
      if (state2.tShift[nextLine] - state2.blkIndent >= 4) {
        continue;
      }
      pos = state2.skipChars(pos, marker);
      if (pos - mem < len) {
        continue;
      }
      pos = state2.skipSpaces(pos);
      if (pos < max) {
        continue;
      }
      haveEndMarker = true;
      break;
    }
    len = state2.tShift[startLine];
    state2.line = nextLine + (haveEndMarker ? 1 : 0);
    state2.tokens.push({
      type: "fence",
      params,
      content: state2.getLines(startLine + 1, nextLine, len, true),
      lines: [startLine, state2.line],
      level: state2.level
    });
    return true;
  }
  function blockquote(state2, startLine, endLine, silent) {
    var nextLine, lastLineEmpty, oldTShift, oldBMarks, oldIndent, oldParentType, lines, terminatorRules, i, l, terminate, pos = state2.bMarks[startLine] + state2.tShift[startLine], max = state2.eMarks[startLine];
    if (pos > max) {
      return false;
    }
    if (state2.src.charCodeAt(pos++) !== 62) {
      return false;
    }
    if (state2.level >= state2.options.maxNesting) {
      return false;
    }
    if (silent) {
      return true;
    }
    if (state2.src.charCodeAt(pos) === 32) {
      pos++;
    }
    oldIndent = state2.blkIndent;
    state2.blkIndent = 0;
    oldBMarks = [state2.bMarks[startLine]];
    state2.bMarks[startLine] = pos;
    pos = pos < max ? state2.skipSpaces(pos) : pos;
    lastLineEmpty = pos >= max;
    oldTShift = [state2.tShift[startLine]];
    state2.tShift[startLine] = pos - state2.bMarks[startLine];
    terminatorRules = state2.parser.ruler.getRules("blockquote");
    for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
      pos = state2.bMarks[nextLine] + state2.tShift[nextLine];
      max = state2.eMarks[nextLine];
      if (pos >= max) {
        break;
      }
      if (state2.src.charCodeAt(pos++) === 62) {
        if (state2.src.charCodeAt(pos) === 32) {
          pos++;
        }
        oldBMarks.push(state2.bMarks[nextLine]);
        state2.bMarks[nextLine] = pos;
        pos = pos < max ? state2.skipSpaces(pos) : pos;
        lastLineEmpty = pos >= max;
        oldTShift.push(state2.tShift[nextLine]);
        state2.tShift[nextLine] = pos - state2.bMarks[nextLine];
        continue;
      }
      if (lastLineEmpty) {
        break;
      }
      terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state2, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        break;
      }
      oldBMarks.push(state2.bMarks[nextLine]);
      oldTShift.push(state2.tShift[nextLine]);
      state2.tShift[nextLine] = -1337;
    }
    oldParentType = state2.parentType;
    state2.parentType = "blockquote";
    state2.tokens.push({
      type: "blockquote_open",
      lines: lines = [startLine, 0],
      level: state2.level++
    });
    state2.parser.tokenize(state2, startLine, nextLine);
    state2.tokens.push({
      type: "blockquote_close",
      level: --state2.level
    });
    state2.parentType = oldParentType;
    lines[1] = state2.line;
    for (i = 0; i < oldTShift.length; i++) {
      state2.bMarks[i + startLine] = oldBMarks[i];
      state2.tShift[i + startLine] = oldTShift[i];
    }
    state2.blkIndent = oldIndent;
    return true;
  }
  function hr(state2, startLine, endLine, silent) {
    var marker, cnt, ch, pos = state2.bMarks[startLine], max = state2.eMarks[startLine];
    pos += state2.tShift[startLine];
    if (pos > max) {
      return false;
    }
    marker = state2.src.charCodeAt(pos++);
    if (marker !== 42 && marker !== 45 && marker !== 95) {
      return false;
    }
    cnt = 1;
    while (pos < max) {
      ch = state2.src.charCodeAt(pos++);
      if (ch !== marker && ch !== 32) {
        return false;
      }
      if (ch === marker) {
        cnt++;
      }
    }
    if (cnt < 3) {
      return false;
    }
    if (silent) {
      return true;
    }
    state2.line = startLine + 1;
    state2.tokens.push({
      type: "hr",
      lines: [startLine, state2.line],
      level: state2.level
    });
    return true;
  }
  function skipBulletListMarker(state2, startLine) {
    var marker, pos, max;
    pos = state2.bMarks[startLine] + state2.tShift[startLine];
    max = state2.eMarks[startLine];
    if (pos >= max) {
      return -1;
    }
    marker = state2.src.charCodeAt(pos++);
    if (marker !== 42 && marker !== 45 && marker !== 43) {
      return -1;
    }
    if (pos < max && state2.src.charCodeAt(pos) !== 32) {
      return -1;
    }
    return pos;
  }
  function skipOrderedListMarker(state2, startLine) {
    var ch, pos = state2.bMarks[startLine] + state2.tShift[startLine], max = state2.eMarks[startLine];
    if (pos + 1 >= max) {
      return -1;
    }
    ch = state2.src.charCodeAt(pos++);
    if (ch < 48 || ch > 57) {
      return -1;
    }
    for (; ; ) {
      if (pos >= max) {
        return -1;
      }
      ch = state2.src.charCodeAt(pos++);
      if (ch >= 48 && ch <= 57) {
        continue;
      }
      if (ch === 41 || ch === 46) {
        break;
      }
      return -1;
    }
    if (pos < max && state2.src.charCodeAt(pos) !== 32) {
      return -1;
    }
    return pos;
  }
  function markTightParagraphs(state2, idx) {
    var i, l, level = state2.level + 2;
    for (i = idx + 2, l = state2.tokens.length - 2; i < l; i++) {
      if (state2.tokens[i].level === level && state2.tokens[i].type === "paragraph_open") {
        state2.tokens[i + 2].tight = true;
        state2.tokens[i].tight = true;
        i += 2;
      }
    }
  }
  function list(state2, startLine, endLine, silent) {
    var nextLine, indent, oldTShift, oldIndent, oldTight, oldParentType, start, posAfterMarker, max, indentAfterMarker, markerValue, markerCharCode, isOrdered, contentStart, listTokIdx, prevEmptyEnd, listLines, itemLines, tight = true, terminatorRules, i, l, terminate;
    if ((posAfterMarker = skipOrderedListMarker(state2, startLine)) >= 0) {
      isOrdered = true;
    } else if ((posAfterMarker = skipBulletListMarker(state2, startLine)) >= 0) {
      isOrdered = false;
    } else {
      return false;
    }
    if (state2.level >= state2.options.maxNesting) {
      return false;
    }
    markerCharCode = state2.src.charCodeAt(posAfterMarker - 1);
    if (silent) {
      return true;
    }
    listTokIdx = state2.tokens.length;
    if (isOrdered) {
      start = state2.bMarks[startLine] + state2.tShift[startLine];
      markerValue = Number(state2.src.substr(start, posAfterMarker - start - 1));
      state2.tokens.push({
        type: "ordered_list_open",
        order: markerValue,
        lines: listLines = [startLine, 0],
        level: state2.level++
      });
    } else {
      state2.tokens.push({
        type: "bullet_list_open",
        lines: listLines = [startLine, 0],
        level: state2.level++
      });
    }
    nextLine = startLine;
    prevEmptyEnd = false;
    terminatorRules = state2.parser.ruler.getRules("list");
    while (nextLine < endLine) {
      contentStart = state2.skipSpaces(posAfterMarker);
      max = state2.eMarks[nextLine];
      if (contentStart >= max) {
        indentAfterMarker = 1;
      } else {
        indentAfterMarker = contentStart - posAfterMarker;
      }
      if (indentAfterMarker > 4) {
        indentAfterMarker = 1;
      }
      if (indentAfterMarker < 1) {
        indentAfterMarker = 1;
      }
      indent = posAfterMarker - state2.bMarks[nextLine] + indentAfterMarker;
      state2.tokens.push({
        type: "list_item_open",
        lines: itemLines = [startLine, 0],
        level: state2.level++
      });
      oldIndent = state2.blkIndent;
      oldTight = state2.tight;
      oldTShift = state2.tShift[startLine];
      oldParentType = state2.parentType;
      state2.tShift[startLine] = contentStart - state2.bMarks[startLine];
      state2.blkIndent = indent;
      state2.tight = true;
      state2.parentType = "list";
      state2.parser.tokenize(state2, startLine, endLine, true);
      if (!state2.tight || prevEmptyEnd) {
        tight = false;
      }
      prevEmptyEnd = state2.line - startLine > 1 && state2.isEmpty(state2.line - 1);
      state2.blkIndent = oldIndent;
      state2.tShift[startLine] = oldTShift;
      state2.tight = oldTight;
      state2.parentType = oldParentType;
      state2.tokens.push({
        type: "list_item_close",
        level: --state2.level
      });
      nextLine = startLine = state2.line;
      itemLines[1] = nextLine;
      contentStart = state2.bMarks[startLine];
      if (nextLine >= endLine) {
        break;
      }
      if (state2.isEmpty(nextLine)) {
        break;
      }
      if (state2.tShift[nextLine] < state2.blkIndent) {
        break;
      }
      terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state2, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        break;
      }
      if (isOrdered) {
        posAfterMarker = skipOrderedListMarker(state2, nextLine);
        if (posAfterMarker < 0) {
          break;
        }
      } else {
        posAfterMarker = skipBulletListMarker(state2, nextLine);
        if (posAfterMarker < 0) {
          break;
        }
      }
      if (markerCharCode !== state2.src.charCodeAt(posAfterMarker - 1)) {
        break;
      }
    }
    state2.tokens.push({
      type: isOrdered ? "ordered_list_close" : "bullet_list_close",
      level: --state2.level
    });
    listLines[1] = nextLine;
    state2.line = nextLine;
    if (tight) {
      markTightParagraphs(state2, listTokIdx);
    }
    return true;
  }
  function footnote(state2, startLine, endLine, silent) {
    var oldBMark, oldTShift, oldParentType, pos, label, start = state2.bMarks[startLine] + state2.tShift[startLine], max = state2.eMarks[startLine];
    if (start + 4 > max) {
      return false;
    }
    if (state2.src.charCodeAt(start) !== 91) {
      return false;
    }
    if (state2.src.charCodeAt(start + 1) !== 94) {
      return false;
    }
    if (state2.level >= state2.options.maxNesting) {
      return false;
    }
    for (pos = start + 2; pos < max; pos++) {
      if (state2.src.charCodeAt(pos) === 32) {
        return false;
      }
      if (state2.src.charCodeAt(pos) === 93) {
        break;
      }
    }
    if (pos === start + 2) {
      return false;
    }
    if (pos + 1 >= max || state2.src.charCodeAt(++pos) !== 58) {
      return false;
    }
    if (silent) {
      return true;
    }
    pos++;
    if (!state2.env.footnotes) {
      state2.env.footnotes = {};
    }
    if (!state2.env.footnotes.refs) {
      state2.env.footnotes.refs = {};
    }
    label = state2.src.slice(start + 2, pos - 2);
    state2.env.footnotes.refs[":" + label] = -1;
    state2.tokens.push({
      type: "footnote_reference_open",
      label,
      level: state2.level++
    });
    oldBMark = state2.bMarks[startLine];
    oldTShift = state2.tShift[startLine];
    oldParentType = state2.parentType;
    state2.tShift[startLine] = state2.skipSpaces(pos) - pos;
    state2.bMarks[startLine] = pos;
    state2.blkIndent += 4;
    state2.parentType = "footnote";
    if (state2.tShift[startLine] < state2.blkIndent) {
      state2.tShift[startLine] += state2.blkIndent;
      state2.bMarks[startLine] -= state2.blkIndent;
    }
    state2.parser.tokenize(state2, startLine, endLine, true);
    state2.parentType = oldParentType;
    state2.blkIndent -= 4;
    state2.tShift[startLine] = oldTShift;
    state2.bMarks[startLine] = oldBMark;
    state2.tokens.push({
      type: "footnote_reference_close",
      level: --state2.level
    });
    return true;
  }
  function heading(state2, startLine, endLine, silent) {
    var ch, level, tmp, pos = state2.bMarks[startLine] + state2.tShift[startLine], max = state2.eMarks[startLine];
    if (pos >= max) {
      return false;
    }
    ch = state2.src.charCodeAt(pos);
    if (ch !== 35 || pos >= max) {
      return false;
    }
    level = 1;
    ch = state2.src.charCodeAt(++pos);
    while (ch === 35 && pos < max && level <= 6) {
      level++;
      ch = state2.src.charCodeAt(++pos);
    }
    if (level > 6 || pos < max && ch !== 32) {
      return false;
    }
    if (silent) {
      return true;
    }
    max = state2.skipCharsBack(max, 32, pos);
    tmp = state2.skipCharsBack(max, 35, pos);
    if (tmp > pos && state2.src.charCodeAt(tmp - 1) === 32) {
      max = tmp;
    }
    state2.line = startLine + 1;
    state2.tokens.push({
      type: "heading_open",
      hLevel: level,
      lines: [startLine, state2.line],
      level: state2.level
    });
    if (pos < max) {
      state2.tokens.push({
        type: "inline",
        content: state2.src.slice(pos, max).trim(),
        level: state2.level + 1,
        lines: [startLine, state2.line],
        children: []
      });
    }
    state2.tokens.push({ type: "heading_close", hLevel: level, level: state2.level });
    return true;
  }
  function lheading(state2, startLine, endLine) {
    var marker, pos, max, next = startLine + 1;
    if (next >= endLine) {
      return false;
    }
    if (state2.tShift[next] < state2.blkIndent) {
      return false;
    }
    if (state2.tShift[next] - state2.blkIndent > 3) {
      return false;
    }
    pos = state2.bMarks[next] + state2.tShift[next];
    max = state2.eMarks[next];
    if (pos >= max) {
      return false;
    }
    marker = state2.src.charCodeAt(pos);
    if (marker !== 45 && marker !== 61) {
      return false;
    }
    pos = state2.skipChars(pos, marker);
    pos = state2.skipSpaces(pos);
    if (pos < max) {
      return false;
    }
    pos = state2.bMarks[startLine] + state2.tShift[startLine];
    state2.line = next + 1;
    state2.tokens.push({
      type: "heading_open",
      hLevel: marker === 61 ? 1 : 2,
      lines: [startLine, state2.line],
      level: state2.level
    });
    state2.tokens.push({
      type: "inline",
      content: state2.src.slice(pos, state2.eMarks[startLine]).trim(),
      level: state2.level + 1,
      lines: [startLine, state2.line - 1],
      children: []
    });
    state2.tokens.push({
      type: "heading_close",
      hLevel: marker === 61 ? 1 : 2,
      level: state2.level
    });
    return true;
  }
  var html_blocks = {};
  [
    "article",
    "aside",
    "button",
    "blockquote",
    "body",
    "canvas",
    "caption",
    "col",
    "colgroup",
    "dd",
    "div",
    "dl",
    "dt",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "iframe",
    "li",
    "map",
    "object",
    "ol",
    "output",
    "p",
    "pre",
    "progress",
    "script",
    "section",
    "style",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "tr",
    "thead",
    "ul",
    "video"
  ].forEach(function(name) {
    html_blocks[name] = true;
  });
  var HTML_TAG_OPEN_RE = /^<([a-zA-Z]{1,15})[\s\/>]/;
  var HTML_TAG_CLOSE_RE = /^<\/([a-zA-Z]{1,15})[\s>]/;
  function isLetter$1(ch) {
    var lc = ch | 32;
    return lc >= 97 && lc <= 122;
  }
  function htmlblock(state2, startLine, endLine, silent) {
    var ch, match, nextLine, pos = state2.bMarks[startLine], max = state2.eMarks[startLine], shift = state2.tShift[startLine];
    pos += shift;
    if (!state2.options.html) {
      return false;
    }
    if (shift > 3 || pos + 2 >= max) {
      return false;
    }
    if (state2.src.charCodeAt(pos) !== 60) {
      return false;
    }
    ch = state2.src.charCodeAt(pos + 1);
    if (ch === 33 || ch === 63) {
      if (silent) {
        return true;
      }
    } else if (ch === 47 || isLetter$1(ch)) {
      if (ch === 47) {
        match = state2.src.slice(pos, max).match(HTML_TAG_CLOSE_RE);
        if (!match) {
          return false;
        }
      } else {
        match = state2.src.slice(pos, max).match(HTML_TAG_OPEN_RE);
        if (!match) {
          return false;
        }
      }
      if (html_blocks[match[1].toLowerCase()] !== true) {
        return false;
      }
      if (silent) {
        return true;
      }
    } else {
      return false;
    }
    nextLine = startLine + 1;
    while (nextLine < state2.lineMax && !state2.isEmpty(nextLine)) {
      nextLine++;
    }
    state2.line = nextLine;
    state2.tokens.push({
      type: "htmlblock",
      level: state2.level,
      lines: [startLine, state2.line],
      content: state2.getLines(startLine, nextLine, 0, true)
    });
    return true;
  }
  function getLine(state2, line) {
    var pos = state2.bMarks[line] + state2.blkIndent, max = state2.eMarks[line];
    return state2.src.substr(pos, max - pos);
  }
  function table(state2, startLine, endLine, silent) {
    var ch, lineText, pos, i, nextLine, rows, cell, aligns, t2, tableLines, tbodyLines;
    if (startLine + 2 > endLine) {
      return false;
    }
    nextLine = startLine + 1;
    if (state2.tShift[nextLine] < state2.blkIndent) {
      return false;
    }
    pos = state2.bMarks[nextLine] + state2.tShift[nextLine];
    if (pos >= state2.eMarks[nextLine]) {
      return false;
    }
    ch = state2.src.charCodeAt(pos);
    if (ch !== 124 && ch !== 45 && ch !== 58) {
      return false;
    }
    lineText = getLine(state2, startLine + 1);
    if (!/^[-:| ]+$/.test(lineText)) {
      return false;
    }
    rows = lineText.split("|");
    if (rows <= 2) {
      return false;
    }
    aligns = [];
    for (i = 0; i < rows.length; i++) {
      t2 = rows[i].trim();
      if (!t2) {
        if (i === 0 || i === rows.length - 1) {
          continue;
        } else {
          return false;
        }
      }
      if (!/^:?-+:?$/.test(t2)) {
        return false;
      }
      if (t2.charCodeAt(t2.length - 1) === 58) {
        aligns.push(t2.charCodeAt(0) === 58 ? "center" : "right");
      } else if (t2.charCodeAt(0) === 58) {
        aligns.push("left");
      } else {
        aligns.push("");
      }
    }
    lineText = getLine(state2, startLine).trim();
    if (lineText.indexOf("|") === -1) {
      return false;
    }
    rows = lineText.replace(/^\||\|$/g, "").split("|");
    if (aligns.length !== rows.length) {
      return false;
    }
    if (silent) {
      return true;
    }
    state2.tokens.push({
      type: "table_open",
      lines: tableLines = [startLine, 0],
      level: state2.level++
    });
    state2.tokens.push({
      type: "thead_open",
      lines: [startLine, startLine + 1],
      level: state2.level++
    });
    state2.tokens.push({
      type: "tr_open",
      lines: [startLine, startLine + 1],
      level: state2.level++
    });
    for (i = 0; i < rows.length; i++) {
      state2.tokens.push({
        type: "th_open",
        align: aligns[i],
        lines: [startLine, startLine + 1],
        level: state2.level++
      });
      state2.tokens.push({
        type: "inline",
        content: rows[i].trim(),
        lines: [startLine, startLine + 1],
        level: state2.level,
        children: []
      });
      state2.tokens.push({ type: "th_close", level: --state2.level });
    }
    state2.tokens.push({ type: "tr_close", level: --state2.level });
    state2.tokens.push({ type: "thead_close", level: --state2.level });
    state2.tokens.push({
      type: "tbody_open",
      lines: tbodyLines = [startLine + 2, 0],
      level: state2.level++
    });
    for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
      if (state2.tShift[nextLine] < state2.blkIndent) {
        break;
      }
      lineText = getLine(state2, nextLine).trim();
      if (lineText.indexOf("|") === -1) {
        break;
      }
      rows = lineText.replace(/^\||\|$/g, "").split("|");
      state2.tokens.push({ type: "tr_open", level: state2.level++ });
      for (i = 0; i < rows.length; i++) {
        state2.tokens.push({ type: "td_open", align: aligns[i], level: state2.level++ });
        cell = rows[i].substring(
          rows[i].charCodeAt(0) === 124 ? 1 : 0,
          rows[i].charCodeAt(rows[i].length - 1) === 124 ? rows[i].length - 1 : rows[i].length
        ).trim();
        state2.tokens.push({
          type: "inline",
          content: cell,
          level: state2.level,
          children: []
        });
        state2.tokens.push({ type: "td_close", level: --state2.level });
      }
      state2.tokens.push({ type: "tr_close", level: --state2.level });
    }
    state2.tokens.push({ type: "tbody_close", level: --state2.level });
    state2.tokens.push({ type: "table_close", level: --state2.level });
    tableLines[1] = tbodyLines[1] = nextLine;
    state2.line = nextLine;
    return true;
  }
  function skipMarker(state2, line) {
    var pos, marker, start = state2.bMarks[line] + state2.tShift[line], max = state2.eMarks[line];
    if (start >= max) {
      return -1;
    }
    marker = state2.src.charCodeAt(start++);
    if (marker !== 126 && marker !== 58) {
      return -1;
    }
    pos = state2.skipSpaces(start);
    if (start === pos) {
      return -1;
    }
    if (pos >= max) {
      return -1;
    }
    return pos;
  }
  function markTightParagraphs$1(state2, idx) {
    var i, l, level = state2.level + 2;
    for (i = idx + 2, l = state2.tokens.length - 2; i < l; i++) {
      if (state2.tokens[i].level === level && state2.tokens[i].type === "paragraph_open") {
        state2.tokens[i + 2].tight = true;
        state2.tokens[i].tight = true;
        i += 2;
      }
    }
  }
  function deflist(state2, startLine, endLine, silent) {
    var contentStart, ddLine, dtLine, itemLines, listLines, listTokIdx, nextLine, oldIndent, oldDDIndent, oldParentType, oldTShift, oldTight, prevEmptyEnd, tight;
    if (silent) {
      if (state2.ddIndent < 0) {
        return false;
      }
      return skipMarker(state2, startLine) >= 0;
    }
    nextLine = startLine + 1;
    if (state2.isEmpty(nextLine)) {
      if (++nextLine > endLine) {
        return false;
      }
    }
    if (state2.tShift[nextLine] < state2.blkIndent) {
      return false;
    }
    contentStart = skipMarker(state2, nextLine);
    if (contentStart < 0) {
      return false;
    }
    if (state2.level >= state2.options.maxNesting) {
      return false;
    }
    listTokIdx = state2.tokens.length;
    state2.tokens.push({
      type: "dl_open",
      lines: listLines = [startLine, 0],
      level: state2.level++
    });
    dtLine = startLine;
    ddLine = nextLine;
    OUTER:
      for (; ; ) {
        tight = true;
        prevEmptyEnd = false;
        state2.tokens.push({
          type: "dt_open",
          lines: [dtLine, dtLine],
          level: state2.level++
        });
        state2.tokens.push({
          type: "inline",
          content: state2.getLines(dtLine, dtLine + 1, state2.blkIndent, false).trim(),
          level: state2.level + 1,
          lines: [dtLine, dtLine],
          children: []
        });
        state2.tokens.push({
          type: "dt_close",
          level: --state2.level
        });
        for (; ; ) {
          state2.tokens.push({
            type: "dd_open",
            lines: itemLines = [nextLine, 0],
            level: state2.level++
          });
          oldTight = state2.tight;
          oldDDIndent = state2.ddIndent;
          oldIndent = state2.blkIndent;
          oldTShift = state2.tShift[ddLine];
          oldParentType = state2.parentType;
          state2.blkIndent = state2.ddIndent = state2.tShift[ddLine] + 2;
          state2.tShift[ddLine] = contentStart - state2.bMarks[ddLine];
          state2.tight = true;
          state2.parentType = "deflist";
          state2.parser.tokenize(state2, ddLine, endLine, true);
          if (!state2.tight || prevEmptyEnd) {
            tight = false;
          }
          prevEmptyEnd = state2.line - ddLine > 1 && state2.isEmpty(state2.line - 1);
          state2.tShift[ddLine] = oldTShift;
          state2.tight = oldTight;
          state2.parentType = oldParentType;
          state2.blkIndent = oldIndent;
          state2.ddIndent = oldDDIndent;
          state2.tokens.push({
            type: "dd_close",
            level: --state2.level
          });
          itemLines[1] = nextLine = state2.line;
          if (nextLine >= endLine) {
            break OUTER;
          }
          if (state2.tShift[nextLine] < state2.blkIndent) {
            break OUTER;
          }
          contentStart = skipMarker(state2, nextLine);
          if (contentStart < 0) {
            break;
          }
          ddLine = nextLine;
        }
        if (nextLine >= endLine) {
          break;
        }
        dtLine = nextLine;
        if (state2.isEmpty(dtLine)) {
          break;
        }
        if (state2.tShift[dtLine] < state2.blkIndent) {
          break;
        }
        ddLine = dtLine + 1;
        if (ddLine >= endLine) {
          break;
        }
        if (state2.isEmpty(ddLine)) {
          ddLine++;
        }
        if (ddLine >= endLine) {
          break;
        }
        if (state2.tShift[ddLine] < state2.blkIndent) {
          break;
        }
        contentStart = skipMarker(state2, ddLine);
        if (contentStart < 0) {
          break;
        }
      }
    state2.tokens.push({
      type: "dl_close",
      level: --state2.level
    });
    listLines[1] = nextLine;
    state2.line = nextLine;
    if (tight) {
      markTightParagraphs$1(state2, listTokIdx);
    }
    return true;
  }
  function paragraph(state2, startLine) {
    var endLine, content, terminate, i, l, nextLine = startLine + 1, terminatorRules;
    endLine = state2.lineMax;
    if (nextLine < endLine && !state2.isEmpty(nextLine)) {
      terminatorRules = state2.parser.ruler.getRules("paragraph");
      for (; nextLine < endLine && !state2.isEmpty(nextLine); nextLine++) {
        if (state2.tShift[nextLine] - state2.blkIndent > 3) {
          continue;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state2, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
      }
    }
    content = state2.getLines(startLine, nextLine, state2.blkIndent, false).trim();
    state2.line = nextLine;
    if (content.length) {
      state2.tokens.push({
        type: "paragraph_open",
        tight: false,
        lines: [startLine, state2.line],
        level: state2.level
      });
      state2.tokens.push({
        type: "inline",
        content,
        level: state2.level + 1,
        lines: [startLine, state2.line],
        children: []
      });
      state2.tokens.push({
        type: "paragraph_close",
        tight: false,
        level: state2.level
      });
    }
    return true;
  }
  var _rules$1 = [
    ["code", code],
    ["fences", fences, ["paragraph", "blockquote", "list"]],
    ["blockquote", blockquote, ["paragraph", "blockquote", "list"]],
    ["hr", hr, ["paragraph", "blockquote", "list"]],
    ["list", list, ["paragraph", "blockquote"]],
    ["footnote", footnote, ["paragraph"]],
    ["heading", heading, ["paragraph", "blockquote"]],
    ["lheading", lheading],
    ["htmlblock", htmlblock, ["paragraph", "blockquote"]],
    ["table", table, ["paragraph"]],
    ["deflist", deflist, ["paragraph"]],
    ["paragraph", paragraph]
  ];
  function ParserBlock() {
    this.ruler = new Ruler();
    for (var i = 0; i < _rules$1.length; i++) {
      this.ruler.push(_rules$1[i][0], _rules$1[i][1], {
        alt: (_rules$1[i][2] || []).slice()
      });
    }
  }
  ParserBlock.prototype.tokenize = function(state2, startLine, endLine) {
    var rules2 = this.ruler.getRules("");
    var len = rules2.length;
    var line = startLine;
    var hasEmptyLines = false;
    var ok, i;
    while (line < endLine) {
      state2.line = line = state2.skipEmptyLines(line);
      if (line >= endLine) {
        break;
      }
      if (state2.tShift[line] < state2.blkIndent) {
        break;
      }
      for (i = 0; i < len; i++) {
        ok = rules2[i](state2, line, endLine, false);
        if (ok) {
          break;
        }
      }
      state2.tight = !hasEmptyLines;
      if (state2.isEmpty(state2.line - 1)) {
        hasEmptyLines = true;
      }
      line = state2.line;
      if (line < endLine && state2.isEmpty(line)) {
        hasEmptyLines = true;
        line++;
        if (line < endLine && state2.parentType === "list" && state2.isEmpty(line)) {
          break;
        }
        state2.line = line;
      }
    }
  };
  var TABS_SCAN_RE = /[\n\t]/g;
  var NEWLINES_RE = /\r[\n\u0085]|[\u2424\u2028\u0085]/g;
  var SPACES_RE = /\u00a0/g;
  ParserBlock.prototype.parse = function(str, options, env, outTokens) {
    var state2, lineStart = 0, lastTabPos = 0;
    if (!str) {
      return [];
    }
    str = str.replace(SPACES_RE, " ");
    str = str.replace(NEWLINES_RE, "\n");
    if (str.indexOf("	") >= 0) {
      str = str.replace(TABS_SCAN_RE, function(match, offset) {
        var result2;
        if (str.charCodeAt(offset) === 10) {
          lineStart = offset + 1;
          lastTabPos = 0;
          return match;
        }
        result2 = "    ".slice((offset - lineStart - lastTabPos) % 4);
        lastTabPos = offset - lineStart + 1;
        return result2;
      });
    }
    state2 = new StateBlock(str, this, options, env, outTokens);
    this.tokenize(state2, state2.line, state2.lineMax);
  };
  function isTerminatorChar(ch) {
    switch (ch) {
      case 10:
      case 92:
      case 96:
      case 42:
      case 95:
      case 94:
      case 91:
      case 93:
      case 33:
      case 38:
      case 60:
      case 62:
      case 123:
      case 125:
      case 36:
      case 37:
      case 64:
      case 126:
      case 43:
      case 61:
      case 58:
        return true;
      default:
        return false;
    }
  }
  function text2(state2, silent) {
    var pos = state2.pos;
    while (pos < state2.posMax && !isTerminatorChar(state2.src.charCodeAt(pos))) {
      pos++;
    }
    if (pos === state2.pos) {
      return false;
    }
    if (!silent) {
      state2.pending += state2.src.slice(state2.pos, pos);
    }
    state2.pos = pos;
    return true;
  }
  function newline(state2, silent) {
    var pmax, max, pos = state2.pos;
    if (state2.src.charCodeAt(pos) !== 10) {
      return false;
    }
    pmax = state2.pending.length - 1;
    max = state2.posMax;
    if (!silent) {
      if (pmax >= 0 && state2.pending.charCodeAt(pmax) === 32) {
        if (pmax >= 1 && state2.pending.charCodeAt(pmax - 1) === 32) {
          for (var i = pmax - 2; i >= 0; i--) {
            if (state2.pending.charCodeAt(i) !== 32) {
              state2.pending = state2.pending.substring(0, i + 1);
              break;
            }
          }
          state2.push({
            type: "hardbreak",
            level: state2.level
          });
        } else {
          state2.pending = state2.pending.slice(0, -1);
          state2.push({
            type: "softbreak",
            level: state2.level
          });
        }
      } else {
        state2.push({
          type: "softbreak",
          level: state2.level
        });
      }
    }
    pos++;
    while (pos < max && state2.src.charCodeAt(pos) === 32) {
      pos++;
    }
    state2.pos = pos;
    return true;
  }
  var ESCAPED = [];
  for (i = 0; i < 256; i++) {
    ESCAPED.push(0);
  }
  var i;
  "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch) {
    ESCAPED[ch.charCodeAt(0)] = 1;
  });
  function escape(state2, silent) {
    var ch, pos = state2.pos, max = state2.posMax;
    if (state2.src.charCodeAt(pos) !== 92) {
      return false;
    }
    pos++;
    if (pos < max) {
      ch = state2.src.charCodeAt(pos);
      if (ch < 256 && ESCAPED[ch] !== 0) {
        if (!silent) {
          state2.pending += state2.src[pos];
        }
        state2.pos += 2;
        return true;
      }
      if (ch === 10) {
        if (!silent) {
          state2.push({
            type: "hardbreak",
            level: state2.level
          });
        }
        pos++;
        while (pos < max && state2.src.charCodeAt(pos) === 32) {
          pos++;
        }
        state2.pos = pos;
        return true;
      }
    }
    if (!silent) {
      state2.pending += "\\";
    }
    state2.pos++;
    return true;
  }
  function backticks(state2, silent) {
    var start, max, marker, matchStart, matchEnd, pos = state2.pos, ch = state2.src.charCodeAt(pos);
    if (ch !== 96) {
      return false;
    }
    start = pos;
    pos++;
    max = state2.posMax;
    while (pos < max && state2.src.charCodeAt(pos) === 96) {
      pos++;
    }
    marker = state2.src.slice(start, pos);
    matchStart = matchEnd = pos;
    while ((matchStart = state2.src.indexOf("`", matchEnd)) !== -1) {
      matchEnd = matchStart + 1;
      while (matchEnd < max && state2.src.charCodeAt(matchEnd) === 96) {
        matchEnd++;
      }
      if (matchEnd - matchStart === marker.length) {
        if (!silent) {
          state2.push({
            type: "code",
            content: state2.src.slice(pos, matchStart).replace(/[ \n]+/g, " ").trim(),
            block: false,
            level: state2.level
          });
        }
        state2.pos = matchEnd;
        return true;
      }
    }
    if (!silent) {
      state2.pending += marker;
    }
    state2.pos += marker.length;
    return true;
  }
  function del(state2, silent) {
    var found, pos, stack, max = state2.posMax, start = state2.pos, lastChar, nextChar;
    if (state2.src.charCodeAt(start) !== 126) {
      return false;
    }
    if (silent) {
      return false;
    }
    if (start + 4 >= max) {
      return false;
    }
    if (state2.src.charCodeAt(start + 1) !== 126) {
      return false;
    }
    if (state2.level >= state2.options.maxNesting) {
      return false;
    }
    lastChar = start > 0 ? state2.src.charCodeAt(start - 1) : -1;
    nextChar = state2.src.charCodeAt(start + 2);
    if (lastChar === 126) {
      return false;
    }
    if (nextChar === 126) {
      return false;
    }
    if (nextChar === 32 || nextChar === 10) {
      return false;
    }
    pos = start + 2;
    while (pos < max && state2.src.charCodeAt(pos) === 126) {
      pos++;
    }
    if (pos > start + 3) {
      state2.pos += pos - start;
      if (!silent) {
        state2.pending += state2.src.slice(start, pos);
      }
      return true;
    }
    state2.pos = start + 2;
    stack = 1;
    while (state2.pos + 1 < max) {
      if (state2.src.charCodeAt(state2.pos) === 126) {
        if (state2.src.charCodeAt(state2.pos + 1) === 126) {
          lastChar = state2.src.charCodeAt(state2.pos - 1);
          nextChar = state2.pos + 2 < max ? state2.src.charCodeAt(state2.pos + 2) : -1;
          if (nextChar !== 126 && lastChar !== 126) {
            if (lastChar !== 32 && lastChar !== 10) {
              stack--;
            } else if (nextChar !== 32 && nextChar !== 10) {
              stack++;
            }
            if (stack <= 0) {
              found = true;
              break;
            }
          }
        }
      }
      state2.parser.skipToken(state2);
    }
    if (!found) {
      state2.pos = start;
      return false;
    }
    state2.posMax = state2.pos;
    state2.pos = start + 2;
    if (!silent) {
      state2.push({ type: "del_open", level: state2.level++ });
      state2.parser.tokenize(state2);
      state2.push({ type: "del_close", level: --state2.level });
    }
    state2.pos = state2.posMax + 2;
    state2.posMax = max;
    return true;
  }
  function ins(state2, silent) {
    var found, pos, stack, max = state2.posMax, start = state2.pos, lastChar, nextChar;
    if (state2.src.charCodeAt(start) !== 43) {
      return false;
    }
    if (silent) {
      return false;
    }
    if (start + 4 >= max) {
      return false;
    }
    if (state2.src.charCodeAt(start + 1) !== 43) {
      return false;
    }
    if (state2.level >= state2.options.maxNesting) {
      return false;
    }
    lastChar = start > 0 ? state2.src.charCodeAt(start - 1) : -1;
    nextChar = state2.src.charCodeAt(start + 2);
    if (lastChar === 43) {
      return false;
    }
    if (nextChar === 43) {
      return false;
    }
    if (nextChar === 32 || nextChar === 10) {
      return false;
    }
    pos = start + 2;
    while (pos < max && state2.src.charCodeAt(pos) === 43) {
      pos++;
    }
    if (pos !== start + 2) {
      state2.pos += pos - start;
      if (!silent) {
        state2.pending += state2.src.slice(start, pos);
      }
      return true;
    }
    state2.pos = start + 2;
    stack = 1;
    while (state2.pos + 1 < max) {
      if (state2.src.charCodeAt(state2.pos) === 43) {
        if (state2.src.charCodeAt(state2.pos + 1) === 43) {
          lastChar = state2.src.charCodeAt(state2.pos - 1);
          nextChar = state2.pos + 2 < max ? state2.src.charCodeAt(state2.pos + 2) : -1;
          if (nextChar !== 43 && lastChar !== 43) {
            if (lastChar !== 32 && lastChar !== 10) {
              stack--;
            } else if (nextChar !== 32 && nextChar !== 10) {
              stack++;
            }
            if (stack <= 0) {
              found = true;
              break;
            }
          }
        }
      }
      state2.parser.skipToken(state2);
    }
    if (!found) {
      state2.pos = start;
      return false;
    }
    state2.posMax = state2.pos;
    state2.pos = start + 2;
    if (!silent) {
      state2.push({ type: "ins_open", level: state2.level++ });
      state2.parser.tokenize(state2);
      state2.push({ type: "ins_close", level: --state2.level });
    }
    state2.pos = state2.posMax + 2;
    state2.posMax = max;
    return true;
  }
  function mark(state2, silent) {
    var found, pos, stack, max = state2.posMax, start = state2.pos, lastChar, nextChar;
    if (state2.src.charCodeAt(start) !== 61) {
      return false;
    }
    if (silent) {
      return false;
    }
    if (start + 4 >= max) {
      return false;
    }
    if (state2.src.charCodeAt(start + 1) !== 61) {
      return false;
    }
    if (state2.level >= state2.options.maxNesting) {
      return false;
    }
    lastChar = start > 0 ? state2.src.charCodeAt(start - 1) : -1;
    nextChar = state2.src.charCodeAt(start + 2);
    if (lastChar === 61) {
      return false;
    }
    if (nextChar === 61) {
      return false;
    }
    if (nextChar === 32 || nextChar === 10) {
      return false;
    }
    pos = start + 2;
    while (pos < max && state2.src.charCodeAt(pos) === 61) {
      pos++;
    }
    if (pos !== start + 2) {
      state2.pos += pos - start;
      if (!silent) {
        state2.pending += state2.src.slice(start, pos);
      }
      return true;
    }
    state2.pos = start + 2;
    stack = 1;
    while (state2.pos + 1 < max) {
      if (state2.src.charCodeAt(state2.pos) === 61) {
        if (state2.src.charCodeAt(state2.pos + 1) === 61) {
          lastChar = state2.src.charCodeAt(state2.pos - 1);
          nextChar = state2.pos + 2 < max ? state2.src.charCodeAt(state2.pos + 2) : -1;
          if (nextChar !== 61 && lastChar !== 61) {
            if (lastChar !== 32 && lastChar !== 10) {
              stack--;
            } else if (nextChar !== 32 && nextChar !== 10) {
              stack++;
            }
            if (stack <= 0) {
              found = true;
              break;
            }
          }
        }
      }
      state2.parser.skipToken(state2);
    }
    if (!found) {
      state2.pos = start;
      return false;
    }
    state2.posMax = state2.pos;
    state2.pos = start + 2;
    if (!silent) {
      state2.push({ type: "mark_open", level: state2.level++ });
      state2.parser.tokenize(state2);
      state2.push({ type: "mark_close", level: --state2.level });
    }
    state2.pos = state2.posMax + 2;
    state2.posMax = max;
    return true;
  }
  function isAlphaNum(code2) {
    return code2 >= 48 && code2 <= 57 || code2 >= 65 && code2 <= 90 || code2 >= 97 && code2 <= 122;
  }
  function scanDelims(state2, start) {
    var pos = start, lastChar, nextChar, count, can_open = true, can_close = true, max = state2.posMax, marker = state2.src.charCodeAt(start);
    lastChar = start > 0 ? state2.src.charCodeAt(start - 1) : -1;
    while (pos < max && state2.src.charCodeAt(pos) === marker) {
      pos++;
    }
    if (pos >= max) {
      can_open = false;
    }
    count = pos - start;
    if (count >= 4) {
      can_open = can_close = false;
    } else {
      nextChar = pos < max ? state2.src.charCodeAt(pos) : -1;
      if (nextChar === 32 || nextChar === 10) {
        can_open = false;
      }
      if (lastChar === 32 || lastChar === 10) {
        can_close = false;
      }
      if (marker === 95) {
        if (isAlphaNum(lastChar)) {
          can_open = false;
        }
        if (isAlphaNum(nextChar)) {
          can_close = false;
        }
      }
    }
    return {
      can_open,
      can_close,
      delims: count
    };
  }
  function emphasis(state2, silent) {
    var startCount, count, found, oldCount, newCount, stack, res, max = state2.posMax, start = state2.pos, marker = state2.src.charCodeAt(start);
    if (marker !== 95 && marker !== 42) {
      return false;
    }
    if (silent) {
      return false;
    }
    res = scanDelims(state2, start);
    startCount = res.delims;
    if (!res.can_open) {
      state2.pos += startCount;
      if (!silent) {
        state2.pending += state2.src.slice(start, state2.pos);
      }
      return true;
    }
    if (state2.level >= state2.options.maxNesting) {
      return false;
    }
    state2.pos = start + startCount;
    stack = [startCount];
    while (state2.pos < max) {
      if (state2.src.charCodeAt(state2.pos) === marker) {
        res = scanDelims(state2, state2.pos);
        count = res.delims;
        if (res.can_close) {
          oldCount = stack.pop();
          newCount = count;
          while (oldCount !== newCount) {
            if (newCount < oldCount) {
              stack.push(oldCount - newCount);
              break;
            }
            newCount -= oldCount;
            if (stack.length === 0) {
              break;
            }
            state2.pos += oldCount;
            oldCount = stack.pop();
          }
          if (stack.length === 0) {
            startCount = oldCount;
            found = true;
            break;
          }
          state2.pos += count;
          continue;
        }
        if (res.can_open) {
          stack.push(count);
        }
        state2.pos += count;
        continue;
      }
      state2.parser.skipToken(state2);
    }
    if (!found) {
      state2.pos = start;
      return false;
    }
    state2.posMax = state2.pos;
    state2.pos = start + startCount;
    if (!silent) {
      if (startCount === 2 || startCount === 3) {
        state2.push({ type: "strong_open", level: state2.level++ });
      }
      if (startCount === 1 || startCount === 3) {
        state2.push({ type: "em_open", level: state2.level++ });
      }
      state2.parser.tokenize(state2);
      if (startCount === 1 || startCount === 3) {
        state2.push({ type: "em_close", level: --state2.level });
      }
      if (startCount === 2 || startCount === 3) {
        state2.push({ type: "strong_close", level: --state2.level });
      }
    }
    state2.pos = state2.posMax + startCount;
    state2.posMax = max;
    return true;
  }
  var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
  function sub(state2, silent) {
    var found, content, max = state2.posMax, start = state2.pos;
    if (state2.src.charCodeAt(start) !== 126) {
      return false;
    }
    if (silent) {
      return false;
    }
    if (start + 2 >= max) {
      return false;
    }
    if (state2.level >= state2.options.maxNesting) {
      return false;
    }
    state2.pos = start + 1;
    while (state2.pos < max) {
      if (state2.src.charCodeAt(state2.pos) === 126) {
        found = true;
        break;
      }
      state2.parser.skipToken(state2);
    }
    if (!found || start + 1 === state2.pos) {
      state2.pos = start;
      return false;
    }
    content = state2.src.slice(start + 1, state2.pos);
    if (content.match(/(^|[^\\])(\\\\)*\s/)) {
      state2.pos = start;
      return false;
    }
    state2.posMax = state2.pos;
    state2.pos = start + 1;
    if (!silent) {
      state2.push({
        type: "sub",
        level: state2.level,
        content: content.replace(UNESCAPE_RE, "$1")
      });
    }
    state2.pos = state2.posMax + 1;
    state2.posMax = max;
    return true;
  }
  var UNESCAPE_RE$1 = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
  function sup(state2, silent) {
    var found, content, max = state2.posMax, start = state2.pos;
    if (state2.src.charCodeAt(start) !== 94) {
      return false;
    }
    if (silent) {
      return false;
    }
    if (start + 2 >= max) {
      return false;
    }
    if (state2.level >= state2.options.maxNesting) {
      return false;
    }
    state2.pos = start + 1;
    while (state2.pos < max) {
      if (state2.src.charCodeAt(state2.pos) === 94) {
        found = true;
        break;
      }
      state2.parser.skipToken(state2);
    }
    if (!found || start + 1 === state2.pos) {
      state2.pos = start;
      return false;
    }
    content = state2.src.slice(start + 1, state2.pos);
    if (content.match(/(^|[^\\])(\\\\)*\s/)) {
      state2.pos = start;
      return false;
    }
    state2.posMax = state2.pos;
    state2.pos = start + 1;
    if (!silent) {
      state2.push({
        type: "sup",
        level: state2.level,
        content: content.replace(UNESCAPE_RE$1, "$1")
      });
    }
    state2.pos = state2.posMax + 1;
    state2.posMax = max;
    return true;
  }
  function links(state2, silent) {
    var labelStart, labelEnd, label, href, title, pos, ref, code2, isImage = false, oldPos = state2.pos, max = state2.posMax, start = state2.pos, marker = state2.src.charCodeAt(start);
    if (marker === 33) {
      isImage = true;
      marker = state2.src.charCodeAt(++start);
    }
    if (marker !== 91) {
      return false;
    }
    if (state2.level >= state2.options.maxNesting) {
      return false;
    }
    labelStart = start + 1;
    labelEnd = parseLinkLabel(state2, start);
    if (labelEnd < 0) {
      return false;
    }
    pos = labelEnd + 1;
    if (pos < max && state2.src.charCodeAt(pos) === 40) {
      pos++;
      for (; pos < max; pos++) {
        code2 = state2.src.charCodeAt(pos);
        if (code2 !== 32 && code2 !== 10) {
          break;
        }
      }
      if (pos >= max) {
        return false;
      }
      start = pos;
      if (parseLinkDestination(state2, pos)) {
        href = state2.linkContent;
        pos = state2.pos;
      } else {
        href = "";
      }
      start = pos;
      for (; pos < max; pos++) {
        code2 = state2.src.charCodeAt(pos);
        if (code2 !== 32 && code2 !== 10) {
          break;
        }
      }
      if (pos < max && start !== pos && parseLinkTitle(state2, pos)) {
        title = state2.linkContent;
        pos = state2.pos;
        for (; pos < max; pos++) {
          code2 = state2.src.charCodeAt(pos);
          if (code2 !== 32 && code2 !== 10) {
            break;
          }
        }
      } else {
        title = "";
      }
      if (pos >= max || state2.src.charCodeAt(pos) !== 41) {
        state2.pos = oldPos;
        return false;
      }
      pos++;
    } else {
      if (state2.linkLevel > 0) {
        return false;
      }
      for (; pos < max; pos++) {
        code2 = state2.src.charCodeAt(pos);
        if (code2 !== 32 && code2 !== 10) {
          break;
        }
      }
      if (pos < max && state2.src.charCodeAt(pos) === 91) {
        start = pos + 1;
        pos = parseLinkLabel(state2, pos);
        if (pos >= 0) {
          label = state2.src.slice(start, pos++);
        } else {
          pos = start - 1;
        }
      }
      if (!label) {
        if (typeof label === "undefined") {
          pos = labelEnd + 1;
        }
        label = state2.src.slice(labelStart, labelEnd);
      }
      ref = state2.env.references[normalizeReference(label)];
      if (!ref) {
        state2.pos = oldPos;
        return false;
      }
      href = ref.href;
      title = ref.title;
    }
    if (!silent) {
      state2.pos = labelStart;
      state2.posMax = labelEnd;
      if (isImage) {
        state2.push({
          type: "image",
          src: href,
          title,
          alt: state2.src.substr(labelStart, labelEnd - labelStart),
          level: state2.level
        });
      } else {
        state2.push({
          type: "link_open",
          href,
          title,
          level: state2.level++
        });
        state2.linkLevel++;
        state2.parser.tokenize(state2);
        state2.linkLevel--;
        state2.push({ type: "link_close", level: --state2.level });
      }
    }
    state2.pos = pos;
    state2.posMax = max;
    return true;
  }
  function footnote_inline(state2, silent) {
    var labelStart, labelEnd, footnoteId, oldLength, max = state2.posMax, start = state2.pos;
    if (start + 2 >= max) {
      return false;
    }
    if (state2.src.charCodeAt(start) !== 94) {
      return false;
    }
    if (state2.src.charCodeAt(start + 1) !== 91) {
      return false;
    }
    if (state2.level >= state2.options.maxNesting) {
      return false;
    }
    labelStart = start + 2;
    labelEnd = parseLinkLabel(state2, start + 1);
    if (labelEnd < 0) {
      return false;
    }
    if (!silent) {
      if (!state2.env.footnotes) {
        state2.env.footnotes = {};
      }
      if (!state2.env.footnotes.list) {
        state2.env.footnotes.list = [];
      }
      footnoteId = state2.env.footnotes.list.length;
      state2.pos = labelStart;
      state2.posMax = labelEnd;
      state2.push({
        type: "footnote_ref",
        id: footnoteId,
        level: state2.level
      });
      state2.linkLevel++;
      oldLength = state2.tokens.length;
      state2.parser.tokenize(state2);
      state2.env.footnotes.list[footnoteId] = { tokens: state2.tokens.splice(oldLength) };
      state2.linkLevel--;
    }
    state2.pos = labelEnd + 1;
    state2.posMax = max;
    return true;
  }
  function footnote_ref(state2, silent) {
    var label, pos, footnoteId, footnoteSubId, max = state2.posMax, start = state2.pos;
    if (start + 3 > max) {
      return false;
    }
    if (!state2.env.footnotes || !state2.env.footnotes.refs) {
      return false;
    }
    if (state2.src.charCodeAt(start) !== 91) {
      return false;
    }
    if (state2.src.charCodeAt(start + 1) !== 94) {
      return false;
    }
    if (state2.level >= state2.options.maxNesting) {
      return false;
    }
    for (pos = start + 2; pos < max; pos++) {
      if (state2.src.charCodeAt(pos) === 32) {
        return false;
      }
      if (state2.src.charCodeAt(pos) === 10) {
        return false;
      }
      if (state2.src.charCodeAt(pos) === 93) {
        break;
      }
    }
    if (pos === start + 2) {
      return false;
    }
    if (pos >= max) {
      return false;
    }
    pos++;
    label = state2.src.slice(start + 2, pos - 1);
    if (typeof state2.env.footnotes.refs[":" + label] === "undefined") {
      return false;
    }
    if (!silent) {
      if (!state2.env.footnotes.list) {
        state2.env.footnotes.list = [];
      }
      if (state2.env.footnotes.refs[":" + label] < 0) {
        footnoteId = state2.env.footnotes.list.length;
        state2.env.footnotes.list[footnoteId] = { label, count: 0 };
        state2.env.footnotes.refs[":" + label] = footnoteId;
      } else {
        footnoteId = state2.env.footnotes.refs[":" + label];
      }
      footnoteSubId = state2.env.footnotes.list[footnoteId].count;
      state2.env.footnotes.list[footnoteId].count++;
      state2.push({
        type: "footnote_ref",
        id: footnoteId,
        subId: footnoteSubId,
        level: state2.level
      });
    }
    state2.pos = pos;
    state2.posMax = max;
    return true;
  }
  var url_schemas = [
    "coap",
    "doi",
    "javascript",
    "aaa",
    "aaas",
    "about",
    "acap",
    "cap",
    "cid",
    "crid",
    "data",
    "dav",
    "dict",
    "dns",
    "file",
    "ftp",
    "geo",
    "go",
    "gopher",
    "h323",
    "http",
    "https",
    "iax",
    "icap",
    "im",
    "imap",
    "info",
    "ipp",
    "iris",
    "iris.beep",
    "iris.xpc",
    "iris.xpcs",
    "iris.lwz",
    "ldap",
    "mailto",
    "mid",
    "msrp",
    "msrps",
    "mtqp",
    "mupdate",
    "news",
    "nfs",
    "ni",
    "nih",
    "nntp",
    "opaquelocktoken",
    "pop",
    "pres",
    "rtsp",
    "service",
    "session",
    "shttp",
    "sieve",
    "sip",
    "sips",
    "sms",
    "snmp",
    "soap.beep",
    "soap.beeps",
    "tag",
    "tel",
    "telnet",
    "tftp",
    "thismessage",
    "tn3270",
    "tip",
    "tv",
    "urn",
    "vemmi",
    "ws",
    "wss",
    "xcon",
    "xcon-userid",
    "xmlrpc.beep",
    "xmlrpc.beeps",
    "xmpp",
    "z39.50r",
    "z39.50s",
    "adiumxtra",
    "afp",
    "afs",
    "aim",
    "apt",
    "attachment",
    "aw",
    "beshare",
    "bitcoin",
    "bolo",
    "callto",
    "chrome",
    "chrome-extension",
    "com-eventbrite-attendee",
    "content",
    "cvs",
    "dlna-playsingle",
    "dlna-playcontainer",
    "dtn",
    "dvb",
    "ed2k",
    "facetime",
    "feed",
    "finger",
    "fish",
    "gg",
    "git",
    "gizmoproject",
    "gtalk",
    "hcp",
    "icon",
    "ipn",
    "irc",
    "irc6",
    "ircs",
    "itms",
    "jar",
    "jms",
    "keyparc",
    "lastfm",
    "ldaps",
    "magnet",
    "maps",
    "market",
    "message",
    "mms",
    "ms-help",
    "msnim",
    "mumble",
    "mvn",
    "notes",
    "oid",
    "palm",
    "paparazzi",
    "platform",
    "proxy",
    "psyc",
    "query",
    "res",
    "resource",
    "rmi",
    "rsync",
    "rtmp",
    "secondlife",
    "sftp",
    "sgn",
    "skype",
    "smb",
    "soldat",
    "spotify",
    "ssh",
    "steam",
    "svn",
    "teamspeak",
    "things",
    "udp",
    "unreal",
    "ut2004",
    "ventrilo",
    "view-source",
    "webcal",
    "wtai",
    "wyciwyg",
    "xfire",
    "xri",
    "ymsgr"
  ];
  var EMAIL_RE = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
  var AUTOLINK_RE = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
  function autolink(state2, silent) {
    var tail, linkMatch, emailMatch, url, fullUrl, pos = state2.pos;
    if (state2.src.charCodeAt(pos) !== 60) {
      return false;
    }
    tail = state2.src.slice(pos);
    if (tail.indexOf(">") < 0) {
      return false;
    }
    linkMatch = tail.match(AUTOLINK_RE);
    if (linkMatch) {
      if (url_schemas.indexOf(linkMatch[1].toLowerCase()) < 0) {
        return false;
      }
      url = linkMatch[0].slice(1, -1);
      fullUrl = normalizeLink(url);
      if (!state2.parser.validateLink(url)) {
        return false;
      }
      if (!silent) {
        state2.push({
          type: "link_open",
          href: fullUrl,
          level: state2.level
        });
        state2.push({
          type: "text",
          content: url,
          level: state2.level + 1
        });
        state2.push({ type: "link_close", level: state2.level });
      }
      state2.pos += linkMatch[0].length;
      return true;
    }
    emailMatch = tail.match(EMAIL_RE);
    if (emailMatch) {
      url = emailMatch[0].slice(1, -1);
      fullUrl = normalizeLink("mailto:" + url);
      if (!state2.parser.validateLink(fullUrl)) {
        return false;
      }
      if (!silent) {
        state2.push({
          type: "link_open",
          href: fullUrl,
          level: state2.level
        });
        state2.push({
          type: "text",
          content: url,
          level: state2.level + 1
        });
        state2.push({ type: "link_close", level: state2.level });
      }
      state2.pos += emailMatch[0].length;
      return true;
    }
    return false;
  }
  function replace$1(regex, options) {
    regex = regex.source;
    options = options || "";
    return function self(name, val) {
      if (!name) {
        return new RegExp(regex, options);
      }
      val = val.source || val;
      regex = regex.replace(name, val);
      return self;
    };
  }
  var attr_name = /[a-zA-Z_:][a-zA-Z0-9:._-]*/;
  var unquoted = /[^"'=<>`\x00-\x20]+/;
  var single_quoted = /'[^']*'/;
  var double_quoted = /"[^"]*"/;
  var attr_value = replace$1(/(?:unquoted|single_quoted|double_quoted)/)("unquoted", unquoted)("single_quoted", single_quoted)("double_quoted", double_quoted)();
  var attribute = replace$1(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name", attr_name)("attr_value", attr_value)();
  var open_tag = replace$1(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)("attribute", attribute)();
  var close_tag = /<\/[A-Za-z][A-Za-z0-9]*\s*>/;
  var comment = /<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->/;
  var processing = /<[?].*?[?]>/;
  var declaration = /<![A-Z]+\s+[^>]*>/;
  var cdata = /<!\[CDATA\[[\s\S]*?\]\]>/;
  var HTML_TAG_RE = replace$1(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag", open_tag)("close_tag", close_tag)("comment", comment)("processing", processing)("declaration", declaration)("cdata", cdata)();
  function isLetter$2(ch) {
    var lc = ch | 32;
    return lc >= 97 && lc <= 122;
  }
  function htmltag(state2, silent) {
    var ch, match, max, pos = state2.pos;
    if (!state2.options.html) {
      return false;
    }
    max = state2.posMax;
    if (state2.src.charCodeAt(pos) !== 60 || pos + 2 >= max) {
      return false;
    }
    ch = state2.src.charCodeAt(pos + 1);
    if (ch !== 33 && ch !== 63 && ch !== 47 && !isLetter$2(ch)) {
      return false;
    }
    match = state2.src.slice(pos).match(HTML_TAG_RE);
    if (!match) {
      return false;
    }
    if (!silent) {
      state2.push({
        type: "htmltag",
        content: state2.src.slice(pos, pos + match[0].length),
        level: state2.level
      });
    }
    state2.pos += match[0].length;
    return true;
  }
  var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
  var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
  function entity(state2, silent) {
    var ch, code2, match, pos = state2.pos, max = state2.posMax;
    if (state2.src.charCodeAt(pos) !== 38) {
      return false;
    }
    if (pos + 1 < max) {
      ch = state2.src.charCodeAt(pos + 1);
      if (ch === 35) {
        match = state2.src.slice(pos).match(DIGITAL_RE);
        if (match) {
          if (!silent) {
            code2 = match[1][0].toLowerCase() === "x" ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
            state2.pending += isValidEntityCode(code2) ? fromCodePoint(code2) : fromCodePoint(65533);
          }
          state2.pos += match[0].length;
          return true;
        }
      } else {
        match = state2.src.slice(pos).match(NAMED_RE);
        if (match) {
          var decoded = decodeEntity(match[1]);
          if (match[1] !== decoded) {
            if (!silent) {
              state2.pending += decoded;
            }
            state2.pos += match[0].length;
            return true;
          }
        }
      }
    }
    if (!silent) {
      state2.pending += "&";
    }
    state2.pos++;
    return true;
  }
  var _rules$2 = [
    ["text", text2],
    ["newline", newline],
    ["escape", escape],
    ["backticks", backticks],
    ["del", del],
    ["ins", ins],
    ["mark", mark],
    ["emphasis", emphasis],
    ["sub", sub],
    ["sup", sup],
    ["links", links],
    ["footnote_inline", footnote_inline],
    ["footnote_ref", footnote_ref],
    ["autolink", autolink],
    ["htmltag", htmltag],
    ["entity", entity]
  ];
  function ParserInline() {
    this.ruler = new Ruler();
    for (var i = 0; i < _rules$2.length; i++) {
      this.ruler.push(_rules$2[i][0], _rules$2[i][1]);
    }
    this.validateLink = validateLink;
  }
  ParserInline.prototype.skipToken = function(state2) {
    var rules2 = this.ruler.getRules("");
    var len = rules2.length;
    var pos = state2.pos;
    var i, cached_pos;
    if ((cached_pos = state2.cacheGet(pos)) > 0) {
      state2.pos = cached_pos;
      return;
    }
    for (i = 0; i < len; i++) {
      if (rules2[i](state2, true)) {
        state2.cacheSet(pos, state2.pos);
        return;
      }
    }
    state2.pos++;
    state2.cacheSet(pos, state2.pos);
  };
  ParserInline.prototype.tokenize = function(state2) {
    var rules2 = this.ruler.getRules("");
    var len = rules2.length;
    var end2 = state2.posMax;
    var ok, i;
    while (state2.pos < end2) {
      for (i = 0; i < len; i++) {
        ok = rules2[i](state2, false);
        if (ok) {
          break;
        }
      }
      if (ok) {
        if (state2.pos >= end2) {
          break;
        }
        continue;
      }
      state2.pending += state2.src[state2.pos++];
    }
    if (state2.pending) {
      state2.pushPending();
    }
  };
  ParserInline.prototype.parse = function(str, options, env, outTokens) {
    var state2 = new StateInline(str, this, options, env, outTokens);
    this.tokenize(state2);
  };
  function validateLink(url) {
    var BAD_PROTOCOLS = ["vbscript", "javascript", "file", "data"];
    var str = url.trim().toLowerCase();
    str = replaceEntities(str);
    if (str.indexOf(":") !== -1 && BAD_PROTOCOLS.indexOf(str.split(":")[0]) !== -1) {
      return false;
    }
    return true;
  }
  var defaultConfig = {
    options: {
      html: false,
      // Enable HTML tags in source
      xhtmlOut: false,
      // Use '/' to close single tags (<br />)
      breaks: false,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkTarget: "",
      // set target to open link in
      // Enable some language-neutral replacements + quotes beautification
      typographer: false,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
      quotes: "\u201C\u201D\u2018\u2019",
      // Highlighter function. Should return escaped HTML,
      // or '' if input not changed
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20
      // Internal protection, recursion limit
    },
    components: {
      core: {
        rules: [
          "block",
          "inline",
          "references",
          "replacements",
          "smartquotes",
          "references",
          "abbr2",
          "footnote_tail"
        ]
      },
      block: {
        rules: [
          "blockquote",
          "code",
          "fences",
          "footnote",
          "heading",
          "hr",
          "htmlblock",
          "lheading",
          "list",
          "paragraph",
          "table"
        ]
      },
      inline: {
        rules: [
          "autolink",
          "backticks",
          "del",
          "emphasis",
          "entity",
          "escape",
          "footnote_ref",
          "htmltag",
          "links",
          "newline",
          "text"
        ]
      }
    }
  };
  var fullConfig = {
    options: {
      html: false,
      // Enable HTML tags in source
      xhtmlOut: false,
      // Use '/' to close single tags (<br />)
      breaks: false,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkTarget: "",
      // set target to open link in
      // Enable some language-neutral replacements + quotes beautification
      typographer: false,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
      quotes: "\u201C\u201D\u2018\u2019",
      // Highlighter function. Should return escaped HTML,
      // or '' if input not changed
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20
      // Internal protection, recursion limit
    },
    components: {
      // Don't restrict core/block/inline rules
      core: {},
      block: {},
      inline: {}
    }
  };
  var commonmarkConfig = {
    options: {
      html: true,
      // Enable HTML tags in source
      xhtmlOut: true,
      // Use '/' to close single tags (<br />)
      breaks: false,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkTarget: "",
      // set target to open link in
      // Enable some language-neutral replacements + quotes beautification
      typographer: false,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
      quotes: "\u201C\u201D\u2018\u2019",
      // Highlighter function. Should return escaped HTML,
      // or '' if input not changed
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20
      // Internal protection, recursion limit
    },
    components: {
      core: {
        rules: [
          "block",
          "inline",
          "references",
          "abbr2"
        ]
      },
      block: {
        rules: [
          "blockquote",
          "code",
          "fences",
          "heading",
          "hr",
          "htmlblock",
          "lheading",
          "list",
          "paragraph"
        ]
      },
      inline: {
        rules: [
          "autolink",
          "backticks",
          "emphasis",
          "entity",
          "escape",
          "htmltag",
          "links",
          "newline",
          "text"
        ]
      }
    }
  };
  var config2 = {
    "default": defaultConfig,
    "full": fullConfig,
    "commonmark": commonmarkConfig
  };
  function StateCore(instance, str, env) {
    this.src = str;
    this.env = env;
    this.options = instance.options;
    this.tokens = [];
    this.inlineMode = false;
    this.inline = instance.inline;
    this.block = instance.block;
    this.renderer = instance.renderer;
    this.typographer = instance.typographer;
  }
  function Remarkable(preset, options) {
    if (typeof preset !== "string") {
      options = preset;
      preset = "default";
    }
    if (options && options.linkify != null) {
      console.warn(
        "linkify option is removed. Use linkify plugin instead:\n\nimport Remarkable from 'remarkable';\nimport linkify from 'remarkable/linkify';\nnew Remarkable().use(linkify)\n"
      );
    }
    this.inline = new ParserInline();
    this.block = new ParserBlock();
    this.core = new Core();
    this.renderer = new Renderer();
    this.ruler = new Ruler();
    this.options = {};
    this.configure(config2[preset]);
    this.set(options || {});
  }
  Remarkable.prototype.set = function(options) {
    assign(this.options, options);
  };
  Remarkable.prototype.configure = function(presets) {
    var self = this;
    if (!presets) {
      throw new Error("Wrong `remarkable` preset, check name/content");
    }
    if (presets.options) {
      self.set(presets.options);
    }
    if (presets.components) {
      Object.keys(presets.components).forEach(function(name) {
        if (presets.components[name].rules) {
          self[name].ruler.enable(presets.components[name].rules, true);
        }
      });
    }
  };
  Remarkable.prototype.use = function(plugin, options) {
    plugin(this, options);
    return this;
  };
  Remarkable.prototype.parse = function(str, env) {
    var state2 = new StateCore(this, str, env);
    this.core.process(state2);
    return state2.tokens;
  };
  Remarkable.prototype.render = function(str, env) {
    env = env || {};
    return this.renderer.render(this.parse(str, env), this.options, env);
  };
  Remarkable.prototype.parseInline = function(str, env) {
    var state2 = new StateCore(this, str, env);
    state2.inlineMode = true;
    this.core.process(state2);
    return state2.tokens;
  };
  Remarkable.prototype.renderInline = function(str, env) {
    env = env || {};
    return this.renderer.render(this.parseInline(str, env), this.options, env);
  };

  // src/components/FormHero.js
  var FormHero = class extends FormLead {
    #default = {
      formPosition: "right",
      formWidth: "is-6",
      form: {},
      context: {
        lang: "en"
      }
    };
    constructor(props = {}) {
      super();
      this.eventName = "user:click-form-hero";
      this.state = this.initState(this.#default, props);
      this.getAttribute("id") || this.setAttribute("id", this.state.id || `component-${Math.floor(Math.random() * 100)}`);
      this.setAttribute("stage", "awaiting");
      this.ok = false;
      this.md = new Remarkable();
    }
    render() {
      this.state?.id != void 0 ? this.state.form.id = `${this.state.id}-form` : `form-${Math.floor(Math.random() * 100)}`;
      let form = (
        /* html */
        `
            <div  ${this.getClasses(["column", "p-6"], [this.state.formWidth])}>
                ${this.state?.form != void 0 ? new CjForm(this.state.form, this.state.context).render() : ""}
            </div>
        `
      );
      let text3 = (
        /* html */
        `  
        <div class="column">
            <div  class="p-4 m-6 content"> 
                ${this.state.caption?.text[this.state.context.lang] != void 0 ? `
                <p ${this.getClasses(["subtitle"], this.state.caption?.classList)}  ${this.setAnimation(this.state.caption.animation)}>
                ${this.state.caption.text[this.state.context.lang]}
                </p>` : ""}         
                ${this.state.title?.text[this.state.context.lang] != void 0 ? `
                <h1 ${this.getClasses(["title"], this.state.title?.classList)}  ${this.setAnimation(this.state.title?.animation)}>
                    ${this.state.title.text[this.state.context.lang]}
                </h1>` : ""}
                ${this.state.subtitle?.text[this.state.context.lang] != void 0 ? `
                <h2 ${this.getClasses(["subtitle"], this.state.subtitle?.classList)}  ${this.setAnimation(this.state.subtitle?.animation)}>
                    ${this.state.subtitle.text[this.state.context.lang]}
                </h2>` : ""}
                ${this.state.description?.text[this.state.context.lang] != void 0 ? `
                <div ${this.getClasses(["content"], this.state.description?.classList)} ${this.setAnimation(this.state.description?.animation)}>
                    ${this.md.render(this.state.description?.text[this.state.context.lang])}
                </div>` : ""}              
            </div>
        </div>
            `
      );
      this.innerHTML = /* html */
      `
        <section ${this.getClasses(["section"], this.state?.classList)} ${this.setAnimation(this.state.animation)} ${this.getBackground()}>
            <div class="container">
                <div class="columns is-vcentered is-gapless my-0"> 
                    ${this.state.formPosition === "right" ? text3 : form}
                    ${this.state.formPosition === "right" ? form : text3}
                </div>
            <div>
        </section>
        `;
      addFormEvents(this);
    }
  };
  customElements.define("form-hero", FormHero);

  // src/components/FormModal.js
  var FormModal = class extends FormLead {
    #default = {
      eventName: "user:click-form-modal",
      form: {}
    };
    constructor(props = {}) {
      super();
      this.eventName = "user:click-form-modal";
      this.state = this.initState(this.#default, props);
      this.getAttribute("id") || this.setAttribute("id", this.state.id || `component-${Math.floor(Math.random() * 100)}`);
      this.setAttribute("stage", "awaiting");
      this.ok = false;
    }
    render() {
      this.state?.id != void 0 ? this.state.form.id = `${this.state.id}-form` : `form-${Math.floor(Math.random() * 100)}`;
      this.innerHTML = /* html */
      `
        <div class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
                ${this.state.title?.text[this.state.context.lang] != void 0 ? `
                <header ${this.getClasses(["modal-card-head"], this.state.title?.classList)}  ${this.setAnimation(this.state.title?.animation)}>
                    <p class="modal-card-title">${this.state.title.text[this.state.context.lang]}</p>
                </header>` : ""}
                <section class="modal-card-body">
                     ${this.state?.form != void 0 ? new CjForm(this.state.form, this.state.context).render() : ""}
                </section>
            </div>
        /div>
        `;
      addFormEvents(this);
    }
  };
  customElements.define("form-modal", FormModal);

  // node_modules/vanilla-calendar-pro/index.mjs
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (e2, t2, n) => t2 in e2 ? __defProp(e2, t2, { enumerable: true, configurable: true, writable: true, value: n }) : e2[t2] = n;
  var __spreadValues = (e2, t2) => {
    for (var n in t2 || (t2 = {})) __hasOwnProp.call(t2, n) && __defNormalProp(e2, n, t2[n]);
    if (__getOwnPropSymbols) for (var n of __getOwnPropSymbols(t2)) __propIsEnum.call(t2, n) && __defNormalProp(e2, n, t2[n]);
    return e2;
  };
  var __spreadProps = (e2, t2) => __defProps(e2, __getOwnPropDescs(t2));
  var __publicField = (e2, t2, n) => (__defNormalProp(e2, "symbol" != typeof t2 ? t2 + "" : t2, n), n);
  var errorMessages = { notFoundSelector: (e2) => `${e2} is not found, check the first argument passed to new Calendar.`, notInit: 'The calendar has not been initialized, please initialize it using the "init()" method first.', notLocale: "You specified an incorrect language label or did not specify the required number of values \u200B\u200Bfor \xABlocale.weekdays\xBB or \xABlocale.months\xBB.", incorrectTime: "The value of the time property can be: false, 12 or 24.", incorrectMonthsCount: "For the \xABmultiple\xBB calendar type, the \xABdisplayMonthsCount\xBB parameter can have a value from 2 to 12, and for all others it cannot be greater than 1." };
  var setContext = (e2, t2, n) => {
    e2.context[t2] = n;
  };
  var destroy = (e2) => {
    var t2, n, a, l, o2;
    if (!e2.context.isInit) throw new Error(errorMessages.notInit);
    e2.inputMode ? (null == (t2 = e2.context.mainElement.parentElement) || t2.removeChild(e2.context.mainElement), null == (a = null == (n = e2.context.inputElement) ? void 0 : n.replaceWith) || a.call(n, e2.context.originalElement), setContext(e2, "inputElement", void 0)) : null == (o2 = (l = e2.context.mainElement).replaceWith) || o2.call(l, e2.context.originalElement), setContext(e2, "mainElement", e2.context.originalElement), e2.onDestroy && e2.onDestroy(e2);
  };
  var hide = (e2) => {
    e2.context.isShowInInputMode && e2.context.currentType && (e2.context.mainElement.dataset.vcCalendarHidden = "", setContext(e2, "isShowInInputMode", false), e2.context.cleanupHandlers[0] && (e2.context.cleanupHandlers.forEach((e3) => e3()), setContext(e2, "cleanupHandlers", [])), e2.onHide && e2.onHide(e2));
  };
  function getOffset(e2) {
    if (!e2 || !e2.getBoundingClientRect) return { top: 0, bottom: 0, left: 0, right: 0 };
    const t2 = e2.getBoundingClientRect(), n = document.documentElement;
    return { bottom: t2.bottom, right: t2.right, top: t2.top + window.scrollY - n.clientTop, left: t2.left + window.scrollX - n.clientLeft };
  }
  function getViewportDimensions() {
    return { vw: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), vh: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) };
  }
  function getWindowScrollPosition() {
    return { left: window.scrollX || document.documentElement.scrollLeft || 0, top: window.scrollY || document.documentElement.scrollTop || 0 };
  }
  function calculateAvailableSpace(e2) {
    const { top: t2, left: n } = getWindowScrollPosition(), { top: a, left: l } = getOffset(e2), { vh: o2, vw: s2 } = getViewportDimensions(), i = a - t2, r2 = l - n;
    return { top: i, bottom: o2 - (i + e2.clientHeight), left: r2, right: s2 - (r2 + e2.clientWidth) };
  }
  function getAvailablePosition(e2, t2, n = 5) {
    const a = { top: true, bottom: true, left: true, right: true }, l = [];
    if (!t2 || !e2) return { canShow: a, parentPositions: l };
    const { bottom: o2, top: s2 } = calculateAvailableSpace(e2), { top: i, left: r2 } = getOffset(e2), { height: c, width: d } = t2.getBoundingClientRect(), { vh: u, vw: m } = getViewportDimensions(), h = m / 2, p2 = u / 2;
    return [{ condition: i < p2, position: "top" }, { condition: i > p2, position: "bottom" }, { condition: r2 < h, position: "left" }, { condition: r2 > h, position: "right" }].forEach(({ condition: e3, position: t3 }) => {
      e3 && l.push(t3);
    }), Object.assign(a, { top: c <= s2 - n, bottom: c <= o2 - n, left: d <= r2, right: d <= m - r2 }), { canShow: a, parentPositions: l };
  }
  var handleDay = (e2, t2, n, a) => {
    var l;
    const o2 = a.querySelector(`[data-vc-date="${t2}"]`), s2 = null == o2 ? void 0 : o2.querySelector("[data-vc-date-btn]");
    if (!o2 || !s2) return;
    if ((null == n ? void 0 : n.modifier) && s2.classList.add(...n.modifier.trim().split(" ")), !(null == n ? void 0 : n.html)) return;
    const i = document.createElement("div");
    i.className = e2.styles.datePopup, i.dataset.vcDatePopup = "", i.innerHTML = e2.sanitizerHTML(n.html), s2.ariaExpanded = "true", s2.ariaLabel = `${s2.ariaLabel}, ${null == (l = null == i ? void 0 : i.textContent) ? void 0 : l.replace(/^\s+|\s+(?=\s)|\s+$/g, "").replace(/&nbsp;/g, " ")}`, o2.appendChild(i), requestAnimationFrame(() => {
      if (!i) return;
      const { canShow: e3 } = getAvailablePosition(o2, i), t3 = e3.bottom ? o2.offsetHeight : -i.offsetHeight, n2 = e3.left && !e3.right ? o2.offsetWidth - i.offsetWidth / 2 : !e3.left && e3.right ? i.offsetWidth / 2 : 0;
      Object.assign(i.style, { left: `${n2}px`, top: `${t3}px` });
    });
  };
  var createDatePopup = (e2, t2) => {
    var n;
    e2.popups && (null == (n = Object.entries(e2.popups)) || n.forEach(([n2, a]) => handleDay(e2, n2, a, t2)));
  };
  var getDate = (e2) => /* @__PURE__ */ new Date(`${e2}T00:00:00`);
  var getDateString = (e2) => `${e2.getFullYear()}-${String(e2.getMonth() + 1).padStart(2, "0")}-${String(e2.getDate()).padStart(2, "0")}`;
  var parseDates = (e2) => e2.reduce((e3, t2) => {
    if (t2 instanceof Date || "number" == typeof t2) {
      const n = t2 instanceof Date ? t2 : new Date(t2);
      e3.push(n.toISOString().substring(0, 10));
    } else t2.match(/^(\d{4}-\d{2}-\d{2})$/g) ? e3.push(t2) : t2.replace(/(\d{4}-\d{2}-\d{2}).*?(\d{4}-\d{2}-\d{2})/g, (t3, n, a) => {
      const l = getDate(n), o2 = getDate(a), s2 = new Date(l.getTime());
      for (; s2 <= o2; s2.setDate(s2.getDate() + 1)) e3.push(getDateString(s2));
      return t3;
    });
    return e3;
  }, []);
  var updateAttribute = (e2, t2, n, a = "") => {
    t2 ? e2.setAttribute(n, a) : e2.getAttribute(n) === a && e2.removeAttribute(n);
  };
  var setDateModifier = (e2, t2, n, a, l, o2, s2) => {
    var i, r2, c, d;
    const u = getDate(e2.context.displayDateMin) > getDate(o2) || getDate(e2.context.displayDateMax) < getDate(o2) || (null == (i = e2.context.disableDates) ? void 0 : i.includes(o2)) || !e2.selectionMonthsMode && "current" !== s2 || !e2.selectionYearsMode && getDate(o2).getFullYear() !== t2;
    updateAttribute(n, u, "data-vc-date-disabled"), a && updateAttribute(a, u, "aria-disabled", "true"), a && updateAttribute(a, u, "tabindex", "-1"), updateAttribute(n, !e2.disableToday && e2.context.dateToday === o2, "data-vc-date-today"), updateAttribute(n, !e2.disableToday && e2.context.dateToday === o2, "aria-current", "date"), updateAttribute(n, null == (r2 = e2.selectedWeekends) ? void 0 : r2.includes(l), "data-vc-date-weekend");
    const m = (null == (c = e2.selectedHolidays) ? void 0 : c[0]) ? parseDates(e2.selectedHolidays) : [];
    if (updateAttribute(n, m.includes(o2), "data-vc-date-holiday"), (null == (d = e2.context.selectedDates) ? void 0 : d.includes(o2)) ? (n.setAttribute("data-vc-date-selected", ""), a && a.setAttribute("aria-selected", "true"), e2.context.selectedDates.length > 1 && "multiple-ranged" === e2.selectionDatesMode && (e2.context.selectedDates[0] === o2 && e2.context.selectedDates[e2.context.selectedDates.length - 1] === o2 ? n.setAttribute("data-vc-date-selected", "first-and-last") : e2.context.selectedDates[0] === o2 ? n.setAttribute("data-vc-date-selected", "first") : e2.context.selectedDates[e2.context.selectedDates.length - 1] === o2 && n.setAttribute("data-vc-date-selected", "last"), e2.context.selectedDates[0] !== o2 && e2.context.selectedDates[e2.context.selectedDates.length - 1] !== o2 && n.setAttribute("data-vc-date-selected", "middle"))) : n.hasAttribute("data-vc-date-selected") && (n.removeAttribute("data-vc-date-selected"), a && a.removeAttribute("aria-selected")), !e2.context.disableDates.includes(o2) && e2.enableEdgeDatesOnly && e2.context.selectedDates.length > 1 && "multiple-ranged" === e2.selectionDatesMode) {
      const t3 = getDate(e2.context.selectedDates[0]), a2 = getDate(e2.context.selectedDates[e2.context.selectedDates.length - 1]), l2 = getDate(o2);
      updateAttribute(n, l2 > t3 && l2 < a2, "data-vc-date-selected", "middle");
    }
  };
  var getLocaleString = (e2, t2, n) => (/* @__PURE__ */ new Date(`${e2}T00:00:00.000Z`)).toLocaleString(t2, n);
  var getWeekNumber = (e2, t2) => {
    const n = getDate(e2), a = (n.getDay() - t2 + 7) % 7;
    n.setDate(n.getDate() + 4 - a);
    const l = new Date(n.getFullYear(), 0, 1), o2 = Math.ceil(((+n - +l) / 864e5 + 1) / 7);
    return { year: n.getFullYear(), week: o2 };
  };
  var addWeekNumberForDate = (e2, t2, n) => {
    const a = getWeekNumber(n, e2.firstWeekday);
    a && (t2.dataset.vcDateWeekNumber = String(a.week));
  };
  var setDaysAsDisabled = (e2, t2, n) => {
    var a, l, o2, s2, i;
    const r2 = null == (a = e2.disableWeekdays) ? void 0 : a.includes(n), c = e2.disableAllDates && !!(null == (l = e2.context.enableDates) ? void 0 : l[0]);
    !r2 && !c || (null == (o2 = e2.context.enableDates) ? void 0 : o2.includes(t2)) || (null == (s2 = e2.context.disableDates) ? void 0 : s2.includes(t2)) || (e2.context.disableDates.push(t2), null == (i = e2.context.disableDates) || i.sort((e3, t3) => +new Date(e3) - +new Date(t3)));
  };
  var createDate = (e2, t2, n, a, l, o2) => {
    const s2 = getDate(l).getDay(), i = "string" == typeof e2.locale && e2.locale.length ? e2.locale : "en", r2 = document.createElement("div");
    let c;
    r2.className = e2.styles.date, r2.dataset.vcDate = l, r2.dataset.vcDateMonth = o2, r2.dataset.vcDateWeekDay = String(s2), ("current" === o2 || e2.displayDatesOutside) && (c = document.createElement("button"), c.className = e2.styles.dateBtn, c.type = "button", c.role = "gridcell", c.ariaLabel = getLocaleString(l, i, { dateStyle: "long", timeZone: "UTC" }), c.dataset.vcDateBtn = "", c.innerText = String(a), r2.appendChild(c)), e2.enableWeekNumbers && addWeekNumberForDate(e2, r2, l), setDaysAsDisabled(e2, l, s2), setDateModifier(e2, t2, r2, c, s2, l, o2), n.appendChild(r2), e2.onCreateDateEls && e2.onCreateDateEls(e2, r2);
  };
  var createDatesFromCurrentMonth = (e2, t2, n, a, l) => {
    for (let o2 = 1; o2 <= n; o2++) {
      const n2 = new Date(a, l, o2);
      createDate(e2, a, t2, o2, getDateString(n2), "current");
    }
  };
  var createDatesFromNextMonth = (e2, t2, n, a, l, o2) => {
    const s2 = o2 + n, i = 7 * Math.ceil(s2 / 7) - s2, r2 = l + 1 === 12 ? a + 1 : a, c = l + 1 === 12 ? "01" : l + 2 < 10 ? `0${l + 2}` : l + 2;
    for (let n2 = 1; n2 <= i; n2++) {
      const l2 = n2 < 10 ? `0${n2}` : String(n2);
      createDate(e2, a, t2, n2, `${r2}-${c}-${l2}`, "next");
    }
  };
  var createDatesFromPrevMonth = (e2, t2, n, a, l) => {
    let o2 = new Date(n, a, 0).getDate() - (l - 1);
    const s2 = 0 === a ? n - 1 : n, i = 0 === a ? 12 : a < 10 ? `0${a}` : a;
    for (let a2 = l; a2 > 0; a2--, o2++) {
      createDate(e2, n, t2, o2, `${s2}-${i}-${o2}`, "prev");
    }
  };
  var createWeekNumbers = (e2, t2, n, a, l) => {
    if (!e2.enableWeekNumbers) return;
    a.textContent = "";
    const o2 = document.createElement("b");
    o2.className = e2.styles.weekNumbersTitle, o2.innerText = "#", o2.dataset.vcWeekNumbers = "title", a.appendChild(o2);
    const s2 = document.createElement("div");
    s2.className = e2.styles.weekNumbersContent, s2.dataset.vcWeekNumbers = "content", a.appendChild(s2);
    const i = document.createElement("button");
    i.type = "button", i.className = e2.styles.weekNumber;
    const r2 = l.querySelectorAll("[data-vc-date]"), c = Math.ceil((t2 + n) / 7);
    for (let t3 = 0; t3 < c; t3++) {
      const n2 = r2[0 === t3 ? 6 : 7 * t3].dataset.vcDate, a2 = getWeekNumber(n2, e2.firstWeekday);
      if (!a2) return;
      const l2 = i.cloneNode(true);
      l2.innerText = String(a2.week), l2.dataset.vcWeekNumber = String(a2.week), l2.dataset.vcWeekYear = String(a2.year), l2.role = "rowheader", l2.ariaLabel = `${a2.week}`, s2.appendChild(l2);
    }
  };
  var createDates = (e2) => {
    const t2 = new Date(e2.context.selectedYear, e2.context.selectedMonth, 1), n = e2.context.mainElement.querySelectorAll('[data-vc="dates"]'), a = e2.context.mainElement.querySelectorAll('[data-vc-week="numbers"]');
    n.forEach((n2, l) => {
      e2.selectionDatesMode || (n2.dataset.vcDatesDisabled = ""), n2.textContent = "";
      const o2 = new Date(t2);
      o2.setMonth(o2.getMonth() + l);
      const s2 = o2.getMonth(), i = o2.getFullYear(), r2 = (new Date(i, s2, 1).getDay() - e2.firstWeekday + 7) % 7, c = new Date(i, s2 + 1, 0).getDate();
      createDatesFromPrevMonth(e2, n2, i, s2, r2), createDatesFromCurrentMonth(e2, n2, c, i, s2), createDatesFromNextMonth(e2, n2, c, i, s2, r2), createDatePopup(e2, n2), createWeekNumbers(e2, r2, c, a[l], n2);
    });
  };
  var layoutDefault = (e2) => `
  <div class="${e2.styles.header}" data-vc="header" role="toolbar" aria-label="${e2.labels.navigation}">
    <#ArrowPrev [month] />
    <div class="${e2.styles.headerContent}" data-vc-header="content">
      <#Month />
      <#Year />
    </div>
    <#ArrowNext [month] />
  </div>
  <div class="${e2.styles.wrapper}" data-vc="wrapper">
    <#WeekNumbers />
    <div class="${e2.styles.content}" data-vc="content">
      <#Week />
      <#Dates />
      <#DateRangeTooltip />
    </div>
  </div>
  <#ControlTime />
`;
  var layoutMonths = (e2) => `
  <div class="${e2.styles.header}" data-vc="header" role="toolbar" aria-label="${e2.labels.navigation}">
    <div class="${e2.styles.headerContent}" data-vc-header="content">
      <#Month />
      <#Year />
    </div>
  </div>
  <div class="${e2.styles.wrapper}" data-vc="wrapper">
    <div class="${e2.styles.content}" data-vc="content">
      <#Months />
    </div>
  </div>
`;
  var layoutMultiple = (e2) => `
  <div class="${e2.styles.controls}" data-vc="controls" role="toolbar" aria-label="${e2.labels.navigation}">
    <#ArrowPrev [month] />
    <#ArrowNext [month] />
  </div>
  <div class="${e2.styles.grid}" data-vc="grid">
    <#Multiple>
      <div class="${e2.styles.column}" data-vc="column" role="region">
        <div class="${e2.styles.header}" data-vc="header">
          <div class="${e2.styles.headerContent}" data-vc-header="content">
            <#Month />
            <#Year />
          </div>
        </div>
        <div class="${e2.styles.wrapper}" data-vc="wrapper">
          <#WeekNumbers />
          <div class="${e2.styles.content}" data-vc="content">
            <#Week />
            <#Dates />
          </div>
        </div>
      </div>
    <#/Multiple>
    <#DateRangeTooltip />
  </div>
  <#ControlTime />
`;
  var layoutYears = (e2) => `
  <div class="${e2.styles.header}" data-vc="header" role="toolbar" aria-label="${e2.labels.navigation}">
    <#ArrowPrev [year] />
    <div class="${e2.styles.headerContent}" data-vc-header="content">
      <#Month />
      <#Year />
    </div>
    <#ArrowNext [year] />
  </div>
  <div class="${e2.styles.wrapper}" data-vc="wrapper">
    <div class="${e2.styles.content}" data-vc="content">
      <#Years />
    </div>
  </div>
`;
  var ArrowNext = (e2, t2) => `<button type="button" class="${e2.styles.arrowNext}" data-vc-arrow="next" aria-label="${e2.labels.arrowNext[t2]}"></button>`;
  var ArrowPrev = (e2, t2) => `<button type="button" class="${e2.styles.arrowPrev}" data-vc-arrow="prev" aria-label="${e2.labels.arrowPrev[t2]}"></button>`;
  var ControlTime = (e2) => e2.selectionTimeMode ? `<div class="${e2.styles.time}" data-vc="time" role="group" aria-label="${e2.labels.selectingTime}"></div>` : "";
  var DateRangeTooltip = (e2) => e2.onCreateDateRangeTooltip ? `<div class="${e2.styles.dateRangeTooltip}" data-vc-date-range-tooltip="hidden"></div>` : "";
  var Dates = (e2) => `<div class="${e2.styles.dates}" data-vc="dates" role="grid" aria-live="assertive" aria-label="${e2.labels.dates}" ${"multiple" === e2.type ? "aria-multiselectable" : ""}></div>`;
  var Month = (e2) => `<button type="button" class="${e2.styles.month}" data-vc="month"></button>`;
  var Months = (e2) => `<div class="${e2.styles.months}" data-vc="months" role="grid" aria-live="assertive" aria-label="${e2.labels.months}"></div>`;
  var Week = (e2) => `<div class="${e2.styles.week}" data-vc="week" role="row" aria-label="${e2.labels.week}"></div>`;
  var WeekNumbers = (e2) => e2.enableWeekNumbers ? `<div class="${e2.styles.weekNumbers}" data-vc-week="numbers" role="row" aria-label="${e2.labels.weekNumber}"></div>` : "";
  var Year = (e2) => `<button type="button" class="${e2.styles.year}" data-vc="year"></button>`;
  var Years = (e2) => `<div class="${e2.styles.years}" data-vc="years" role="grid" aria-live="assertive" aria-label="${e2.labels.years}"></div>`;
  var components = { ArrowNext, ArrowPrev, ControlTime, Dates, DateRangeTooltip, Month, Months, Week, WeekNumbers, Year, Years };
  var getComponent = (e2) => components[e2];
  var parseLayout = (e2, t2) => t2.replace(/[\n\t]/g, "").replace(/<#(?!\/?Multiple)(.*?)>/g, (t3, n) => {
    const a = (n.match(/\[(.*?)\]/) || [])[1], l = n.replace(/[/\s\n\t]|\[(.*?)\]/g, ""), o2 = getComponent(l), s2 = o2 ? o2(e2, null != a ? a : null) : "";
    return e2.sanitizerHTML(s2);
  }).replace(/[\n\t]/g, "");
  var parseMultipleLayout = (e2, t2) => t2.replace(new RegExp("<#Multiple>(.*?)<#\\/Multiple>", "gs"), (t3, n) => {
    const a = Array(e2.context.displayMonthsCount).fill(n).join("");
    return e2.sanitizerHTML(a);
  }).replace(/[\n\t]/g, "");
  var createLayouts = (e2, t2) => {
    const n = { default: layoutDefault, month: layoutMonths, year: layoutYears, multiple: layoutMultiple };
    if (Object.keys(n).forEach((t3) => {
      const a = t3;
      e2.layouts[a].length || (e2.layouts[a] = n[a](e2));
    }), e2.context.mainElement.className = e2.styles.calendar, e2.context.mainElement.dataset.vc = "calendar", e2.context.mainElement.dataset.vcType = e2.context.currentType, e2.context.mainElement.role = "application", e2.context.mainElement.tabIndex = 0, e2.context.mainElement.ariaLabel = e2.labels.application, "multiple" !== e2.context.currentType) {
      if ("multiple" === e2.type && t2) {
        const n2 = e2.context.mainElement.querySelector('[data-vc="controls"]'), a = e2.context.mainElement.querySelector('[data-vc="grid"]'), l = t2.closest('[data-vc="column"]');
        return n2 && e2.context.mainElement.removeChild(n2), a && (a.dataset.vcGrid = "hidden"), l && (l.dataset.vcColumn = e2.context.currentType), void (l && (l.innerHTML = e2.sanitizerHTML(parseLayout(e2, e2.layouts[e2.context.currentType]))));
      }
      e2.context.mainElement.innerHTML = e2.sanitizerHTML(parseLayout(e2, e2.layouts[e2.context.currentType]));
    } else e2.context.mainElement.innerHTML = e2.sanitizerHTML(parseMultipleLayout(e2, parseLayout(e2, e2.layouts[e2.context.currentType])));
  };
  var setVisibilityArrows = (e2, t2, n, a) => {
    e2.style.visibility = n ? "hidden" : "", t2.style.visibility = a ? "hidden" : "";
  };
  var handleDefaultType = (e2, t2, n) => {
    const a = getDate(getDateString(new Date(e2.context.selectedYear, e2.context.selectedMonth, 1))), l = new Date(a.getTime()), o2 = new Date(a.getTime());
    l.setMonth(l.getMonth() - e2.monthsToSwitch), o2.setMonth(o2.getMonth() + e2.monthsToSwitch);
    const s2 = getDate(e2.context.dateMin), i = getDate(e2.context.dateMax);
    e2.selectionYearsMode || (s2.setFullYear(a.getFullYear()), i.setFullYear(a.getFullYear()));
    const r2 = !e2.selectionMonthsMode || l.getFullYear() < s2.getFullYear() || l.getFullYear() === s2.getFullYear() && l.getMonth() < s2.getMonth(), c = !e2.selectionMonthsMode || o2.getFullYear() > i.getFullYear() || o2.getFullYear() === i.getFullYear() && o2.getMonth() > i.getMonth() - (e2.context.displayMonthsCount - 1);
    setVisibilityArrows(t2, n, r2, c);
  };
  var handleYearType = (e2, t2, n) => {
    const a = getDate(e2.context.dateMin), l = getDate(e2.context.dateMax), o2 = !!(a.getFullYear() && e2.context.displayYear - 7 <= a.getFullYear()), s2 = !!(l.getFullYear() && e2.context.displayYear + 7 >= l.getFullYear());
    setVisibilityArrows(t2, n, o2, s2);
  };
  var visibilityArrows = (e2) => {
    if ("month" === e2.context.currentType) return;
    const t2 = e2.context.mainElement.querySelector('[data-vc-arrow="prev"]'), n = e2.context.mainElement.querySelector('[data-vc-arrow="next"]');
    if (!t2 || !n) return;
    ({ default: () => handleDefaultType(e2, t2, n), year: () => handleYearType(e2, t2, n) })["multiple" === e2.context.currentType ? "default" : e2.context.currentType]();
  };
  var visibilityHandler = (e2, t2, n, a, l) => {
    const o2 = new Date(a.setFullYear(e2.context.selectedYear, e2.context.selectedMonth + n)).getFullYear(), s2 = new Date(a.setMonth(e2.context.selectedMonth + n)).getMonth(), i = e2.context.locale.months.long[s2], r2 = t2.closest('[data-vc="column"]');
    r2 && (r2.ariaLabel = `${i} ${o2}`);
    const c = { month: { id: s2, label: i }, year: { id: o2, label: o2 } };
    t2.innerText = String(c[l].label), t2.dataset[`vc${l.charAt(0).toUpperCase() + l.slice(1)}`] = String(c[l].id), t2.ariaLabel = `${e2.labels[l]} ${c[l].label}`;
    const d = { month: e2.selectionMonthsMode, year: e2.selectionYearsMode }, u = false === d[l] || "only-arrows" === d[l];
    u && (t2.tabIndex = -1), t2.disabled = u;
  };
  var visibilityTitle = (e2) => {
    const t2 = e2.context.mainElement.querySelectorAll('[data-vc="month"]'), n = e2.context.mainElement.querySelectorAll('[data-vc="year"]'), a = new Date(e2.context.selectedYear, e2.context.selectedMonth, 1);
    [t2, n].forEach((t3) => null == t3 ? void 0 : t3.forEach((t4, n2) => visibilityHandler(e2, t4, n2, a, t4.dataset.vc)));
  };
  var setYearModifier = (e2, t2, n, a, l) => {
    var o2;
    const s2 = { month: "[data-vc-months-month]", year: "[data-vc-years-year]" }, i = { month: { selected: "data-vc-months-month-selected", aria: "aria-selected", value: "vcMonthsMonth", selectedProperty: "selectedMonth" }, year: { selected: "data-vc-years-year-selected", aria: "aria-selected", value: "vcYearsYear", selectedProperty: "selectedYear" } };
    l && (null == (o2 = e2.context.mainElement.querySelectorAll(s2[n])) || o2.forEach((e3) => {
      e3.removeAttribute(i[n].selected), e3.removeAttribute(i[n].aria);
    }), setContext(e2, i[n].selectedProperty, Number(t2.dataset[i[n].value])), visibilityTitle(e2), "year" === n && visibilityArrows(e2)), a && (t2.setAttribute(i[n].selected, ""), t2.setAttribute(i[n].aria, "true"));
  };
  var getColumnID = (e2, t2) => {
    var n;
    if ("multiple" !== e2.type) return { currentValue: null, columnID: 0 };
    const a = e2.context.mainElement.querySelectorAll('[data-vc="column"]'), l = Array.from(a).findIndex((e3) => e3.closest(`[data-vc-column="${t2}"]`));
    return { currentValue: l >= 0 ? Number(null == (n = a[l].querySelector(`[data-vc="${t2}"]`)) ? void 0 : n.getAttribute(`data-vc-${t2}`)) : null, columnID: Math.max(l, 0) };
  };
  var createMonthEl = (e2, t2, n, a, l, o2, s2) => {
    const i = t2.cloneNode(false);
    return i.className = e2.styles.monthsMonth, i.innerText = a, i.ariaLabel = l, i.role = "gridcell", i.dataset.vcMonthsMonth = `${s2}`, o2 && (i.ariaDisabled = "true"), o2 && (i.tabIndex = -1), i.disabled = o2, setYearModifier(e2, i, "month", n === s2, false), i;
  };
  var createMonths = (e2, t2) => {
    var n, a;
    const l = null == (n = null == t2 ? void 0 : t2.closest('[data-vc="header"]')) ? void 0 : n.querySelector('[data-vc="year"]'), o2 = l ? Number(l.dataset.vcYear) : e2.context.selectedYear, s2 = (null == t2 ? void 0 : t2.dataset.vcMonth) ? Number(t2.dataset.vcMonth) : e2.context.selectedMonth;
    setContext(e2, "currentType", "month"), createLayouts(e2, t2), visibilityTitle(e2);
    const i = e2.context.mainElement.querySelector('[data-vc="months"]');
    if (!e2.selectionMonthsMode || !i) return;
    const r2 = e2.monthsToSwitch > 1 ? e2.context.locale.months.long.map((t3, n2) => s2 - e2.monthsToSwitch * n2).concat(e2.context.locale.months.long.map((t3, n2) => s2 + e2.monthsToSwitch * n2)).filter((e3) => e3 >= 0 && e3 <= 12) : Array.from(Array(12).keys()), c = document.createElement("button");
    c.type = "button";
    for (let t3 = 0; t3 < 12; t3++) {
      const n2 = getDate(e2.context.dateMin), a2 = getDate(e2.context.dateMax), l2 = e2.context.displayMonthsCount - 1, { columnID: d } = getColumnID(e2, "month"), u = o2 <= n2.getFullYear() && t3 < n2.getMonth() + d || o2 >= a2.getFullYear() && t3 > a2.getMonth() - l2 + d || o2 > a2.getFullYear() || t3 !== s2 && !r2.includes(t3), m = createMonthEl(e2, c, s2, e2.context.locale.months.short[t3], e2.context.locale.months.long[t3], u, t3);
      i.appendChild(m), e2.onCreateMonthEls && e2.onCreateMonthEls(e2, m);
    }
    null == (a = e2.context.mainElement.querySelector("[data-vc-months-month]:not([disabled])")) || a.focus();
  };
  var TimeInput = (e2, t2, n, a, l) => `
  <label class="${t2}" data-vc-time-input="${e2}">
    <input type="text" name="${e2}" maxlength="2" aria-label="${n[`input${e2.charAt(0).toUpperCase() + e2.slice(1)}`]}" value="${a}" ${l ? "disabled" : ""}>
  </label>
`;
  var TimeRange = (e2, t2, n, a, l, o2, s2) => `
  <label class="${t2}" data-vc-time-range="${e2}">
    <input type="range" name="${e2}" min="${a}" max="${l}" step="${o2}" aria-label="${n[`range${e2.charAt(0).toUpperCase() + e2.slice(1)}`]}" value="${s2}">
  </label>
`;
  var handleActions = (e2, t2, n, a) => {
    ({ hour: () => setContext(e2, "selectedHours", n), minute: () => setContext(e2, "selectedMinutes", n) })[a](), setContext(e2, "selectedTime", `${e2.context.selectedHours}:${e2.context.selectedMinutes}${e2.context.selectedKeeping ? ` ${e2.context.selectedKeeping}` : ""}`), e2.onChangeTime && e2.onChangeTime(e2, t2, false), e2.inputMode && e2.context.inputElement && e2.context.mainElement && e2.onChangeToInput && e2.onChangeToInput(e2, t2);
  };
  var transformTime24 = (e2, t2) => {
    var n;
    return (null == (n = { 0: { AM: "00", PM: "12" }, 1: { AM: "01", PM: "13" }, 2: { AM: "02", PM: "14" }, 3: { AM: "03", PM: "15" }, 4: { AM: "04", PM: "16" }, 5: { AM: "05", PM: "17" }, 6: { AM: "06", PM: "18" }, 7: { AM: "07", PM: "19" }, 8: { AM: "08", PM: "20" }, 9: { AM: "09", PM: "21" }, 10: { AM: "10", PM: "22" }, 11: { AM: "11", PM: "23" }, 12: { AM: "00", PM: "12" } }[Number(e2)]) ? void 0 : n[t2]) || String(e2);
  };
  var handleClickKeepingTime = (e2, t2, n, a, l) => {
    const o2 = (o3) => {
      const s2 = "AM" === e2.context.selectedKeeping ? "PM" : "AM", i = transformTime24(e2.context.selectedHours, s2);
      Number(i) <= a && Number(i) >= l ? (setContext(e2, "selectedKeeping", s2), n.value = i, handleActions(e2, o3, e2.context.selectedHours, "hour"), t2.ariaLabel = `${e2.labels.btnKeeping} ${e2.context.selectedKeeping}`, t2.innerText = e2.context.selectedKeeping) : e2.onChangeTime && e2.onChangeTime(e2, o3, true);
    };
    return t2.addEventListener("click", o2), () => {
      t2.removeEventListener("click", o2);
    };
  };
  var transformTime12 = (e2) => ({ 0: "12", 13: "01", 14: "02", 15: "03", 16: "04", 17: "05", 18: "06", 19: "07", 20: "08", 21: "09", 22: "10", 23: "11" })[Number(e2)] || String(e2);
  var updateInputAndRange = (e2, t2, n, a) => {
    e2.value = n, t2.value = a;
  };
  var updateKeepingTime$1 = (e2, t2, n) => {
    t2 && n && (setContext(e2, "selectedKeeping", n), t2.innerText = n);
  };
  var handleInput$1 = (e2, t2, n, a, l, o2, s2) => {
    const i = { hour: (i2, r3, c) => {
      if (!e2.selectionTimeMode) return;
      ({ 12: () => {
        if (!e2.context.selectedKeeping) return;
        const d = Number(transformTime24(r3, e2.context.selectedKeeping));
        if (!(d <= o2 && d >= s2)) return updateInputAndRange(n, t2, e2.context.selectedHours, e2.context.selectedHours), void (e2.onChangeTime && e2.onChangeTime(e2, c, true));
        updateInputAndRange(n, t2, transformTime12(r3), transformTime24(r3, e2.context.selectedKeeping)), i2 > 12 && updateKeepingTime$1(e2, a, "PM"), handleActions(e2, c, transformTime12(r3), l);
      }, 24: () => {
        if (!(i2 <= o2 && i2 >= s2)) return updateInputAndRange(n, t2, e2.context.selectedHours, e2.context.selectedHours), void (e2.onChangeTime && e2.onChangeTime(e2, c, true));
        updateInputAndRange(n, t2, r3, r3), handleActions(e2, c, r3, l);
      } })[e2.selectionTimeMode]();
    }, minute: (a2, i2, r3) => {
      if (!(a2 <= o2 && a2 >= s2)) return n.value = e2.context.selectedMinutes, void (e2.onChangeTime && e2.onChangeTime(e2, r3, true));
      n.value = i2, t2.value = i2, handleActions(e2, r3, i2, l);
    } }, r2 = (e3) => {
      const t3 = Number(n.value), a2 = n.value.padStart(2, "0");
      i[l] && i[l](t3, a2, e3);
    };
    return n.addEventListener("change", r2), () => {
      n.removeEventListener("change", r2);
    };
  };
  var updateInputAndTime = (e2, t2, n, a, l) => {
    t2.value = l, handleActions(e2, n, l, a);
  };
  var updateKeepingTime = (e2, t2, n) => {
    t2 && (setContext(e2, "selectedKeeping", n), t2.innerText = n);
  };
  var handleRange = (e2, t2, n, a, l) => {
    const o2 = (o3) => {
      const s2 = Number(t2.value), i = t2.value.padStart(2, "0"), r2 = "hour" === l, c = 24 === e2.selectionTimeMode, d = s2 > 0 && s2 < 12;
      r2 && !c && updateKeepingTime(e2, a, 0 === s2 || d ? "AM" : "PM"), updateInputAndTime(e2, n, o3, l, !r2 || c || d ? i : transformTime12(t2.value));
    };
    return t2.addEventListener("input", o2), () => {
      t2.removeEventListener("input", o2);
    };
  };
  var handleMouseOver = (e2) => e2.setAttribute("data-vc-input-focus", "");
  var handleMouseOut = (e2) => e2.removeAttribute("data-vc-input-focus");
  var handleTime = (e2, t2) => {
    const n = t2.querySelector('[data-vc-time-range="hour"] input[name="hour"]'), a = t2.querySelector('[data-vc-time-range="minute"] input[name="minute"]'), l = t2.querySelector('[data-vc-time-input="hour"] input[name="hour"]'), o2 = t2.querySelector('[data-vc-time-input="minute"] input[name="minute"]'), s2 = t2.querySelector('[data-vc-time="keeping"]');
    if (!(n && a && l && o2)) return;
    const i = (e3) => {
      e3.target === n && handleMouseOver(l), e3.target === a && handleMouseOver(o2);
    }, r2 = (e3) => {
      e3.target === n && handleMouseOut(l), e3.target === a && handleMouseOut(o2);
    };
    return t2.addEventListener("mouseover", i), t2.addEventListener("mouseout", r2), handleInput$1(e2, n, l, s2, "hour", e2.timeMaxHour, e2.timeMinHour), handleInput$1(e2, a, o2, s2, "minute", e2.timeMaxMinute, e2.timeMinMinute), handleRange(e2, n, l, s2, "hour"), handleRange(e2, a, o2, s2, "minute"), s2 && handleClickKeepingTime(e2, s2, n, e2.timeMaxHour, e2.timeMinHour), () => {
      t2.removeEventListener("mouseover", i), t2.removeEventListener("mouseout", r2);
    };
  };
  var createTime = (e2) => {
    const t2 = e2.context.mainElement.querySelector('[data-vc="time"]');
    if (!e2.selectionTimeMode || !t2) return;
    const [n, a] = [e2.timeMinHour, e2.timeMaxHour], [l, o2] = [e2.timeMinMinute, e2.timeMaxMinute], s2 = e2.context.selectedKeeping ? transformTime24(e2.context.selectedHours, e2.context.selectedKeeping) : e2.context.selectedHours, i = "range" === e2.timeControls;
    var r2;
    t2.innerHTML = e2.sanitizerHTML(`
    <div class="${e2.styles.timeContent}" data-vc-time="content">
      ${TimeInput("hour", e2.styles.timeHour, e2.labels, e2.context.selectedHours, i)}
      ${TimeInput("minute", e2.styles.timeMinute, e2.labels, e2.context.selectedMinutes, i)}
      ${12 === e2.selectionTimeMode ? (r2 = e2.context.selectedKeeping, `<button type="button" class="${e2.styles.timeKeeping}" aria-label="${e2.labels.btnKeeping} ${r2}" data-vc-time="keeping" ${i ? "disabled" : ""}>${r2}</button>`) : ""}
    </div>
    <div class="${e2.styles.timeRanges}" data-vc-time="ranges">
      ${TimeRange("hour", e2.styles.timeRange, e2.labels, n, a, e2.timeStepHour, s2)}
      ${TimeRange("minute", e2.styles.timeRange, e2.labels, l, o2, e2.timeStepMinute, e2.context.selectedMinutes)}
    </div>
  `), handleTime(e2, t2);
  };
  var createWeek = (e2) => {
    const t2 = e2.selectedWeekends ? [...e2.selectedWeekends] : [], n = [...e2.context.locale.weekdays.long].reduce((n2, a2, l) => [...n2, { id: l, titleShort: e2.context.locale.weekdays.short[l], titleLong: a2, isWeekend: t2.includes(l) }], []), a = [...n.slice(e2.firstWeekday), ...n.slice(0, e2.firstWeekday)];
    e2.context.mainElement.querySelectorAll('[data-vc="week"]').forEach((t3) => {
      const n2 = e2.onClickWeekDay ? document.createElement("button") : document.createElement("b");
      e2.onClickWeekDay && (n2.type = "button"), a.forEach((a2) => {
        const l = n2.cloneNode(true);
        l.innerText = a2.titleShort, l.className = e2.styles.weekDay, l.role = "columnheader", l.ariaLabel = a2.titleLong, l.dataset.vcWeekDay = String(a2.id), a2.isWeekend && (l.dataset.vcWeekDayOff = ""), t3.appendChild(l);
      });
    });
  };
  var createYearEl = (e2, t2, n, a, l) => {
    const o2 = t2.cloneNode(false);
    return o2.className = e2.styles.yearsYear, o2.innerText = String(l), o2.ariaLabel = String(l), o2.role = "gridcell", o2.dataset.vcYearsYear = `${l}`, a && (o2.ariaDisabled = "true"), a && (o2.tabIndex = -1), o2.disabled = a, setYearModifier(e2, o2, "year", n === l, false), o2;
  };
  var createYears = (e2, t2) => {
    var n;
    const a = (null == t2 ? void 0 : t2.dataset.vcYear) ? Number(t2.dataset.vcYear) : e2.context.selectedYear;
    setContext(e2, "currentType", "year"), createLayouts(e2, t2), visibilityTitle(e2), visibilityArrows(e2);
    const l = e2.context.mainElement.querySelector('[data-vc="years"]');
    if (!e2.selectionYearsMode || !l) return;
    const o2 = "multiple" !== e2.type || e2.context.selectedYear === a ? 0 : 1, s2 = document.createElement("button");
    s2.type = "button";
    for (let t3 = e2.context.displayYear - 7; t3 < e2.context.displayYear + 8; t3++) {
      const n2 = t3 < getDate(e2.context.dateMin).getFullYear() + o2 || t3 > getDate(e2.context.dateMax).getFullYear(), i = createYearEl(e2, s2, a, n2, t3);
      l.appendChild(i), e2.onCreateYearEls && e2.onCreateYearEls(e2, i);
    }
    null == (n = e2.context.mainElement.querySelector("[data-vc-years-year]:not([disabled])")) || n.focus();
  };
  var trackChangesHTMLElement = (e2, t2, n) => {
    new MutationObserver((e3) => {
      for (let a = 0; a < e3.length; a++) {
        if (e3[a].attributeName === t2) {
          n();
          break;
        }
      }
    }).observe(e2, { attributes: true });
  };
  var haveListener = { value: false, set: () => haveListener.value = true, check: () => haveListener.value };
  var setTheme = (e2, t2) => e2.dataset.vcTheme = t2;
  var trackChangesThemeInSystemSettings = (e2, t2) => {
    if (setTheme(e2.context.mainElement, t2.matches ? "dark" : "light"), "system" !== e2.selectedTheme || haveListener.check()) return;
    const n = (e3) => {
      const t3 = document.querySelectorAll('[data-vc="calendar"]');
      null == t3 || t3.forEach((t4) => setTheme(t4, e3.matches ? "dark" : "light"));
    };
    t2.addEventListener ? t2.addEventListener("change", n) : t2.addListener(n), haveListener.set();
  };
  var detectTheme = (e2, t2) => {
    const n = e2.themeAttrDetect.length ? document.querySelector(e2.themeAttrDetect) : null, a = e2.themeAttrDetect.replace(/^.*\[(.+)\]/g, (e3, t3) => t3);
    if (!n || "system" === n.getAttribute(a)) return void trackChangesThemeInSystemSettings(e2, t2);
    const l = n.getAttribute(a);
    l ? (setTheme(e2.context.mainElement, l), trackChangesHTMLElement(n, a, () => {
      const t3 = n.getAttribute(a);
      t3 && setTheme(e2.context.mainElement, t3);
    })) : trackChangesThemeInSystemSettings(e2, t2);
  };
  var handleTheme = (e2) => {
    "not all" !== window.matchMedia("(prefers-color-scheme)").media ? "system" === e2.selectedTheme ? detectTheme(e2, window.matchMedia("(prefers-color-scheme: dark)")) : setTheme(e2.context.mainElement, e2.selectedTheme) : setTheme(e2.context.mainElement, "light");
  };
  var capitalizeFirstLetter = (e2) => e2.charAt(0).toUpperCase() + e2.slice(1).replace(/\./, "");
  var getLocaleWeekday = (e2, t2, n) => {
    const a = /* @__PURE__ */ new Date(`1978-01-0${t2 + 1}T00:00:00.000Z`), l = a.toLocaleString(n, { weekday: "short", timeZone: "UTC" }), o2 = a.toLocaleString(n, { weekday: "long", timeZone: "UTC" });
    e2.context.locale.weekdays.short.push(capitalizeFirstLetter(l)), e2.context.locale.weekdays.long.push(capitalizeFirstLetter(o2));
  };
  var getLocaleMonth = (e2, t2, n) => {
    const a = /* @__PURE__ */ new Date(`1978-${String(t2 + 1).padStart(2, "0")}-01T00:00:00.000Z`), l = a.toLocaleString(n, { month: "short", timeZone: "UTC" }), o2 = a.toLocaleString(n, { month: "long", timeZone: "UTC" });
    e2.context.locale.months.short.push(capitalizeFirstLetter(l)), e2.context.locale.months.long.push(capitalizeFirstLetter(o2));
  };
  var getLocale = (e2) => {
    var t2, n, a, l, o2, s2, i, r2;
    if (!(e2.context.locale.weekdays.short[6] && e2.context.locale.weekdays.long[6] && e2.context.locale.months.short[11] && e2.context.locale.months.long[11])) if ("string" == typeof e2.locale) {
      if ("string" == typeof e2.locale && !e2.locale.length) throw new Error(errorMessages.notLocale);
      Array.from({ length: 7 }, (t3, n2) => getLocaleWeekday(e2, n2, e2.locale)), Array.from({ length: 12 }, (t3, n2) => getLocaleMonth(e2, n2, e2.locale));
    } else {
      if (!((null == (n = null == (t2 = e2.locale) ? void 0 : t2.weekdays) ? void 0 : n.short[6]) && (null == (l = null == (a = e2.locale) ? void 0 : a.weekdays) ? void 0 : l.long[6]) && (null == (s2 = null == (o2 = e2.locale) ? void 0 : o2.months) ? void 0 : s2.short[11]) && (null == (r2 = null == (i = e2.locale) ? void 0 : i.months) ? void 0 : r2.long[11]))) throw new Error(errorMessages.notLocale);
      setContext(e2, "locale", __spreadValues({}, e2.locale));
    }
  };
  var create = (e2) => {
    const t2 = { default: () => {
      createWeek(e2), createDates(e2);
    }, multiple: () => {
      createWeek(e2), createDates(e2);
    }, month: () => createMonths(e2), year: () => createYears(e2) };
    handleTheme(e2), getLocale(e2), createLayouts(e2), visibilityTitle(e2), visibilityArrows(e2), createTime(e2), t2[e2.context.currentType]();
  };
  var handleArrowKeys = (e2) => {
    const t2 = (t3) => {
      var n;
      const a = t3.target;
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(t3.key) || "button" !== a.localName) return;
      const l = Array.from(e2.context.mainElement.querySelectorAll('[data-vc="calendar"] button')), o2 = l.indexOf(a);
      if (-1 === o2) return;
      const s2 = (i = l[o2]).hasAttribute("data-vc-date-btn") ? 7 : i.hasAttribute("data-vc-months-month") ? 4 : i.hasAttribute("data-vc-years-year") ? 5 : 1;
      var i;
      const r2 = (0, { ArrowUp: () => Math.max(0, o2 - s2), ArrowDown: () => Math.min(l.length - 1, o2 + s2), ArrowLeft: () => Math.max(0, o2 - 1), ArrowRight: () => Math.min(l.length - 1, o2 + 1) }[t3.key])();
      null == (n = l[r2]) || n.focus();
    };
    return e2.context.mainElement.addEventListener("keydown", t2), () => e2.context.mainElement.removeEventListener("keydown", t2);
  };
  var handleMonth = (e2, t2) => {
    const n = getDate(getDateString(new Date(e2.context.selectedYear, e2.context.selectedMonth, 1)));
    ({ prev: () => n.setMonth(n.getMonth() - e2.monthsToSwitch), next: () => n.setMonth(n.getMonth() + e2.monthsToSwitch) })[t2](), setContext(e2, "selectedMonth", n.getMonth()), setContext(e2, "selectedYear", n.getFullYear()), visibilityTitle(e2), visibilityArrows(e2), createDates(e2);
  };
  var handleClickArrow = (e2, t2) => {
    const n = t2.target.closest("[data-vc-arrow]");
    if (n) {
      if (["default", "multiple"].includes(e2.context.currentType)) handleMonth(e2, n.dataset.vcArrow);
      else if ("year" === e2.context.currentType && void 0 !== e2.context.displayYear) {
        const a = { prev: -15, next: 15 }[n.dataset.vcArrow];
        setContext(e2, "displayYear", e2.context.displayYear + a), createYears(e2, t2.target);
      }
      e2.onClickArrow && e2.onClickArrow(e2, t2);
    }
  };
  var canToggleSelection = (e2) => void 0 === e2.enableDateToggle || ("function" == typeof e2.enableDateToggle ? e2.enableDateToggle(e2) : e2.enableDateToggle);
  var handleSelectDate = (e2, t2, n) => {
    const a = t2.dataset.vcDate, l = t2.closest("[data-vc-date][data-vc-date-selected]"), o2 = canToggleSelection(e2);
    if (l && !o2) return;
    const s2 = l ? e2.context.selectedDates.filter((e3) => e3 !== a) : n ? [...e2.context.selectedDates, a] : [a];
    setContext(e2, "selectedDates", s2);
  };
  var createDateRangeTooltip = (e2, t2, n) => {
    if (!t2) return;
    if (!n) return t2.dataset.vcDateRangeTooltip = "hidden", void (t2.textContent = "");
    const a = e2.context.mainElement.getBoundingClientRect(), l = n.getBoundingClientRect();
    t2.style.left = l.left - a.left + l.width / 2 + "px", t2.style.top = l.bottom - a.top - l.height + "px", t2.dataset.vcDateRangeTooltip = "visible", t2.innerHTML = e2.sanitizerHTML(e2.onCreateDateRangeTooltip(e2, n, t2, l, a));
  };
  var state = { self: null, lastDateEl: null, isHovering: false, rangeMin: void 0, rangeMax: void 0, tooltipEl: null, timeoutId: null };
  var addHoverEffect = (e2, t2, n) => {
    var a, l, o2;
    if (!(null == (l = null == (a = state.self) ? void 0 : a.context) ? void 0 : l.selectedDates[0])) return;
    const s2 = getDateString(e2);
    (null == (o2 = state.self.context.disableDates) ? void 0 : o2.includes(s2)) || (state.self.context.mainElement.querySelectorAll(`[data-vc-date="${s2}"]`).forEach((e3) => e3.dataset.vcDateHover = ""), t2.forEach((e3) => e3.dataset.vcDateHover = "first"), n.forEach((e3) => {
      "first" === e3.dataset.vcDateHover ? e3.dataset.vcDateHover = "first-and-last" : e3.dataset.vcDateHover = "last";
    }));
  };
  var removeHoverEffect = () => {
    var e2, t2;
    if (!(null == (t2 = null == (e2 = state.self) ? void 0 : e2.context) ? void 0 : t2.mainElement)) return;
    state.self.context.mainElement.querySelectorAll("[data-vc-date-hover]").forEach((e3) => e3.removeAttribute("data-vc-date-hover"));
  };
  var handleHoverDatesEvent = (e2) => {
    var t2, n;
    if (!e2.target || !(null == (n = null == (t2 = state.self) ? void 0 : t2.context) ? void 0 : n.selectedDates[0])) return;
    if (!e2.target.closest('[data-vc="dates"]')) return state.lastDateEl = null, createDateRangeTooltip(state.self, state.tooltipEl, null), void removeHoverEffect();
    const a = e2.target.closest("[data-vc-date]");
    if (!a || state.lastDateEl === a) return;
    state.lastDateEl = a, createDateRangeTooltip(state.self, state.tooltipEl, a), removeHoverEffect();
    const l = a.dataset.vcDate, o2 = getDate(state.self.context.selectedDates[0]), s2 = getDate(l), i = state.self.context.mainElement.querySelectorAll(`[data-vc-date="${state.self.context.selectedDates[0]}"]`), r2 = state.self.context.mainElement.querySelectorAll(`[data-vc-date="${l}"]`), [c, d] = o2 < s2 ? [i, r2] : [r2, i], [u, m] = o2 < s2 ? [o2, s2] : [s2, o2];
    for (let e3 = new Date(u); e3 <= m; e3.setDate(e3.getDate() + 1)) addHoverEffect(e3, c, d);
  };
  var handleHoverSelectedDatesRangeEvent = (e2) => {
    const t2 = e2.target.closest("[data-vc-date-selected]");
    if (!t2 && state.lastDateEl) return state.lastDateEl = null, void createDateRangeTooltip(state.self, state.tooltipEl, null);
    t2 && state.lastDateEl !== t2 && (state.lastDateEl = t2, createDateRangeTooltip(state.self, state.tooltipEl, t2));
  };
  var optimizedHoverHandler = (e2) => (t2) => {
    state.isHovering || (state.isHovering = true, requestAnimationFrame(() => {
      e2(t2), state.isHovering = false;
    }));
  };
  var optimizedHandleHoverDatesEvent = optimizedHoverHandler(handleHoverDatesEvent);
  var optimizedHandleHoverSelectedDatesRangeEvent = optimizedHoverHandler(handleHoverSelectedDatesRangeEvent);
  var handleCancelSelectionDates = (e2) => {
    state.self && "Escape" === e2.key && (state.lastDateEl = null, setContext(state.self, "selectedDates", []), state.self.context.mainElement.removeEventListener("mousemove", optimizedHandleHoverDatesEvent), state.self.context.mainElement.removeEventListener("keydown", handleCancelSelectionDates), createDateRangeTooltip(state.self, state.tooltipEl, null), removeHoverEffect());
  };
  var handleMouseLeave = () => {
    null !== state.timeoutId && clearTimeout(state.timeoutId), state.timeoutId = setTimeout(() => {
      state.lastDateEl = null, createDateRangeTooltip(state.self, state.tooltipEl, null), removeHoverEffect();
    }, 50);
  };
  var updateDisabledDates = () => {
    var e2, t2, n, a;
    if (!(null == (n = null == (t2 = null == (e2 = state.self) ? void 0 : e2.context) ? void 0 : t2.selectedDates) ? void 0 : n[0]) || !(null == (a = state.self.context.disableDates) ? void 0 : a[0])) return;
    const l = getDate(state.self.context.selectedDates[0]), [o2, s2] = state.self.context.disableDates.map((e3) => getDate(e3)).reduce(([e3, t3], n2) => [l >= n2 ? n2 : e3, l < n2 && null === t3 ? n2 : t3], [null, null]);
    o2 && setContext(state.self, "displayDateMin", getDateString(new Date(o2.setDate(o2.getDate() + 1)))), s2 && setContext(state.self, "displayDateMax", getDateString(new Date(s2.setDate(s2.getDate() - 1))));
    state.self.disableDatesPast && !state.self.disableAllDates && getDate(state.self.context.displayDateMin) < getDate(state.self.context.dateToday) && setContext(state.self, "displayDateMin", state.self.context.dateToday);
  };
  var handleSelectDateRange = (e2, t2) => {
    state.self = e2, state.lastDateEl = t2, removeHoverEffect(), e2.disableDatesGaps && (state.rangeMin = state.rangeMin ? state.rangeMin : e2.context.displayDateMin, state.rangeMax = state.rangeMax ? state.rangeMax : e2.context.displayDateMax), e2.onCreateDateRangeTooltip && (state.tooltipEl = e2.context.mainElement.querySelector("[data-vc-date-range-tooltip]"));
    const n = null == t2 ? void 0 : t2.dataset.vcDate;
    if (n) {
      const t3 = 1 === e2.context.selectedDates.length && e2.context.selectedDates[0].includes(n), a = t3 && !canToggleSelection(e2) ? [n, n] : t3 && canToggleSelection(e2) ? [] : e2.context.selectedDates.length > 1 ? [n] : [...e2.context.selectedDates, n];
      setContext(e2, "selectedDates", a), e2.context.selectedDates.length > 1 && e2.context.selectedDates.sort((e3, t4) => +new Date(e3) - +new Date(t4));
    }
    ({ set: () => (e2.disableDatesGaps && updateDisabledDates(), createDateRangeTooltip(state.self, state.tooltipEl, t2), state.self.context.mainElement.removeEventListener("mousemove", optimizedHandleHoverSelectedDatesRangeEvent), state.self.context.mainElement.removeEventListener("mouseleave", handleMouseLeave), state.self.context.mainElement.removeEventListener("keydown", handleCancelSelectionDates), state.self.context.mainElement.addEventListener("mousemove", optimizedHandleHoverDatesEvent), state.self.context.mainElement.addEventListener("mouseleave", handleMouseLeave), state.self.context.mainElement.addEventListener("keydown", handleCancelSelectionDates), () => {
      state.self.context.mainElement.removeEventListener("mousemove", optimizedHandleHoverDatesEvent), state.self.context.mainElement.removeEventListener("mouseleave", handleMouseLeave), state.self.context.mainElement.removeEventListener("keydown", handleCancelSelectionDates);
    }), reset: () => {
      const [n2, a] = [e2.context.selectedDates[0], e2.context.selectedDates[e2.context.selectedDates.length - 1]], l = e2.context.selectedDates[0] !== e2.context.selectedDates[e2.context.selectedDates.length - 1], o2 = parseDates([`${n2}:${a}`]).filter((t3) => !e2.context.disableDates.includes(t3)), s2 = l ? e2.enableEdgeDatesOnly ? [n2, a] : o2 : [e2.context.selectedDates[0], e2.context.selectedDates[0]];
      if (setContext(e2, "selectedDates", s2), e2.disableDatesGaps && (setContext(e2, "displayDateMin", state.rangeMin), setContext(e2, "displayDateMax", state.rangeMax)), state.self.context.mainElement.removeEventListener("mousemove", optimizedHandleHoverDatesEvent), state.self.context.mainElement.removeEventListener("mouseleave", handleMouseLeave), state.self.context.mainElement.removeEventListener("keydown", handleCancelSelectionDates), e2.onCreateDateRangeTooltip) return e2.context.selectedDates[0] || (state.self.context.mainElement.removeEventListener("mousemove", optimizedHandleHoverSelectedDatesRangeEvent), state.self.context.mainElement.removeEventListener("mouseleave", handleMouseLeave), createDateRangeTooltip(state.self, state.tooltipEl, null)), e2.context.selectedDates[0] && (state.self.context.mainElement.addEventListener("mousemove", optimizedHandleHoverSelectedDatesRangeEvent), state.self.context.mainElement.addEventListener("mouseleave", handleMouseLeave), createDateRangeTooltip(state.self, state.tooltipEl, t2)), () => {
        state.self.context.mainElement.removeEventListener("mousemove", optimizedHandleHoverSelectedDatesRangeEvent), state.self.context.mainElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    } })[1 === e2.context.selectedDates.length ? "set" : "reset"]();
  };
  var updateDateModifier = (e2) => {
    e2.context.mainElement.querySelectorAll("[data-vc-date]").forEach((t2) => {
      const n = t2.querySelector("[data-vc-date-btn]"), a = t2.dataset.vcDate, l = getDate(a).getDay();
      setDateModifier(e2, e2.context.selectedYear, t2, n, l, a, "current");
    });
  };
  var handleClickDate = (e2, t2) => {
    var n;
    const a = t2.target, l = a.closest("[data-vc-date-btn]");
    if (!e2.selectionDatesMode || !["single", "multiple", "multiple-ranged"].includes(e2.selectionDatesMode) || !l) return;
    const o2 = l.closest("[data-vc-date]");
    ({ single: () => handleSelectDate(e2, o2, false), multiple: () => handleSelectDate(e2, o2, true), "multiple-ranged": () => handleSelectDateRange(e2, o2) })[e2.selectionDatesMode](), null == (n = e2.context.selectedDates) || n.sort((e3, t3) => +new Date(e3) - +new Date(t3)), e2.onClickDate && e2.onClickDate(e2, t2), e2.inputMode && e2.context.inputElement && e2.context.mainElement && e2.onChangeToInput && e2.onChangeToInput(e2, t2);
    const s2 = a.closest('[data-vc-date-month="prev"]'), i = a.closest('[data-vc-date-month="next"]');
    ({ prev: () => e2.enableMonthChangeOnDayClick ? handleMonth(e2, "prev") : updateDateModifier(e2), next: () => e2.enableMonthChangeOnDayClick ? handleMonth(e2, "next") : updateDateModifier(e2), current: () => updateDateModifier(e2) })[s2 ? "prev" : i ? "next" : "current"]();
  };
  var typeClick = ["month", "year"];
  var getValue = (e2, t2, n) => {
    const { currentValue: a, columnID: l } = getColumnID(e2, t2);
    return "month" === e2.context.currentType && l >= 0 ? n - l : "year" === e2.context.currentType && e2.context.selectedYear !== a ? n - 1 : n;
  };
  var handleMultipleYearSelection = (e2, t2) => {
    const n = getValue(e2, "year", Number(t2.dataset.vcYearsYear)), a = getDate(e2.context.dateMin), l = getDate(e2.context.dateMax), o2 = e2.context.displayMonthsCount - 1, { columnID: s2 } = getColumnID(e2, "year"), i = e2.context.selectedMonth < a.getMonth() && n <= a.getFullYear(), r2 = e2.context.selectedMonth > l.getMonth() - o2 + s2 && n >= l.getFullYear(), c = n < a.getFullYear(), d = n > l.getFullYear(), u = i || c ? a.getFullYear() : r2 || d ? l.getFullYear() : n, m = i || c ? a.getMonth() : r2 || d ? l.getMonth() - o2 + s2 : e2.context.selectedMonth;
    setContext(e2, "selectedYear", u), setContext(e2, "selectedMonth", m);
  };
  var handleMultipleMonthSelection = (e2, t2) => {
    const n = t2.closest('[data-vc-column="month"]').querySelector('[data-vc="year"]'), a = getValue(e2, "month", Number(t2.dataset.vcMonthsMonth)), l = Number(n.dataset.vcYear), o2 = getDate(e2.context.dateMin), s2 = getDate(e2.context.dateMax), i = a < o2.getMonth() && l <= o2.getFullYear(), r2 = a > s2.getMonth() && l >= s2.getFullYear();
    setContext(e2, "selectedYear", l), setContext(e2, "selectedMonth", i ? o2.getMonth() : r2 ? s2.getMonth() : a);
  };
  var handleItemClick = (e2, t2, n, a) => {
    var l;
    ({ year: () => {
      if ("multiple" === e2.type) return handleMultipleYearSelection(e2, a);
      setContext(e2, "selectedYear", Number(a.dataset.vcYearsYear));
    }, month: () => {
      if ("multiple" === e2.type) return handleMultipleMonthSelection(e2, a);
      setContext(e2, "selectedMonth", Number(a.dataset.vcMonthsMonth));
    } })[n]();
    ({ year: () => {
      var n2;
      return null == (n2 = e2.onClickYear) ? void 0 : n2.call(e2, e2, t2);
    }, month: () => {
      var n2;
      return null == (n2 = e2.onClickMonth) ? void 0 : n2.call(e2, e2, t2);
    } })[n](), e2.context.currentType !== e2.type ? (setContext(e2, "currentType", e2.type), create(e2), null == (l = e2.context.mainElement.querySelector(`[data-vc="${n}"]`)) || l.focus()) : setYearModifier(e2, a, n, true, true);
  };
  var handleClickType = (e2, t2, n) => {
    var a;
    const l = t2.target, o2 = l.closest(`[data-vc="${n}"]`), s2 = { year: () => createYears(e2, l), month: () => createMonths(e2, l) };
    if (o2 && e2.onClickTitle && e2.onClickTitle(e2, t2), o2 && e2.context.currentType !== n) return s2[n]();
    const i = l.closest(`[data-vc-${n}s-${n}]`);
    if (i) return handleItemClick(e2, t2, n, i);
    const r2 = l.closest('[data-vc="grid"]'), c = l.closest('[data-vc="column"]');
    (e2.context.currentType === n && o2 || "multiple" === e2.type && e2.context.currentType === n && r2 && !c) && (setContext(e2, "currentType", e2.type), create(e2), null == (a = e2.context.mainElement.querySelector(`[data-vc="${n}"]`)) || a.focus());
  };
  var handleClickMonthOrYear = (e2, t2) => {
    const n = { month: e2.selectionMonthsMode, year: e2.selectionYearsMode };
    typeClick.forEach((a) => {
      n[a] && t2.target && handleClickType(e2, t2, a);
    });
  };
  var handleClickWeekNumber = (e2, t2) => {
    if (!e2.enableWeekNumbers || !e2.onClickWeekNumber) return;
    const n = t2.target.closest("[data-vc-week-number]"), a = e2.context.mainElement.querySelectorAll("[data-vc-date-week-number]");
    if (!n || !a[0]) return;
    const l = Number(n.innerText), o2 = Number(n.dataset.vcWeekYear), s2 = Array.from(a).filter((e3) => Number(e3.dataset.vcDateWeekNumber) === l);
    e2.onClickWeekNumber(e2, l, o2, s2, t2);
  };
  var handleClickWeekDay = (e2, t2) => {
    if (!e2.onClickWeekDay) return;
    const n = t2.target.closest("[data-vc-week-day]"), a = t2.target.closest('[data-vc="column"]'), l = a ? a.querySelectorAll("[data-vc-date-week-day]") : e2.context.mainElement.querySelectorAll("[data-vc-date-week-day]");
    if (!n || !l[0]) return;
    const o2 = Number(n.dataset.vcWeekDay), s2 = Array.from(l).filter((e3) => Number(e3.dataset.vcDateWeekDay) === o2);
    e2.onClickWeekDay(e2, o2, s2, t2);
  };
  var handleClick = (e2) => {
    const t2 = (t3) => {
      handleClickArrow(e2, t3), handleClickWeekDay(e2, t3), handleClickWeekNumber(e2, t3), handleClickDate(e2, t3), handleClickMonthOrYear(e2, t3);
    };
    return e2.context.mainElement.addEventListener("click", t2), () => e2.context.mainElement.removeEventListener("click", t2);
  };
  var initMonthsCount = (e2) => {
    if ("multiple" === e2.type && (e2.displayMonthsCount <= 1 || e2.displayMonthsCount > 12)) throw new Error(errorMessages.incorrectMonthsCount);
    if ("multiple" !== e2.type && e2.displayMonthsCount > 1) throw new Error(errorMessages.incorrectMonthsCount);
    setContext(e2, "displayMonthsCount", e2.displayMonthsCount ? e2.displayMonthsCount : "multiple" === e2.type ? 2 : 1);
  };
  var getLocalDate = () => {
    const e2 = /* @__PURE__ */ new Date();
    return new Date(e2.getTime() - 6e4 * e2.getTimezoneOffset()).toISOString().substring(0, 10);
  };
  var resolveDate = (e2, t2) => "today" === e2 ? getLocalDate() : e2 instanceof Date || "number" == typeof e2 || "string" == typeof e2 ? parseDates([e2])[0] : t2;
  var initRange = (e2) => {
    var t2, n, a;
    const l = resolveDate(e2.dateMin, e2.dateMin), o2 = resolveDate(e2.dateMax, e2.dateMax), s2 = resolveDate(e2.displayDateMin, l), i = resolveDate(e2.displayDateMax, o2);
    setContext(e2, "dateToday", resolveDate(e2.dateToday, e2.dateToday)), setContext(e2, "displayDateMin", s2 ? getDate(l) >= getDate(s2) ? l : s2 : l), setContext(e2, "displayDateMax", i ? getDate(o2) <= getDate(i) ? o2 : i : o2);
    const r2 = e2.disableDatesPast && !e2.disableAllDates && getDate(s2) < getDate(e2.context.dateToday);
    setContext(e2, "displayDateMin", r2 || e2.disableAllDates ? e2.context.dateToday : s2), setContext(e2, "displayDateMax", e2.disableAllDates ? e2.context.dateToday : i), setContext(e2, "disableDates", e2.disableDates[0] && !e2.disableAllDates ? parseDates(e2.disableDates) : e2.disableAllDates ? [e2.context.displayDateMin] : []), e2.context.disableDates.length > 1 && e2.context.disableDates.sort((e3, t3) => +new Date(e3) - +new Date(t3)), setContext(e2, "enableDates", e2.enableDates[0] ? parseDates(e2.enableDates) : []), (null == (t2 = e2.context.enableDates) ? void 0 : t2[0]) && (null == (n = e2.context.disableDates) ? void 0 : n[0]) && setContext(e2, "disableDates", e2.context.disableDates.filter((t3) => !e2.context.enableDates.includes(t3))), e2.context.enableDates.length > 1 && e2.context.enableDates.sort((e3, t3) => +new Date(e3) - +new Date(t3)), (null == (a = e2.context.enableDates) ? void 0 : a[0]) && e2.disableAllDates && (setContext(e2, "displayDateMin", e2.context.enableDates[0]), setContext(e2, "displayDateMax", e2.context.enableDates[e2.context.enableDates.length - 1])), setContext(e2, "dateMin", e2.displayDisabledDates ? l : e2.context.displayDateMin), setContext(e2, "dateMax", e2.displayDisabledDates ? o2 : e2.context.displayDateMax);
  };
  var initSelectedDates = (e2) => {
    var t2;
    setContext(e2, "selectedDates", (null == (t2 = e2.selectedDates) ? void 0 : t2[0]) ? parseDates(e2.selectedDates) : []);
  };
  var setInitialContext = (e2, t2, n) => {
    setContext(e2, "selectedMonth", t2), setContext(e2, "selectedYear", n), setContext(e2, "displayYear", n);
  };
  var initSelectedMonthYear = (e2) => {
    var t2;
    if (e2.enableJumpToSelectedDate && (null == (t2 = e2.selectedDates) ? void 0 : t2[0]) && void 0 === e2.selectedMonth && void 0 === e2.selectedYear) {
      const t3 = getDate(parseDates(e2.selectedDates)[0]);
      return void setInitialContext(e2, t3.getMonth(), t3.getFullYear());
    }
    const n = void 0 !== e2.selectedMonth && Number(e2.selectedMonth) >= 0 && Number(e2.selectedMonth) < 12, a = void 0 !== e2.selectedYear && Number(e2.selectedYear) >= 0 && Number(e2.selectedYear) <= 9999;
    setInitialContext(e2, n ? Number(e2.selectedMonth) : getDate(e2.context.dateToday).getMonth(), a ? Number(e2.selectedYear) : getDate(e2.context.dateToday).getFullYear());
  };
  var initTime = (e2) => {
    var t2, n, a;
    if (!e2.selectionTimeMode) return;
    if (![12, 24].includes(e2.selectionTimeMode)) throw new Error(errorMessages.incorrectTime);
    const l = 12 === e2.selectionTimeMode, o2 = l ? /^(0[1-9]|1[0-2]):([0-5][0-9]) ?(AM|PM)?$/i : /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/;
    let [s2, i, r2] = null != (a = null == (n = null == (t2 = e2.selectedTime) ? void 0 : t2.match(o2)) ? void 0 : n.slice(1)) ? a : [];
    s2 ? l && !r2 && (r2 = "AM") : (s2 = l ? transformTime12(String(e2.timeMinHour)) : String(e2.timeMinHour), i = String(e2.timeMinMinute), r2 = l ? Number(transformTime12(String(e2.timeMinHour))) >= 12 ? "PM" : "AM" : null), setContext(e2, "selectedHours", s2.padStart(2, "0")), setContext(e2, "selectedMinutes", i.padStart(2, "0")), setContext(e2, "selectedKeeping", r2), setContext(e2, "selectedTime", `${e2.context.selectedHours}:${e2.context.selectedMinutes}${r2 ? ` ${r2}` : ""}`);
  };
  var initAllVariables = (e2) => {
    setContext(e2, "currentType", e2.type), initMonthsCount(e2), initRange(e2), initSelectedMonthYear(e2), initSelectedDates(e2), initTime(e2);
  };
  var reset = (e2, { year: t2, month: n, dates: a, time: l, locale: o2 }, s2 = true) => {
    var i;
    const r2 = { year: e2.selectedYear, month: e2.selectedMonth, dates: e2.selectedDates, time: e2.selectedTime };
    if (e2.selectedYear = t2 ? r2.year : e2.context.selectedYear, e2.selectedMonth = n ? r2.month : e2.context.selectedMonth, e2.selectedTime = l ? r2.time : e2.context.selectedTime, e2.selectedDates = "only-first" === a && (null == (i = e2.context.selectedDates) ? void 0 : i[0]) ? [e2.context.selectedDates[0]] : true === a ? r2.dates : e2.context.selectedDates, o2) {
      setContext(e2, "locale", { months: { short: [], long: [] }, weekdays: { short: [], long: [] } });
    }
    initAllVariables(e2), s2 && create(e2), e2.selectedYear = r2.year, e2.selectedMonth = r2.month, e2.selectedDates = r2.dates, e2.selectedTime = r2.time, "multiple-ranged" === e2.selectionDatesMode && a && handleSelectDateRange(e2, null);
  };
  var createToInput = (e2) => {
    const t2 = document.createElement("div");
    return t2.className = e2.styles.calendar, t2.dataset.vc = "calendar", t2.dataset.vcInput = "", t2.dataset.vcCalendarHidden = "", setContext(e2, "inputModeInit", true), setContext(e2, "isShowInInputMode", false), setContext(e2, "mainElement", t2), document.body.appendChild(e2.context.mainElement), reset(e2, { year: true, month: true, dates: true, time: true, locale: true }), queueMicrotask(() => show(e2)), e2.onInit && e2.onInit(e2), handleArrowKeys(e2), handleClick(e2);
  };
  var handleInput = (e2) => {
    setContext(e2, "inputElement", e2.context.mainElement);
    const t2 = () => {
      e2.context.inputModeInit ? queueMicrotask(() => show(e2)) : createToInput(e2);
    };
    return e2.context.inputElement.addEventListener("click", t2), e2.context.inputElement.addEventListener("focus", t2), () => {
      e2.context.inputElement.removeEventListener("click", t2), e2.context.inputElement.removeEventListener("focus", t2);
    };
  };
  var init = (e2) => (setContext(e2, "originalElement", e2.context.mainElement.cloneNode(true)), setContext(e2, "isInit", true), e2.inputMode ? handleInput(e2) : (initAllVariables(e2), create(e2), e2.onInit && e2.onInit(e2), handleArrowKeys(e2), handleClick(e2)));
  var update = (e2, t2) => {
    if (!e2.context.isInit) throw new Error(errorMessages.notInit);
    reset(e2, __spreadValues(__spreadValues({}, { year: true, month: true, dates: true, time: true, locale: true }), t2), !(e2.inputMode && !e2.context.inputModeInit)), e2.onUpdate && e2.onUpdate(e2);
  };
  var replaceProperties = (e2, t2) => {
    const n = Object.keys(t2);
    for (let a = 0; a < n.length; a++) {
      const l = n[a];
      "object" != typeof e2[l] || "object" != typeof t2[l] || t2[l] instanceof Date || Array.isArray(t2[l]) ? void 0 !== t2[l] && (e2[l] = t2[l]) : replaceProperties(e2[l], t2[l]);
    }
  };
  var set = (e2, t2, n) => {
    replaceProperties(e2, t2), e2.context.isInit && update(e2, n);
  };
  function findBestPickerPosition(e2, t2) {
    const n = "left";
    if (!t2 || !e2) return n;
    const { canShow: a, parentPositions: l } = getAvailablePosition(e2, t2), o2 = a.left && a.right;
    return (o2 && a.bottom ? "center" : o2 && a.top ? ["top", "center"] : Array.isArray(l) ? ["bottom" === l[0] ? "top" : "bottom", ...l.slice(1)] : l) || n;
  }
  var setPosition = (e2, t2, n) => {
    if (!e2) return;
    const a = "auto" === n ? findBestPickerPosition(e2, t2) : n, l = { top: -t2.offsetHeight, bottom: e2.offsetHeight, left: 0, center: e2.offsetWidth / 2 - t2.offsetWidth / 2, right: e2.offsetWidth - t2.offsetWidth }, o2 = Array.isArray(a) ? a[0] : "bottom", s2 = Array.isArray(a) ? a[1] : a;
    t2.dataset.vcPosition = o2;
    const { top: i, left: r2 } = getOffset(e2), c = i + l[o2];
    let d = r2 + l[s2];
    const { vw: u } = getViewportDimensions();
    if (d + t2.clientWidth > u) {
      const e3 = window.innerWidth - document.body.clientWidth;
      d = u - t2.clientWidth - e3;
    } else d < 0 && (d = 0);
    Object.assign(t2.style, { left: `${d}px`, top: `${c}px` });
  };
  var show = (e2) => {
    if (e2.context.isShowInInputMode) return;
    if (!e2.context.currentType) return void e2.context.mainElement.click();
    setContext(e2, "cleanupHandlers", []), setContext(e2, "isShowInInputMode", true), setPosition(e2.context.inputElement, e2.context.mainElement, e2.positionToInput), e2.context.mainElement.removeAttribute("data-vc-calendar-hidden");
    const t2 = () => {
      setPosition(e2.context.inputElement, e2.context.mainElement, e2.positionToInput);
    };
    window.addEventListener("resize", t2), e2.context.cleanupHandlers.push(() => window.removeEventListener("resize", t2));
    const n = (t3) => {
      "Escape" === t3.key && hide(e2);
    };
    document.addEventListener("keydown", n), e2.context.cleanupHandlers.push(() => document.removeEventListener("keydown", n));
    const a = (t3) => {
      t3.target === e2.context.inputElement || e2.context.mainElement.contains(t3.target) || hide(e2);
    };
    document.addEventListener("click", a, { capture: true }), e2.context.cleanupHandlers.push(() => document.removeEventListener("click", a, { capture: true })), e2.onShow && e2.onShow(e2);
  };
  var labels = { application: "Calendar", navigation: "Calendar Navigation", arrowNext: { month: "Next month", year: "Next list of years" }, arrowPrev: { month: "Previous month", year: "Previous list of years" }, month: "Select month, current selected month:", months: "List of months", year: "Select year, current selected year:", years: "List of years", week: "Days of the week", weekNumber: "Numbers of weeks in a year", dates: "Dates in the current month", selectingTime: "Selecting a time ", inputHour: "Hours", inputMinute: "Minutes", rangeHour: "Slider for selecting hours", rangeMinute: "Slider for selecting minutes", btnKeeping: "Switch AM/PM, current position:" };
  var styles2 = { calendar: "vc", controls: "vc-controls", grid: "vc-grid", column: "vc-column", header: "vc-header", headerContent: "vc-header__content", month: "vc-month", year: "vc-year", arrowPrev: "vc-arrow vc-arrow_prev", arrowNext: "vc-arrow vc-arrow_next", wrapper: "vc-wrapper", content: "vc-content", months: "vc-months", monthsMonth: "vc-months__month", years: "vc-years", yearsYear: "vc-years__year", week: "vc-week", weekDay: "vc-week__day", weekNumbers: "vc-week-numbers", weekNumbersTitle: "vc-week-numbers__title", weekNumbersContent: "vc-week-numbers__content", weekNumber: "vc-week-number", dates: "vc-dates", date: "vc-date", dateBtn: "vc-date__btn", datePopup: "vc-date__popup", dateRangeTooltip: "vc-date-range-tooltip", time: "vc-time", timeContent: "vc-time__content", timeHour: "vc-time__hour", timeMinute: "vc-time__minute", timeKeeping: "vc-time__keeping", timeRanges: "vc-time__ranges", timeRange: "vc-time__range" };
  var OptionsCalendar = class {
    constructor() {
      __publicField(this, "type", "default"), __publicField(this, "inputMode", false), __publicField(this, "positionToInput", "left"), __publicField(this, "firstWeekday", 1), __publicField(this, "monthsToSwitch", 1), __publicField(this, "themeAttrDetect", "html[data-theme]"), __publicField(this, "locale", "en"), __publicField(this, "dateToday", "today"), __publicField(this, "dateMin", "1970-01-01"), __publicField(this, "dateMax", "2470-12-31"), __publicField(this, "displayDateMin"), __publicField(this, "displayDateMax"), __publicField(this, "displayDatesOutside", true), __publicField(this, "displayDisabledDates", false), __publicField(this, "displayMonthsCount"), __publicField(this, "disableDates", []), __publicField(this, "disableAllDates", false), __publicField(this, "disableDatesPast", false), __publicField(this, "disableDatesGaps", false), __publicField(this, "disableWeekdays", []), __publicField(this, "disableToday", false), __publicField(this, "enableDates", []), __publicField(this, "enableEdgeDatesOnly", true), __publicField(this, "enableDateToggle", true), __publicField(this, "enableWeekNumbers", false), __publicField(this, "enableMonthChangeOnDayClick", true), __publicField(this, "enableJumpToSelectedDate", false), __publicField(this, "selectionDatesMode", "single"), __publicField(this, "selectionMonthsMode", true), __publicField(this, "selectionYearsMode", true), __publicField(this, "selectionTimeMode", false), __publicField(this, "selectedDates", []), __publicField(this, "selectedMonth"), __publicField(this, "selectedYear"), __publicField(this, "selectedHolidays", []), __publicField(this, "selectedWeekends", [0, 6]), __publicField(this, "selectedTime"), __publicField(this, "selectedTheme", "system"), __publicField(this, "timeMinHour", 0), __publicField(this, "timeMaxHour", 23), __publicField(this, "timeMinMinute", 0), __publicField(this, "timeMaxMinute", 59), __publicField(this, "timeControls", "all"), __publicField(this, "timeStepHour", 1), __publicField(this, "timeStepMinute", 1), __publicField(this, "sanitizerHTML", (e2) => e2), __publicField(this, "onClickDate"), __publicField(this, "onClickWeekDay"), __publicField(this, "onClickWeekNumber"), __publicField(this, "onClickTitle"), __publicField(this, "onClickMonth"), __publicField(this, "onClickYear"), __publicField(this, "onClickArrow"), __publicField(this, "onChangeTime"), __publicField(this, "onChangeToInput"), __publicField(this, "onCreateDateRangeTooltip"), __publicField(this, "onCreateDateEls"), __publicField(this, "onCreateMonthEls"), __publicField(this, "onCreateYearEls"), __publicField(this, "onInit"), __publicField(this, "onUpdate"), __publicField(this, "onDestroy"), __publicField(this, "onShow"), __publicField(this, "onHide"), __publicField(this, "popups", {}), __publicField(this, "labels", __spreadValues({}, labels)), __publicField(this, "layouts", { default: "", multiple: "", month: "", year: "" }), __publicField(this, "styles", __spreadValues({}, styles2));
    }
  };
  var _Calendar = class e extends OptionsCalendar {
    constructor(t2, n) {
      var a;
      super(), __publicField(this, "init", () => init(this)), __publicField(this, "update", (e2) => update(this, e2)), __publicField(this, "destroy", () => destroy(this)), __publicField(this, "show", () => show(this)), __publicField(this, "hide", () => hide(this)), __publicField(this, "set", (e2, t3) => set(this, e2, t3)), __publicField(this, "context"), this.context = __spreadProps(__spreadValues({}, this.context), { locale: { months: { short: [], long: [] }, weekdays: { short: [], long: [] } } }), setContext(this, "mainElement", "string" == typeof t2 ? null != (a = e.memoizedElements.get(t2)) ? a : this.queryAndMemoize(t2) : t2), n && replaceProperties(this, n);
    }
    queryAndMemoize(t2) {
      const n = document.querySelector(t2);
      if (!n) throw new Error(errorMessages.notFoundSelector(t2));
      return e.memoizedElements.set(t2, n), n;
    }
  };
  __publicField(_Calendar, "memoizedElements", /* @__PURE__ */ new Map());
  var Calendar = _Calendar;

  // src/components/FormAppoiment.js
  var FormAppoinment = class extends FormLead {
    #default = {
      eventName: "user:click-form-appoinment",
      form: {
        function: {
          disabled: true
        },
        company: {
          disabled: true
        },
        subject: {
          disabled: true
        },
        description: {
          disabled: true
        }
      },
      calendar: {
        initialTime: 9,
        finalTime: 17,
        deltaTime: 60
      }
    };
    constructor(props = {}) {
      super();
      this.state = this.initState(this.#default, props);
      this.getAttribute("id") || this.setAttribute("id", this.state.id || `component-${Math.floor(Math.random() * 100)}`);
      this.setAttribute("stage", "awaiting");
      this.ok = false;
      this.calendar = false;
    }
    attributeChangedCallback(name, oldValue, newValue) {
      if (newValue === "open") {
        if (this.calendar === false) {
          this.calendar = new Calendar("#calendar", this.#setCalendar());
          this.calendar.init();
        } else {
          this.calendar.update();
        }
        let form = this.querySelector("form");
        const fieldset = form.querySelector("fieldset");
        fieldset.disabled = true;
        this.querySelector(".modal").classList.add("is-active");
      } else {
        this.querySelector("form").reset();
        let times = this.querySelector(".grid").querySelectorAll("button:not([disabled])");
        times.forEach((time) => {
          if (time.classList.contains("is-info")) {
            time.classList.remove("is-info");
          }
          time.disabled = true;
        });
        this.querySelector(".modal").classList.remove("is-active");
      }
    }
    #setCalendar() {
      let today = /* @__PURE__ */ new Date();
      let config3 = {
        locale: this.state.context.lang,
        onClickDate(self, event) {
          let selection = event.target.parentNode;
          let date = selection.dataset.vcDate;
          const customEvent = new CustomEvent("date-selected", {
            detail: { date },
            bubbles: true,
            composed: true
          });
          selection.dispatchEvent(customEvent);
        }
      };
      if (this.state.calendar?.disablePastDays === true) {
        let yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const dd = String(today.getDate()).padStart(2, "0");
        config3.displayDateMin = `${yyyy}-${mm}-${dd}`;
      }
      if (this.state.calendar?.deltaDays > 0) {
        today.setDate(today.getDate() + this.state.calendar.deltaDays - 1);
        let yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const dd = String(today.getDate()).padStart(2, "0");
        config3.displayDateMax = `${yyyy}-${mm}-${dd}`;
      }
      if (this.state.calendar?.availableDates != void 0) {
        config3.disableAllDates = true, config3.enableDates = this.state.calendar.availableDates;
      }
      return config3;
    }
    #pad(num) {
      return num.toString().padStart(2, "0");
    }
    #getTimes() {
      let times = "";
      let deltaTime = this.state.calendar.deltaTime;
      let currentMinutes = this.state.calendar.initialTime * 60;
      const endMinutes = this.state.calendar.finalTime * 60 + deltaTime;
      if (currentMinutes < endMinutes) {
        while (currentMinutes <= endMinutes) {
          const hours = Math.floor(currentMinutes / 60);
          const minutes = currentMinutes % 60;
          const timeStr = `${this.#pad(hours)}:${this.#pad(minutes)}`;
          currentMinutes += deltaTime;
          times += `<div class="cell"><button class="button is-small is-time" data-time="${timeStr}" disabled>${timeStr}</button></div>`;
        }
      } else {
        console.warn("finalTime must be greater than initialTime. It is expressed as integers in 24-hour format.");
      }
      return times;
    }
    enableTimes(options) {
      options.forEach((time) => {
        let el = this.querySelector(`[data-time="${time}"]`);
        if (el) {
          el.removeAttribute("disabled");
          el.addEventListener("click", (e2) => {
            e2.preventDefault();
            e2.stopPropagation();
            const customEvent = new CustomEvent("time-selected", {
              detail: { time },
              bubbles: false,
              composed: true
            });
            this.dispatchEvent(customEvent);
          });
        } else {
          console.warn(`Time ${time} not found in the form appoinment component.`);
        }
      });
    }
    registerExtraEvents() {
      this.addEventListener("time-selected", (e2) => {
        const dateSelected = this.querySelector('.vc-dates button[aria-selected="true"]').parentNode.dataset.vcDate;
        let appoinmentDate = `${dateSelected} ${e2.detail.time}`;
        let options = this.querySelectorAll(".is-time");
        options.forEach((el) => {
          el.classList.remove("is-info");
        });
        this.querySelector(`[data-time="${e2.detail.time}"]`).classList.add("is-info");
        let form = this.querySelector("form");
        const fieldset = form.querySelector("fieldset");
        fieldset.disabled = false;
        let input = this.querySelector("#appoinment");
        if (input) {
          input.value = appoinmentDate;
        }
      });
    }
    addDateField() {
      var input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("id", "appoinment");
      let form = this.querySelector("form");
      form.classList.remove("box");
      const fieldset = form.querySelector("fieldset");
      fieldset.appendChild(input);
    }
    render() {
      this.state?.id != void 0 ? this.state.form.id = `${this.state.id}-form` : `form-${Math.floor(Math.random() * 100)}`;
      this.innerHTML = /* html */
      `
        <div class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
                ${this.state.title?.text[this.state.context.lang] != void 0 ? `
                <header ${this.getClasses(["modal-card-head"], this.state.title?.classList)}  ${this.setAnimation(this.state.title?.animation)}>
                    <p class="modal-card-title">${this.state.title.text[this.state.context.lang]}</p>
                </header>` : ""}
                <section class="modal-card-body">
                        <div>
                            <div id="calendar"></div>
                        </div>
                        <div class="pt-2">
                            <div class="fixed-grid has-5-cols">
                                <div class="grid">
                                    ${this.#getTimes()}
                                </div>
                            </div>
                        </div>
                        <div class="pt-4">
                            ${this.state?.form != void 0 ? new CjForm(this.state.form, this.state.context).render() : ""}
                        </div>
                </section>
            </div>
        </div>
        `;
      addFormEvents(this);
      this.registerExtraEvents();
      this.addDateField();
    }
  };
  customElements.define("form-appoinment", FormAppoinment);
})();
/*! Bundled license information:

@fortawesome/fontawesome-svg-core/index.mjs:
@fortawesome/free-solid-svg-icons/index.mjs:
  (*!
   * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2024 Fonticons, Inc.
   *)

vanilla-calendar-pro/index.mjs:
  (*! name: vanilla-calendar-pro v3.0.4 | url: https://github.com/uvarov-frontend/vanilla-calendar-pro *)
*/
