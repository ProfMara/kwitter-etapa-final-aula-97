//LINKS FIREBASE
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
  
// inicia o firebase
firebase.initializeApp(firebaseConfig);
// guarda na variável uma referência a função
var database  = firebase.database();

roomName = localStorage.getItem("roomName");
userName = localStorage.getItem("userName");

function enviar(){
    var msg = document.getElementById("msg").value;
    database.ref('/').child(roomName).push({
        nome: userName,
        mensagem: msg,
        like:0
    })
    document.getElementById("msg").value = '';
}

function logout(){
    localStorage.removeItem("roomName");
    localStorage.removeItem("userName");
    window.location = 'index.html';
}

function mostrarMsgm() { 
    //adicione os códigos para mostrar as mensagens aqui
}

mostrarMsgm();

//crie a função attLike() aqui