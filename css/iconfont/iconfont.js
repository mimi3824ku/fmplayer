;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-zhuanfa" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M928 320q20.992 16.992 36.992 34.496t16 34.496q0 19.008-14.496 31.008t-35.488 27.008q-32 24-67.488 50.496t-67.488 50.016-56.512 40.992-34.496 23.488q-32.992 20-51.008 14.496t-23.008-21.504l0-116-4 0q-76 0-132.992 16.512t-100 50.016-75.008 83.008-58.016 114.496q-3.008-2.016-6.016-11.008-2.016-8-3.488-23.008t-1.504-42.016q0-84 25.504-156.992t72.992-127.488 115.008-85.504 151.488-30.016q4.992 0 8.512 0.512t8.512 0.512l-0.992-104.992q2.016-28 23.008-40.512t52.992 10.496q10.016 8 36.512 28.992t59.488 47.008 67.008 53.504 58.016 47.488zM760.992 696q32.992 0 46.496 18.496t13.504 53.504l0 131.008q0 50.016-28.992 83.008t-76.992 32l-599.008-4q-22.016 0-43.008-8.992t-37.504-25.504-27.008-39.488-10.496-52l0-579.008q0-48.992 29.504-82.016t82.496-32l203.008 2.016q11.008 0 23.008 2.496t21.504 9.504 16 18.496 6.496 29.504q0 16.992-7.008 28.512t-18.496 19.008-24.992 11.008-26.496 3.488l-96-0.992q-39.008 0-60.992 24.512t-22.016 60.512l0 396q0 20.992 7.488 38.016t20 28.512 28 18.016 31.488 6.496l408 4q35.008 0.992 55.488-23.008t20.512-60.992l0-43.008q0-31.008 18.496-48.992t47.488-18.016z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-star" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M569.498552 94.591355l110.452601 223.834928 273.26778 40.687678c49.603745 7.397481 65.189721 42.312688 28.735461 80.583317l-199.268416 195.119933 48.854685 284.620339c6.563486 41.200354-33.247218 65.146743-68.225871 41.200354l-249.727645-130.273019L259.392772 963.953416c-34.038234 17.381879-69.038376 6.200212-62.688761-41.458227l47.764863-287.656489L39.10667 435.399391c-39.661302-36.582173-19.049868-69.979818 26.982538-76.094072l281.199427-40.85857c0 0 57.706283-117.0386 110.324688-223.64357C495.927953 23.221888 537.940812 24.269753 569.498552 94.591355z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-aixin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.999488 213.006302c0 0-188.970886-152.454204-358.88781 23.023366 0 0-143.214772 131.514289 29.163203 308.510446 82.313727 84.520999 333.700151 333.700151 333.700151 333.700151s245.283426-243.846704 323.797617-329.717444c56.223512-61.491493 150.452617-217.817887 4.668323-335.51652C844.438926 213.006302 660.719648 62.597687 511.999488 213.006302z"  ></path>' +
    '' +
    '<path d="M800.831756 314.308499"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontcolor96" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0zM418.656 688c0 17.68-14.32 32-32 32-17.664 0-32-14.32-32-32L354.656 336c0-17.664 14.336-32 32-32 17.68 0 32 14.336 32 32L418.656 688zM669.344 688c0 17.68-14.336 32-32 32-17.68 0-32-14.32-32-32L605.344 336c0-17.664 14.32-32 32-32 17.664 0 32 14.336 32 32L669.344 688z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontcolor97" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0zM590.928 548.688l-222.096 146.72c-34.944 20.192-63.52 3.664-63.52-36.688L305.312 365.312c0-40.336 28.576-56.88 63.52-36.688l222.096 146.72C625.856 495.504 625.856 528.496 590.928 548.688zM718.688 688c0 17.68-14.336 32-32 32s-32-14.32-32-32L654.688 336c0-17.664 14.336-32 32-32s32 14.336 32 32L718.688 688z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0.01536c-282.745711 0-511.99232 229.246609-511.99232 511.99232 0 282.766191 229.246609 511.99232 511.99232 511.99232s511.99232-229.22613 511.99232-511.99232C1023.99232 229.261969 794.745711 0.01536 512 0.01536zM725.287809 541.48615 414.480823 718.42148c-28.499541 16.217869-51.812599 2.948052-51.812599-29.499974L362.668224 335.093854c0-32.448025 23.313058-45.717842 51.812599-29.499974l310.806986 176.924066C753.787349 498.736839 753.787349 525.278521 725.287809 541.48615z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhuomiangeci" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M794.689361 79.771835 228.612745 79.771835c-110.334921 0-199.792349 89.456405-199.792349 199.791325l0 466.181465c0 110.334921 89.456405 199.791325 199.792349 199.791325l566.076616 0c110.334921 0 199.792349-89.456405 199.792349-199.791325L994.481709 279.56316C994.481709 169.228239 905.025305 79.771835 794.689361 79.771835zM927.883919 729.095433c0 82.763982-67.079768 149.84375-149.84375 149.84375L245.261936 878.939183c-82.763982 0-149.84375-67.079768-149.84375-149.84375L95.418186 296.212352c0-82.763982 67.079768-149.84375 149.84375-149.84375l532.778232 0c82.763982 0 149.84375 67.079768 149.84375 149.84375L927.883919 729.095433z"  ></path>' +
    '' +
    '<path d="M395.105686 362.810143l233.090732 0c18.396999 0 33.298384-14.901385 33.298384-33.298384 0-18.396999-14.901385-33.298384-33.298384-33.298384L395.105686 296.213375c-18.396999 0-33.298384 14.901385-33.298384 33.298384C361.807303 347.908758 376.708688 362.810143 395.105686 362.810143z"  ></path>' +
    '' +
    '<path d="M628.196419 645.848451 395.105686 645.848451c-18.396999 0-33.298384 14.901385-33.298384 33.298384 0 18.398022 14.901385 33.298384 33.298384 33.298384l233.090732 0c18.396999 0 33.298384-14.901385 33.298384-33.298384C661.495826 660.749836 646.594441 645.848451 628.196419 645.848451z"  ></path>' +
    '' +
    '<path d="M728.092593 462.706317 295.210535 462.706317c-18.398022 0-33.298384 14.901385-33.298384 33.298384 0 18.398022 14.901385 33.298384 33.298384 33.298384l432.882058 0c18.396999 0 33.298384-14.901385 33.298384-33.298384C761.390977 477.606679 746.489592 462.706317 728.092593 462.706317z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bokongtailubozhuanzhibo202" viewBox="0 0 1622 1024">' +
    '' +
    '<path d="M119.466667 512c0-170.666667 162.133333-392.533333 392.533333-392.533333l597.333333 0 0 204.8L1425.066667 0l-409.6 0L512 0C230.4 0 0 230.4 0 512c0 136.533333 59.733333 264.533333 145.066667 358.4l85.333333-85.333333C145.066667 708.266667 119.466667 588.8 119.466667 512L119.466667 512z"  ></path>' +
    '' +
    '<path d="M1501.866667 520.533333c0 170.666667-145.066667 392.533333-392.533333 392.533333l-597.333333 0L512 708.266667 204.8 1024l409.6 0L1109.333333 1024c281.6 0 503.466667-230.4 503.466667-503.466667 0-136.533333-59.733333-264.533333-145.066667-358.4l-85.333333 85.333333C1442.133333 298.666667 1501.866667 401.066667 1501.866667 520.533333L1501.866667 520.533333z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dinghuobaoxiayiye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.656 32.959c-264.887 0-479.636 213.999-479.636 477.98 0 263.978 214.749 477.976 479.636 477.976 264.889 0 479.639-213.998 479.639-477.976 0-263.98-214.75-477.98-479.639-477.98zM852.062 523.808l-250.758 242.31c-14.888 14.86-53.847 16.329-53.847-21.752v-165.373l-193.639 187.125c-14.87 14.86-53.844 16.329-53.844-21.752v-506.323c0-38.065 38.975-36.612 53.844-21.734l193.64 187.112v-165.378c0-38.065 38.959-36.612 53.847-21.734l250.757 242.298c29.063 20.032 26.67 46.211 0 65.202z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fastforward_round_fill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 1024c282.76736 0 512-229.23264 512-512S794.76736 0 512 0 0 229.23264 0 512s229.23264 512 512 512zM281.27232 690.03264c-19.61984 11.44832-35.51232 2.33472-35.51232-20.3776V381.1328c0-22.69184 15.74912-31.88736 35.51232-20.35712l246.53824 143.91296c19.61984 11.42784 19.7632 29.9008 0 41.43104l-246.53824 143.91296z m296.96 0c-19.61984 11.44832-35.51232 2.33472-35.51232-20.3776V381.1328c0-22.69184 15.74912-31.88736 35.51232-20.35712l246.53824 143.91296c19.61984 11.42784 19.7632 29.9008 0 41.43104l-246.53824 143.91296z" fill="#000000" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)