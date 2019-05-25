// import _ from "lodash";
// import printMe from "./print.js";
import { cube, square } from "./math.js";
import './style.css';

function component() {
  var element = document.createElement("pre");
  var btn = document.createElement("button");

  // element.innerHTML = _.join(["Hello", "webpack"], ",");

  btn.innerHTML = [
    'Hello webpack',
    '5 cubed is equal to '+cube(5)
  ].join('\n\n');
  // btn.onclick = printMe;

  // element.appendChild(btn);

  return element;
}

// document.body.appendChild(component());
let element = component();
document.body.appendChild(element);

// if (module.hot) {
//   module.hot.accept("./print.js", function() {
//     console.log("Accept the updated printMe module");
//     document.body.remove(element);
//     element = component();
//     document.body.appendChild(element);
//     // printMe();
//   });
// }
