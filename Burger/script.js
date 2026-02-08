<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>

<script>
(function () {
  const glbFile = "Models/Burger.glb";
  const usdzFile = "Models/Burger.usdz";

  const ua = navigator.userAgent || navigator.vendor || window.opera;

  // iOS: open USDZ in Quick Look (this is the only reliable way on iPhone)
  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
    window.location.href = usdzFile;
    return;
  }

  // Android + Desktop: use in-page model-viewer (NO Scene Viewer, NO intent)
  document.body.innerHTML = `
    <h2 style="text-align:center">3D Preview</h2>
    <model-viewer
      src="${glbFile}"
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      auto-rotate
      style="width: 100%; height: 80vh; background: #f0f0f0;">
    </model-viewer>
  `;
})();
</script>
