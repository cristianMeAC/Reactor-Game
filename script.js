  function getRandomColor() {
            //creating an array called letters, and splits it in each character because .split('') => letters[0]=0....
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            
            return color;
    }
        
    
    var clickedTIme, createdTime, reactionTime;
        
    function makeBox () {
      
        var time = Math.random() * 5000;

        //the box is created
        setTimeout ( function () {
            
            //we want 50% of the time to have circle 
            if(Math.random() > 0.5){
            
                document.getElementById("box").style.borderRadius = "100px";
                
            }else{
             
                document.getElementById("box").style.borderRadius = "0px";   
            }
            
            
            //am stabilit ca maginea este de 300px
            var top = Math.random() * 300;
            var left = Math.random() * 500;
                
            document.getElementById("box").style.top = top + "px";
            
            document.getElementById("box").style.left = left + "px";
            
            
            
            document.getElementById("box").style.backgroundColor = getRandomColor(); 
            
            document.getElementById("box").style.display = "block";
            
            createdTime = Date.now();
            
        }, time );
        
        
    }    
    
     document.getElementById("box").onclick = function (){
         
         clickedTIme = Date.now();
         
         document.getElementById("box").style.display = "none";
         
         //it will be the time in seconds rather than in ms(the reaction time - the amount of time that it takes for the user to click on the square)
         reactionTime = (clickedTIme - createdTime) / 1000;
         
         document.getElementById("time").innerHTML = reactionTime;
         
         makeBox();
         
           
     }
     
     makeBox();