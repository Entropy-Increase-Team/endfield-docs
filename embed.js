// Embed mode detection
// When loaded with ?embed=true, hide navbar/footer for iframe integration
(function () {
  var params = new URLSearchParams(window.location.search);
  if (params.get("embed") === "true") {
    document.body.classList.add("embed-mode");

    // Notify parent frame that docs are ready
    if (window.parent !== window) {
      window.parent.postMessage({ type: "endfield-docs-ready" }, "*");
    }

    // Forward navigation events to parent for URL sync
    var observer = new MutationObserver(function () {
      if (window.parent !== window) {
        window.parent.postMessage(
          {
            type: "endfield-docs-navigate",
            path: window.location.pathname + window.location.hash,
          },
          "*"
        );
      }
    });
    observer.observe(document.querySelector("title") || document.head, {
      childList: true,
      subtree: true,
    });
  }
})();
