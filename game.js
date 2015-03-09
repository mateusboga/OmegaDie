




function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
};
 
window.onload = function() {
	
	onReady(function () { show('loading', false); }); 
};