let surveyResults =[4,2,0,0,0,3,4,4,4,4,1,1,0,2,0,1,3,0,2,1,0,2,0,3,0,4,4,0,0,1,0,0,2,0,0,0];

let selectArch = function(arr){
  if (arr.length !== 36) {
      return "Survey Error";
  }
  let results = [];
      for(var i = 0; i < arr.length; i=i+3 ){
      results.push(arr[i]+arr[i+1]+arr[i+2])
    }

    var max = results[0];
    var maxIndex = 0;

    for (var i = 1; i < results.length; i++) {
        if (results[i] > max) {
            maxIndex = i;
            max = results[i];
        }
    }

    let archName = ["outlaw","jester","lover","caregiver","everyman","innocent","ruler","sage","magician","hero","creator","explorer",];

    return archName[maxIndex];

}

console.log(selectArch(surveyResults))
