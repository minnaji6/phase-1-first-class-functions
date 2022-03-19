function receivesAFunction(callthisback) {
    callthisback() 
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("named function");
    };
  }
  
  function returnsAnAnonymousFunction() {
    return () => console.log(" anonymous function");
  }
  