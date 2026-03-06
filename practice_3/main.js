console.log("Hello from JavaScript!");
let name = "Thành";

let yearOfBirth = 2006;

let currentYear = 2026;

let age = currentYear - yearOfBirth;

console.log("Xin chào, mình là " + name + ", năm nay mình " + age + " tuổi.");


let score = 6;

// TODO: Dự đoán điều kiện if/else đang làm gì, rồi chạy thử

if (score >= 8) {

  console.log("Giỏi");

} else if (score >= 6.5) {

  console.log("Khá");

} else if (score >= 5) {

  console.log("Trung bình");

} else {

  console.log("Yếu");

}

// TODO: Viết hàm tính điểm trung bình 3 môn

function tinhDiemTrungBinh(m1, m2, m3) {

  let avg = (m1 + m2 + m3) / 3;

  return avg;

}
console.log("Điểm trung bình: " + tinhDiemTrungBinh(7, 8, 9));


function xeploai(avg) {

    if (avg >= 8) {
        return "Giỏi";
    } else if (avg >= 6.5){ 
        return "Khá";
    } else if (avg >= 5) {
        return "Trung bình";
    } else { yếu
        return "Yếu";
    }

}
let avg = tinhDiemTrungBinh(8, 7, 9);

let loai = xeploai(avg);

console.log("Điểm TB:", avg, " - Xếp loại:", loai);


function kiemTraTuoi(age) {

    if (age >= 18) {
        return " Đủ 18 tuổi";
    } else {
        return " Chưa đủ 18 tuổi";
    }

}
console.log("Tuổi của bạn:", age, kiemTraTuoi(age));




