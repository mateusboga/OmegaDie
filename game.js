




function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
};

window.onready = show('loading', false);