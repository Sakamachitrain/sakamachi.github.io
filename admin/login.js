const PASSWORD_HASH = "2BC96DAAE784525EB66B7BC1132F14989E28BC3FC730526A46E08EA465194018";

async function sha256(str) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf))
              .map(b => b.toString(16).padStart(2, "0"))
              .join("");
}

document.getElementById("btn").onclick = async () => {
  const input = document.getElementById("pw").value.trim(); // ←trim()で前後空白を削除
  const hash = await sha256(input);

  console.log("入力:", input);
  console.log("ハッシュ:", hash);

  if (hash === PASSWORD_HASH) {
    localStorage.setItem("komashin_admin_login", "OK");
    location.href = "index.html";
  } else {
    document.getElementById("msg").textContent = "パスワードが違います。";
  }
};
