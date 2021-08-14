module.exports = function toReadable (number) {
  let numArr = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let numSay = ['','','twenty', 'thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let numHungred = ['hundred'];

  let numStr = number.toString();

  let sum;

  if(number === 0) {
      return 'zero';
  }
  
  if(numStr < 20) {
      return numArr[number];
  }
  if(numStr == 20) {
      return numSay[2];
  }
  if(numStr == 30) {
    return numSay[3];
}
if(numStr == 40) {
    return numSay[4];
}
if(numStr == 50) {
    return numSay[5];
}
if(numStr == 60) {
    return numSay[6];
}
if(numStr == 70) {
    return numSay[7];
}
if(numStr == 80) {
    return numSay[8];
}
if(numStr == 90) {
    return numSay[9];
}
  if(numStr >= 21 && numStr < 100) {
      return numSay[numStr[0]] + ' ' + numArr[numStr[1]];
  }
  if(numStr[1] == 0 && numStr[2] == 0) {
      return numArr[numStr[0]] + ' ' + numHungred;
  }
  if(numStr >= 101 && numStr < 1000 && numStr[1] + numStr[2] <= 9) {
    return numArr[numStr[0]] + ' ' + numHungred + ' ' + numArr[numStr[2]];
  }
  if(numStr >= 101 && numStr < 1000 && numStr[1] + numStr[2] <= 19) {
    return numArr[numStr[0]] + ' ' + numHungred + ' ' + numArr[numStr[1] + numStr[2]];
}
  if(numStr >= 101 && numStr < 1000 && numStr[1] != 0 && numStr[2] != 0) {
      return numArr[numStr[0]] + ' ' + numHungred + ' ' + numSay[numStr[1]] + ' ' + numArr[numStr[2]];
  }
  if(numStr >= 101 && numStr < 1000) {
      return numArr[numStr[0]] + ' ' + numHungred + ' ' + numSay[numStr[1]];
  }

}
