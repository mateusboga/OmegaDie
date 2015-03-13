/*
<-GAME PAGES AND WINDOWS SCRIPT->

*/
//Vars
var Title = 'test', Page = 'dsa', InstPage = '';

function R() {
	//Reload all pages
	document.getElementById('title').innerHTML = Title;
	document.getElementById('page').innerHTML = Page;
	document.getElementById('instruction').innerHTML = InstPage;
};

function ManageInst(a) {
	if(a == 0){	document.getElementById("statscreen").style.display = "none";	}
	if(a == 1){	document.getElementById("statscreen").style.display = "block";	}
};

function StatR() {
	document.getElementById('pDexn').innerHTML = Player.Dex;
	document.getElementById('pManan').innerHTML = Player.Mana;
	document.getElementById('pLuckn').innerHTML = Player.Luck;
	document.getElementById('pStrn').innerHTML = Player.Str;
	document.getElementById('enemyName').innerHTML = Enemy.Name;
	document.getElementById('eDexn').innerHTML = Enemy.Dex;
	document.getElementById('eManan').innerHTML = Enemy.Mana;
	document.getElementById('eStrn').innerHTML = Enemy.Str;
	document.getElementById('enemyIcon').style.backgroundImage = Enemy.Image;
	document.getElementById('enemyStats').className = '';
	document.getElementById('playerStats').className = '';
};

AtWin = function() { };
AtLoss = function() {  };

function Test1() {
	Player = {d:0,s:0,m:0,l:0,Dex:15,Str:55,Mana:12,Luck:15,exD:0,exM:0};
	Page = ( '<p>'
		+'Testreon: You are going to fight a Dark Elf.'
		+'<div class="Button ApxS" onClick="Test2()">Fight Dark Elf</div>'
	);
	R();
}
function Test2() {
	Enemy = {Name:'Dark Elf',Image:'url(icons/darkelf.png)',Dex:5,Str:55,Mana:0,Death:0};
	StatR();
	document.getElementById('fightscreen').className = '';
	AtWin = function(){ Test3(); };
	AtLoss = function(){ Test4(); };
	console.log('Step1');
}
function Test3() {
	Page = ( '<p>'
		+'Testreon: You successfuly killed the Dark Elf!'
		+'<div class="Button ApxS" onClick="Test2()">Fight Again</div>'
	); 
	R();
}
function Test4() {
	Page = ( '<p>'
		+'Testreon: You were killed by the Dark Elf!'
		+'<div class="Button ApxS" onClick="Test1()">Restart</div>'
	); 
	R();
}