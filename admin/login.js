// SHA-256 文字列生成
async function sha256(str) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf))
              .map(b => b.toString(16).padStart(2, "0"))
              .join("");
}

// ★パスワード（ハッシュ保存）
const PASSWORD_HASH = "2BC96DAAE784525EB66B7BC1132F14989E28BC3FC730526A46E08EA465194018";

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
