// disable rubberband effect on mobile devices
document.getElementById('glcanvas').addEventListener('touchmove', (e)=>{ e.preventDefault(); }, false);


function patchInitialized(patch) {
    // You can now access the patch object (patch), register variable watchers and so on
}

function patchFinishedLoading(patch) {
    // The patch is ready now, all assets have been loaded
}

document.addEventListener('CABLES.jsLoaded', function (event) {
    CABLES.patch = new CABLES.Patch({
        patch: CABLES.exportedPatch,
        "prefixAssetPath": "",
        "assetPath": "assets/",
        "jsPath": "js/",
        "glCanvasId": "glcanvas",
        "glCanvasResizeToWindow": true,
        "onPatchLoaded": patchInitialized,
        "onFinishedLoading": patchFinishedLoading,
        "canvas":{"alpha":true,"premultipliedAlpha":true} // make canvas transparent
    });
});