let count = 0;

function cardCounter(cards){

  if ([2, 3, 4, 5, 6].includes(cards)){
    count ++;
  }
  if([10,"A", "J", "Q", "K"].includes(cards)){
    count --;
  }
  return(count + (count > 0 ? " Bet" : " Hold"));

}

console.log(cardCounter(6));
console.log(cardCounter(9));
console.log(cardCounter("A"));
console.log(cardCounter("A"));
console.log(cardCounter(7));
console.log(cardCounter(10));
console.log(cardCounter("K"));