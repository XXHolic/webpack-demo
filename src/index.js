function component() {
  var element = document.createElement("div");
  element.innerHTML = ["Hello", "webpack"].join('');
  let func = (a) => {console.info(a)};
  func('dd');

  var a = new Promise((resolve,reject)=>{
    setTimeout(function() {
      resolve('3');
    });
  });

  return element;
}

let element = component();
document.body.appendChild(element);