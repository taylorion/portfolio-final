var parallaxitems = document.querySelectorAll('.parallax-img');
var runParallax=function() {
  [].forEach.call(parallaxitems, function (item, i) {
    var diffParentTop = Math.floor(item.parentNode.getBoundingClientRect().top);
    var diffParentBottom = Math.floor(item.parentNode.getBoundingClientRect().bottom);
    var isOnScreen = ((diffParentTop <= window.innerHeight) && (diffParentBottom > 0));
    var diff;

    if (isOnScreen) {
      diff = Math.round(diffParentBottom / 5);
      item.style.marginTop = '-' + diff + 'px';
    }
  });
};

window.addEventListener('scroll', function(){
  runParallax();
});

runParallax();
