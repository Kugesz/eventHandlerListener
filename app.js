function Bekuldes() {
  nev = document.getElementById("nevInput").value;
  kor = document.getElementById("korInput").value;
  nem = document.getElementById("nemInput").value;

  if (CheckInput(nev, kor, nem)) {
    console.log(nev, kor, nem);
  }
}

function CheckInput(nev, kor, nem) {
  let err = document.getElementById("errors");
  err.innerHTML = ``;
  errs = [];
  if (nev == "") {
    errs.push("A név nem lehet üres!");
  }

  if (kor == "") {
    errs.push("Az életkor nem lehet üres!");
  }

  if (nem == "") {
    errs.push("Ki kell választania egy nemet!");
  }

  if (errs.length == 0) {
    return true;
  }

  console.log(errs);

  if (errs.length > 0) {
    for (let i = 0; i < errs.length; i++) {
      err.innerHTML += `<p>` + errs[i] + `</p>`;
    }
  }
  return false;
}

document.getElementById("torlesButton").addEventListener("click", function () {
  document.getElementById("nevInput").value = "";
  document.getElementById("korInput").value = "";
  document.getElementById("nemInput").value = "";

  document.getElementById("errors").innerHTML = ``;
});
