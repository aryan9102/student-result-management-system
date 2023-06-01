document.getElementById("result-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var roll = document.getElementById("roll").value;
  var marks = document.getElementById("marks").value;

  addResult(name, roll, marks);
  clearForm();
});

function addResult(name, roll, marks) {
  var table = document.getElementById("result-table");
  var row = table.insertRow(-1);
  var nameCell = row.insertCell(0);
  var rollCell = row.insertCell(1);
  var marksCell = row.insertCell(2);

  nameCell.innerHTML = name;
  rollCell.innerHTML = roll;
  marksCell.innerHTML = marks;

  document.getElementById("result-container").style.display = "block";
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("roll").value = "";
  document.getElementById("marks").value = "";
}