const footer = document.querySelector('footer');
let scrollPosition = 0;
const maxScrollPosition = 3176;

document.addEventListener("scroll", () => {
    scrollPosition = window.scrollY;
    let opacityValue = scrollPosition/maxScrollPosition;
    footer.style.opacity = opacityValue;
  
});
