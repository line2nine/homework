let trauDung, trauNam, trauGia;
for (trauDung = 0; trauDung <= 20; trauDung++) {
    for (trauNam = 0; trauNam <= 33; trauNam++) {
        trauGia = 100 - (trauDung + trauNam);
        if (5 * trauDung + 3 * trauNam + trauGia / 3 === 100 && trauGia % 3 === 0) {
            document.write("Có trường hợp sau: " + "<br>" + "Trâu đứng bằng : " + trauDung + "<br>" + "Trâu nằm bằng :" + trauNam + "<br>" + "Trâu già bằng :" + trauGia + "<br><br>");
        }
    }
}
