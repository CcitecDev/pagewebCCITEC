// Envío del formulario
form.addEventListener('submit', {
$, : .ajax({
url: 'https://script.google.com/macros/s/AKfycbzbltyuB4mdNE8EI0zmRO0COcrdqfgJFvq1mVVOPz0246-mxLrTkQ9JZD-2nQ75Ui8p3Q/exec',
type: 'post',
data: $("#my-google-sheet").serializeArray(),
success: function () {
alert("Registro exitoso");
},
error: function () {
alert("Error en el Registro :(");
}
})
});
