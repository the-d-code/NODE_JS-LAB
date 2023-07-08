//'use strict';
//With strict mode, you can not, for example, use undeclared variables.
//(function(){}());
(function(){
    console.log(this);
  }());

  function f1()
  {
    global.var1="var1"    
  }
  f1();
  console.log("var1 = "+global.var1)