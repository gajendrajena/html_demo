var operations = {'+': 'Sum', '-': 'Substract', '*': 'multiply', '/': 'division'}
function changeOperation() {
	var select_box = document.getElementById('opt')
	
	var selectedOpt = operations[select_box.options[select_box.selectedIndex].value] ;

	if(selectedOpt == undefined)
		document.getElementById('operation').innerHTML = '' ;
	else
		document.getElementById('operation').innerHTML = selectedOpt ;

}