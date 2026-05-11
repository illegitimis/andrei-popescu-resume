$("#education-link").on("click", function () {
    onEducation();
    onCertification();
});

$(".mobile-nav > ul > li > a[href='#education']").on("click", function () {
    onEducation();
    onCertification();
});

function onEducation() {
    if (
        window.resume &&
        Array.isArray(window.resume.education) &&
        $("#rowEducation").children().length === 0
    ) {
        window.resume.education.forEach(function (x) {
            $("#rowEducation").append(educationCard(x));
        });
    }
}

function eduMetaItem(iconClass, label, valueNodeOrText) {
    var li = $("<li>").addClass("edu-meta-item");
    var i = $("<i>").addClass(iconClass);
    var lbl = $("<span>").addClass("edu-meta-label").text(label);
    var val = $("<span>").addClass("edu-meta-value");
    if (valueNodeOrText && typeof valueNodeOrText === "object" && typeof valueNodeOrText.jquery === "string") {
        val.append(valueNodeOrText);
    } else {
        val.text(valueNodeOrText);
    }
    li.append(i).append(lbl).append(val);
    return li;
}

function educationCard(x) {
    var col = $("<div>").addClass("col-xl-6 col-lg-6 col-md-12 mt-4");
    var card = $("<article>").addClass("icon-box edu-card");

    /* header — image + school name */
    var head = $("<header>").addClass("edu-head");
    var img = $("<img>")
        .addClass("edu-img")
        .attr("src", "assets/img/education/" + x.img)
        .attr("alt", x.school.name);
    var schoolTitle = $("<h5>").addClass("edu-school");
    var schoolLink = $("<a>")
        .attr("href", x.school.site)
        .attr("target", "_blank")
        .text(x.school.name);
    schoolTitle.append(schoolLink);
    head.append(img).append(schoolTitle);
    card.append(head);

    /* meta — flex-wrap chips */
    var meta = $("<ul>").addClass("edu-meta");
    meta.append(eduMetaItem("icofont-clock-time", "When", x.when.start + " – " + x.when.end));
    meta.append(eduMetaItem("icofont-location-arrow", "Where", x.school.where));
    meta.append(eduMetaItem("icofont-award", "Degree", x.degree));
    if (x.grade) {
        meta.append(eduMetaItem("icofont-graduate", "Grade", x.grade));
    }
    if (x.department) {
        var deptValue = x.department.site
            ? $("<a>").attr("href", x.department.site).attr("target", "_blank").text(x.department.name)
            : x.department.name;
        meta.append(eduMetaItem("icofont-university", "Department", deptValue));
    }
    if (x.baccalaureate) {
        meta.append(eduMetaItem("icofont-graduate-alt", "Baccalaureate", x.baccalaureate));
    }
    card.append(meta);

    /* footer notes */
    if (Array.isArray(x.footer) && x.footer.length) {
        var notes = $("<div>").addClass("edu-notes");
        x.footer.forEach(function (line) {
            notes.append($("<p>").text(line));
        });
        card.append(notes);
    }

    col.append(card);
    return col;
}

function onCertification() {
    if (
        window.resume &&
        Array.isArray(window.resume.certifications) &&
        $("#rowCertifications").children().length === 0
    ) {
        window.resume.certifications.forEach(function (x) {
            $("#rowCertifications").append(certificationCard(x));
        });
    }
}

function certificationCard(x) {
    var col = $("<div>").addClass("col-lg-4 col-md-6 mt-4");
    var href = x.link || (x.pdf ? "assets/pdf/" + x.pdf : "#");
    var card = $("<a>")
        .addClass("cert-card")
        .attr("href", href)
        .attr("target", "_blank")
        .attr("rel", "noopener noreferrer");

    var badge = $("<div>").addClass("cert-badge");
    badge.append(
        $("<img>")
            .attr("src", "assets/img/certification/" + x.img)
            .attr("alt", x.alt || x.name)
    );

    var body = $("<div>").addClass("cert-body");
    body.append($("<div>").addClass("cert-name").text(x.name));
    body.append($("<div>").addClass("cert-desc").text(x.description));

    var meta = $("<div>").addClass("cert-meta");
    if (x.date) meta.append($("<time>").addClass("cert-date").text(x.date));
    if (x.comment) meta.append($("<span>").addClass("cert-comment").text(x.comment));
    body.append(meta);

    var cta = $("<span>")
        .addClass("cert-cta")
        .text(x.link ? "verify" : (x.pdf ? "view" : ""));
    cta.append($("<i>").addClass("icofont-external-link"));
    body.append(cta);

    card.append(badge).append(body);
    col.append(card);
    return col;
}
