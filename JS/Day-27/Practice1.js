function confirmEnding(str1, str2){
  if (str1.substring(str1.length - str2.length) === str2){
    return true;
  }
  else{
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));

console.log(confirmEnding("Connor", "n"));