let relations = document.querySelectorAll('.dimplomatics-block__item > td:last-child');

relations.forEach(function(i) {
    let text = i.innerHTML;
    if (text == 'война') {
	  i.classList.add("war");
	} else if (text == 'вассал') {
	  i.classList.add("vassal");
	} else if (Number(text) == 0) {
	  i.classList.add("neutral");
	} else if (Number(text) > 0) {
	  i.classList.add("good");
	} else if (Number(text) < 0) {
	  i.classList.add("bad");
	} else if (text == 'сюзерен') {
	  i.classList.add("suzeren");
	}
});

let countries = document.querySelectorAll('.country-list__item');

countries.forEach(i => i.addEventListener("click", function(i) {
	countries.forEach(s => s.classList.remove("country-list__item_active"));

	id = i.target.id;

	btn = document.querySelector(`[id='${id}']`);
	btn.classList.add("country-list__item_active");

	block_id = id.slice(1);
	elem = document.querySelector(`#${block_id}`);
	document.querySelectorAll('.country-block__item').forEach(page => page.setAttribute('hidden', 'true'));
	elem.removeAttribute('hidden');
}));