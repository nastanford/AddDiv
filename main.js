
			function AddDiv() {
				// copy hidden div change name and add to main div
				var div0 = document.getElementById('div0');
				var div0Clone = div0.cloneNode(true);
				div0Clone.id =
					'div' + (document.getElementById('main').childElementCount + 1);
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

			function deleteDiv(btn) {
				var div = btn.parentNode.parentNode.parentNode;
				div.parentNode.removeChild(div);
			}