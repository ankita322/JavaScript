const accountId = 144
let accountEmail = "ankita@google.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

// accountId = 2
accountEmail = "abc@gmail.com"
accountPassword = "2233"
accountCity = "Delhi"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
