

function maskEmail(email){

  let atIndex = email.indexOf("@");
  let domain = email.slice(atIndex + 1);
  let username = email.slice(0, atIndex)
  let redactedUsername = "*".repeat(username.length - 2)
  return username[0] + redactedUsername + username[username.length - 1]+ "@" + domain; 

}
let email = "apple.pie@example.com";
console.log(maskEmail(email));

console.log(maskEmail("freecodecamp@example.com"));

console.log(maskEmail("info@test.dev"));

console.log(maskEmail("user@domain.org"));