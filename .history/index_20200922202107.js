const checkNumber = () => {
  let number = Math.floor(Math.random() * 10) + 1;
  var inputNumber = document.getElementById("input").value;
  var myNum = +inputNumber; //as suggested by T.J.
  if (!isNaN(myNum)) {
	  (1<=myNum <= 10) ?
    ((myNum === number)
      ? alert("Chúc mừng bạn đá trúng số ^^")
      : alert("Con số may mắn là: " + number)) : alert('Vui lòng nhập số lớn hơn hoặc hoặc bằng 10')
    document.getElementById("input").value = "";
  } else {
    alert("Không Phải Số!!! Vui Lòng Nhập Lại");
    document.getElementById("input").value = "";
  }
};
checkNumber();
