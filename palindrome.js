let a = "madam"
function palindrome(){
    let rev = a.split().reverse().join()
    return a === rev
}
console.log(palindrome())