function calSum() {
    let m = document.getElementById("m");
    m = Number.parseInt(m.value);
    let n = document.getElementById("n");
    n = Number.parseInt(n.value);
    let s = 0, i;
    for (i = m; i<= n; i++)
        if (checkIfPrimeNumber(i))
            //if (i % 2 === 0) //Điều kiện để tính các giá trị chẵn từ m đến n.
            s += i;
    document.getElementById("sum").innerHTML = "" + s;
}

function kiemTraChinhPhuong(n) {
    //Một số là số chính phương nếu giá trị căn bặc 2 của nó là số nguyên
    return Number.isInteger(Math.sqrt(n));
}

function checkIfPrimeNumber(n) {
    //Một số là số nguyên tố khi nó > 1, chia hết cho 1 và chính nó, không thể tạo thành bởi các số tự nhiên nhỏ hơn nhân vào nhau
    //Ví dụ: 2 3 5 7 11 13... là số nguyên tố
    if(n < 2) //Số nguyên tố nhỏ nhất là 2. Kiểm tra nếu n < 2 thì không thể là số nguyên tố, trả về false
        return false;
    for (let i=2; i <= n-1; i++) //Lặp từ 2 tới n-1, nếu trong khoảng này tồn tại số mà n chia hết thì n không phải là số nguyên tố, ngược lại n là số nguyên tố.
    if(n % i === 0)
      return false;
    return true;
}