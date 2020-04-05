function suffle(){
	var suffle1=Math.floor(Math.random()*6)+1;
	document.getElementById("p1dice").setAttribute("src","images/dice"+suffle1+".png");
	var suffle2=Math.floor(Math.random()*6)+1;
	document.getElementById("p2dice").setAttribute("src","images/dice"+suffle2+".png");
	var winner;
	if (suffle1>suffle2) {
		// setTimeout(function(){ alert("Player1 is the winner!!!"); }, 500);
		document.getElementById("header").innerText="Congo! Player1 Won !!";
		document.getElementById("header").classList.add("newfont");
		document.getElementById("winnerimg1").style.display="block";
		document.getElementById("winnerimg2").style.display="none";
	}
	else if (suffle1<suffle2){
		// setTimeout(function(){ alert("Player2 is the winner!!!"); }, 500);
		document.getElementById("header").innerText="Congo! Player2 Won !!";
		document.getElementById("header").classList.add("newfont");
		document.getElementById("winnerimg2").style.display="block";
		document.getElementById("winnerimg1").style.display="none";
	}
	else{
		document.getElementById("header").innerText="Opps! It's a Tie !!";
		document.getElementById("header").classList.add("newfont");
		document.getElementById("winnerimg2").style.display="none";
		document.getElementById("winnerimg1").style.display="none";
	}
}
