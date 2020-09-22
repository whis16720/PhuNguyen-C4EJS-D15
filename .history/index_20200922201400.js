let number = Math.floor(Math.random() * 10) + 1; 
const checkNumber = () => {
	var inputNumber = document.getElementById("input").value;
	var myNum = +inputNumber//as suggested by T.J. 
	if (!isNaN(myNum)) {
		
	} else{
   alert('Không Phải Số!!! Vui Lòng Nhập Lại');
	}
}
checkNumber()