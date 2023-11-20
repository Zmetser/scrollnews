window.DEBUG = false;

const articlesContainer = document.getElementById("articles");
const temak = [...new Set(data.map(item => item.tema))];

let fragment = new DocumentFragment();
const html = data.forEach((item) => {
  const itemTemplate = renderItem(item);
  fragment.append(itemTemplate);
})

articlesContainer.append(fragment);

function renderItem(item) {
  const template = document.querySelector("#newsitem");
  const clone = template.content.cloneNode(true);

  clone.firstElementChild.style.setProperty(`--topic-color`, `var(--topic-${temak.indexOf(item.tema)})`)

  const title = clone.querySelector(".js_title");
  const lead = clone.querySelector(".js_lead");
  const source = clone.querySelector(".js_source");
  const media = clone.querySelector(".js_media");

  title.textContent = item.cim;
  lead.textContent = item.lead;
  source.textContent = item.forras;
  media.setAttribute('data-src', item.image + "&" + Math.random());

  return clone
}

let debugClickCounter = 0;
articlesContainer.addEventListener('click', () => {
  window.setTimeout(() => { debugClickCounter = 0 }, 3000);
  debugClickCounter++;
  if (debugClickCounter === 5) {
    console.log("DEBUG MODE: ON");
    renderDebugOverlay();
    window.DEBUG = true
  }
})

function renderDebugOverlay() {
  document.getElementById("debug").style = "display: block;"
  document.body.style = `--root-margin-bottom: ${RootMargin[scrollDirection][1]}%; --root-margin-top: ${RootMargin[scrollDirection][0]}%`
}