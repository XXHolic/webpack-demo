import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml'

function component() {
  var element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], ",");
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src=Icon;
  myIcon.classList.add('logo');

  element.appendChild(myIcon);

  var fontEle = document.createElement("span");
  fontEle.innerHTML = "&#xe644;";
  fontEle.className='icon iconfont';

  element.appendChild(fontEle);

  console.info('Data:', Data);

  return element;
}

document.body.appendChild(component());
