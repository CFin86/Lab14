$(document).ready(function() {
for (let i = 1; i <= 100; i++) {
    birthOfClue(i);
 };
 
  function birthOfClue(i) { 
     var h3Ele = document.createElement('h3');
     
   
      //var article = //set this shit to a/an
     var friendo = ["Bobby", "Dan", "Greyson and Jeff", "Lisa", "Ur Mom"];

     var place = ["on Lorna Rd", "on the desk in the Covalence room", "in the bathroom", "in the kitchen",
       "in the living room", "on the porch", "in the Cheesecake Factory Bathroom", "in front of Courtyard Southside", "in the airport bathroom", "near the childre\s playground"];
        
     var weapon = ["shoe", "macbook pro", "katana", "piece of cheese", "GUN", "overdose of caffeine", "balloon animal", "iphone 6", "tub of ice cream", "bud light", "cucumber", "wiffle ball",
                    "lego", "rubber duck", "resounding sense of despair", "car", "grapefruit", "hammer", "lead pipe", "co2 tank like that movie 'No Country for Old Men", ];
    
    
   
     

     h3Ele.click();
     h3Ele.innerHTML = "CLUE #" + (i);
     h3Ele.addEventListener('click', function() {
                   
           alert(friendo[i % 5]+ ' did it ' + place[i % 10] + ' with a ' + weapon[i % 20]);
      })
      
      
      $('.header').append(h3Ele);

    }
   
  
});

  


    



