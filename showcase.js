function getCode(id) {
  var xhr = new XMLHttpRequest();

  xhr.addEventListener("load", function () {
    applyText(id, this.response);
  });

  xhr.addEventListener("error", function () {
    applyText(id, this.response);
  });

  xhr.open("GET", id + ".js");
  xhr.send();
}

function applyText(id, text) {
  var elem = document.getElementById(id);
  if (typeof text !== 'string') {
    elem.innerText = "Error loading code.";
    return;
  }

  for (var span of document.getElementsByClassName(id + "-bytes")) {
    span.innerText = text.length;
  }

  var style = getComputedStyle(elem, null);
  var elemWidth = +style.getPropertyValue('width').match(/\d+/);
  var textWidth = getTextWidth('a', style);
  elem.innerText = text.match(eval("/.{1," + Math.floor(elemWidth / textWidth) + "}(\\b|\\W)/g")).join("\n");
}

function getTextWidth(txt, computedStyle) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  ctx.font = computedStyle.getPropertyValue('font-size') + ' ' + computedStyle.getPropertyValue('font-family');
  return ctx.measureText(txt).width;
}

function reloadDemo(id) {
  document.getElementById(id + '-demo').src += '';
}

getCode("minimal");
getCode("full");
