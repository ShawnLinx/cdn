if (!('IntersectionObserver' in window)) {
    var script = document.createElement("script");
    script.src = "http://oss.shawnlin.cn/polyfill/intersection-observer.min.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}