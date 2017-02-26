var start = new Date();

function playyy() {
  var duration = new Date() - start;
  console.log(duration, "text");
  // document.getElementsByTagName("audio")[0].play();
  getData();
}

function plusRechnen(a, b) {
  return a + b;
}

var antwort = plusRechnen(12, 45);

console.log(antwort);

function getData() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt");

  function bla() {
    var meineAntowrt = xhr.responseText;
    console.log(meineAntowrt.split(""));
    return 2;
  }

  xhr.addEventListener("load", bla);
  xhr.send();
}

setTimeout(playyy, 5000);