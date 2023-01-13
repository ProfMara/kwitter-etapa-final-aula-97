
//ADICIONE SEU LINK DO FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyC71XqpMTaK14DoLesUwEBw8ZdG-WxpxDg",
  authDomain: "banco-de-dados-b67b0.firebaseapp.com",
  databaseURL: "https://banco-de-dados-b67b0-default-rtdb.firebaseio.com",
  projectId: "banco-de-dados-b67b0",
  storageBucket: "banco-de-dados-b67b0.appspot.com",
  messagingSenderId: "518352705245",
  appId: "1:518352705245:web:a06661fec4a37120a76d34",
  measurementId: "G-CF73CL2TDW"
};    

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

function addSala(){
  var roomName = document.getElementById("roomName").value;
  localStorage.setItem("roomName", roomName);
  database.ref("/").child(roomName).update({
    proposito:"adicionar sala"
  })
}

var campo ='';

function lerDados(){
  database.ref("/").on("value",(data)=>{
    campo ='';
    data.forEach((subpasta)=>{
      sala = subpasta.key;
      linha = "<div class='sala' id="+sala+" onclick='irSala(this.id)' >"+sala+"</div> <hr>";
      campo +=linha;
    });
    document.getElementById("output").innerHTML = campo;
  })
}
lerDados()

function irSala(sala){
  localStorage.setItem("roomName", sala);
  window.location = 'kwitterPage.html'
}


//apaga o nome do usuário
function logout() { 
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}
//exibe o nome do usuário no site kwitterRoom.js
function carregar(){
  var nome = localStorage.getItem("userName");
 document.getElementById("userName").innerHTML = " Seja bem vindo(a) "  +  nome;
}