const accountID = 11900122042
const accountName = 'Rishu Gupta'
const accountCity = 'Siliguri'
const accountState = 'West Bengal'
const accountCountry = 'India'
const accountPassword = 'Rishu@123'
let accountBalance = 50000
let eligibleForLoan;
if(accountBalance > 10000){
    eligibleForLoan = true
}
else{
    eligibleForLoan = false
}
let i = 0;
for(i; i < 15; i++){
    console.table([{
        Index: i+1,
        ID: accountID,
        Name: accountName,
        City: accountCity,
        State: accountState,
        Country: accountCountry,
        Password: accountPassword,
        Balance: accountBalance,
        eligibleForLoan: eligibleForLoan
    }])
}
// console.log(typeof eligibleForLoan)
// console.log(typeof null)