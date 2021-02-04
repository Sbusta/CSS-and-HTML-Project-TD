var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// activate the backdrop menu 
toggleButton.addEventListener('click',function(){
    if(mobileNav.style.display == 'flex'){
        mobileNav.style.display = 'none';
    }else{mobileNav.style.display = 'flex';}
})

// scroll and link the buttons
$(".nav__button").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 600);
});

$(".mobile-nav__button").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 600);
});

$(".button__item_learn-more").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 600);
});

$(".button__item_contact-us").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 600);
});

//highlight the buttons
$(window).scroll(function() {
    var position = $(this).scrollTop();
    $('section').each(function() {
        var target = $(this).offset().top;
        var id = $(this).attr('id');
        
        if (position >= target) {
          $('.nav__button').removeClass('highlight');
          $('.mobile-nav__button').removeClass('highlight');

          $('#' + id+'n').addClass('highlight');
          $('#' + id+'m').addClass('highlight');
        }
    });
});