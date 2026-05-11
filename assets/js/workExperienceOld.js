/* work experience — older (Qualysoft and earlier) */

$("#heritage-link").on("click", function () {
    onWorkOld();
});

$(".mobile-nav > ul > li > a[href='#heritage']").on("click", function () {
    onWorkOld();
});

function onWorkOld() {
    if (window.resume) {
        renderWorkInto("#rowHeritage", window.resume.workOld);
    }
}
