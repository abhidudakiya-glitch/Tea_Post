(function () {
  const glbFile = "Models/Burger.glb";
  const usdzFile = "Models/Burger.usdz";

  const ua = navigator.userAgent || navigator.vendor || window.opera;

  // iOS: still use Quick Look (Apple forces this)
  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
    window.location.href = usdzFile;
    return;
  }

  const app = document.getElementById("app");

  app.innerHTML = `
    <model-viewer
      id="viewer"
      src="${glbFile}"
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      auto-rotate
      style="width:100%; height:80vh; background:#fff;">
    </model-viewer>

    <div style="margin:12px;">
      <button id="previewBtn" style="
        padding:12px 18px;
        font-size:16px;
        border:none;
        border-radius:8px;
        background:#000;
        color:#fff;
      ">
        3D Preview
      </button>
    </div>
  `;

  const viewer = document.getElementById("viewer");
  const btn = document.getElementById("previewBtn");

  // Wait until model-viewer is ready, then enter AR automatically
  viewer.addEventListener("load", () => {
    if (viewer.canActivateAR) {
      viewer.activateAR(); // 🔥 Auto-launch AR
    }
  });

  // Button: exit AR and show normal 3D view
  btn.addEventListener("click", () => {
    // This exits AR and returns to 3D preview
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  });
})();
