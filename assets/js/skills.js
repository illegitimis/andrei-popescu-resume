/* skills tag cloud — renderer (data: window.resume + window.skillsIndex) */

$("#skills-link").on("click", function () { onSkills(); });
$(".mobile-nav > ul > li > a[href='#skills']").on("click", function () { onSkills(); });

var STACK_FIELDS = ["language", "database", "storageData", "tests", "srcTrk",
    "messaging", "deployment", "logging", "distributed",
    "infrastructure", "apm", "web", "webApis", "cloud",
    "design", "misc"];

function onSkills() {
    if (!window.resume || !window.skillsIndex) return;
    if ($("#skillsCloud").children().length > 0) return;
    var cloud = buildSkillsCloud();
    cloud.forEach(function (skill) {
        $("#skillsCloud").append(skillsTile(skill));
    });
}

function buildSkillsCloud() {
    var counts = {};
    function bumpFromTokens(tokens) {
        if (!Array.isArray(tokens)) return;
        tokens.forEach(function (token) {
            var skill = matchSkill(token);
            if (skill) counts[skill.id] = (counts[skill.id] || 0) + 1;
        });
    }
    [].concat(window.resume.workRecent || [], window.resume.workOld || [])
        .forEach(function (entry) {
            STACK_FIELDS.forEach(function (field) {
                bumpFromTokens(entry[field]);
            });
        });
    [].concat(window.resume.certifications || [], window.resume.education || [])
        .forEach(function (entry) {
            bumpFromTokens(entry.skills);
        });
    return window.skillsIndex
        .filter(function (s) { return counts[s.id] > 0; })
        .map(function (s) { return Object.assign({}, s, { count: counts[s.id] }); })
        .sort(function (a, b) {
            if (b.count !== a.count) return b.count - a.count;
            if (a.category !== b.category) return a.category.localeCompare(b.category);
            return a.label.localeCompare(b.label);
        });
}

function matchSkill(token) {
    var norm = String(token).trim().toLowerCase();
    if (!norm) return null;
    return window.skillsIndex.find(function (s) {
        if (s.id === norm || s.label.toLowerCase() === norm) return true;
        return s.aliases.some(function (a) { return a.toLowerCase() === norm; });
    }) || null;
}

function skillsTile(s) {
    var bucket = s.count >= 4 ? "lg" : (s.count >= 2 ? "md" : "sm");
    var tile = $("<span>")
        .addClass("skills-tag skills-tag--" + bucket)
        .attr("data-category", s.category)
        .attr("data-count", s.count);

    function appendIconFont(cls) {
        if (!cls) return false;
        tile.prepend($("<i>").addClass("skills-tag-glyph").addClass(cls));
        return true;
    }

    if (s.logoUrl) {
        var img = $("<img>")
            .addClass("skills-tag-logo")
            .attr("src", s.logoUrl)
            .attr("alt", "")
            .attr("loading", "lazy")
            .on("error", function () {
                $(this).remove();
                if (!appendIconFont(s.iconRemix) && !appendIconFont(s.iconBox)) {
                    tile.addClass("skills-tag--no-logo");
                }
            });
        tile.append(img);
    } else if (!appendIconFont(s.iconRemix) && !appendIconFont(s.iconBox)) {
        tile.addClass("skills-tag--no-logo");
    }

    tile.append($("<span>").addClass("skills-tag-label").text(s.label));
    if (s.count > 1) {
        tile.append($("<span>").addClass("skills-tag-count").text("×" + s.count));
    }
    return tile;
}
