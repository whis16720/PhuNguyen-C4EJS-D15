const checkNumber = () => {
  let number = Math.floor(Math.random() * 10) + 1;
  var inputNumber = document.getElementById("input").value;
  var myNum = +inputNumber; //as suggested by T.J.
  if (!isNaN(myNum)) {
    if(myNum >= 1){
      ? myNum === number
        ? alert("Chúc mừng bạn đá trúng số ^^")
		: alert("Con số may mắn là: " + number)
	}
      else if() myNum > 10
      ? alert("Vui lòng nhập số bé hơn hoặc bằng 10")
      : alert("Vui lòng nhập số lớn hơn hoặc bằng 1");
    document.getElementById("input").value = "";
  } else {
    alert("Không Phải Số!!! Vui Lòng Nhập Lại");
    document.getElementById("input").value = "";
  }
};
checkNumber();
