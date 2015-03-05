
function Start() {
	Title = '';
	Page = (
	'<p><div class="link unselectable" onclick="CharCreation()">Start</div>' 
	); R();
};

function CharCreation() {
	S_Page1.play();
	Title = "Character Creation";
	Page = ("Welcome to the character creation window. "
	+ "To create your character, follow the instructions below."
	+ "<p>A character has three main statistics: Dexterity(DEX), Strength(STR) and Mana(MANA)."
	+ " There's also Luck(LUCK), which is used less often."
	+ " Click the following buttons and roll the die to set your character's stats:<p>"
	+ '<div id="dexList" class="link linkdice" onclick="setD()">Dexterity</div>'
	+ "Dexterity is how efficient your attacks are. It adds to your dice roll when in battle. See 'Fighting'"
	+ '<div id="strList" class="link linkdice" onclick="setS()">Strength</div>'
	+ "Strength is your phisical capacity. When Strength reaches 0, you lose automatically."
	+ '<div id="manaList" class="link linkdice" onclick="setM()">Mana</div>'
	+ "Mana is your magic and mind ability. However, it is not used in hand-to-hand combat. See 'Mana'"
	+ '<p>'
	+ '<div id="luckList" class="link linkdice" onclick="setL()">Luck</div>'
	+ "Luck is a stat of chance. It decreases with use. See 'Luck' for more info"
	+ "<p>Once you've set all your stats, go to the next page to learn how to fight.<p>"
	+ '<div class="link unselectable" onclick="statsDone()">Next - Fighting</div>'
	);	R();
};
function setOp(x) { document.getElementById("DiceOp").innerHTML = ('+'+x); };
function setD() {
	D = 0; Add = 5; Dset = 1; Sset = 0; Mset = 0; Lset = 0;
	document.getElementById("dexList").innerHTML = 'Dexterity = Dice' + ('+'+Add);
	setOp(Add);
	S_Flip.play();
	ClearDice();
};
function setS() {
	S = 0; Add = 15; Sset = 1; Dset = 0; Mset = 0; Lset = 0;
	document.getElementById("strList").innerHTML = 'Strength = Dice' + ('+'+Add);
	setOp(Add);
	S_Flip.play();
	ClearDice();
};
function setM() {
	M = 0; Add = 5; Mset = 1; Sset = 0; Dset = 0; Lset = 0;
	document.getElementById("manaList").innerHTML = 'Mana = Dice' + ('+'+Add);
	setOp(Add);
	S_Flip.play();
	ClearDice();
};
function setL() {
	L = 0; Add = 0; Lset = 1; Mset = 0; Sset = 0; Dset = 0;
	document.getElementById("luckList").innerHTML = 'Luck = Dice';
	document.getElementById("DiceOp").innerHTML = '';	//setOp(Add);
	S_Flip.play();
	ClearDice();
};
function statsDone() {
	if (D >> 0 && S >> 0 && M >> 0 && L >> 0) {
		fighting();
	}
	else {
		
	}
};

function fighting() {
	S_Page2.play();
	Title = "Fighting";
	Page = (
	'Fighting is a big aspect of the RPG genre. '
	+ 'Fighting in this game is coordinated by the dice. A roll means an attack. '
	+ 'You roll once for yourself, once for your enemies, in order if there are more than one,'
	+ ' and then repeat.'
	+ "<p>Here's how the hits work:"
	+ 'When you roll, the number you get adds to your total DEX, displayed on'
	+ ' the right hand side. This number you get from that addition is the damage you will deal to your opponent'
	+ '<p>Dice + DEX = Hit Damage'
	+ '<p>The Hit Damage is the number of STR that the opponent loses. Similarly,'
	+ 'the same happens the other way, you roll the dice for your opponent, and that number is added to his DEX'
	+ ' to form his Hit Damage, which is the amount of STR you will lose by his attack'
	+ '<p> When you equip a weapon, your Dex level is increased, and that increases your total hit damage. '
	+ 'Sometimes you have special items that increase your damage, but are consumed after you use them once, like arrows or bombs'
	+ '<div class="link unselectable" onclick="howluck()">Next - Luck</div>'
	); R();
	ClearDice();
};

function howluck() {
	S_Page3.play();
	Title = "Luck";
	Page = ( 'Luck can be used in various ways. '
	+ 'In some cases, you will be forced to use luck to decide the outcome of an event'
	+ ', for example, if you dodge an arrow or if you were too slow and it hit you. '
	+ 'In these situations, you will "test" your luck. '
	+ "Here's how to do it:"
	+ '<p>Roll the dice once. If the number you get is lower or equal to your LUCK, you "were lucky", and whatever would happen in that case, happens. '
	+ 'If the number was higher, however, you were unlucky. The other option, possibly worse, is the one that is chosen for you,'
	+ ' and you will bare the consequences.'
	+ '<p>In either of the cases, every time you Test Your Luck, your LUCK will decrease.'
	+ '<p>Testing your luck may sometimes help you, but it is a risky move. Do it at your own cost'
	+ "<p>Throughout the course of your adventure, you will often be asked to test your luck. But once in a while, "
	+ "You might be asked to Test Your Dexterity, Strength or even Mana. "
	+ "In these cases, you do the same as you would with LUCK, but unlike Luck, DEX, STR, and MANA do not decrease when you test them."
	+ '<div class="link unselectable" onclick="howmana()">Next - Mana</div>'
	
	); R();
};

function howmana() {
	S_Page2.play();
	Title = "Mana & Magic"
	Page = ( 'Mana is power of mind. '
	+ 'It is used as your level of intelligence and mental capacity. '
	+ 'Mana can increase with good findings and intelectual conversations. It may decrease'
	+ ' when you are dizzy or under some sort of spell. '
	+ 'Mana can be used in battle if the weapon you are using needs magical power, like a wand or staff. '
	+ '<p>To use your Mana, roll the dice. Add your Mana to the number you get. That is how powerful your spell will be.'
	+ '<p>Dice + MANA = Magical Damage'
	+ "<p>The Magical Damage is the damage you will deal to your opponent's DEX. The same happens with them. If you roll the dice to their Spell attack, their MANA will add to this number"
	+ ' and you will lose that much Dexterity'
	+ '<div class="link unselectable" onclick="howitems()">Next - Items</div>'
	); R();
}

function howitems() {
	S_Page1.play();
	Title = "Items & Inventory";
	Page = ( 'Items are stored in your Backpack. To open your Backpack'
	+ ' click the pack icon on the left hand side or press P. '
	+ 'You will find items throughout your adventure, and these can be used in various ways.'
	+ 'Weapons can be equiped to increase your DEX. Consumables, like potions, can be used on your character, or in the environment.'
	+ '<p>Your stats are listed at all times on the right hand side of your page. There you will also see what effects are on you at any time.'
	+ '<p>Click the following button to equip yourself:'
	+ '<div class="link unselectable" onclick="createEquipment()">Get Equipment</div>'
	+ "<p>You're almost done! Now click Done to begin your adventure!:"
	+ '<div class="link unselectable" onclick="beginAdventure()">Done</div>'
	
	); R();
};
function createHPotion() {
	Inventory = ( Inventory
	+ '<div class="itemP"><div class="itemIcon" style="background: url(items/healthpotion.png); background-size: 50px 50px;"></div></div>'
	); document.getElementById("PackItems").innerHTML = Inventory; S_Page1.play();
};
function createEquipment() {
	PotionN = 5;
	Inventory = ( ''
	+ '<div id="HPotions" class="itemP"><div class="itemIcon" style="background: url(items/healthpotion.png); background-size: 50px 50px;"></div><div class="itemName">Health Potion ' + PotionN + 'x</div><div class="itemOptions" onclick="drinkPotion(5)">Drink</div></div>'
	+ '<div class="itemP"><div class="itemIcon" style="background: url(items/ironsword.png); background-size: 50px 50px;"></div><div class="itemName" style="color: #5af">Iron Sword</div><div class="itemOptions" onclick="equipSword(5)">Equip</div><div class="itemOptions">Stats</div></div>'
	); document.getElementById("PackItems").innerHTML = Inventory; S_CloseP.play();
	Potions = PotionN;
};
function equipSword(x) {
	Dextra = x;
	S_DrawS1.play();
}
Potions = 0;
function drinkPotion(PotionHeal) {
	if (Str == S){
		
	}
	else {
		if ( Potions > 0 ) {
			if ( (S - Str) == PotionHeal || (S - Str) < PotionHeal ) {
				Potions -= 1;
				Str = S;
			};
			if ( (S - Str) > PotionHeal ) {
				Potions -= 1;
				Str += PotionHeal;
				S_Drink1.play();
			};
			
		};
		document.getElementById("HPotions").innerHTML = '<div class="itemIcon" style="background: url(items/healthpotion.png); background-size: 50px 50px;"></div><div class="itemName">Health Potion ' + Potions + 'x</div><div class="itemOptions" onclick="drinkPotion(5)">Drink</div>';
	};
}
function beginAdventure() {
	S_Page2.play();
	Title = 'Chosing your adventure';
	Page = ( 'Choose one of the following adventures to embark!<p>'
	+ '<div class="link unselectable" onclick="DoDStart()">Dungeon of Dread</div>'
		
	); R();
};
