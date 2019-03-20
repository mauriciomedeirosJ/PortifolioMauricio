/*window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
function addClass(el) {
    navbar.removeClass('active');
    $(el).addClass('active');
};

var menu = $('#navbar .nav li');
var sectionPositions = $('section').map(function(){
    return $(this).position().top;
});
var sections = $('section');
$(document).on('scroll', function () {
    var scroll = $(document).scrollTop();
    var currentElement;
    $(sectionPositions).each(function (i) {
        if (scroll > this - 50) currentElement = menu[i];
    });
    currentElement && addClass(currentElement);
});
menu.on('click', function () {
    addClass(this);
});*/