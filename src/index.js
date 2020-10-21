import {square} from './math';
import test from '../es/index';

function component() {
  var element = document.createElement("div");
  var num = square(3);
  element.innerHTML = _.join(["Hello, Webpack ",num],'');
  return element;
}
console.info('test')

let element = component();
document.body.appendChild(element);

export default component;