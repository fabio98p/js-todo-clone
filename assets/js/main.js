console.log("ciao ale");

$(document).ready(function () {
	
	$(".conferma").click(function () {
		//inizializzo le variabili e clono template
		var textTodo = $(".text-todo").val()
		var template = $(".template").children(".copia").clone();
		//modifico la parte clonata di template inserendone il nuovo testo
		template.children(".testo").text(textTodo)
		template.append(".todo")
		//modifico il clone rendendogli possibile di essere eliminato
		template.children(".elimina").click(function () {
			$(this).parent(".copia").remove()
		})
		//modifico il clone rendendogli possibile di modificare il testo
		template.children(".modifica").click(function () {
			var textModify = $(this).siblings(".testo").text()
			$(this).siblings(".input-template").val(textModify).show()
			$(this).siblings(".testo").hide()
			$(this).siblings(".confermaModifica").show()
			$(this).hide()
		})
		//una volta modificato il testo rimetto come base
		template.children(".confermaModifica").click(function () {
			console.log("funzia");
			var textModify = $(this).siblings(".input-template").val()
			console.log(textModify);
			$(this).siblings(".testo").text(textModify).show()
			$(this).siblings(".input-template").hide()
			$(this).siblings(".confermaModifica").hide()
			$(this).show()
		})
		//appendo tutto alla classe todo
		$(".todo").append(template)
	})
})

