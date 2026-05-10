/* work experience — recent (last 5 years) */

$("#experience-link").on("click", function () {
    onWorkRecent();
});

$(".mobile-nav > ul > li > a[href='#experience']").on("click", function () {
    onWorkRecent();
});

function onWorkRecent() {
    if (window.resume) {
        renderWorkInto("#rowExperience", window.resume.workRecent);
    }
}
