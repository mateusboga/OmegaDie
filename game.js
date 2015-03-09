




function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
};
 
window.onload = function() {
	Title2 = readCookie('title'); 
	Page2 = readCookie('page'); 
	Inventory2 = readCookie('inventory');
	Start();
	
	onReady(function () { show('loading', false); }); 
};