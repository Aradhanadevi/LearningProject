function truncateString(word, stringLength){
  if (word.length <= stringLength){
    return word;
  }
  else{
    return word.slice(0, stringLength) + "...";
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));