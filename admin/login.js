// SHA-256 文字列生成
async function sha256(str) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf))
              .map(b => b.toString(16).padStart(2, "0"))
              .join("");
}

// ★パスワード（ハッシュ保存）
const PASSWORD_HASH = "5d8c63edc493827e7fb453efc636ce8b1d11f228dbcd56f1af4c8ff8548db7bb";

document.getElementById("btn").onclick = async () => {
  const input = document.getElementById("pw").value;
  const hash = await sha256(input);

  if (hash === PASSWORD_HASH) {
    // ログイン状態を localStorage に保存
    localStorage.setItem("komashin_admin_login", "OK");
    location.href = "index.html"; // 管理トップへ
  } else {
    document.getElementById("msg").textContent = "パスワードが違います。";
  }
};
