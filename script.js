const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
  <div class="container">
    <small>KEY</small>
    <div class="key">
    ${event.key ? "Space" : event.key}
    </div>
    <small>KEYCODE</small>
    <div class="key">
    ${event.keyCode}
    </div>
    <small>KEYNAME</small>
    <div class="key">
    ${event.code}
    </div>

    </div>
    `;
});
