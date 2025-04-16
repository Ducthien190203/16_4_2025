function changePositionBtnNo() {
    let btnNo = document.getElementById("btn-no");
    let numberRandom = Math.random() * (500 - 100) + 100;
    btnNo.style.left =numberRandom +'px'
    btnNo.style.top =numberRandom +'px'
}
