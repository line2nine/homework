function toggleButton() {
    var showForm = document.getElementById("form");
    var click = document.getElementById("bttt");
    if (showForm.style.display === "block") {
        showForm.style.display = "none";
        click.value = "Mở";
    } else {
        showForm.style.display = "block";
        click.value = "Đóng";
    }
}