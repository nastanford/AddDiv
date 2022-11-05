function AddDiv() {
  // copy hidden div change name and add to main div
  var div0 = document.getElementById('div0');
  var div0Clone = div0.cloneNode(true);
  div0Clone.id =
    'div' + (document.getElementById('main').childElementCount + 1);
  div0Clone.style.display = 'block';
  document.getElementById('main').appendChild(div0Clone);
}

function deleteDiv(btn) {
  // delete div
  var div = btn.parentNode;
  div.parentNode.removeChild(div);
}
