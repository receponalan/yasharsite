

//Tanimlamalar
var sablon = '';
var urun;
var bolum;
var biskuvi;
var biskuviSablon = '';
var gofret;
var gofretSablon = '';
var karamel;
var karamelSablon = '';
var konfet;
var konfetSablon = '';
var marka;
var markaSablon = '';
var un;
var unSablon = '';
var maya;
var mayaSablon = '';


const btnKatt = document.querySelector('#btnKatt');
const btnBiskuvi = document.querySelector('#btnBiskuvi');
const btnGofret = document.querySelector('#btnGofret');
const btnKaramel = document.querySelector('#btnKaramel');
const btnKonfet = document.querySelector('#btnKonfet');
const btnMarka = document.querySelector('#btnMarka');
const btnUn = document.querySelector('#btnUn');
const btnMaya = document.querySelector('#btnMaya');
const metKat = document.querySelector('#metKat');
//Fonksiyonlar

function biskuviDiz(biskuviSablon){
    var cikisDiv = document.getElementById('cikis');
    cikis.innerHTML = biskuviSablon;
    metKat.textContent = 'Biskuviler';
    btnKatt.style.display = 'block';
}

function gofretDiz(gofretSablon){
    var cikisDiv = document.getElementById('cikis');
    cikis.innerHTML = gofretSablon;
    metKat.textContent = 'Gofretler';
    btnKatt.style.display = 'block';
}

function karamelDiz(karamelSablon){
    var cikisDiv = document.getElementById('cikis');
    cikis.innerHTML = karamelSablon;
    metKat.textContent = 'Karameller';
    btnKatt.style.display = 'block';
}

function konfetDiz(konfetSablon){
    var cikisDiv = document.getElementById('cikis');
    cikis.innerHTML = konfetSablon;
    metKat.textContent = 'Konfetler';
    btnKatt.style.display = 'block';
}

function markaDiz(markaSablon){
    var cikisDiv = document.getElementById('cikis');
    cikis.innerHTML = markaSablon;
    metKat.textContent = 'Markalar';
    btnKatt.style.display = 'block';
}


function unDiz(unSablon){
    var cikisDiv = document.getElementById('cikis');
    cikis.innerHTML = unSablon;
    metKat.textContent = 'Unlar';
    btnKatt.style.display = 'block';
}

function mayaDiz(mayaSablon){
    var cikisDiv = document.getElementById('cikis');
    cikis.innerHTML = mayaSablon;
    metKat.textContent = 'Maya ve Katki';
    btnKatt.style.display = 'block';
}

function urunDiz(sablon){
    var cikisDiv = document.getElementById('cikis');
    cikis.innerHTML = sablon;
    metKat.textContent = 'Kategoriler';
    btnKatt.style.display = 'none';
}

//Ornek
/*
function getStudentReport( student ) {
var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  return report;
}

while (true) {
search = prompt('Search student records: type a name [Jody](or type "quit" to end)');
  if(search === null || search.toLowerCase() === 'quit'){
    break;
  }
  for (var i = 0; i < students.length; i += 1) {
  student = students[i];
  if( student.name === search){
    message = getStudentReport(student);
    print(message);
    break;
  }else{
    alert("We do not have that student!");
    break;
  }
}
}
*/



//Biskuvileri Dizmek icin
for (var i = 0; i < biskuviler.length; i += 1) {
    biskuvi = biskuviler[i];
    biskuviSablon += `<div class="col-lg-3 col-md-4 col-sm-6 item">
    <img class="img-responsive" src=" ${biskuvi.UrunResmi}">
    <h3 class="name">${biskuvi.UrunKodu}</h3>
    <h3 class="name">${biskuvi.UrunAdi}</h3>
    <h3 class="name">${biskuvi.Agirlik}</h3>
    <h4 class="name">${biskuvi.AmbalajTipi}</h4>
    <p class"description">${biskuvi.UrunAciklama}</P>
    <a href="#" class="action"><i class="glyphicon glyphicon-circle-arrow-right"></i></a>
    </div>`;
}

btnBiskuvi.addEventListener('click', () => {
    biskuviDiz(biskuviSablon);
});


//Gofret Dizimi
for (var i = 0; i < gofretler.length; i += 1) {
    gofret = gofretler[i];
    gofretSablon += `<div class="col-lg-3 col-md-4 col-sm-6 item">
    <img class="img-responsive" src=" ${gofret.UrunResmi}">
    <h3 class="name">${gofret.UrunKodu}</h3>
    <h3 class="name">${gofret.UrunAdi}</h3>
    <h3 class="name">${gofret.Agirlik}</h3>
    <h4 class="name">${gofret.AmbalajTipi}</h4>
    <p class"description">${gofret.UrunAciklama}</P>
    <a href="#" class="action"><i class="glyphicon glyphicon-circle-arrow-right"></i></a>
    </div>`;
}
btnGofret.addEventListener('click', () => {
    gofretDiz(gofretSablon);
});


//Karamel Dizimi
for (var i = 0; i < karameller.length; i += 1) {
    karamel = karameller[i];
    karamelSablon += `<div class="col-lg-3 col-md-4 col-sm-6 item">
    <img class="img-responsive" src=" ${karamel.UrunResmi}">
    <h3 class="name">${karamel.UrunKodu}</h3>
    <h3 class="name">${karamel.UrunAdi}</h3>
    <h3 class="name">${karamel.Agirlik}</h3>
    <h3 class="name">${karamel.AmbalajTipi}</h3>
    <p class"description">${karamel.UrunAciklama}</P>
    <a href="#" class="action"><i class="glyphicon glyphicon-circle-arrow-right"></i></a>
    </div>`;
}
btnKaramel.addEventListener('click', () => {
    karamelDiz(karamelSablon);
});

//Konfet Dizimi
for (var i = 0; i < konfetler.length; i += 1) {
    konfet = konfetler[i];
    konfetSablon += `<div class="col-lg-3 col-md-4 col-sm-6 item">
    <img class="img-responsive" src=" ${konfet.UrunResmi}">
    <h3 class="name">${konfet.UrunKodu}</h3>
    <h3 class="name">${konfet.UrunAdi}</h3>
    <h3 class="name">${konfet.Agirlik}</h3>
    <h3 class="name">${konfet.AmbalajTipi}</h3>
    <p class"description">${konfet.UrunAciklama}</P>
    <a href="#" class="action"><i class="glyphicon glyphicon-circle-arrow-right"></i></a>
    </div>`;
}
btnKonfet.addEventListener('click', () => {
    konfetDiz(konfetSablon);
});

//Marka Dizimi
for (var i = 0; i < markalar.length; i += 1) {
    marka = markalar[i];
    markaSablon += `<div class="col-lg-3 col-md-4 col-sm-6 item">
    <img class="img-responsive" src=" ${marka.UrunResmi}">
    <h3 class="name">${marka.UrunKodu}</h3>
    <h3 class="name">${marka.UrunAdi}</h3>
    <h3 class="name">${marka.Agirlik}</h3>
    <h3 class="name">${marka.AmbalajTipi}</h3>
    <p class"description">${marka.UrunAciklama}</P>
    <a href="#" class="action"><i class="glyphicon glyphicon-circle-arrow-right"></i></a>
    </div>`;
}
btnMarka.addEventListener('click', () => {
    markaDiz(markaSablon);
});

//Un Dizimi
for (var i = 0; i < unlar.length; i += 1) {
    un = unlar[i];
    unSablon += `<div class="col-lg-3 col-md-4 col-sm-6 item">
    <img class="img-responsive" src=" ${un.UrunResmi}">
    <h3 class="name">${un.UrunKodu}</h3>
    <h3 class="name">${un.UrunAdi}</h3>
    <h3 class="name">${un.Agirlik}</h3>
    <h3 class="name">${un.AmbalajTipi}</h3>
    <p class"description">${un.UrunAciklama}</P>
    <a href="#" class="action"><i class="glyphicon glyphicon-circle-arrow-right"></i></a>
    </div>`;
}

btnUn.addEventListener('click', () => {
    unDiz(unSablon);
});

//Maya Dizimi
for (var i = 0; i < mayalar.length; i += 1) {
    maya = mayalar[i];
    mayaSablon += `<div class="col-lg-3 col-md-4 col-sm-6 item">
    <img class="img-responsive" src=" ${maya.UrunResmi}">
    <h3 class="name">${maya.UrunKodu}</h3>
    <h3 class="name">${maya.UrunAdi}</h3>
    <h3 class="name">${maya.Agirlik}</h3>
    <h3 class="name">${maya.AmbalajTipi}</h3>
    <p class"description">${maya.UrunAciklama}</P>
    <a href="#" class="action"><i class="glyphicon glyphicon-circle-arrow-right"></i></a>
    </div>`;
}

btnMaya.addEventListener('click', () => {
    mayaDiz(mayaSablon);
});




