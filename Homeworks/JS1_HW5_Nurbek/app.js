const generRandomButton = document.querySelector(".generRandomButton");
generRandomButton.onclick = () => {
  for (let i = 1; i < 7; i++) { //  можно и через "length", но по условиям там всего 6 блоков
    const createRan = Math.floor(Math.random() * 99 + 1); 
    const sayN = document.querySelector(".res" + i);
    sayN.innerText = createRan;
  }
}
