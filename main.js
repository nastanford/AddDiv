// Add Div from hidden Div
function AddDiv()
{
  // copy hidden div change name and add to main div
  var div0 = document.getElementById('div0');
  var div0Clone = div0.cloneNode(true);
  div0Clone.id = 'div' + (document.getElementById('main').childElementCount + 1);
  div0Clone.style.display = 'block';
  // rename input fields
  var inputs = div0Clone.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].id = inputs[i].id + (document.getElementById('main').childElementCount + 1);
    inputs[i].name = inputs[i].name + (document.getElementById('main').childElementCount + 1);
  }
  // rename select fields
  var selects = div0Clone.getElementsByTagName('select');
  for (var i = 0; i < selects.length; i++) {
    selects[i].id = selects[i].id + (document.getElementById('main').childElementCount + 1);
    selects[i].name = selects[i].name + (document.getElementById('main').childElementCount + 1);
  }
  document.getElementById('main').appendChild(div0Clone);
}
// Delete the div
function deleteDiv(btn) {
  var div = btn.parentNode.parentNode.parentNode;
  div.parentNode.removeChild(div);
}
// Update the Amount
function updateAmount() {
  var totalAmount = 0;
  // get all the inputs
  var inputs = document.getElementsByTagName('input');
  // loop through all inputs starts with amount and get amount
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].id.startsWith('amount_')) {
      var amount = inputs[i].value;
      if (amount != '') {
        // If amount is a dollar amount or an amount with a decimal.
        totalAmount += parseFloat(amount);
        // if amount is without decimals.
        // totalAmount += parseInt(amount);
      }
    }
  }
  // update total amount
  document.getElementById("totalAmount").innerHTML = totalAmount;
}