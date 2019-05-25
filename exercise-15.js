function groupAnimals(animals) {
  // you can only write your code here!
  var arr,arrIndex,initialLetter;
  arr = []; //arr for store multidimension array
  initialLetter = null; //For Storing first letter of each array

  animals.sort(); //sorting by asc
  for (let i = 0; i < animals.length; i++) { //loop each animals
    if(initialLetter !== animals[i][0]){ // if this animal first letter different with the last one
      i === 0?arrIndex = 0: arrIndex++;// if this is the first array, set arrIndex to 0
      arr.push([]);//add new array in the first level
      arr[arrIndex].push(animals[i]); //add animals to the arr
      initialLetter = animals[i][0];  //set the initial letter with the first animal letter, for indication that this part is only for that letter;
    }else if(initialLetter === animals[i][0]){ //if this animal first letter the same with the last one
      arr[arrIndex].push(animals[i]); // add animals to the arr
    }
  }

  return arr;//return multi dimension array
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]