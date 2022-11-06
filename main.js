
// Delete the div
function deleteDiv(btn) {
  var div = btn.parentNode.parentNode.parentNode;
  div.parentNode.removeChild(div);
  updateAmount();
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