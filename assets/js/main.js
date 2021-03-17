console.log("ciao ale");

$(document).ready(function () {

	$(".conferma").click(function () {
		
		var textTodo = $(".text-todo").val()
		var template = $(".template").children(".copia").clone();

		template.children(".testo").text(textTodo)
		template.append(".todo")



		$(".todo").append(template)

	})









})

