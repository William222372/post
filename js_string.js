let str="Hello Js";
let strHeading=document.querySelector("#str");
strHeading.innerHTML=str;

function FindElementByIndex(){
    let char_at_ind=document.querySelector("#char_at_ind").value;
    let ind =str.charAt(char_at_ind);
    document.querySelector("#r1").innerHTML="Element that we found "+char_at_ind +"is => "+ ele ;
}