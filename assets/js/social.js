/* social used home and contact */

function addSocialLink(dest, url, className, iconClass) {
    // <a href="" target="_blank" class="linkedin|github|stackoverflow|google">
    //   <i class="bx bxl-[linkedin|github|stack-overflow|google]"></i>
    // </a>
    var a = $("<a>")
        .attr("href", url)
        .attr("target", "_blank")
        .addClass(className);
    var ic = `bx bxl-${iconClass}`;
    var i = $("<i>").addClass(ic);
    a.append(i);
    dest.append(a);
}

function addSocialProfiles(socialProfiles, resume) {
    if (socialProfiles.length && resume.developer && socialProfiles.find("a").length === 0) {
        addSocialLink(socialProfiles, resume.developer.linkedin, "linkedin", "linkedin");
        addSocialLink(socialProfiles, resume.developer.github, "github", "github");
        addSocialLink(socialProfiles, resume.developer.stackoverflow, "stackoverflow", "stack-overflow");
        addSocialLink(socialProfiles, resume.developer.outlook, "outlook", "microsoft");
        addSocialLink(socialProfiles, resume.developer.google, "google", "google");
    }
}

$(document).ready(function () {
    var socialProfiles = $("#social-profiles");
    addSocialProfiles(socialProfiles, resume);
    var socialLinks = $("#social-links-home");
    addSocialProfiles(socialLinks, resume);
});