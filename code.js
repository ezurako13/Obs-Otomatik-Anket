var iframe = document.getElementById("IFRAME1");
var nestedDocument = iframe.contentWindow.document;

const radioButtons = nestedDocument.querySelectorAll('input[type="radio"]');

var Offset = 2;

for (let i = Offset; i < radioButtons.length; i += 5) {
  radioButtons[i].checked = true;
}

nestedDocument.getElementById("btnKaydet").click();
