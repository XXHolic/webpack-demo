import _ from "lodash";
import print from './print';
import './style.css'

function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], ",");

  btn.innerHTML = "click me an check the console";
  // btn.onclick = function() {
  //   print();
  // };
  // btn.onclick = e => import(/* webpackChunkName:"print" */ './print').then(module => {
  //   var print = module.default;

  //   print();
  // });

  element.appendChild(btn);

  return element;
}

// document.body.appendChild(component());
let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accept the updated printMe module");
    document.body.remove(element);
    element = component();
    document.body.appendChild(element);
    // printMe();
  });
}
