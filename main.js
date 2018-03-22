//ajax call initialization
function jsondata(file,callback)
{
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange= function(){
     if(xhr.readyState ===4 && xhr.status =="200")
      {
        callback(xhr.responseText);
      }

   };
xhr.send();
}
//function calling
jsondata("data.json",function(text){
  let data=JSON.parse(text);
 console.log(data);
 ba(data.basics);
 educ(data.education);
 skills(data.skills);
 })
 //main div class calling from html
var main=document.querySelector('.main');
//var main=document.getElementById('main');
 //left div creation
 var left=document.createElement("div");
 left.classList.add("left");
 //id for left div
 left.setAttribute("id","left");
 //appending to main div
 main.appendChild(left);
 function ba(basic){
   //image creation
   var img=document.createElement('img')
   img.src=basic.photo;
   left.appendChild(img);
   //name creation
   var name=document.createElement("h1");
   name.textContent=basic.name;
  left.appendChild(name);
//email creation
var mail=document.createElement("p");
mail.textContent=basic.email;
left.appendChild(mail);
}



//right div creation
var right=document.createElement("div");
right.classList.add("right");
//id for right div
right.setAttribute("id","right");
//appending to main div
main.appendChild(right);
//edu div creation
var edu=document.createElement("h1")
edu.textContent="Education Details:";
right.appendChild(edu);
edu.appendChild(document.createElement("HR"));

function educ(education)
{
  for(i in education)
  {
    var e1=document.createElement("div");
    e1.classList.add("edu1")
    e1.textContent=education[i].course;
    //list creation
    var ul=document.createElement("ul");
    ul.classList.add("edu2");

    for(j in education[i].college)
    {
        var li=document.createElement("li");
        li.textContent=education[i].college[j];
        edu.appendChild(e1);
        e1.appendChild(ul);
        ul.appendChild(li);
    }

  }
/*  var table=document.createElement("table");
  table.classList.add("table");
  edu.appendChild(table);
  var row1="";
  var col="";
  for(i=0;i<education.length;i++){

for(j=0;j<education[i].college.length;j++){
col=col+"<td>"+education[i].college[j]+"</td>";



}
row1=row1+"<tr><td>"+education[i].course+"</td></tr>"+col;



  }
  table.innerHTML=row1;*/
 }
 function skills(skills){
var skill_title= document.createElement("h1");
skill_title.textContent="Skills";
right.appendChild(skill_title);
//skill_title.appendChild(document.createElement("HR"));
var table=document.createElement("table");
table.classList.add("table");
skill_title.appendChild(table);
var row="";
for(i=0;i<skills.length;i++){
row= row+"<tr><td>"+skills[i].name+"</td><td>"+skills[i].value+"</td></tr>";
}
table.innerHTML=row;



 }
