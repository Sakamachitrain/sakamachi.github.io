let allArticles = [];

fetch("data/articles.json")
  .then(r => r.json())
  .then(list => {
    allArticles = list;
    renderArticles(list);
  });

function renderArticles(list) {
  const block = document.getElementById("article-block");
  block.innerHTML = "";

  if (list.length === 0) {
    block.innerHTML = "<p>検索結果がありません。</p>";
    return;
  }

  const top = list[list.length - 1];
  block.innerHTML += `
    <div class="top-article">
      <h2><a href="article/${top.id}.html">${top.title}</a></h2>
      <p>${top.date}</p>
      <p>${top.summary}</p>
    </div>
  `;

  const rest = list.slice(0, -1).reverse();

  rest.forEach(a => {
    block.innerHTML += `
      <div class="article-card">
        <h3><a href="article/${a.id}.html">${a.title}</a></h3>
        <p>${a.date}</p>
        <p>${a.summary}</p>
      </div>
    `;
  });
}

/* 🔍 検索機能 */
document.getElementById("search-box").addEventListener("input", e => {
  const q = e.target.value.trim();

  if (q === "") {
    renderArticles(allArticles);
    return;
  }

  const result = allArticles.filter(a =>
    a.title.includes(q) ||
    a.summary.includes(q) ||
    a.content.includes(q)
  );

  renderArticles(result);
});
