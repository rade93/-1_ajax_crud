$(document).ready(function(){
	
	// when user clicks the POST button
	$(document).on('click', '#submit_btn', function(){
		var name = $('#name').val();
		var comment = $('#comment').val();

		$.ajax({
			url: 'server.php',
			type: 'POST',
			data: {
				'save': 1,
				'name': name,
				'comment': comment
			},
			success: function(response){
				// empty the form fields after submit
				$('#name').val('');
				$('#comment').val('');

				$('#display_area').append(response);

			}
		});

	});

	// when user clicks the delete button
	$(document).on('click', '.delete', function(){
		var id = $(this).data('id');
		var $clicked_btn = $(this);

		$.ajax({
			url: 'server.php',
			type: 'GET',
			data: {
				'delete': 1,
				'id': id
			},
			success: function(response){
				// remove deleted comment
				$clicked_btn.parent().remove();

			}
		});

	});

	// when the edit button is clicked
	var edit_id;
	var $edit_comment;
	$(document).on('click', '.edit', function(){
		// set properties of comment being edited
		edit_id = $(this).data('id');
		$edit_comment = $(this).parent();

		// get the name and text to be edited
		var name = $(this).siblings('.display_name').text();
		var comment = $(this).siblings('.comment_text').text();

		//place the valies inside the form
		$('#name').val(name);
		$('#comment').val(comment);


		$('#submit_btn').hide();
		$('#update_btn').show();

	});

	// submit updated values to server
	$(document).on('click', '#update_btn', function(){
		var name = $('#name').val();
		var comment = $('#comment').val();

		$.ajax({
			url: 'server.php',
			type: 'POST',
			data: {
				'update': 1,
				'id': edit_id,
				'name': name,
				'comment': comment
			},
			success: function(response){
				// empty the form fields after submit
				$('#name').val('');
				$('#comment').val('');
				$('#submit_btn').show();
				$('#update_btn').hide();
				$edit_comment.replaceWith(response);

			}
		});
	});

});