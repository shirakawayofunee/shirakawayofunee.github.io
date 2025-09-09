var papermaskZoom = 1;

function handleZoomChange(num) {
    if (typeof $ === 'undefined') {
        console.error('$ is not defined. jQuery not loaded.');
        return;
    }
    if (num == 1) {
        papermaskZoom += 0.1;
    }
    if (num == -1) {
        papermaskZoom -= 0.1;
    }
    if (num == 0) {
        papermaskZoom = 1;
    }
    if (papermaskZoom > 4) {
        papermaskZoom = 4;
    }
    if (papermaskZoom < 0.1) {
        papermaskZoom = 0.1;
    }
    $(".papermaskDetailTop-zoom").css("transform", `scale(${papermaskZoom})`);
}

function handleDownload() {
    if (typeof $ === 'undefined') {
        console.error('$ is not defined. jQuery not loaded.');
        return;
    }
    var imgSrc = $(".papermaskDetailTop-zoom")[0].src;
    if (imgSrc) {
        var a = document.createElement("a");
        a.href = imgSrc;
        a.download = imgSrc.split('/').pop() || 'image.jpg';
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

function paperShowHide() {
    papermaskZoom = 1;
    if (typeof $ === 'undefined') {
        const modal = bootstrap.Modal.getInstance(document.getElementById("imageModal"));
        if (modal) modal.hide();
        return;
    }
    $("#imageModal").modal('hide');
}