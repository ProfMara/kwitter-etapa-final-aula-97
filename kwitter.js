
//ADICIONE SEUS LINKS FIREBASE
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

//adiciona o usuário
function addUser() {
  //guarda o que o nome que o usuário digitou
  userName = document.getElementById("userName").value;
  //coloca na memória do navegador
  localStorage.setItem("userName", userName);

  
  //troca de site
  window.location = "kwitterRoom.html";
}

