function targetTerdekat(arr) {
  // you can only write your code here!
  var indexO,conditionForward,conditionBackward,rangeForward,rangeBackward,foundForward,foundBackward;
  if(!arr.includes('x')){// IF ARR DOESN'T INCLUDE X
    return 0;
  }else{//IF ARR DOES INCLUDE X

    // Looping for search indexO
    for(var i=0;i<arr.length;i++){
      if(arr[i] == 'o'){
        indexO = i;//Get Index O
      }
    }

    
    // Calculate Range X forward
    conditionForward = true; //Condition For Looping SET to true
    rangeForward = 0; //Range Start From 0
    var j = indexO; //J as Counter Start from Index O
    while(conditionForward && j<arr.length){ //Looping if Condition True, and Counter not reach the end of array
      if(arr[j] !== 'x'){ //IF Not Found X
        rangeForward++; //COUNTING Range
      }else{ //IF Found X
        foundForward = true; //Found = True
        conditionForward = false; //Condition for Looping SET to false
      }
      j++; //Counter
    }
    
    // Calculate Range X backward
    conditionBackward = true; //Condition For Looping SET to true
    rangeBackward = 0; //Range Start From 0
    var k = indexO; //K as Counter Start from Index O
    while(conditionBackward && k>=0){ //Looping if Condition True, and Counter not reach the end of array
      if(arr[k] !== 'x'){ //IF Not Found X
        rangeBackward--;// COUNTING Range
      }else{ //IF Found X
        foundBackward = true; //Found = True
        conditionBackward = false; // Condition for Looping SET to false
      }
      k--; //Counter
    }

    rangeBackward *= -1; //Always Positive
    
    //IF CONDITION NEAREST X FROM O
    if(rangeBackward<rangeForward && foundForward === true){
      return rangeForward;
    }else if(rangeBackward>rangeForward && foundBackward === true){
      return rangeBackward;
    }else if(foundBackward == true){
      return rangeBackward;
    }else if(foundForward == true){
      return rangeForward;
    }
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2