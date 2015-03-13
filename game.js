/*
<- GAME INTERFACE AND TECNICAL MECHANICS SCRIPT ->

*/

//When page is loaded
window.onload = function() {
	function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
	};
	show('loading', false);
	R();
	Test1();
};

//Variables
	/*Pages*/ var Page = {title:'',page:''};
	/*Player*/ var Player = {d:0,s:0,m:0,l:0,Dex:0,Str:0,Mana:0,Luck:0,exD:0,exM:0};
	/*Enemy*/ var Enemy = {Name:'',Image:'',Dex:0,Str:0,Mana:0,Death:0};
	/*Dice*/ var Dice = {N:0};
	/*Technical*/ var i = 0;

//SOUND LYBRARY
var S_Roll1 = new Audio('dice/1die1.wav'), S_Roll2 = new Audio('dice/1die2.wav'), S_Roll3 = new Audio('dice/1die3.wav'), S_PCrit = new Audio('sounds/crit1.wav'), S_ECrit = new Audio('sounds/crit2.wav');
var S_Roll = function(){
	a = Math.floor(Math.random() * (3 - 1) + 1)
	if (a == 1){ S_Roll1.play(); };
	if (a == 2){ S_Roll2.play(); };
	if (a == 3){ S_Roll3.play(); };
};
var S_Attack1 = new Audio('sounds/hit2.wav'), S_Attack2 = new Audio('sounds/hit3.wav'), S_Attack3 = new Audio('sounds/hit4.wav') ;
var S_Attack = function(){
	a = Math.floor(Math.random() * (3 - 1) + 1)
	if (a == 1){ S_Attack1.play(); };
	if (a == 2){ S_Attack2.play(); };
	if (a == 3){ S_Attack3.play(); };
};

//DICE ACTIONS
	//Dice Roll
	function DiceR(){
		N = Math.floor(Math.random() * 20) + 1;
		Dice.N = N;
		console.log('Result: '+Dice.N);
	};
	//Clear Dice
	function DiceC(){
		var Dice = {N:0,Rolled:0};
	};
	
	//Dice Attack
	function Attack() {
		if(Enemy.Str > 0 && Player.Str > 0 && i == 0){
			document.getElementById('enemyStats').className = '';
			StatR();
			document.getElementById('enemyDice').className = 'BdiceStill shadowed';
			document.getElementById('playerDice').className = 'RdiceResult shadowed';
			document.getElementById('Hit').className = 'Hit0';
			document.getElementById('Result').innerHTML = '';
			document.getElementById('eResult').innerHTML = '';
			ClearShake();
			i = 1;
			S_Roll();
			console.log('-- Rolling!');
			setTimeout(function() {
				document.getElementById('playerDice').className = 'RdiceResulted shadowed';
				document.getElementById('enemyStr').className = 'Shaked';
				S_Attack();
				DiceR(); if (Dice.N == 20) { S_PCrit.play(); };
				document.getElementById('Result').innerHTML = Dice.N;
				document.getElementById('Hit').innerHTML = (Dice.N + Player.Dex + Player.exD);
				document.getElementById('Hit').className = 'Hit1';
				console.log('Hit: '+(Dice.N + Player.Dex + Player.exD));
				Enemy.Str -= (Dice.N + Player.Dex + Player.exD);
				StatR();
				if (Enemy.Str < 1) { console.log('-- Enemy '+Enemy.Name+' killed!'); Enemy.Death = 1, i = 0; 
					document.getElementById('enemyStats').className = 'Shaked';
					setTimeout(function() { 
						document.getElementById('enemyStats').className = 'Killed';
						document.getElementById('Hit').className = 'Hit0';
						//document.getElementById('Hit').innerHTML = '';
						document.getElementById('Result').innerHTML = '';
						ClearShake();
						document.getElementById('playerDice').className = 'RdiceStill shadowed';
						setTimeout(function() {	AtWin();document.getElementById('fightscreen').className = 'Killed';	},1000);
					},1500)
				}
				else {
					//Enemy's Turn
					setTimeout(function() {
						document.getElementById('playerDice').className = 'RdiceStill shadowed';
						document.getElementById('Hit').className = 'Hit0';
						//document.getElementById('Hit').innerHTML = '';
						document.getElementById('Result').innerHTML = '';
						document.getElementById('enemyDice').className = 'BdiceResult shadowed';
						S_Roll();
						console.log('-- Enemy is Rolling!');
						setTimeout(function() {
							document.getElementById('playerStr').className = 'Shaked';
							S_Attack();
							DiceR(); if (Dice.N == 20) { S_ECrit.play(); };
							document.getElementById('enemyDice').className = 'BdiceResulted shadowed';
							document.getElementById('eResult').innerHTML = Dice.N;
							document.getElementById('Hit').className = 'Hit1';
							document.getElementById('Hit').innerHTML = (Dice.N + Enemy.Dex);
							console.log('Hit: '+(Dice.N + Enemy.Dex));
							Player.Str -= (Dice.N + Enemy.Dex);
							StatR();
							if (Player.Str < 1) {
								console.log('-- You were killed!');
								document.getElementById('playerStats').className = 'Killed';
								setTimeout(function() {	AtLoss();document.getElementById('fightscreen').className = 'Killed';	},1000);
							};
							console.log('** -- You: '+Player.Str+', Enemy: '+Enemy.Str);
							i = 0;
							setTimeout(function() {
								document.getElementById('Hit').className = 'Hit0';
								document.getElementById('eResult').innerHTML = '';
								ClearShake();
								document.getElementById('enemyDice').className = 'BdiceStill shadowed';
							},1500);
						},1000);
					},1500);
				}
			},1000);
		}
	}
	function ClearShake() {
		document.getElementById('playerStr').className = '';
		document.getElementById('enemyStr').className = '';
	}
	function TestRunCharCreation() {
		Player = {d:0,s:0,m:0,l:0,Dex:15,Str:55,Mana:12,Luck:15,exD:0,exM:0};
		Enemy = {Name:'Dark Elf',Image:'url(icons/darkelf.png)',Dex:15,Str:55,Mana:12,Death:0};
		StatR();
	}