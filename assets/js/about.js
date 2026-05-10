/* about */

function rpInterest(ri,color,interest) {
    /*
    <div class="col-lg-3 col-md-4">
        <div class="icon-box">
        <i class="ri-compass-fill | ri-global-line" style="color: #ffbb2c;"></i>
        <h3>Software Development</h3>
        </div>
    </div>
    */
    if ($("#rowInterests").children().length > 8) {
        return;
    }
    var div = $("<div>").addClass("col-lg-3 col-md-4 mt-4");
    var iconbox = $("<div>").addClass("icon-box");
    var i = $("<i>").addClass(ri);
    // add style color from a new parameter called color to the i element 
    i.attr("style",`color: ${color}`);
    iconbox.append(i);
    var h3=$("<h3>").text(interest);
    iconbox.append(h3);
    div.append(iconbox);
    $("#rowInterests").append(div);
}

function language(code,lang,level) {
    /* 
    <div class="col-lg-3 col-md-4 mt-4">
        <div class="icon-box">
            <div class="flag flag-fr" aria-details="French Flag"></div>
            <h3>fr svg</h3>
            <span>A2</span>
        </div>
    </div>
    */
    if ($("#rowLanguages").children().length > 5) {
        return;
    }
    var div = $("<div>").addClass("col-lg-3 col-md-4 mt-4");
    var iconbox = $("<div>").addClass("icon-box");
    var flag = $("<div>").addClass(`flag flag-${code}`).attr("aria-details",`${lang} Flag`);
    iconbox.append(flag);
    var h3=$("<h3>").text(lang);
    iconbox.append(h3);
    var span = $("<span>").text(level);
    iconbox.append(span);
    div.append(iconbox);
    $("#rowLanguages").append(div);
}

function onAbout() {
    $("#about-me-profile").text(window.resume.profile);
    $("#aboutBirthday").text(window.resume.details.birthDate);
    $("#aboutPhone").text(window.resume.contact.telephone);
    $("#aboutWhere").text(window.resume.details.home + ", " + window.resume.details.country);
    $("#aboutEmail").text(window.resume.contact.email[0]);
    // rp interests
    rpInterest("ri-compass-fill","#ffbb2c","Software Development");
    rpInterest("ri-copper-coin-line","#5578ff","Machine Learning");
    rpInterest("ri-camera-3-line","#ffbb2c","Computer Vision");
    rpInterest("ri-english-input","#1c7d32","Natural Language Processing");
    rpInterest("ri-bar-chart-box-line","#f1081f","Visualization");
    rpInterest("ri-file-list-3-line","#47aeff","Algorithms");
    rpInterest("ri-image-line","#ffc107","Image Processing");
    // languages
    if (window.resume && Array.isArray(window.resume.languages)) {
        window.resume.languages.forEach(function(x) {
            language(x.code, x.lang, x.level);
        });
    }
}

$("#about-link").on("click", function () {
    onAbout();
});

$(".mobile-nav > ul > li > a[href='#about']").on("click", function () {
    onAbout();
});