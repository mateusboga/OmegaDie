




function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
};

document.addEventListener('DOMContentLoaded', function() {
	show('loading', false);
}, false);