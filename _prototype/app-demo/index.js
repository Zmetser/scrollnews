const ScrollDirection = {
  'UP': 1,
  'DOWN': 2
}
const RootMargin = {
  [ScrollDirection.DOWN]: [70, 30],
  [ScrollDirection.UP]: [30, 70]
}

function expandEntry(el) {
  // deactivate previous
  const currentActive = document.querySelector(".active");
  if (currentActive) {
    currentActive.classList.remove("active");
  }

  // activate current
  el.classList.add("active");

  // lazy load media
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
//
let scrollDirection = ScrollDirection.DOWN;
let lastScrollTop = window.scrollY;
window.addEventListener('scroll', () => {
  let detectedDirection;
  if (window.scrollY > lastScrollTop) {
    detectedDirection = ScrollDirection.DOWN;
  } else if (window.scrollY < lastScrollTop) {
    detectedDirection = ScrollDirection.UP;
  }

  if (detectedDirection && detectedDirection != scrollDirection) {
    scrollDirection = detectedDirection;
    recalculate(scrollDirection);
  }

  lastScrollTop = window.scrollY;
});

//
const onIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      expandEntry(entry.target);
    }
  })
}

let observer;

function recalculate(scrollDirection) {
  if (observer) {
    observer.disconnect();
  }

  let options = {
    root: null,
    rootMargin: `-${RootMargin[scrollDirection][0]}% 0% -${RootMargin[scrollDirection][1]}% 0%`,
    threshold: 0,
  };

  observer = new IntersectionObserver(onIntersect, options);
  let articles = document.querySelectorAll("[role='article']")

  articles.forEach(element => {
    observer.observe(element)
  });

  if (DEBUG) {
    document.body.style = `--root-margin-bottom: ${RootMargin[scrollDirection][1]}%; --root-margin-top: ${RootMargin[scrollDirection][0]}%`
  }
}

recalculate(scrollDirection);