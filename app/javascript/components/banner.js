import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Let's binge watch some movies! ⬇ "],
    typeSpeed: 100,
    loop: true
  });
}

export { loadDynamicBannerText };
