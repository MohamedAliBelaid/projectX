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
    b7.style.display = "block";
  } 
  else if (check1.checked == true && check2a.checked == true && check3.checked == true){
    m8.style.display = "block";
    }
    else if (check1.checked == true && check2a.checked == true && check3a.checked == true){
    	w7.style.display = "block";
    }
    else if (check1a.checked == true && check2a.checked == true && check3.checked == true){
    	b8.style.display = "block";
    }
    else if (check1.checked == true && check2.checked == true && check3a.checked == true){
    	wmc.style.display = "block";
    }
    else if (check1a.checked == true && check2.checked == true && check3a.checked == true){
    	bmc.style.display = "block";
    }
    else if (check1.checked == true && check2.checked == true && check3.checked == true){
    	swm.style.display = "block";
    }
    else if (check1a.checked == true && check2.checked == true && check3.checked == true){
    	bsm.style.display = "block";
    }

    else {
    	bsm.style.display = "none";
    }
  }
