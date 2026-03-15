// REMOVE LOADER AFTER PAGE LOAD
window.addEventListener("load", function(){
let loader = document.getElementById("loader");
if(loader){
loader.style.display="none";
}
});
// DARK MODE
function toggleTheme(){
document.body.classList.toggle("dark-mode");
}
// TYPING ANIMATION
new Typed("#typing",{
strings:["AI & ML Enthusiast","Web Developer","Future Software Engineer"],
typeSpeed:60,
backSpeed:40,
loop:true
});
// PROJECT POPUP
function openPopup(title,text,image){
let popup=document.getElementById("popup");
document.getElementById("popupTitle").innerText=title;
document.getElementById("popupText").innerText=text;
document.getElementById("projectImage").src=image;
popup.style.display="flex";
}
// CLOSE POPUP
let closeBtn=document.querySelector(".close");
if(closeBtn){
closeBtn.onclick=function(){
document.getElementById("popup").style.display="none";
};
}
// SCROLL TO TOP
let topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",function(){
if(document.documentElement.scrollTop>200){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}
});
if(topBtn){
topBtn.onclick=function(){
window.scrollTo({top:0,behavior:"smooth"});
};
}
// CONTACT FORM
let form=document.getElementById("contactForm");
if(form){
form.addEventListener("submit",function(e){
e.preventDefault();
document.getElementById("formMsg").innerText=
"Message sent successfully!";
});
}
// PARTICLES
particlesJS("particles-js",{
particles:{
number:{value:60},
size:{value:3},
move:{speed:2}
}
});
document.addEventListener("DOMContentLoaded", function(){
const input = document.getElementById("chat-input");
const body = document.getElementById("chat-body");
if(!input || !body) return;
input.addEventListener("keydown", function(e){
if(e.key === "Enter"){
let userText = input.value;
addMessage(userText,"user");
let response = getBotResponse(userText);
setTimeout(function(){
addMessage(response,"bot");
},500);
input.value="";
}
});
function addMessage(text,type){
let msg=document.createElement("div");
msg.className="message "+type;
msg.innerText=text;
body.appendChild(msg);
body.scrollTop=body.scrollHeight;
}
function getBotResponse(text){
text=text.toLowerCase();
if(text.includes("who")){
return "I am Sravani, a Computer Science student interested in AI, ML and Web Development.";
}
if(text.includes("skills")){
return "My skills include Python, HTML, CSS, JavaScript and Machine Learning.";
}
if(text.includes("project")){
return "I built projects like AI Chatbot, Sentiment Analysis and this Portfolio.";
}
if(text.includes("contact")){
return "You can contact me using the contact form or LinkedIn.";
}
return "Ask me about my skills, projects or contact.";
}
});
