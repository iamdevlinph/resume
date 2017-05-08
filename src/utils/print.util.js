import html2canvas from 'html2canvas';
import jsPDF from '../js/jspdf.js';

export function print() {
    hideNonPrintElements();
    window.scrollTo(0,0); // scroll up
    window.html2canvas = html2canvas;
    var divToPrint = document.getElementById('print-container');
    html2canvas(divToPrint).then(function (canvas) {
        var dataUrl = canvas.toDataURL();
        var doc = new jsPDF('portrait', 'pt', 'a4');
        doc.addImage(dataUrl, 'PNG', 0, 0, canvas.width/2, canvas.height/2);
        doc.save('Devlin Pajaron - Resume.pdf');
        showNonPrintElements();
    });
}

var origDisplay = [];

function hideNonPrintElements() {
    var elemsToHide = document.getElementsByClassName("no-print"); //elemsToHide is an array
    for (var i = 0; i < elemsToHide.length; i++) {
        origDisplay.push(window.getComputedStyle(elemsToHide[i], null).getPropertyValue("display"));
        elemsToHide[i].style.display = "none"; // depending on what you're doing
    }
}

function showNonPrintElements() {
    var elemsToShow = document.getElementsByClassName("no-print"); //elemsToShow is an array
    for (var i = 0; i < elemsToShow.length; i++) {
        elemsToShow[i].style.display = origDisplay[i]; // depending on what you're doing
    }
}
