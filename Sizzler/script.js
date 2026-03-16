(function () {

const glbFile = "Models/Sizzler.glb";
const usdzFile = "Models/Sizzler.usdz";

const app = document.getElementById("app");

if (!app) {
    alert("ERROR: #app div not found");
    return;
}

app.innerHTML = `
<model-viewer
src="${glbFile}"
ios-src="${usdzFile}"
ar
ar-modes="scene-viewer quick-look webxr"
camera-controls
auto-rotate
shadow-intensity="1"
style="width:100%; height:80vh; background:#fff;">
</model-viewer>
`;

})();
