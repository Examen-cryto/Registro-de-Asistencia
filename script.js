// script.js
const attendanceForm = document.getElementById("attendanceForm");
const attendanceTableBody = document.getElementById("attendanceTableBody");

attendanceForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtener datos del formulario
  const studentName = document.getElementById("studentName").value.trim();
  const attendanceDate = document.getElementById("attendanceDate").value;
  const status = document.getElementById("status").value;

  // Crear una nueva fila en la tabla
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${studentName}</td>
    <td>${attendanceDate}</td>
    <td>${status}</td>
    <td>
      <button class="delete-btn">Eliminar</button>
    </td>
  `;

  // Agregar la fila a la tabla
  attendanceTableBody.appendChild(newRow);

  // Limpiar el formulario
  attendanceForm.reset();

  // Agregar evento para eliminar filas
  const deleteButton = newRow.querySelector(".delete-btn");
  deleteButton.addEventListener("click", function () {
    newRow.remove();
  });
});
