(function () {

  const isAndroid = /Android/i.test(navigator.userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  // 🔗 ABSOLUTE FILE URLS (GitHub Pages)
  const glbUrl =
    "https://abhidudakiya-glitch.github.io/Tea_Post/Burger/Models/Burger.glb";

  const usdzUrl =
    "https://abhidudakiya-glitch.github.io/Tea_Post/Burger/Models/Burger.usdz";


  // 🍎 iOS → Quick Look
  if (isIOS) {
    window.location.replace(usdzUrl);
    return;
  }


  // 🤖 Android → Scene Viewer
  if (isAndroid) {

    const intentUrl =
      "intent://arvr.google.com/scene-viewer/1.0" +
      "?file=" + encodeURIComponent(glbUrl) +
      "&mode=ar_only" +
      "#Intent;scheme=https;" +
      "package=com.google.ar.core;" +
      "action=android.intent.action.VIEW;" +
      "end;";

    window.location.replace(intentUrl);
    return;
  }


  // 💻 Desktop fallback
  document.body.innerHTML = `
    <h2 style="text-align:center">
      3D Preview (Open on Mobile for AR)
    </h2>

    <model-viewer
      src="${glbUrl}"
      auto-rotate
      camera-controls
      style="width:100%; height:500px;">
    </model-viewer>

    <script type="module"
      src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js">
    </script>
  `;

})();
