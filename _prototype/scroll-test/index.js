// let scroller = document.querySelector("[data-scroller]")
let articles = document.querySelectorAll("[role='article']")
// let collider = document.getElementById("collider")

let options = {
  root: null,
  rootMargin: '-50% 0% -50% 0%',
  threshold: 0,
};

const onIntersect = (entries, observer) => {
  console.log("onIntersect")
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active")
    } else {
      entry.target.classList.remove("active")
    }
  })
}

let observer = new IntersectionObserver(onIntersect, options);

articles.forEach(element => {
  observer.observe(element)
});
