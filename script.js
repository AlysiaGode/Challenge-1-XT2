window.onload = function() {
	var oudeScrollPositie = window.pageYOffset;

	window.onscroll = function() {
		var huidigeScrollPositie = window.pageYOffset;

		if (oudeScrollPositie > huidigeScrollPositie) {
			document.getElementById('menu').style.top = "0px";
			document.getElementById('menutoggle').style.top = "0px";
		} else if (oudeScrollPositie < huidigeScrollPositie && menu.className == 'inactive') {
			document.getElementById('menu').style.top = "-100px";
			document.getElementById('menutoggle').style.top = "-100px";
		}

		oudeScrollPositie = huidigeScrollPositie;
	}
	var menu = document.getElementById('menu');
	document.getElementById("menutoggle").onclick = function() {
		
		if(menu.className == "active"){
			menu.className = "inactive";
		} else {
			menu.className = "active";
		}
	}

	function switchMenu(x) {
  		if (x.matches) { //als schermbreedte min 601px is, zet menu naar inactive (menu kan niet meer worden opengeklapt)
    		menu.className = "inactive"
  		} 
	}

	//controleer of schermbreedte min 601px is
	var x = window.matchMedia("(min-width: 601px)")
	switchMenu(x) 
	x.addListener(switchMenu)
}
