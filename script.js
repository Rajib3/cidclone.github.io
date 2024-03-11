//  $(document).ready(function(){
//     $(".units a").click(function(){
//         $(this).css("background-color", "blue");
//     })
//  })

$(document).ready(function(){ 
     
    // Tab Part

    $(".tab-container:first").show()
    $(".tab-navigation li:first").addClass("active")

    $(".tab-navigation li").click(function(){
        index= $(this).index()
        $(".tab-navigation li").removeClass("active")
        $(this).addClass("active")
        $(".tab-container").hide()
        $(".tab-container").eq(index).show()
    })

    /* Accordian part  */

    // $(".card .card-body:first").addClass("active")  
    $(".accordian .card-header").click(function(){
                // self clicking close 
        if($(this).next(".card-body").hasClass("active")){

            $(this).next(".card-body").slideUp().removeClass("active")
            $(this).children("i").removeClass("ri-subtract-line").addClass("ri-add-line")  
        }
        else{

            $(".accordian .card .card-body").removeClass("active").slideUp()
            $(".accordian .card .card-header i").removeClass("ri-subtract-line").addClass("ri-add-line")
            
            
            $(this).next(".accordian .card-body").slideDown().addClass("active")
            $(this).children("i").removeClass("ri-add-line").addClass("ri-subtract-line")
        }
    })

    // Play button 

    $("#play-btn").click(function(){
        if($("#play-btn i").hasClass("ri-pause-line")){
            $("#play-btn i").removeClass("ri-pause-line").addClass("ri-play-fill")
            $("#my-audio")[0].pause() 
            $(".play-text").text("PLAY")
        }
        else{

            $("#play-btn i").removeClass("ri-play-fill").addClass("ri-pause-line")
            $("#my-audio")[0].play()
            $(".play-text").text("PAUSE")
        }
    }) 


})

// Coloring 

let cards = document.getElementsByClassName("color-js")
console.log(cards)

function getRandomColor() {
    let val1 = Math.ceil(0+ Math.random()*255)
    let val2 = Math.ceil(0+ Math.random()*255)
    let val3 = Math.ceil(0+ Math.random()*255)
    return `rgb(${val1}, ${val2}, ${val3})`
}

setInterval(() => {
    
    Array.from(cards).forEach( 
        (i)=>{
         i.style.backgroundColor = getRandomColor()
        //  i.style.color = getRandomColor()
        }
    
    )
    
}, 300);

 
 