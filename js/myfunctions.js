function clicButton1(){
    console.log("You have clicked the button");
    document.getElementById("result").innerHTML="Hello";
}

function clickButton2(){
    let fname=document.getElementById("fn").value;
    console.log("Hello "+fname);
    alert(fname);
    localStorage.setItem("username",fname);
    document.getElementById("result2").innerHTML=fname;
    document.getElementById("targetFn").value=fname;
}

function getNameFromLocalStorage(){
    let uname=localStorage.getItem("username");
    alert("username ="+uname);
}

function hideAbc(){
    document.getElementById("abc").hidden=true;
    document.getElementById("btnHide").hidden=true;
    document.getElementById("btnShow").hidden=false;
}

function showAbc(){
    document.getElementById("abc").hidden=false;
    document.getElementById("btnHide").hidden=false;
    document.getElementById("btnShow").hidden=true;
}

window.onload=function (){
    console.log("TEST");
    //alert("This will be executed automatically");
}

function saveContry(){
    let country=document.getElementById("countries").value;
    console.log(country);
    document.getElementById("selectedCountry").value=country;
}

function showSelectedRadio(){
    let selected="";
    if(document.getElementById("huey").checked){
        selected="huey";
    }
    if(document.getElementById("dewey").checked){
        selected="dewey";
    }
    if(document.getElementById("louie").checked){
        selected="louie";
    }
    console.log(selected);
}