var users=[
    {
        "name":"john doe",
        "gender":"male",
        "image":"beingInfinity pic.png"
    },
    {
        "name":"jane doe",
        "gender":"female",
        "image":"beingInfinity jane.png"
    }

]
var index=0;
function toggle(){
    if(index==0) index=1;
    else index=0
    document.getElementById("user-name").innerText=users[index].name;
    document.getElementById("gender").innerText=users[index].gender;
    document.getElementById("image").src=users[index].image;
}
function randomUser(){
    fetch("https://randomUser.me/api").then(function(rawData){
        return rawData.json();
    })
    .then(function(jsonData){
        var user=jsonData.results[0];
        var gender=user.gender;
        var fullname=user.name.title+" "+user.name.first+" "+user.name.last;
        document.getElementById("user-name").innerText=fullname;
        document.getElementById("gender").innerText=gender;
        document.getElementById("image").src=user.picture.large;
    })
}