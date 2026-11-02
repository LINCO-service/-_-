/* 目錄高亮、回到頂端、列印前展開 FAQ、主題切換（皆為選配，關閉 JS 也能完整閱讀） */
(function () {
  var d = document;
  var links = [].slice.call(d.querySelectorAll(".toc li a"));
  var map = {};
  links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
  var heads = [].slice.call(d.querySelectorAll("main h2[id], main h3[id]"));

  function spy() {
    var y = window.scrollY + 110, cur = null;
    heads.forEach(function (h) { if (h.offsetTop <= y) cur = h.id; });
    links.forEach(function (a) { a.classList.remove("on"); });
    if (cur && map[cur]) {
      map[cur].classList.add("on");
      var box = d.querySelector(".toc");
      if (box && box.offsetParent) {
        var r = map[cur].getBoundingClientRect(), b = box.getBoundingClientRect();
        if (r.top < b.top + 8 || r.bottom > b.bottom - 8) map[cur].scrollIntoView({ block: "nearest" });
      }
    }
    var t = d.querySelector(".totop");
    if (t) t.classList.toggle("show", window.scrollY > 600);
  }
  var tick = false;
  window.addEventListener("scroll", function () {
    if (!tick) { tick = true; requestAnimationFrame(function () { spy(); tick = false; }); }
  }, { passive: true });
  spy();

  // 手機版目錄：點了項目就收起
  [].forEach.call(d.querySelectorAll(".toc-m a"), function (a) {
    a.addEventListener("click", function () { var m = d.querySelector(".toc-m"); if (m) m.open = false; });
  });

  var up = d.querySelector(".totop");
  if (up) up.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  // 列印時把常見問題全部展開
  var closed = [];
  window.addEventListener("beforeprint", function () {
    [].forEach.call(d.querySelectorAll("details"), function (x) { if (!x.open) { closed.push(x); x.open = true; } });
  });
  window.addEventListener("afterprint", function () { closed.forEach(function (x) { x.open = false; }); closed = []; });
  var pb = d.getElementById("printBtn");
  if (pb) pb.addEventListener("click", function () { window.print(); });

  // 點網址 # 直接開啟該 FAQ
  if (location.hash) {
    var t = d.querySelector(location.hash);
    if (t && t.tagName === "DETAILS") t.open = true;
  }
})();
