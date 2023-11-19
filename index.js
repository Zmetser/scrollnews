// let scroller = document.querySelector("[data-scroller]")
let articles = document.querySelectorAll("[role='article']")
// let collider = document.getElementById("collider")

let options = {
  root: null,
  rootMargin: '-50% 0% -50% 0%',
  threshold: 0,
};

const onIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      expandEntry(entry.target);
    } else {
      window.setTimeout(() => {
        entry.target.classList.remove("active")
      }, 250); // <-- ezen kell dolgozni
    }
  })
}

let observer = new IntersectionObserver(onIntersect, options);

articles.forEach(element => {
  observer.observe(element)
});

function expandEntry(el) {
  el.classList.add("active");

  // lazy load
  const media = el.querySelector('.js_media');
  if (media && media.classList.contains('js_lazy')) {
    const src = media.getAttribute('data-src');

    media.src = src;
    media.addEventListener('load', () => {
      media.classList.add('fade-in')
    })

    media.classList.remove('js_lazy')
  }

}
