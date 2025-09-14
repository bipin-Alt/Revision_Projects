const Buttons = document.querySelectorAll("button");//selected all the buttons as a nodelist//

Buttons.forEach((btn)=>{  //for each in the array of Buttons
    btn.addEventListener("click",()=>{ //event listener in each button
     const display = document.getElementById("display");
     switch (btn.innerText) {
        case ("C"):   //when the btn inner text is C then it clears up everything
              display.value ="";
            break;
        case ("⌫"):
            display.value = display.value.slice(0, -1); //used slice method that removes the last digit for backspoce//
            break;
        case ("%"):
            display.value +="/100";
            break;
        case ("="):
             try {
                const expression = display.value
                .replace(/×/g, "*")
                .replace(/÷/g, "/")
                .replace(/−/g, "-")
          display.value = Function("return " + expression)(); //function constructor this is like : function demo (){ return a+b*c} yo gare jasto ho// 
             } 
             catch{
               display.value ="Error"; 
             }                                                                 break;                     
        default:
            display.value +=btn.innerText
        break;
     }
    });
})