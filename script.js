var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  	var countryName = $('#country-name').val();
	if(!countryName.lenght) countryName = 'Poland';
$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

searchCountries();

function showCountriesList(resp) {
  countriesList.empty();
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
        //Here is the code that will execute on each successive item in the collection. A single item is hidden under an item variable.
    });

showCountriesList();

resp.forEach(function(item){
   	$('<li>').text(item.name).appendTo(countriesList);
});


}