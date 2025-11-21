fetch("data/articles.json")
  .then(res => res.json())
  .then(list => {
    const container = document.getElementById("article-list");

    list.forEach(article => {
      const div = document.createElement("div");
      div.className = "article-card";
      div.innerHTML = `
        <h2><a href="article/${article.id}.html">${article.title}</a></h2>
        <p>${article.date}</p>
        <p>${article.summary}</p>
      `;
      container.appendChild(div);
    });
  });
