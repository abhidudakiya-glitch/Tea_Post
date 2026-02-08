(function () {

  const isAndroid = /Android/i.test(navigator.userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  const glbUrl =
    "https://abhidudakiya-glitch.github.io/Tea_Post/Burger/Models/Burger.glb";

  const usdzUrl =
    "https://abhidudakiya-glitch.github.io/Tea_Post/Burger/Models/Burger.usdz";


  // 🍎 iOS → AR Quick Look
  if (isIOS) {
    window.location.href = usdzUrl;
    return;
  }


  // 🤖 Android → Scene Viewer AR only
  if (isAndroid) {

    const sceneViewerUrl =
      "intent://arvr.google.com/scene-viewer/1.0" +
      "?file=" + encodeURIComponent(glbUrl) +
      "&mode=ar_only" +              // 👈 Forces AR
      "&resizable=false" +          // 👈 No scale UI
      "#Intent;scheme=https;" +
      "package=com.google.ar.core;" +
      "action=android.intent.action.VIEW;" +
      "end;";

    window.location.href = sceneViewerUrl;
    return;
  }


  // Desktop fallback
  document.body.innerHTML =
    "Open this link on Android or iPhone to view in AR.";

})();
