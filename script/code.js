function smartPeople(){
let names= ['Jared','Muddathir','Charles','Reagon','Hannah'];
let ul= document.createElement("ul");
document.querySelector("#smartPeople").appendChild(ul);

names.forEach((names)=>{
    let li = document.createElement("li")
    ul.appendChild(li);
    li.innerHTML+=names;
});
}

smartPeople();