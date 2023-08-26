
 //------- Pre Loader --------//  

// const loader = document.querySelector('.preloader-area')
// window.onload = () =>{
//   const pageLoad = () => {
//     setTimeout(() => {
//       loader.style.display ='none'
//     }, 2000);
//   }
//   pageLoad();
//   setInterval(pageLoad, 2000);  
// }



const navbar = document.querySelector("header nav #bars");
const navbarIcon = document.querySelector("header nav #bars i");
const dropDown = document.querySelector("header nav ul");


// NAVIGATION DROPDOWN
navbar.onclick = () => {
  if (dropDown.classList.contains('dropDown')) {
    dropDown.classList.remove('dropDown');
    navbarIcon.classList = 'fa fa-bars';
  } else {
    dropDown.classList.add('dropDown');
    dropDown.style.transition = 'all 0.3s ease';
    navbarIcon.classList = 'fa fa-xmark'
  }
}

const text = document.querySelector('.typing');


// TEXT ANIMATION
// const textLoad = () => {
//   setTimeout(() => {
//     text.textContent ='Web-Developer';
//   }, 0);
//   setTimeout(() => {
//     text.textContent ='Freelancer';
//   }, 4000);
//   setTimeout(() => {
//     text.textContent ='Tech Coach';
//   }, 8000);
//   setTimeout(() => {
//     text.textContent ='YouTuber';
//   }, 12000);
// }

// textLoad();
// setInterval(textLoad, 16000);


// Portfolio page




// Contact Page



