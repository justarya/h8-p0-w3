function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  var a,r,n,isGeometri,un;
  a = arr[0];
  r = arr[1]/arr[0];
  isGeometri = [];
  for(n=1;n<=arr.length;n++){
    un = a*Math.pow(r,n-1);
    
    if(un !== arr[n-1]){
      isGeometri.push(false);
    }else{
      isGeometri.push(true);
    }
  }
  if(isGeometri.includes(false)){
    return false;
  }else{
    return true;
  }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false