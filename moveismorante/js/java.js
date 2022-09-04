var info = document.getElementById('info');
    info.style.borderBottom = "3px"
    info.style.borderBottomColor = "0, 47, 255, 0"
    info.style.borderBottomStyle = "solid"
function muda() {
    var info = document.getElementById('info');
    info.style.borderBottom = "3px"
    info.style.borderBottomColor = "blue"
    info.style.borderBottomStyle = "solid"
    info.style.transition = "5s"
}
function desmua() {
    var info = document.getElementById('info');
    info.style.borderBottom = "2px";
    info.style.borderBottomColor = "red"
    info.style.borderBottomStyle = "solid"
    
}
var textdesc = document.getElementById('textdesc');
 textdesc.target = muda();

textdesc.style.color = "red"