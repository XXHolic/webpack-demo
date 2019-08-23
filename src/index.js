import {square} from './math';
import _ from 'lodash';

function component() {
  var element = document.createElement("div");
  var num = square(2);
  element.innerHTML = _.join(["Hello, Webpack ",num],'');
  return element;
}

let element = component();
document.body.appendChild(element);