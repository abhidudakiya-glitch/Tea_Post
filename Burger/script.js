(function () {
  const glbFile = "Models/Burger.glb";
  const usdzFile = "Models/Burger.usdz";

  const ua = navigator.userAgent || navigator.vendor || window.opera;

  // iOS: Apple forces Quick Look
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
      ar-modes="webxr"   <!-- 🚨 ONLY webxr, no scene-viewer, no quick-look -->
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

  // Try to enter AR automatically
  viewer.addEventListener("load", async () => {
    if (viewer.canActivateAR) {
      try {
        await viewer.activateAR();
      } catch (e) {
        console.log("Auto AR blocked by browser, user interaction needed.");
      }
    }
  });

  // Exit AR → show 3D
  btn.addEventListener("click", () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  });
})();
