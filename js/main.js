






// open or close on setting
$(".toggle-setting ").click(function()  {
  $(this).parent().toggleClass("open")
  $(this).children().toggleClass("fa-spin")
})

// active class in button
$(".setting .btn-color").click(function(){
  $(this).addClass(" opacity-100").siblings().removeClass("opacity-100  ")
  
})
// change color

$(".color-list li").click(function(){
  $(this).addClass("active").siblings().removeClass("active")
})

$(".color-list li").click(function(){
  let changeColor=$(this).attr("data-color") ;
  localStorage.setItem("color",changeColor)
  let mainColors = localStorage.getItem("color")
  document.documentElement.style.setProperty('--main-color', mainColors);
  
})

let mainColors = localStorage.getItem("color")
let color= $(".color-list ").children() ;
for (let x = 0; x < color.length; x++) {
  if(mainColors == color[x].getAttribute("data-color")){
    let loopColor = color[x];
    $(loopColor).addClass("active").siblings().removeClass("active")
  }
}
if( mainColors !== null){
  document.documentElement.style.setProperty('--main-color', mainColors)
}
// select landing page
// Get Array of Imgs
let urls_obj = [
  "02",
  "03",
  "04",
  "05",
  "01"
]

// random background
let backgroundInterval;
let Random = true;
let x = 0 ;
  function randomBg()  {
    if(Random === true)

    backgroundInterval= setInterval( ()=> {

      $(".home").css("background-image",`url(./imgs/${urls_obj[x]}.jpg)`)
  
      x++
      if( x==4){
        x= 0;
      }
    },10000)
  }
  
randomBg()
$(".setting-bg-random .btn").click(function(){

if( $(this).text() == "yes" ){

  randomBg()
  localStorage.setItem("background_option", true)

}else if($(this).text() == "no"){
  localStorage.setItem("background_option", false)
  clearInterval(backgroundInterval)

}
})
//  check if bg-random
let bgRandom = localStorage.getItem("background_option")

  if(bgRandom == "true"){
    
    randomBg()
    $(".setting-bg-random .yes-random").addClass("opacity-100").siblings().removeClass("opacity-100")
  }else if (bgRandom == "false"){

    clearInterval(backgroundInterval)
    $(".setting-bg-random .no-random").addClass("opacity-100").siblings().removeClass("opacity-100")
  
    
  }





$(".show-bullets .btn").click(function(){
  
  if($(this).text() == "no"){
    $(".nav-bullets").hide()
    localStorage.setItem("show-bullets", "none")
  }else if($(this).text() == "yes"){
    $(".nav-bullets").show()
    localStorage.setItem("show-bullets", "block")

  }
})


  let showBullet = localStorage.getItem("show-bullets")

  if(showBullet == "none" ){
    $(".nav-bullets").hide()
    
    $(".show-bullets .no-bullet").addClass("opacity-100").siblings().removeClass("opacity-100")
  
    }if(showBullet == "block"){
      $(".nav-bullets").show()
  
      $(".show-bullets .yes-bullet").addClass("opacity-100").siblings().removeClass("opacity-100")
  
    }

$(".setting-container .btn-reset").click(function(){
  
  location.reload()
  localStorage.clear()

})

// go section onclick
  $(".nav-bullets .bullets").click(function(){
  let attr= $(this).attr("data-section")
  $("html,body").animate({
    scrollTop : $("."+ attr).offset().top
  },0)
})

// Gallery
$(".gallery-img img").click(function(){

  let showImg =  $(this).attr("src");

  $(".show-gallery-div img").attr("src",showImg)
  $(".show-gallery .show-alt").text($(this).attr("alt"))
  $(".show-gallery").addClass("d-block").removeClass("d-none")
})
$(".show-gallery-span").click(function () {
  $(".show-gallery").addClass("d-none").removeClass("d-block")

})



// contact Us

