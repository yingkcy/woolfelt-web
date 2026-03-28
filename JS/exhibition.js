const gallery = document.getElementById("gallery");

works.forEach(work => {
  const div = document.createElement("div");
  div.className = "card hidden";

  div.innerHTML = `
  <img src="${work.img}" loading="lazy">
  <div class="card-info">
    <div class="card-title">${work.title_zh}</div>
    <div class="card-name">${work.name}</div>
  </div>
`;

  div.onclick = () => {
    window.location.href = `detail.html?id=${work.id}`;
  };

  gallery.appendChild(div);
});


// 浮現動畫
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

cards.forEach(card => observer.observe(card));