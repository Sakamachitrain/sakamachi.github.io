document.getElementById("form").onsubmit = async e => {
  e.preventDefault();
  const resBox = document.getElementById("result");

  const data = Object.fromEntries(new FormData(e.target).entries());

  resBox.textContent =
    "以下の内容を PR に追加することで記事を登録できます。\n\n" +
    JSON.stringify(data, null, 2) +
    "\n\nGitHub 上で Pull Request を作成し、articles.json に追加してください。";
};
