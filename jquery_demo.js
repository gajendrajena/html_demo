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


// $(document).on('change', '#states', function(){
$(document).ready(function(){
  
  $( "#sortable" ).sortable();

  $('#states').change(function(){
    $('#dists').html('<option>Select a district</option>');
    var distArray = stateHash[$(this).val()];
    for (distindex in distArray){
      district = distArray[distindex];
      $('#dists').append('<option value='+district+'>'+district+'</option>');
    }
  });
})
