const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const text = document.getElementById("text");

button1.addEventListener("click", function () {
  const words = text.textContent.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 8) {
      words[i] = '<span class="selected">' + words[i] + "</span>";
    }
  }
  text.innerHTML = words.join(" ");
});

button2.addEventListener("click", function () {
  const words = text.textContent.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (
      words[i].match(
        /^['а', 'и', 'е', 'ё', 'о', 'у', 'ы', 'э', 'ю', 'я']+$/i
      )
    ) {
      words[i] = '<span class="selected">' + words[i] + "</span>";
    }
  }
  text.innerHTML = words.join(" ");
});

button3.addEventListener("click", function () {
  const words = text.textContent.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].match(/ться$/) || words[i].match(/тся$/)) {
      words[i] = '<span class="selected">' + words[i] + "</span>";
    }
  }
  text.innerHTML = words.join(" ");
});