//input "hello world!"
function balikString(input){
  var hasil = '';
  for(var i=0;i<input.length;i++){
    hasil += input[input.length-i-1];
  }
  return hasil;
}
console.log(balikString('Hello World!'));
