$(".accordion").on("click", ".accordion-control", function(e){
	e.preventDefault();
	$(this)
	.next(".accordion-panel")
	.not(":animated")
	.slideToggle();
});


function getDates() {
	$.getJSON('/api/dates')
	.then(function(dates) {
		dates.forEach(function(date) {
			$('.output').append(
				'<div>' +
					'<h3>' + date.name + '</h3>' +
					'<p>' + date.activities + '</p>' +
				'</div>'
			);
		});
	})
}

getDates();