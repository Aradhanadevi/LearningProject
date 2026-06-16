function isLeapYear(year){
  if(year % 4 == 0 && year % 100 != 0){
    return year + " is a leap year.";
  }else if(year % 400 == 0){
    return year + " is a leap year.";
  }else{
    return year + " is not a leap year.";
  }
}

let year = 2024; 
let result = isLeapYear(year);
console.log(result);

result = isLeapYear(1900);
console.log(result);


result = isLeapYear(2000);
console.log(result);