//login btn event handeler

const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transArea = document.getElementById("trans-area");
    transArea.style.display = "block";

})

//diposit btn event handeler
const dipositbtn = document.getElementById("addiposit");
dipositbtn.addEventListener("click", function () {
    const depoNum = getInputnum("dipAmmount")


    updateSpanText("currentblnce", depoNum);
    updateSpanText("currentdipo", depoNum);
    document.getElementById("dipAmmount").value = "";

})
//Withdrow btn event handeler
const WithdrowBtn = document.getElementById("addWidrw");
WithdrowBtn.addEventListener("click", function () {

    const withdrownum = getInputnum("widrwAmmount");
    updateSpanText("currentWithrow", withdrownum);
    updateSpanText("currentblnce", -1*withdrownum);
    document.getElementById("widrwAmmount").value = "";

})

function getInputnum(id) {

    const Ammunt = document.getElementById(id).value;
    const ammountnum = parseFloat(Ammunt);
    return ammountnum;

}




function updateSpanText(id, depoNum) {
    const current = document.getElementById(id).innerText;
    const currentNum = parseFloat(current);
    const total = depoNum + currentNum;
    document.getElementById(id).innerText = total;
    document.getElementById(id).value = "";
}
