
function showModal(id) {
	var modal = document.getElementById(id);
	var backdrop = document.getElementById("backdrop");
	window.setTimeout(function() {
		modal.classList.remove("hidden");
		backdrop.classList.remove("hidden");
	}, 200);
	
}

function closeThisModal(id) {
	var modal = document.getElementById(id);
	var backdrop = document.getElementById("backdrop");
	modal.classList.add("hidden");
	backdrop.classList.add("hidden");
}

function init() {
	document.addEventListener('DOMContentLoaded', function() {
	    showModal("free-video-modal");
	}, false);
}

init();