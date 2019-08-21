import {square} from './math';

function component() {
  var element = document.createElement("div");
  var num = square(2);
  element.innerHTML = "Hello, Webpack "+num;
  return element;
}

let element = component();
document.body.appendChild(element);