(function () {

    const glbFile = "Models/Pizza.glb";
    const usdzFile = "Models/Pizza.usdz";

    const ua = navigator.userAgent || navigator.vendor || window.opera;

    // ---------- iOS (iPhone / iPad) ----------
    if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {

        // Open USDZ directly in AR Quick Look
        window.location.replace(usdzFile);
        return;
    }

    // ---------- Android ----------
    if (/android/i.test(ua)) {

        const fullGlbUrl = location.origin + "/Tea_Post/Pizza/" + glbFile;

        const sceneViewerIntent =
            "intent://arvr.google.com/scene-viewer/1.0" +
            "?file=" + encodeURIComponent(fullGlbUrl) +
            "&mode=ar_only" +
            "#Intent;scheme=https;package=com.google.android.googlequicksearchbox;end;";

        window.location.replace(sceneViewerIntent);
        return;
    }

    // ---------- Desktop fallback ----------
    document.body.innerHTML = `
        <h2 style="text-align:center;">3D Preview (AR on mobile)</h2>

        <model-viewer
            src="${glbFile}"
            auto-rotate
            camera-controls
            style="width:100%; height:500px;">
        </model-viewer>

        <script type="module"
            src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js">
        </script>
    `;

})();
