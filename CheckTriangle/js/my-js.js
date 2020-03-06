function solveTriangle() {
    let a = parseFloat(prompt("Nhập vào cạnh a"));
    let b = parseFloat(prompt("Nhập vào cạnh b"));
    let c = parseFloat(prompt("Nhập vào cạnh c"));
    let perimeter = a + b + c;
    let halfp = perimeter / 2;
    let expoA = Math.pow(a, 2);
    let expoB = Math.pow(b, 2);
    let expoC = Math.pow(c, 2);
    let area = Math.sqrt(halfp * (halfp - a) * (halfp - b) * (halfp - c));
    if (a < 0 || b < 0 || c < 0)
        alert("Không hợp lệ");
    else if ((a + b) > c && (a + c) > b && (b + c) > a) {
        alert("a, b, c có thể tạo thành tam giác với chu vi là: " + perimeter + ". Diện tích là: " + area);
        if (a === b && a === c)
            alert("Tam giác vừa xong là tam giác đều");
        else if (expoC === expoA + expoB || expoB === expoA + expoC || expoA === expoB + expoC)
            alert("Tam giác vừa xong là tam giác vuông");
        else if (a === b || a === c || b === c)
            alert("Tam giác vừa xong là tam giác cân");
    } else
        alert("Ba cạnh trên không thể tạo thành tam giác");
}