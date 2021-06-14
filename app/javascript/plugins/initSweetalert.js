import swal from 'sweetalert';

const initSweetalert = (selector, options = {}, callback = () => {}) =>
 {
  const swalButton = document.querySelectorAll(selector);
  if (swalButton.length) {
    swalButton.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        console.log(event);
        swal(options).then(callback);
      });
    })
  }
};

// const initSweetalert = (selector, options = {}, callback = () => {}) => {
//   const swalButton = document.querySelector(selector);
//   if (swalButton) {
//     swalButton.addEventListener('click', () => {
//       swal(options).then(callback);
//     });
//   }
// };

export { initSweetalert };
