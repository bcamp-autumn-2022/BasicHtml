<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Post data</h2>
    <p>
        <?php
        print_r($_POST);
        echo '<br>the first name is '.$_POST['fname'];
        ?>
    </p>
</body>
</html>