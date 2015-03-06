
/*
	||DUNGEON
	||OF DREAD

	
	
*/
single = 0;
MPotions = 0;
Title1 = '';
Page1 = '';
Reading = 0;

function DoDStart() {
	Title = 'Dungeon of Dread';
	Page = ( '<p>'
	+ 'Dungeon of Dread'
	+ '<div class="link unselectable" onclick="DoDAmbient()">Start</div>'
		
	); R();
}
function DoDAmbient() {
	S_Depth1.play();
	Title = 'Dungeon of Dread';
	Page = ( '<p>Light.' 
	+ '<p>The darkness is cleared by your sparking torch.'
	+ '<p>Your footsteps echo through the thick sturdy walls of stone.'
	+ '<p>The shallow path you are taking leads to an opening. When you reach it, you see the corridor opens up'
	+ ' to a large room lit by torches on the walls.'
	+ '<p>You enter and stand in front of the door you just came through. You look around.'
	+ ' You see two chests facing eachother at the center of this room.'
	+ ' You walk up to them and look better. The chests are made of wooden planks with iron riggings and ornaments.'
	+ '<p>Though almost identical, one of the chests has an emerald shard inlaid on the locket. The other has a red ruby.'
	+ '<p>Both of these seem intriguing. You decide to open one of them. Which?<p>'
	+ '<div class="link unselectable" onclick="DoDEmeraldChest()">Open Emerald Chest</div>'
	+ '<div class="link unselectable" onclick="DoDRubyChest()">Open Ruby Chest</div>'
	
	); R();
}
function DoDEmeraldChest() {
	S_Openchest.play();
	Page = ( '"Click"<p>'
	+ 'The chest opens back. The inside is lined with green tissue. In it, you find a Green Potion of Mana with a copper cork'
	+ ' inlaid around with small Emeralds.'
	+ '<div class="link unselectable" onclick="DoDtakeGreenPotion()">Take Green Potion of Mana</div>'
	+ '(Restores MANA back to full when used)'
	+ '<p>There is a wooden door opposite to the door you just came through.'
	+ '<div class="link unselectable" onclick="DoDDoor1()">Enter Door</div>'
	
	); R(); single = 0;
} function DoDtakeGreenPotion() {
	if (single == 0) {
		MPotions++;
		Inventory = (Inventory
		+ '<div class="itemP"><div class="itemIcon" style="background: url(items/manapotion.png); background-size: 50px 50px;"></div><div class="itemName"  style="color: #491">Mana Potion ' + MPotions + 'x</div><div class="itemOptions" onclick="drinkManaPotion()">Drink</div></div>'
		); document.getElementById("PackItems").innerHTML = Inventory; S_CloseP.play();
		single++
	}
}
function drinkManaPotion() {
	if (mana == M){
		
	}
	else {
		if ( MPotions > 0 ) {
				Mana = M;
				S_Drink1.play();
				MPotions -= 1;
		};
		document.getElementById("MPotions").innerHTML = '<div class="itemIcon" style="background-image: url(items/manapotion.png)"></div><div class="itemName"  style="color: #491">Mana Potion ' + MPotions + 'x</div><div class="itemOptions" onclick="drinkmanaPotion(5)">Drink</div>';
	};
}
function DoDRubyChest() {
	S_Openchest.play();
	Page = ( '"Click"<p>'
	+ 'The chest opens back. The inside is lined with soft red silk. Inside, you find'
	+ ' a Golden Ring with a red ruby inlaid in it.'
	+ '<div class="link unselectable" onclick="DoDtakeRubyRing()">Take Golden Ring With Ruby</div>'
	+ '(Increases MANA by 2 when equipped)'
	+ '<p>There is a wooden door opposite to the door you just came through.'
	+ '<div class="link unselectable" onclick="DoDDoor1()">Enter Door</div>'
	
	); R(); single = 0;
}; function DoDtakeRubyRing() {
	if (single == 0) {
		Inventory = (Inventory
		+ '<div class="itemP"><div class="itemIcon" style="background-image: url(items/goldenringruby1.png)"></div><div class="itemName" style="color: #491">Ruby Ring</div><div class="itemOptions" onclick="equipRubyR(2)">Equip</div><div class="itemOptions">Stats</div></div>'
		); document.getElementById("PackItems").innerHTML = Inventory; S_CloseP.play();
		single++
	}
};
function equipRubyR(x) {
	Mextra = x;
	S_Piece1.play();
}
function DoDDoor1() {
	S_Door1.play();
	Page = ( 'You open the wooden door and enter a big hallway with walls made of broken blocks of stone.' 
	+ '<p>It is dark, so you cannot see very far.'
	+ '<p>There is no other way to go, so you enter the hallway.'
	+ ' You cannot see where it ends or where it starts, but you have two options. Either you go left, or right.'
	+ ' There is also another door opposite to the one you just came through.'
	+ ' What do you do?'
	+ '<div class="link unselectable" onclick="DoDHallway1L()">Go Left</div>'
	+ '<div class="link unselectable" onclick="DoDHallway1R()">Turn Right</div>'
	+ '<div class="link unselectable" onclick="DoDDoor2()">Try to open the other door</div>'
	
	); R();
}
function DoDDoor2() {
	S_Door2.play();
	Page = ( 'The door leads to a small cabinet. It looks like some kind of storage room.'
	+ '<p>The room has drawers and shelves on the walls. At one corner, there is a heavy dogwood chest.'
	+ '<p> You:'
	+ '<div class="link unselectable" onclick="DoDShelf1()">Search the shelves</div>'
	+ '<div class="link unselectable" onclick="DoDDrawer1()">Look inside the drawers</div>'
	+ '<div class="link unselectable" onclick="DoDDogwoodChest1()">Try to open the heavy chest</div>'
	+ '<div class="link unselectable" onclick="DoDLeave1()">Leave the room</div>'
	
	); R();
}
function DoDShelf1() {
	S_Flip.play();
	Page = ( 'The shelves are filled with various collections of books about Archaeology, Magic and Cooking. '
	+ '<p>All of these seem interesting. What do you do?'
	+ '<div class="link unselectable" onclick="DoDShelf1Arch()">Grab a book about Archaeology</div>'
	+ '<div class="link unselectable" onclick="DoDShelf1Magic()">Grab a book about Magic</div>'
	+ '<div class="link unselectable" onclick="DoDShelf1Cook()">Grab a Cookbook</div>'
	+ "<p>If you dont't feel like any of these are good options, you don't want to waste time here."
	+ '<div class="link unselectable" onclick="DoDLeave1()">Leave the room</div>'
	
	); R();
}
function DoDShelf1Arch() {
	S_Flip.play();
	Page = ( 'The book you chose tells about exploration and ancient civilizations, forever lost to mankind.'
	+ ' However, you do not find any good information here. <p>You leave the room and return to the hallway where you pick a direction.'
	+ '<div class="link unselectable" onclick="DoDHallway1L()">Go Right</div>'
	+ '<div class="link unselectable" onclick="DoDHallway1R()">Turn Left</div>'
	
	); R();
}
function DoDShelf1Magic() {
	S_Flip.play();
	Page = ( 'You pick a book about magic arts.'
	+ ' In here you find all kinds of spells and information about charms.'
	+ '<p>The book seems useful, and you may bring it with you.'
	+ '<div class="link unselectable" onclick="DoDcreateMagicBook()">Grab Book of Magic</div>'
	+ '  <p>You leave the room and return to the hallway where you pick a direction.'
	+ '<div class="link unselectable" onclick="DoDHallway1L()">Go Right</div>'
	+ '<div class="link unselectable" onclick="DoDHallway1R()">Turn Left</div>'
	
	); R(); single = 0;
} function DoDcreateMagicBook() {
	if (single == 0) {
		Inventory = (Inventory
		+ '<div class="itemP"><div class="itemIcon" style="background-image: url(items/magicbook.png)"></div><div class="itemName" style="color: #5af">Magic Book</div><div class="itemOptions" onclick="DoDReadMagic()">Read</div></div>'
		); document.getElementById("PackItems").innerHTML = Inventory; S_CloseP.play();
		single++
	}
}
function DoDReadMagic() {
	if (Reading == 0) {
		S_OpenBook.play();
		Title1 = Title;
		Page1 = Page;
		Title = 'Magic Book';
		Page = ( '<div class="link unselectable" onclick="DoDCloseMagic()">Close</div>'
		+ '<div style="font-size: 25px; font-weight: bold;">Magic & The Mind</div><p>'
		+ 'Thesaurus on the beholding of magic power, and how to control it.'
		+ '<div style="font-size: 20px; font-weight: bold;">Spells</div><p>'
		+ '<div style="font-size: 17px; font-weight: bold;">The Windwaker</div>'
		+ 'The Windwaker stands as the eldest and most used technique of Wind spells. It requires at least one wind talisman to cast.'
		+ '<div class="link unselectable" onclick="DoDCloseMagic()">Close</div>'
	); R();
	}
	Reading++
} function DoDCloseMagic() {	S_CloseBook.play(); Title = Title1; Page = Page1; R(); Reading = 0;	}
function DoDShelf1Cook() {
	S_Flip.play();
	Page = ( 'The book you picked has recipes for various foods, but nothing seems helpful to you.'
	+ '<p>When you turn a page, suddenly, something falls out.'
	+ " You reach down for it and pick it up. It's a bronze key with the number 12 carved on it."
	+ '<div class="link unselectable" onclick="DoDcreateKey(12)">Grab Key</div>'
	+ '<p>You leave the room and return to the hallway where you pick a direction.'
	+ '<div class="link unselectable" onclick="DoDHallway1L()">Go Right</div>'
	+ '<div class="link unselectable" onclick="DoDHallway1R()">Turn Left</div>'
	
	); R(); single = 0;
} function DoDcreateKey(x) {
	if (single == 0) {
		Inventory = (Inventory
		+ '<div id="Key'+x+'" class="itemP"><div class="itemIcon" style="background-image: url(items/bronzekey.png)"></div><div class="itemName">Bronze Key (12)</div></div>'
		); document.getElementById("PackItems").innerHTML = Inventory; S_CloseP.play();
		single++
	}
}
function DoDDrawer1() {
	S_Drawer.play();
	Page = ( 'You search the drawers and you find a few dusty papers. <p>'
		+ 'There is not really anything here of use.'
		+ '<p>You leave the room and return to the hallway where you pick a direction.'
		+ '<div class="link unselectable" onclick="DoDHallway1L()">Go Right</div>'
		+ '<div class="link unselectable" onclick="DoDHallway1R()">Turn Left</div>'
	
	); R();
}
function DoDexamineRune1() {
	if ( N > (M + Mextra)) {
		Page = ( '(Unlucky!)<p>'
		+ "No matter how much you try, you cannot recognize the rune."
		+ '<p>You leave the room and return to the hallway where you pick a direction.'
		+ '<div class="link unselectable" onclick="DoDHallway1L()">Go Right</div>'
		+ '<div class="link unselectable" onclick="DoDHallway1R()">Turn Left</div>'
		
		); R();
	} else {
		Page = ( '(Lucky!)<p>'
		+ "You can be almost certain that you know this rune. You make a bigger effort."
		+ " ...That's it! "
		+ 'What you are holding in your hands is a Lefion Rune. You decide to bring it with you.'
		+ '<p>You leave the room and return to the hallway where you pick a direction.'
		+ '<div class="link unselectable" onclick="DoDHallway1L()">Go Right</div>'
		+ '<div class="link unselectable" onclick="DoDHallway1R()">Turn Left</div>'
		
		); R();
	}
}
function DoDDogwoodChest1() {
	S_Locked2.play();
	Page = ( 'The chest is locked, and there is no way you will be able to force the lock.<p>'
		+ '<p>You leave the room and return to the hallway where you pick a direction.'
		+ '<div class="link unselectable" onclick="DoDHallway1L()">Go Right</div>'
		+ '<div class="link unselectable" onclick="DoDHallway1R()">Turn Left</div>'
		
		); R();
}
function DoDLeave1() {
	S_Door3.play();
	Page = ( 'You are back at the hallway. You:'
		+ '<div class="link unselectable" onclick="DoDHallway1L()">Go Right</div>'
		+ '<div class="link unselectable" onclick="DoDHallway1R()">Turn Left</div>'
		
	); R();
}
function DoDHallway1L() {
	S_Step2.play();
	Page = ( 'Your footsteps echo through the hallway while you walk.<p>'
		+ 'Suddenly, you hear something to your right. You turn immediately and face the wall. '
		+ "There is a dark opening you didn't notice before. Inside, two red eyes stare at you. "
		+ 'You step back in the shock of fear and draw your sword. The beast crawls forward and you'
		+ " are able to see it is a DARK ELF. His empty dead eyes do not like your presence.<p>"
		+ 'He throws a cut with his pointy nails at you, but it did not reach. You prepare to attack.'
		+ '<div class="link unselectable" onclick="DoDdarkElfFight1()">Fight Dark Elf</div>'
		
		); R();
}
function DoDHallway1R() {
	S_Step1.play();
	Page = ( 'The hallway extends for a few more steps until it splits into two corridors.<p>'
		+ 'The right corridor seems to end in a door. The left corridor does a right turn and continues. '
		+ 'Which do you pick?'
		+ '<div class="link unselectable" onclick="DoDHallway2R()">Go Right</div>'
		+ '<div class="link unselectable" onclick="DoDHallway2L()">Go Left</div>'
		
		); R();
}
function DoDHallway2L() {
	S_Step3.play();
	Page = ( 'The corridor makes a turn to the right and feeds into a big hall supported by pillars. '
		+ 'There are two doors on the wall. On the opposite side, there is another corridor. '
		+ 'At the center, you see a fountain with two statues. A human figure covered in a robe '
		+ 'stands beside the fountain.<p>'
		+ 'You have to decide what to do. You:'
		+ '<div class="link unselectable" onclick="DoDHall1Doors()">Sneak towards the two doors on the wall</div>'
		+ '<div class="link unselectable" onclick="DoDHall1Man()">Talk to the man of the fountain</div>'
		+ '<div class="link unselectable" onclick="DoDHall1Exit()">Enter the other corridor</div>'
		
		); R();
}
function DoDHall1Doors() {
	S_Step1.play();
	Page = ( 'You approach silently the two doors on the right wall. They both look old and rusty. '
		+ 'The door on the right has the number 12 on it. The door on the left has no number.<p>'
		+ 'Which do you open?'
		+ '<div class="link unselectable" onclick="DoDHall1DoorR()">Enter Right Door</div>'
		+ '<div class="link unselectable" onclick="DoDHall1DoorL()">Enter Left Door</div>'
		
		); R();
}
function DoDHall1DoorR() {
	var KeyItem = document.getElementById('Key12');
	if (KeyItem == null) {
		S_Locked2.play();
		Page = ( 'The door is locked. It is sturdy, so there is no way you will be able to break it.<p>'
		+ 'You look back. The tall figure is still standing next to the fountain, his back facing you. '
		+ 'It seems he did not hear you. '
		+ 'What do you do?:'
		+ '<div class="link unselectable" onclick="DoDHall1DoorL()">Try the other door</div>'
		+ '<div class="link unselectable" onclick="DoDHall1Man()">Walk up to the man at the fountain</div>'
		+ '<div class="link unselectable" onclick="DoDHall1Exit()">Slip to the other corridor</div>'
		
		); R();
	}
	else {
		S_Door1.play();
		Page = ( 'The door is locked. You try the key you got a few minutes ago. It works! You spin the key '
		+ 'and unlock the door. You open it slightly and take a peak inside.<p>'
		+ 'The division is large and circular. There is a chest sitting on the opposite side. There are also '
		+ 'four closets on the walls. You:'
		+ '<div class="link unselectable" onclick="DoDHall1DoorL()">Try to open the chest</div>'
		+ '<div class="link unselectable" onclick="DoDHall1DoorL()">Open one of the closet doors</div>'
		+ '<p>If you leave the room, you can: '
		+ '<div class="link unselectable" onclick="DoDHall1DoorL()">Try the other door</div>'
		+ '<div class="link unselectable" onclick="DoDHall1Man()">Walk up to the man at the fountain</div>'
		+ '<div class="link unselectable" onclick="DoDHall1Exit()">Slip to the other corridor</div>'
		
		); R();
	}
}
function DoDHall1DoorL() {
	S_Door2.play();
	Page = ( 'You open the door and take a look inside. The room is pitch black, and you cannot see anything. '
	+ 'You step forward and you hear a groan closeby. You draw your sword as a ZOMBIE runs towards you. '
	
		); R();
}
function DoDHallway2R() {
	S_Step2.play();
	Page = ( 'You approach the door at the end of the corridor. It is sturdy, '
	+ 'but it has a key on the keyhole. You hear voices from the other side. You:'
	+ '<div class="link unselectable" onclick="DoDCorridor2DoorKey()">Grab the key</div>'
	+ '<div class="link unselectable" onclick="DoDCorridor2DoorOpen()">Try to open the door</div>'
	+ '<div class="link unselectable" onclick="DoDHallway2L()">Move back and choose the other corridor</div>'
	
		); R();
}
function DoDCorridor2DoorKey() {
	Page = ( 'As you touch the metalic key, you feel a sting. '
	+ 'Your arm feels a horrible pain. The key is cursed! You quickly grab your arm in pain and countain your scream.'
	+ ' <a style="font-weight: bold;">Test Your Luck</a>, if you are lucky, you did not use your dominant hand and you only lose 2 STR. '
	+ 'If you are unlucky, you used your dominant hand and you also lose an additional 3 DEX.'
	+ '<div class="link unselectable" onclick="DoDCorridor2KeyLuck()">Done</div>'
		
		); R();
}
function DoDCorridor2KeyLuck() {
	if (Luck > 0) {
		if (N < (Luck + Lextra) || N == (Luck + Lextra)) {
			if (Str > 0) { Str -= 2; }
			Page = ('(Lucky!)<p>'
			+ '( -2 STR)<p>'
			+ 'You used your other hand and your dominant hand is unaffected. '
			+ 'You only lose a bit of strength. You step back and reconsider your choices.<p>'
			+ '<div class="link unselectable" onclick="DoDCorridor2DoorOpen()">Try to open the door</div>'
			+ '<div class="link unselectable" onclick="DoDHallway2L()">Move back and choose the other corridor</div>'
			
			); R();
		};
		if (N > (Luck + Lextra)) {
			if (Str > 0) { Str -= 2; }
			if (Dex > 0) { Dex -= 3; }
			Page = ('(Unlucky!)<p>'
			+ '( -2 STR, -3 DEX)<p>'
			+ 'You used your dominant hand and you are now less efficient in fighting. '
			+ 'Plus the pain reduces your strength. You step back and reconsider your choices.<p>'
			+ '<div class="link unselectable" onclick="DoDCorridor2DoorOpen()">Try to open the door</div>'
			+ '<div class="link unselectable" onclick="DoDHallway2L()">Move back and choose the other corridor</div>'
			
			); R();
		};
		Luck--
	}
	else {
		if (Str > 0) { Str -= 2; }
		if (Dex > 0) { Dex -= 3; }
		Page = ('(Unlucky!)<p>'
		+ '( -2 STR, -3 DEX)<p>'
		+ 'You used your dominant hand and you are now less efficient in fighting. '
		+ 'Plus the pain reduces your strength. You step back and reconsider your choices.<p>'
		+ '<div class="link unselectable" onclick="DoDCorridor2DoorOpen()">Try to open the door</div>'
		+ '<div class="link unselectable" onclick="DoDHallway2L()">Move back and choose the other corridor</div>'
		
		); R();
	}
}
function DoDCorridor2DoorOpen() {
	S_Door1.play();
	Page = ('You grab the knob and turn it. You open the door slightly and take a look inside.<p>'
		+ "The division is small. It looks like someone's bedroom. There's a lit fireplace at one corner that shines "
		+ 'a dim light onto the room. There is a table at the center of the room and a door semi-open on the opposite wall. The room looks empty. '
		+ 'You:<p>'
		+ '<div class="link unselectable" onclick="DoDCorridor2DoorEnter()">Enter the room</div>'
		+ '<div class="link unselectable" onclick="DoDHallway2L()">Close the door and enter the other corridor</div>'
		
		); R();
}
function DoDCorridor2DoorEnter() {
	S_Step1.play();
	Page = ('You open the door and enter. The room seems empty at first, but suddenly a figure enters through the other door.<p>'
	+ 'You have to be quick.<p>'
	+ '<div class="link unselectable" onclick="DoDRoom1Attack()">Attack whoever comes</div>'
	+ '<div class="link unselectable" onclick="DoDRoom1Hide()">Hide</div>'
	+ '<div class="link unselectable" onclick="DoDRoom1Stay()">Wait for them to see you</div>'
		
		); R();
}
function DoDRoom1Hide() {
	S_Step1.play();
	Page = ( '<a style="font-weight: bold;">Test Your Dexterity</a><p>'
	+ "If the number you get is bigger, you won't be able to hide in time."
	+ '<div class="link unselectable" onclick="DoDRoom1Hide2()">Done</div>'
		
		); R();
}
function DoDRoom1Hide2() {
	if (N < Dex || N == Dex) {
		Page = ('(Lucky!)<p>'
		+ 'You are quick and hide below the table just in time. '
		+ 'You can only see the feet of the person who entered. He did not notice your presence.<p>'
		+ 'The man walks past the table and sits in a chair next to the fire. '
		+ 'He dresses a bathrobe and holds a coffee cup on his hand.'
		
		); R();
	};
	if (N > Dex) {
		Page = ('(Unlucky!)<p>'
		+ 'You did not have time to hide when he entered. The man is short, wears a bathrobe and looks at you '
		+ 'surprised.<p>'
		+ '"And who are you?", he asks drily.<p>'
		+ 'What do you say?'
		
		); R();
	};
}