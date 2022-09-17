class calculator {
  constructor(display,str) {
    this.display = display;
    this.str = str;
  }

  update(){
    this.display.innerText = str;
  }
}

const btns =  document.querySelectorAll('[data-input-btn]');
const  display =  document.querySelector('[data-display-port]');
let  str = "";
const calc = new calculator(display, str);

for (const i of btns) {
  i.addEventListener("click", (e) => {
    let targetVal = e.target.innerText;

    switch (targetVal) {
      case "AC":
        str = "";
        calc.update();
        break;
        
      case "DEL":
        str = str.toString().slice(0, -1)
        calc.update();
        break;

      case "=":
        str = eval(str);
        calc.update();
        break;

      default:
        str = str + targetVal;
        calc.update();
        break;
    }
  });
}