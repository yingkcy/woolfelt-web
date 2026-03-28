// 滑動文字動畫
window.addEventListener("load", () => {
    document.querySelectorAll(".scroll-fade").forEach(el => {
        el.classList.add("show");
    });
});
const elements = document.querySelectorAll(".scroll-fade");
function reveal(){
  const windowHeight = window.innerHeight;
  elements.forEach((el)=>{
    const elementTop = el.getBoundingClientRect().top;
    if(elementTop < windowHeight +100){
      el.classList.add("show");
    }
  });
}
window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);
reveal();

// 漂浮羊毛纖維
window.addEventListener("load", () => {
  const canvas = document.getElementById("fiberCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let fibers = [];
  for (let i = 0; i < 80; i++) {
    fibers.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: 20 + Math.random() * 40,
      speed: 0.2 + Math.random() * 0.5,
      angle: Math.random() * Math.PI
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(255,255,255,0.6)";
    ctx.lineWidth = 1;
    fibers.forEach(f => {
      ctx.beginPath();
      ctx.moveTo(f.x, f.y);
      ctx.lineTo(f.x + Math.cos(f.angle) * f.length, f.y + Math.sin(f.angle) * f.length);
      ctx.stroke();
      f.y -= f.speed;
      if (f.y < -50) f.y = canvas.height + 50;
    });
    requestAnimationFrame(draw);
  }
  draw();
});