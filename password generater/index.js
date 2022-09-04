const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 8;

let m=document.getElementById("display")

const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const password3El = document.getElementById("password3");
const password4El = document.getElementById("password4");


function generatePassword() 
{
  let password = "";
  for (let j = 0; j < passwordLength; j++) 
  {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  m.innerText=passwordLength;
  return password;
}

function generatePasswords()
{
    document.getElementById("password1").innerText=generatePassword();
    document.getElementById("password2").innerText=generatePassword();
    document.getElementById("password3").innerText=generatePassword();
    document.getElementById("password4").innerText=generatePassword();  
}

function increment()
{
    passwordLength+=1;
    if(passwordLength>=8 && passwordLength<=20 )
    {
        generatePassword();
        generatePasswords();
    }
    else 
    {
        alert("limit breached");
    }
}

function decrement()
{
    passwordLength-=1;
    if(passwordLength>=8 && passwordLength<=20 )
    {
        generatePassword();
        generatePasswords();
    }
    
    else 
    {
        alert("limit breached");
    }
}

function copyfn1()
{
    let xerox=document.getElementById("password1");
    const range = document.createRange();
    range.selectNode(document.getElementById("password1"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("password copied");
}

function copyfn2()
{
    let xerox=document.getElementById("password2").innerText;
    const range = document.createRange();
    range.selectNode(document.getElementById("password2"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("password copied");
}
function copyfn3()
{
    let xerox=document.getElementById("password3");
    const range = document.createRange();
    range.selectNode(document.getElementById("password3"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("password copied");
}
function copyfn4()
{
    let xerox=document.getElementById("password4");
    const range = document.createRange();
    range.selectNode(document.getElementById("password4"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("password copied");
}

