export default function renderKbd(kbd) {
    const source = document.querySelector('#keyboardTpl').innerHTML.trim();
    const compiled = _.template(source);
    const result = compiled({
      data: kbd
      });
    const container = document.querySelector(".keyboard");
    container.innerHTML = result;
  }