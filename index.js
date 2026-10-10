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