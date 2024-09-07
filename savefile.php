<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $filename = $_POST["filename"];
    $filecontent = $_POST["filecontent"];
    $filepath = "files/" . $filename . ".txt";

    // Kiểm tra xem file đã tồn tại chưa
    if (file_exists($filepath)) {
        echo "File đã tồn tại!";
    } else {
        // Mở file để ghi
        $file = fopen($filepath, "w");
        if ($file) {
            fwrite($file, $filecontent);
            fclose($file);
            echo "File đã được lưu thành công!";
        } else {
            echo "Có lỗi xảy ra khi lưu file!";
        }
    }
}
?>
