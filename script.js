function predictDisease(){

var checkboxes=document.querySelectorAll("#symptoms input:checked");

var selected=[];

checkboxes.forEach(function(box){
selected.push(box.value);
});

if(selected.length<2){
document.getElementById("result").innerHTML="Select at least 2 symptoms";
document.getElementById("probability").innerHTML="";
document.getElementById("suggestion").innerHTML="";
return;
}

var disease="Common Viral Infection";
var probability="60%";

if(selected.includes("fever") && selected.includes("cough")){
disease="Flu";
probability="85%";
}

else if(selected.includes("fever") && selected.includes("vomiting")){
disease="Food Poisoning";
probability="80%";
}

else if(selected.includes("headache") && selected.includes("blurvision")){
disease="Migraine";
probability="75%";
}

else if(selected.includes("fatigue") && selected.includes("weightloss")){
disease="Diabetes";
probability="90%";
}

else if(selected.includes("shortbreath") && selected.includes("chestpain")){
disease="Heart Problem";
probability="92%";
}

document.getElementById("result").innerHTML="🩺 Possible Disease: "+disease;

document.getElementById("probability").innerHTML="📊 Probability: "+probability;

document.getElementById("suggestion").innerHTML="👨‍⚕ Suggestion: Please consult a doctor.";
}

function clearSymptoms(){

var boxes=document.querySelectorAll("#symptoms input");

boxes.forEach(function(box){
box.checked=false;
});

document.getElementById("result").innerHTML="Select symptoms to analyze";
document.getElementById("probability").innerHTML="";
document.getElementById("suggestion").innerHTML="";
}

function searchSymptoms(){

var input=document.getElementById("search").value.toLowerCase();

var labels=document.querySelectorAll("#symptoms label");

labels.forEach(function(label){

var text=label.innerText.toLowerCase();

if(text.includes(input))
label.style.display="block";
else
label.style.display="none";

});

}
