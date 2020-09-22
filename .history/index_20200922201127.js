let number = Math.floor(Math.random() * 10) + 1; 
const checkNumber = () => {
	var inputNumber = document.getElementById("input").value;
	var myNum = +myVar;//as suggested by T.J. 
	if (isNaN(myNum)) {
   alert('string');
	} else{
   alert('number');
	}
}
checkNumber()