import {Chalk} from 'chalk';
import figlet from 'figlet';

const cusChalk = new Chalk({level: 3});
const colors = ['#f4dbd6', '#f0c6c6', '#f5bde6', '#c6a0f6', '#ed8796', '#ee99a0', '#f5a97f', '#eed49f', '#a6da95', '#8bd5ca', '#91d7e3', '#7dc4e4', '#8aadf4', '#b7bdf8'];


function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function showBanner(text) {
  const color = cusChalk.hex(getRandomColor());
  console.log(color(figlet.textSync(text, {whitespaceBreak: true})));
}

export { showBanner, getRandomColor, cusChalk, colors};
