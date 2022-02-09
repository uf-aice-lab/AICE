
var imgText = ["Observer, Thinker, Learner", "Effective Team Player", "Warm-Hearted Data Scientist, Researcher, and User Advocate"];
var currImgIndex = 1;
var navItems = ["home","projects","publications","courses","resume"];


/*      
$(".nav-bar-list").delegate("li", "click", function() {
    console.log("delegate");
    var clickedIndex = $(this).index();
         
    if (refreshIntervalID!=undefined) {
             clearInterval(refreshIntervalID);
        }
     else{
        refreshIntervalID = setInterval(function(){switchImage()},5000);
        }   
       
    $('#content-wrapper').empty();
        
    activateNavBar(clickedIndex);
    
    resetNavColor(clickedIndex);
        
    var page = navItems[clickedIndex];
       
    loadPublicationContent(page);
        
    
    });


function loadPublicationContent(page) {
       var state = {"page":page};
       var url="/~chen654/?page=" + page;
        window.history.pushState(state,page, url);
        
        $('#content-wrapper').load('includes/'+ page +'.html#main-content');    
        
        page = capitaliseFirstLetter(page);
        document.title = "Cindy Chen | "+ page;
            
        console.log(window.history.state);    
}
*/
function activateNavBar(index) {
    var t= '.nav-bar-list li:eq('+index+')';
        $(t).css("background", "#fff");
        $(t).find('a').css("color","#000");

        
}

function resetNavColor(activeListIndex) {
    $('.nav-bar-list li').each(function(index){
        if (index != activeListIndex) {
                
               
                if (index !=0) {
                    $(this).css('background','');
                    $(this).find('a').css('color','');
                    $(this).addClass('nav-bar-list-inactive');
                }
                else {
                    $(this).css("background","#e74c3c");
                    $('#xin').css("color","#fff");
                    
                    $(this).hover(function(){
                        $(this).css("background","#fff");
                        $("#xin").css("color","#e74c3c");
                        },
                        function() {
                            $(this).css("background","#e74c3c");
                            $('#xin').css("color","#fff");
                        }
                        );
                }
               
            
        }
        });
}

function switchImage(){
   
    $('.img-content').fadeOut('slow',function(){
        
    currImgIndex = currImgIndex==3 ? 1: currImgIndex+1;
  
    var currImgSrc = "img/slide_"+currImgIndex+".png";
    var currTextIndex = currImgIndex -1;
    document.getElementById('actual-img').src = currImgSrc;
    
   /*
    if (currImgIndex==4) {
        
        var linkText = $("<p>See <a href='?page=projects'>projects</a>.</p>");
        $('#img-frame-text').empty();
        $('#img-frame-text').append(linkText);
    }
    else{
        $('#img-frame-text').text(imgText[currTextIndex]);
    }
    */  
        $('#img-frame-text').text(imgText[currTextIndex]);
         $(this).fadeIn("slow");
        
        });
    
    
}

function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

