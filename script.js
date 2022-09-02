function verification(entree) {
    var car ="1234567890[]()+-.*,/";
    for (var i = 0; i < entree.length; i++)
     if (car.indexOf(entree.charAt(i))<0 ) return false;
    return true;
   }
  
   function calcul() {
     var a = 0;
    if (verification(window.document.calculatrice.result.value))
       a = eval(window.document.calculatrice.result.value);
     window.document.calculatrice.result.value = a;
   }
  
   function chiffre(string) {
     window.document.calculatrice.result.value =
     window.document.calculatrice.result.value + string;
   }
  
   function function_Math(fonction) {
     if(fonction == "log") {
       var a = 0;
       a = eval(window.document.calculatrice.result.value);
       window.document.calculatrice.result.value = Math.log(a);
     }else window.document.calculatrice.result.value = 0;
    } 
  
  