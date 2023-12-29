const inputBox = document.querySelector(".container input");
const generateBtn = document.querySelector(".container button");
const qrcodeDiv = document.querySelector(".container .qrcode");

let isQRCodeGenerated = false;
let previousText = "";
generateBtn.addEventListener("click", ()=>{
    if(inputBox.value === "") {
        alert("Please enter a text or url to generate a qr code.")
    } else {
        if(!isQRCodeGenerated && (previousText==="" || previousText!=inputBox.value)) {
            qrcodeDiv.innerHTML = "";
            new QRCode(qrcodeDiv, {
                text: inputBox.value,
                width: 150,
                height: 150,
                colorDark: '#000',
                colorLight: '#fff',
                correctLevel: QRCode.CorrectLevel.H
            });
            isQRCodeGenerated = true;
            previousText = inputBox.value;
        } else {
            alert("Please enter another text or url.")
            isQRCodeGenerated = false;
        }
    }
});