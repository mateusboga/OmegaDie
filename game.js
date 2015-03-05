N = 0; //Number of the dice
Rolled = 0; //Number of times the dice has been rolled
Title = "";
Page = "";
Inventory = "";
Dset = 0;
Sset = 0;
Mset = 0;
Lset = 0;
D = 0; Dex = 0; Dextra = 0;
S = 0; Str = 0; Sextra = 0;
M = 0; Mana = 0; Mextra = 0;
L = 0; Luck = 0; Lextra = 0;
Add = 0; //The number that adds to the dice when you roll
pack = 0; //Whether I have the pack open or not

//Audio files
var S_Roll1 = new Audio("dice/1die1.wav"); var S_Roll2 = new Audio("dice/1die2.wav"); var S_Roll3 = new Audio("dice/1die3.wav"); var S_Roll4 = new Audio("dice/1die1.wav"); var S_Roll5 = new Audio("dice/1die2.wav"); var S_Roll6 = new Audio("dice/1die3.wav");
var S_Flip = new Audio("sounds/flip1.wav");
var S_Hit = new Audio("sounds/hit1.wav");
var S_Step1 = new Audio("sounds/step1.wav"); var S_Step2 = new Audio("sounds/step2.wav"); var S_Step3 = new Audio("sounds/step3.wav");
var S_Page1 = new Audio("sounds/page1.wav"); var S_Page2 = new Audio("sounds/page2.wav"); var S_Page3 = new Audio("sounds/page3.wav");
var S_OpenP = new Audio("sounds/openpack.wav");
var S_CloseP = new Audio("sounds/closepack.wav");
var S_DrawS1 = new Audio("sounds/sworddraw1.wav");
var S_Drink1 = new Audio('sounds/drink1.wav');
var S_Piece1 = new Audio('sounds/piece1.wav');
var S_OpenBook = new Audio("sounds/bookopen.wav");
var S_CloseBook = new Audio("sounds/bookclose.wav");
var S_Depth1 = new Audio("sounds/depth1.wav");
var S_Door1 = new Audio("sounds/dooropen1.wav"); var S_Door2 = new Audio("sounds/dooropen2.wav"); var S_Door3 = new Audio("sounds/dooropen3.wav"); var S_Door4 = new Audio("sounds/dooropen4.wav");
var S_Drawer = new Audio("sounds/drawer1.wav");
var S_Locked1 = new Audio("sounds/locked1.wav"); var S_Locked2 = new Audio("sounds/locked2.wav");
var S_Openchest = new Audio("sounds/openchest.wav");

window.setInterval(function(){
	
	if (Dextra > 0) { document.getElementById("Dex+").innerHTML = '+' + Dextra; };
	if (Mextra > 0) { document.getElementById("Mana+").innerHTML = '+' + Mextra; };
	
	if (D > 0) { document.getElementById("DexN").innerHTML = Dex + ' DEX'; };
	if (S > 0) { document.getElementById("StrN").innerHTML = Str + ' STR'; };
	if (M > 0) { document.getElementById("ManaN").innerHTML = Mana + ' MANA'; };
	if (L > 0) { document.getElementById("LuckN").innerHTML = Luck + ' LUCK'; };
	
}, 100);

function RollDice() {
	//Random Roll
	Roll = Math.floor(Math.random() * (20)) + 1;
		
	if (Rolled < 1){ //If I did not roll yet
		N = Roll;
		Rolled++;
	
		document.getElementById("Result").innerHTML = N;
		Res = document.getElementById("DiceResult");
		Res.style.visibility = (Res.style.visibility = "visible");
		
		Snd = Math.floor(Math.random() * (6 - 1)) + 1; //Play a roll sound
			if(Snd == 1){ S_Roll1.play(); }; if(Snd == 2){ S_Roll2.play(); }; if(Snd == 3){ S_Roll3.play(); }; if(Snd == 4){ S_Roll4.play(); }; if(Snd == 5){ S_Roll5.play(); }; if(Snd == 6){ S_Roll6.play(); };
	};
	
	if (Dset == 1) {
		D = N + Add;
		document.getElementById("dexList").innerHTML = 'Dexterity = ' + D;
		Dex = D;
		
		Dset = 0;
	};
	if (Sset == 1) {
		S = N + Add;
		document.getElementById("strList").innerHTML = 'Strength = ' + S;
		Str = S;
		
		Sset = 0;
	};
	if (Mset == 1) {
		M = N + Add;
		document.getElementById("manaList").innerHTML = 'Mana = ' + M;
		Mana = M;
		
		Mset = 0;
	};
	if (Lset == 1) {
		L = N + Add;
		document.getElementById("luckList").innerHTML = 'Luck = ' + L;
		Luck = L;
		
		Lset = 0;
	};
	
};

function ClearDice() {
	Rolled = 0;
	if (Dset + Sset + Mset + Lset == 0){ document.getElementById("DiceOp").innerHTML = ''; };
	document.getElementById("Result").innerHTML = '';
	Res = document.getElementById("DiceResult");
	Res.style.visibility = (Res.style.visibility = "hidden");
};

window.addEventListener("keydown", checkKeyPressed, false);
 
function checkKeyPressed(e) {
    if (e.keyCode == "80") {
        LoadPack();
    }
	if (e.keyCode == "27") {
        ClosePack();
    }
}

function LoadPack() {
	if (pack == 0){
		pack = 1;
		Pack = document.getElementById("Backpack");
		Pack.style.left = (Pack.style.left = "0px");
		S_OpenP.play();
	}
	else {
		pack = 0;
		Pack = document.getElementById("Backpack");
		Pack.style.left = (Pack.style.left = "-500px");
		S_CloseP.play();
	};
}; function ClosePack() { 
	if (pack == 1){
		pack = 0;
		Pack = document.getElementById("Backpack");
		Pack.style.left = (Pack.style.left = "-500px");
		S_CloseP.play();
	}
	ClearDice();
};

/*
	Technicals
*/

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
};

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
};
onReady(function () { show('loading', false); });
window.onload = function() {
	document.getElementById("title").innerHTML = Title;
	document.getElementById("page").innerHTML = Page;
	document.getElementById("PackItems").innerHTML = Inventory;
	Start();
};
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
};
function R() {
	document.getElementById("title").innerHTML = Title; document.getElementById("page").innerHTML = Page;
}