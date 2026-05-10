/* contact */

function addInfoBoxParagraph(dest, text) {
    var p = $("<p>").text(text);
    dest.append(p);
}

function onContact() {
// var json = localStorage.getItem('pac-resume');
    // var resume = JSON.parse(json);
    // $("#about-me-profile").text(resume.profile);

    var resume = window.resume;

    // info-boxes 
    // Create paragraph nodes for each detail and append to .info-box
    var address = $("#address");
    if (address.length && resume.details && address.find("p").length === 0) {
        addInfoBoxParagraph(address, "Home: " + resume.details.home);
        addInfoBoxParagraph(address, "Country: " + resume.details.country);
    }

    var details = $("#details");
    if (details.length && resume.details && details.find("p").length === 0) {
        addInfoBoxParagraph(details, "Birth date: " + resume.details.birthDate);
        addInfoBoxParagraph(details, "Age: " + resume.details.age);
    }

    var emails = $("#emails");
    if (emails.length && resume.contact && emails.find("p").length === 0 && Array.isArray(resume.contact.email)) {
        resume.contact.email.forEach(function (email) {
            addInfoBoxParagraph(emails, email);
        });
    }

    var telephone = $("#telephone");
    if (telephone.length && resume.contact && telephone.find("p").length === 0) {
        addInfoBoxParagraph(telephone, resume.contact.telephone);
    }
}

// Add empty event handler for contact link in hamburger menu (medium screens)
// jquery click event does not work with bootstrap nav on medium sized displays
// mobile-nav; nav-menu

$(".mobile-nav > ul > li > a[href='#contacts']").on("click", function () {
    onContact();
});

$("#contact-link").on("click", function () {
    onContact();
});