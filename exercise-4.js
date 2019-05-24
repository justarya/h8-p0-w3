function dataHandling2(arr){
  arr.splice(1,1,arr[1]+" Elsharawy");
  arr.splice(2,1,"Provinsi "+ arr[2]);
  arr.splice(4,0,"Pria");
  arr.splice(5,1,"SMA Internasional Metro");

  var tanggal = arr[3].split("/");
  var bulan;
  switch(parseInt(tanggal[1])){
    case 1:
      bulan = 'Januari';
      break;
    case 2:
      bulan = 'Februari';
      break;
    case 3:
      bulan = 'Maret';
      break;
    case 4:
      bulan = 'April';
      break;
    case 5:
      bulan = 'Mei';
      break;
    case 6:
      bulan = 'Juni';
      break;
    case 7:
      bulan = 'Juli';
      break;
    case 8:
      bulan = 'Agustus';
      break;
    case 9:
      bulan = 'September';
      break;
    case 10:
      bulan = 'Oktober';
      break;
    case 11:
      bulan = 'Novermber';
      break;
    case 12:
      bulan = 'Desember';
      break;
    default:
      bulan = 'NULL';
      break;
  }
  var tanggalJoin = tanggal.join("-");
  var namaSlice = arr[1].slice(0,15);
  console.log(arr);
  console.log(bulan);
  console.log(tanggal);
  console.log(tanggalJoin);
  console.log(namaSlice);
}
var arr = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(arr);