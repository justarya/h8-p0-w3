function pasanganTerbesar(num) {
  // you can only write your code here!
  var arr = [];
  for(var i=0;i<num.toString().length-1;i++){
    arr.push(num.toString().substr(i,2));
  }

  return Math.max.apply(Math,arr);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99