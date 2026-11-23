<!DOCTYPE html>
<html>
<head>
    <title>Grade Nilai</title>
</head>
<body>

<?php
    $nilai = 85;

    echo "Nilai: " . $nilai . "<br>";

    if ($nilai >= 90) {
        echo "Grade: A";
    } elseif ($nilai >= 80) {
        echo "Grade: B";
    } elseif ($nilai >= 70) {
        echo "Grade: C";
    } elseif ($nilai >= 60) {
        echo "Grade: D";
    } else {
        echo "Grade: E";
    }
?>

</body>
</html>