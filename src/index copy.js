// require("@babel/polyfill");
// import _ from "lodash";
// import print from './print';
// import { parse } from "./global.js";
// import "./style.css";



function component() {
  var element = document.createElement("div");
  // var btn = document.createElement("button");

  element.innerHTML = ["Hello", "webpack"].join('');
  let func = (a) => {console.info(a)};
  func('dd');

  var a = new Promise((resolve,reject)=>{
    setTimeout(function() {
      resolve('3');
    });
  });

  // btn.innerHTML = "click me an check the console";
  // btn.onclick = function() {
  //   print();
  // };
  // btn.onclick = e => import(/* webpackChunkName:"print" */ './print').then(module => {
  //   var print = module.default;

  //   print();
  // });

  // element.appendChild(btn);
  // parse();

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

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("./service-worker.js")
//       .then(registration => {
//         console.log("SW registered: ", registration);
//       })
//       .catch(registrationError => {
//         console.log("SW registration failed: ", registrationError);
//       });
//   });
// }