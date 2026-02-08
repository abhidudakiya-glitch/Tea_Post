(function () {
  const glbFile = "Models/Burger.glb";
  const usdzFile = "Models/Burger.usdz";

  const ua = navigator.userAgent || navigator.vendor || window.opera;

  // iOS: redirect to USDZ
  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
    window.location.href = usdzFile;
    return;
  }

  // Android + Desktop: show model in page
  const app = document.getElementById("app");

  if (!app) {
    alert("ERROR: #app div not found");
    return;
  }

  app.innerHTML = `
    <model-viewer
      src="${glbFile}"
      ar
      camera-controls
      auto-rotate
      style="background:#fff;">
    </model-viewer>
  `;
})();
