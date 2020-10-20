var element=document.getElementById('ran')

var imgs=[
	"https://images.pexels.com/photos/937668/pexels-photo-937668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/790176/pexels-photo-790176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

];

function change(element,array){
     setInterval(function(){
		var rand=Math.floor(Math.random() * imgs.length);
		element.src=imgs[rand];
	}, 2500);
}
change(element,imgs);






$('#bm').click(function(){
	window.location.href='http://www.benjemaamotors.com/';
 })

 $('#au').click(function(){
	window.location.href='https://tn.audi.com/tn/web/fr.html';
 })

 $('#mer').click(function(){
	window.location.href='https://www.mercedes-benz.tn/fr/desktop/home.html';
 })

 $('#po').click(function(){
	window.location.href='https://www.porsche.com/france/_tunisia_/aboutporsche/importers/';
 })

 $('#vo').click(function(){
	window.location.href='https://www.volkswagen.tn/fr.html';
 })
 $('#wa').click(function(){
	window.location.href='https://www.wallyscar.com/';
 })
 $('#ju').click(function(){
	window.location.href='https://www.jaguar-tunisie.com/fr/';
 })
 $('#je').click(function(){
	window.location.href='https://www.jeep.tn/';
 })

 $('#about').click(function(){
	window.location.href='http://theschoolofdrift.org/';
 })

 $('#dream').click(function(){
	window.location.href='file:///C:/Users/HP/OneDrive/Bureau/projectXX/projectX/page2.html#home';
 })
 
   
function myFunction() {
  var bsm=document.getElementById("byd")
  var swm=document.getElementById("bud")
  var bmc=document.getElementById("bod")
  var wmc=document.getElementById("bid")
  var b8 =document.getElementById("dap")
  var w7 =document.getElementById("dak")
  var m8 =document.getElementById("dab")
  var b7 =document.getElementById("deb")
  var check1= document.getElementById("whites");
  var check1a=document.getElementById("blacks")
  var check2= document.getElementById("mercedess")
  var check2a=document.getElementById("bmws")
  var check3= document.getElementById("sports")
  var check3a=document.getElementById("lexurys")
  if (check1a.checked == true && check2a.checked == true && check3a.checked == true ){
    $("#hi").fadeOut();
    b7.style.display = "block";
  } 
  else if (check1.checked == true && check2a.checked == true && check3.checked == true){
  	$("#hi").fadeOut("slow");
    m8.style.display = "block";
    }
    else if (check1.checked == true && check2a.checked == true && check3a.checked == true){
    	$("#hi").fadeOut("slow");
    	w7.style.display = "block";
    }
    else if (check1a.checked == true && check2a.checked == true && check3.checked == true){
    	$("#hi").fadeOut("slow");
    	b8.style.display = "block";
    }
    else if (check1.checked == true && check2.checked == true && check3a.checked == true){
    	$("#hi").fadeOut("slow");
    	wmc.style.display = "block";
    }
    else if (check1a.checked == true && check2.checked == true && check3a.checked == true){
    	$("#hi").fadeOut("slow");
    	bmc.style.display = "block";
    }
    else if (check1.checked == true && check2.checked == true && check3.checked == true){
    	$("#hi").fadeOut("slow");
    	swm.style.display = "block";
    }
    else if (check1a.checked == true && check2.checked == true && check3.checked == true){
    	$("#hi").fadeOut("slow");
    	bsm.style.display = "block";
    }

    else {
    	bsm.style.display = "none";
    }
  }



$('#serie1').click(function(){
	window.location.href='https://www.larevueautomobile.com/Fiche-Technique-Auto/Caracteristique-bmw-serie-1-116d-2020';
 })
$('#serie2').click(function(){
	window.location.href='https://www.larevueautomobile.com/Fiche-Technique-Auto/Caracteristique-bmw-serie-2-coupe-218d-2020-1';
 })
$('#serie3').click(function(){
	window.location.href='https://www.larevueautomobile.com/Fiche-Technique-Auto/Caracteristique-bmw-serie-3-320d-2020';
 })
$('#serie4').click(function(){
	window.location.href='https://www.larevueautomobile.com/Fiche-Technique-Auto/Caracteristique-bmw-serie-4-coupe-420i-2020';
 })
$('#serie5').click(function(){
	window.location.href='https://www.larevueautomobile.com/Fiche-Technique-Auto/Caracteristique-bmw-serie-5-520d-2020';
 })
$('#classA').click(function(){
	window.location.href='https://www.larevueautomobile.com/Fiche-Technique-Auto/Caracteristique-mercedes-classe-a-200-2020';
 })
$('#cla').click(function(){
	window.location.href='https://www.larevueautomobile.com/Fiche-Technique-Auto/Caracteristique-mercedes-cla-200-2020';
 })
$('#classE').click(function(){
	window.location.href='https://www.larevueautomobile.com/Fiche-Technique-Auto/Caracteristique-mercedes-classe-e-200-2020';
 })
$('#classC').click(function(){
	window.location.href='https://www.larevueautomobile.com/Fiche-Technique-Auto/Caracteristique-mercedes-classe-c-200-2020';
})
$('#gle').click(function(){
	window.location.href='https://www.larevueautomobile.com/Fiche-Technique-Auto/Caracteristique-mercedes-gle-300-d-4matic-2020';
 })
$('#glc').click(function(){
	window.location.href='https://www.larevueautomobile.com/Fiche-Technique-Auto/Caracteristique-mercedes-glc-220-d-4matic-2020-1';
 })
$('#a3').click(function(){
	window.location.href='https://www.larevueautomobile.com/Fiche-Technique-Auto/Caracteristique-audi-a3-sportback-1-4-tfsi-150-2020';
 })
$('#q2').click(function(){
	window.location.href='https://www.larevueautomobile.com/Fiche-Technique-Auto/Caracteristique-audi-q2-35-tfsi-150-2020';
 })
$('#a4').click(function(){
	window.location.href='https://www.larevueautomobile.com/Fiche-Technique-Auto/Caracteristique-audi-a4-2-0-tfsi-190-ultra-2020';
 })
$('#a5').click(function(){
	window.location.href='https://www.larevueautomobile.com/Fiche-Technique-Auto/Caracteristique-audi-a5-sportback-2-0-tdi-190-2020';
 })
$('#q3').click(function(){
	window.location.href='https://www.larevueautomobile.com/Fiche-Technique-Auto/Caracteristique-audi-q3-35-tdi-2020';
 })
$('#a6').click(function(){
	window.location.href='https://www.larevueautomobile.com/Fiche-Technique-Auto/Caracteristique-audi-a6-s6-2020';
 })

