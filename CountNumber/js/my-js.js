function countNumber() {
    let n = Number.parseInt(prompt("Nhập vào 9 chữ số"));
    alert(count9Digit(n));
}

function count1Digit(n) {
    switch (n) {
        case 0:
            return " Không";
        case 1:
            return " Một";
        case 2:
            return " Hai";
        case 3:
            return " Ba";
        case 4:
            return " Bốn";
        case 5:
            return " Năm";
        case 6:
            return " Sáu";
        case 7:
            return " Bảy";
        case 8:
            return " Tám";
        case 9:
            return " Chín";
        default :
            return " Không biết số này";
    }
}

function count9Digit(n) {
    let hdrmillion = Math.floor(n / 100000000);
    let dozensmillion = Math.floor(n / 10000000) % 10;
    let million = Math.floor(n / 1000000) % 10;
    let hdthousand = Math.floor(n / 100000) % 10;
    let dozensthousand = Math.floor(n / 10000) % 10;
    let thousand = Math.floor(n / 1000) % 10;
    let hundred = Math.floor(n / 100) % 10;
    let dozens = Math.floor(n / 10) % 10;
    let unit = n % 10;
    let count = "";
    count += count1Digit(hdrmillion) + " trăm";
    if (dozensmillion === 0)
        count += " linh";
    else
        count += count1Digit(dozensmillion) + " mươi";
    count += count1Digit(million) + " triệu";
    count += count1Digit(hdthousand) + " trăm";
    if (dozensthousand === 1) {
        count += " mười";
    } else if (dozensthousand === 0) {
        count += " linh"
    } else
        count += count1Digit(dozensthousand) + " mươi";
    count += count1Digit(thousand) + " nghìn";
    if (hundred === 0)
        count += " linh";
    else
        count += count1Digit(hundred) + " trăm";
    if (dozens === 1) {
        count += " mười";
    } else if (dozens === 0) {
        count += " linh";
    } else
        count += count1Digit(dozens);
    count += count1Digit(unit);
    return count;
}