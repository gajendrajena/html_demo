var stateHash = {
	Odisha: [
		"Angul", "Boudh", "Bhadrak", "Balangir", "Bargarh", "Balasore", "Cuttack", "Debagarh", "Dhenkanal", "Chhatrapur", "Paralakhemundi", "Jharsuguda", "Panikoili", "Jagatsinghpur", "Khordha", "Kendujhar", "Bhawanipatna", "Phulbani", "Koraput", "Kendrapara", "Malkangiri", "Baripada", "Nabarangpur", "Nuapada", "Nayagarh", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"
	],
	Puducherry: [
		"Karaikal", "Mahe", "Pondicherry", "Yanam"
  ],
	Punjab: [
		"Amritsar", "Barnala", "Bathinda", "Firozpur", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Sri Muktsar Sahib", "Pathankot", "Patiala", "Rupnagar", "Sahibzada Ajit Singh Nagar", "Sangrur", "Shahid Bhagat Singh Nagar", "Tarn Taran"
	]

};
	
// collect selected state

document.getElementById('states').addEventListener('change', function (argument) {
	document.getElementById('dists').innerHTML = '';
	
	// add an empty option
	var option = document.createElement('option');
	option.text = "Select a district";
	option.value = '';
	document.getElementById('dists').add(option);
	document.getElementById('dists')

	// selecting districts for a selected state
	var selectedValue = this.options[this.selectedIndex].value;
	var distArray = stateHash[selectedValue];
	

	// adding districts options to the distSelect select box
	for (distindex in distArray){
		district = distArray[distindex]
		var option = document.createElement('option');
		option.text = district;
		option.value = district;
		document.getElementById('dists').add(option);
	}

})
