const firebaseConfig = {
  apiKey: "AIzaSyAo-ere10fy8UZhXw9i-wfuAKbhLqcU2Mg",
  authDomain: "lnt---final-project.firebaseapp.com",
  databaseURL: "https://lnt---final-project-default-rtdb.firebaseio.com",
  projectId: "lnt---final-project",
  storageBucket: "lnt---final-project.appspot.com",
  messagingSenderId: "190134597538",
  appId: "1:190134597538:web:b46cf73d794e9fc59664fb",
  measurementId: "G-9HZSBT6Y38"
};

firebase.initializeApp(firebaseConfig);

let database = document.database().ref('register')


const form = Document.querySelector('form');


form.addEventListner('submit', function (event) {
  event.preventDefault
  const nama = document.querySelector('#nama').value;
  const email = document.querySelector('#email').value;
  const nomor = document.querySelector('#phone').value;
  const pilevent = document.querySelector('#pilevent').value;

  let newContact = database.push();
  newContact.set({
    nama: nama,
    email: email,
    nomor: nomor,
    event: event,
  });

});


let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}



var swiper = new Swiper(".event-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop:true,
  autoplay:{
    delay: 3000,
    disableOnInteraction:false,
  }
});

