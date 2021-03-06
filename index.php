<?php include('server.php'); ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Insert and Retrieve data from MySQL database with ajax</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div class="wrapper">
		
		<?php echo $comments; ?>

		<form class="comment_form">
			<div>
				<label for="name">Name</label>
				<input type="text" name="name" id="name">
			</div>
			<div>
				<label for="comment">Comment</label>
				<textarea name="comment" id="comment" cols="30" rows="5"></textarea>
			</div>
			<button type="button" id="submit_btn">POST</button>
			<button type="button" id="update_btn" style="display: none;">UPDATE</button>
		</form>
	</div>
</body>
</html>
<!-- Add JQuery -->
<script src="jquery.min.js"></script>
<script src="script.js"></script>