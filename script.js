$(document).ready(function(){
    $('#result-zero').hide();
    $('#result-one').hide();
});

function load(){
  $('#result-one').hide();
  $('#result-zero').hide();
  var arr = [];
  arr[0] = document.getElementById("f1").value;
  arr[1] = document.getElementById("f2").value;
  arr[2] = document.getElementById("f3").value;
  arr[3] = document.getElementById("f4").value;
  arr[4] = document.getElementById("f5").value;
  arr[5] = document.getElementById("f6").value;
  arr[6] = document.getElementById("f7").value;
  arr[7] = document.getElementById("f8").value;
  arr[8] = document.getElementById("f9").value;
  arr[9] = document.getElementById("f10").value;
  arr[10] = document.getElementById("f11").value;
  arr[11] = document.getElementById("f12").value;
  arr[12] = document.getElementById("f13").value;
  arr[13] = document.getElementById("f14").value;
  arr[14] = document.getElementById("f15").value;
  arr[15] = document.getElementById("f16").value;
  arr[16] = document.getElementById("f17").value;
  arr[17] = document.getElementById("f18").value;
  arr[18] = document.getElementById("f19").value;
  arr[19] = document.getElementById("f20").value;
  arr[20] = document.getElementById("f21").value;
  var flag = 1;
  for(i = 0; i < 21; ++i){
    if(arr[i] != ""){

      document.getElementById("Check").disabled = false;
      document.getElementById("no-input").display = false;
      flag = 0;
  //      break;
    }
  }
  var str = "data=";
  for (i=0;i<20;++i){
    str = str + arr[i] + ","
  }
  str = str + arr[20];
  console.log("CALLING LOAD");
  //   var xhttp = new XMLHttpRequest();
  //   xhttp.onreadystatechange = function(){
    //     if (this.readyState == 4 && this.status == 200){
      //       document.getElementById("result").innerHTML = this.responseText;
      //     }
      //   }
      //   xhttp.open("POST","http://ec2-54-82-174-187.compute-1.amazonaws.com:3000/api/",false);
      //   xhttp.send("data",arr[]);
      // }
      $.getJSON("http://ec2-54-82-174-187.compute-1.amazonaws.com:3000/api?"+str,(result)=>{
          console.log(result);
          if (result.status == "success"){
            if (result.result == 1)$('#result-one').show();
            if (result.result == 0)$('#result-zero').show();
          }
       }
      );
//      console.log("http://ec2-54-82-174-187.compute-1.amazonaws.com:3000/api?"+str);
  }
