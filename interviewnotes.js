

var map = function(arr,func){
    // create array
    var mappedArray = [];
    
    /*
    for (var i=o; i<arr.length; i++) {
      mappedArray(func(value));
  
    }
      */

    // take each component, apply the call back it.
    /*
    each(arr, function(value){
      mappedArray.push(func(value));
    });
    */

    // map return new array
    return mappedArray;
  
};

map([1,2,3], function(element){
  return element * Math.floor(Math.random() * element); // do anything
});

// [2,4,6]


var each = function(arr, func){
  //*
  // need to get func and arr
  
  for (var i=0; i < arr.length; i++) {
    func( arr[i],i , arr);
  }
    
     //*/
};

each([1,2,3], function(element, index, array){
  console.log(element, index, array); // do anything
});

// 1 0 [1,2,3]
// 2 1 [1,2,3]
// 3 2 [1,2,3]

each([a,b,c], function(element, index) {
    console.log(c1*c2)
})

// 0
// 2
// 6

Chat.fetch // goes to server then passes an array of strings to its callback , doesn't return 

Chat.display // takes a string and appends to page doesn't return 

var fetchAndDisplay = function(){
  // go to the server and get the array of strings

  Chat.fetch(function(msgArray){
  // breakdown the array into individual strings
  // print each string
  msgArray.forEach(Chat.display);
  [1,2,3].forEach(console.log);
  
  for (var i=0; i < arr.length; i++) {
      func( arr[i],i , arr);
  }
    
  });
 
  // need a function that expects an array
 
  
};
function(num){
  console.log(num);
};

function something (cb){
  cb(Math.random() * 100);
}

something(function(num){
  console.log(num);
});

fetchAndDisplay();