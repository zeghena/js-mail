
function recuperaMail(formControl){
    const input = document.getElementById(formControl).value;
    return input;
    console.log(input)

}
function checkMail(mail){
    const indirizzi =  ["pippo@gmail.com" , "paperino@gmail.com" , "pluto@gmail.com"]
    const test = indirizzi.includes(mail);
    return test;
    console.log(mail);
}
const btn = document.getElementById("check-mail");
btn.addEventListener("click",function(){
    const mail = recuperaMail("pippo");
    const isValid = checkMail(mail);
    console.log(isValid);
    
})



// const result = prompt("qual è la tua mail?");


// console.log (result)



