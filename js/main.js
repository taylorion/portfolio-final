var parallaxitems=document.querySelectorAll(".parallax-img");
var parallaxtops = [];

[].forEach.call(parallaxitems, function(item){
  item.style.backgroundAttachment="local";
  parallaxtops.push(item.getBoundingClientRect().top);
});

window.addEventListener("scroll", function(){
  [].forEach.call(parallaxitems, function(item, i){
    var diff= Math.round(((window.scrollY > parallaxtops[i]) ? window.scrollY - parallaxtops[i] : window.scrollY) / 5); /*The number at the end controlls scroll speed*/
    var bgTop=Math.round(parseInt(getComputedStyle(item).blockSize,10)/2);
console.log(parallaxtops[i], window.scrollY);
    // item.style.backgroundPosition="50% calc((50% - "+diff+"px - "+bgTop+"px) * -1)";
    item.style.marginTop="-"+diff+"px";
  });
});
