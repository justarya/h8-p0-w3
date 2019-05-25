function angkaPalindrome(num) {
  // you can only write your code here!
  if(num.toString().length == 1){
    num++;
    return num;
  }else{
    // looping dibalik
    var numReverse = '';
    for(var i=0;i<num.toString().length;i++){
      numReverse += num.toString()[num.toString().length-i-1];
    }
    
    var condition = true;
    while(condition){
      if(numReverse === num.toString()){
        condition = false;
        return num;
      }
      
      num++;
      // Reversing
      numReverse = '';
      for(var j=0;j<num.toString().length;j++){
        numReverse += num.toString()[num.toString().length-j-1];
      }
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001