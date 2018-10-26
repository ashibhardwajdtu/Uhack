if(document.ready()){
  var arr
  arr[0] = document.getElementById("l1").value;
  arr[1] = document.getElementById("l2").value;
  arr[2] = document.getElementById("l3").value;
  arr[3] = document.getElementById("l4").value;
  arr[4] = document.getElementById("l5").value;
  arr[5] = document.getElementById("l6").value;
  arr[6] = document.getElementById("l7").value;
  arr[7] = document.getElementById("l8").value;
  arr[8] = document.getElementById("l9").value;
  arr[9] = document.getElementById("l10").value;
  arr[10] = document.getElementById("l11").value;
  arr[11] = document.getElementById("l12").value;
  arr[12] = document.getElementById("l13").value;
  arr[13] = document.getElementById("l14").value;
  arr[14] = document.getElementById("l15").value;
  arr[15] = document.getElementById("l16").value;
  arr[16] = document.getElementById("l17").value;
  arr[17] = document.getElementById("l18").value;
  arr[18] = document.getElementById("l19").value;
  arr[19] = document.getElementById("l20").value;
  arr[20] = document.getElementById("l21").value;
  var flag = 0;
  arr.forEach(if(arr[i] == ""){
    document.getElementById(check).disabled = true;
    flag = 1;
    break;
  })
  if (flag == 1){
    
  }
}
