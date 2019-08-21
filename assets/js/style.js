// window fade in

$(window).on("load", function () {
    console.log("window ready");
    $("body").css({
        opacity: "1",
        transition: "200ms"
    });
});

// hopefully some animation between pages here

// page navigation
$(".links").on("click", function (e) {
    e.preventDefault();

    let activate = $(this).attr("href");
    console.log(activate + " page is now active");
    let classActivate = activate.substr(1, activate.length);
    console.log(classActivate);

    $(this).parents().find(".active-page").addClass("hidden-page").removeClass("active-page");
    $(activate).removeClass("hidden-page").addClass("active-page");


    $(this).parents().find("nav").removeClass().addClass(classActivate);
});

$("#next-btn").on("click", function (e) {
    e.preventDefault();

    let activate = $(this).attr("href");
    console.log(activate + " page is now active");
    let classActivate = activate.substr(1, activate.length);
    console.log(classActivate);

    $(this).parents().find(".active-page").addClass("hidden-page").removeClass("active-page");
    $(activate).removeClass("hidden-page").addClass("active-page");


    $(this).parents().find("nav").removeClass().addClass(classActivate);
});
