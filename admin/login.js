// SHA-256 文字列生成
async function sha256(str) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf))
              .map(b => b.toString(16).padStart(2, "0"))
              .join("");
}

// ★パスワード（ハッシュ保存）
const PASSWORD_HASH = "b6ef0a0460a2f5f82a4665e7b7aa2b6c090d824a807dc16938afcb0bae9b7e3c";

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
