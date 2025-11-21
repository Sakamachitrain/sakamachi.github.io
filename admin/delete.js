// 記事一覧を読み込んでプルダウンを作成
fetch("../data/articles.json")
  .then(r => r.json())
  .then(list => {
    const sel = document.getElementById("article-select");
    list.forEach(a => {
      const op = document.createElement("option");
      op.value = a.id;
      op.textContent = `${a.id} / ${a.title}`;
      sel.appendChild(op);
    });
  });

// 削除案を PR 用に出力
document.getElementById("delete-btn").onclick = async () => {
  const id = document.getElementById("article-select").value;
  const resultBox = document.getElementById("result");

  resultBox.textContent =
    `articles.json から次の記事を削除してください。\n\n` +
    `削除対象ID: "${id}"\n\n` +
    `GitHub の Pull Request で「articles.json」を編集し、該当記事の JSON を削除すれば反映されます。`;
};
