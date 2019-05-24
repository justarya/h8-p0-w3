function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  var a,b,un,isAritmatika;// A = Angka awal; B = Increment Aritmatika; UN= Hasil Aritmatika akhir berdasarkan urutan nilai;
  a = arr[0];
  arr[1] > arr[0]?b = arr[1] - arr[0]:b = arr[0] - arr[1]; //value b selalu positif
  isAritmatika = [];
  for(var n=1;n<=arr.length;n++){
    un = a+(n-1)*b; //perhitungan aritmatika
    if(un !== arr[n-1]){//jika hasil hitung aritmatika tidak sama dengan array di index tsb, maka
      isAritmatika.push(false);//masukan false
    }else{
      isAritmatika.push(true);//masukan true
    }
  }
  if(isAritmatika.includes(false)){ //jika isAritmatika ada false, maka
    return false;
  }else{
    return true;
  }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false