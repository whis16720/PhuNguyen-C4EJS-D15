const checkNumber = () => {
  let number = Math.floor(Math.random() * 10) + 1;
  var inputNumber = document.getElementById("input").value;
  var myNum = +inputNumber; //as suggested by T.J.
  if (!isNaN(myNum)) {
    if (myNum <= 10) {
      if (myNum === number) {
        alert("Chúc mừng bạn đá trúng số ^^");
      } else {
        alert("Con số may mắn là: " + number);
      }
    } else if (myNum < 1) {
      alert("Vui lòng nhập số lớn hơn hoặc bằng 1");
    } else {
      alert("Vui lòng nhập số lớn hơn hoặc bằng 1");
    }
    document.getElementById("input").value = "";
  } else {
    alert("Không Phải Số!!! Vui Lòng Nhập Lại");
    document.getElementById("input").value = "";
  }
};
checkNumber();
