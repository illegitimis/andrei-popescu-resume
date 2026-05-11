/* work experience — shared helpers */

function renderWorkInto(rowSelector, entries) {
    if (!Array.isArray(entries)) return;
    if ($(rowSelector).children().length > 0) return;
    entries.forEach(function (x) {
        $(rowSelector).append(workCard(x));
    });
}

function metaItem(iconClass, label, valueNodeOrText) {
    var li = $("<li>").addClass("we-meta-item");
    var i = $("<i>").addClass(iconClass);
    var lbl = $("<span>").addClass("we-meta-label").text(label);
    var val = $("<span>").addClass("we-meta-value");
    if (valueNodeOrText && typeof valueNodeOrText === "object" && typeof valueNodeOrText.jquery === "string") {
        val.append(valueNodeOrText);
    } else {
        val.text(valueNodeOrText);
    }
    li.append(i).append(lbl).append(val);
    return li;
}

function pillGroup(label, items) {
    if (!items || items.length === 0) return null;
    var pair = $("<div>").addClass("we-stack-pair");
    pair.append($("<span>").addClass("we-stack-label").text(label));
    items.forEach(function (item) {
        pair.append($("<span>").addClass("we-pill").text(item));
    });
    return pair;
}

function workCard(x) {
    var card = $("<div>")
        .addClass("col-md-12 mt-4 mt-md-0 icon-box we-card")
        .attr("data-aos", "fade-up")
        .attr("data-aos-delay", "100");

    /* header — company name as link */
    var h4 = $("<h4>").addClass("we-company");
    var headerLink = $("<a>")
        .attr("href", x.siteUrl)
        .attr("target", "_blank")
        .text(x.company);
    h4.append(headerLink);
    card.append(h4);

    /* meta — flex-wrap of fit-content chips, queued from the left */
    var meta = $("<ul>").addClass("we-meta");
    meta.append(metaItem("icofont-history", "When", x.startDate + " – " + x.endDate));
    meta.append(metaItem("icofont-code", "Position", x.position));
    meta.append(metaItem("icofont-handshake-deal", "Collaboration", x.collaboration));
    meta.append(metaItem("icofont-tag", "Business", x.business));
    var siteText = x.siteUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
    var siteLink = $("<a>")
        .attr("href", x.siteUrl)
        .attr("target", "_blank")
        .text(siteText);
    meta.append(metaItem("icofont-link", "Site", siteLink));
    card.append(meta);

    /* description */
    var p = $("<p>").addClass("we-description").text(x.description);
    card.append(p);

    /* tech-stack as a definition list — fixed render order, skip empty */
    var stackFields = [
        ["language", "Language"],
        ["database", "Database"],
        ["ai", "AI"],
        ["tests", "Tests"],
        ["src", "Source Control"],
        ["trk", "Bug Tracking"],
        ["messaging", "Messaging"],
        ["cicd", "Deployment"],
        ["log", "Logging"],
        ["web", "Web"],
        ["design", "Design"],
        ["misc", "Misc"]
    ];
    var stack = $("<div>").addClass("we-stack");
    var hasStack = false;
    stackFields.forEach(function (field) {
        var node = pillGroup(field[1], x[field[0]]);
        if (node) {
            stack.append(node);
            hasStack = true;
        }
    });
    if (hasStack) card.append(stack);

    return card;
}
