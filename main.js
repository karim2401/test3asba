function afficher()
{
    window.open("regle.html","reglement","top=100,left=100,height=400,width=400")
}
function alphanum(ch){
    ch=ch.toUpperCase();
    i=0;
    while((i<ch.length)&&(((ch.charAt(i)>="A"))&&(ch.charAt(i)<="Z")||(ch.charAt(i)>="0")&&(ch.charAt(i)<="9"))){
        i=i+1;
        //i++;
        //i+=1;
    }
    return i==ch.length;
}


function alpha(ch){
    ch=ch.toUpperCase();
    i=0;
    while((i<ch.length)&&(((ch.charAt(i)>="A"))&&(ch.charAt(i)<="Z"))){
        i=i+1;
        //i++;
        //i+=1;
    }
    return i==ch.length;
}


function verif(){
    n=document.getElementById("nom").value;
    if((n=="")||!alphanum(n))
    {
        alert("verifier votre nom");
        document.getElementById("nom").value="";
        document.getElementById("nom").focus();
        return false;
    } 
    p=document.getElementById("pre").value;
    if((p=="")||!alphanum(p))
    {
        alert("verifier votre prenom");
        document.getElementById("pre").value="";
        document.getElementById("pre").focus();
        return false;
    }

    mail=document.getElementById("add").value;
    ch1=mail.substr(0,mail.indexOf("@"));
    ch2=mail.substr(mail.indexOf("@")+1,mail.indexOf(".")-mail.indexOf("@")-1);
    ch3=mail.substr(mail.indexOf(".")+1,mail.length-mail.indexOf(".")-1);
    if(!alphanum(ch1)||!alphanum(ch2)||!alpha(ch3)||(ch3.length<2)||(ch3.length>3)){
        alert("verifier votre email");
        document.getElementById("add").value="";
        document.getElementById("add").focus();
        return false;
    }

}