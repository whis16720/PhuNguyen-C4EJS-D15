let count = 0;

function luckyNumber() {
    let n = Math.floor(Math.random() * 10 + 1);
    let input = document.getElementById("number").value;
    if (input) {
        if ((input <= 0 || input > 10)) {
            document.getElementById("result").innerHTML = "Số không hợp lệ! Vui lòng nhập lại";
        } else if (n === Number(input)) {
            document.getElementById("result").innerHTML = "Chúc mừng bạn đã trúng thưởng!";
            count = 0;
        } else {
            document.getElementById("result").innerHTML = `Chúc bạn may mắn lần sau! Số may mắn là ${n}`;
            count++;
        }
        if (count === 3) {
            document.getElementById("result").innerHTML = "Bạn đã nhập quá 3 lần! Mời bạn quay lại vào lần khác.";
            document.getElementById("number").setAttribute("disabled", "disabled");
        }
    }
}