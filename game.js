window.onload = function() {
	function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
	};
	show('loading', false);
};