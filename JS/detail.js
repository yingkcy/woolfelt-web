const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const work = works.find(w => w.id == id);

document.getElementById("main-img").src = work.img;
document.getElementById("ref-img").src = work.ref;

document.getElementById("author").innerText =
  work.name + "  " + work.seat + "  ";

document.getElementById("title_zh").innerText = work.title_zh;
document.getElementById("title_en").innerText = work.title_en;

document.getElementById("desc_zh").innerText = work.desc_zh;
document.getElementById("desc_en").innerText = work.desc_en;

document.querySelector(".back-btn").addEventListener("click", () => {
  history.back();
});

