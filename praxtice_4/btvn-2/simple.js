let step = 1

const progress = document.getElementById("progressBar")

function showStep(n){

document.getElementById("step1").style.display="none"
document.getElementById("step2").style.display="none"
document.getElementById("step3").style.display="none"

document.getElementById("step"+n).style.display="block"

progress.style.width = (n*33)+"%"

}


// bước 1 -> 2
document.getElementById("next1").onclick = function(){

let name = document.getElementById("fullname").value
let birth = document.getElementById("birthday").value
let gender = document.getElementById("gender").value

if(name=="" || birth=="" || gender==""){
alert("Nhập đầy đủ thông tin")
return
}

step=2
showStep(step)

}


// quay lại bước 1
document.getElementById("back1").onclick = function(){

step=1
showStep(step)

}


// bước 2 -> 3
document.getElementById("next2").onclick = function(){

let email = document.getElementById("email").value
let pass = document.getElementById("password").value
let confirm = document.getElementById("confirm").value

if(email=="" || pass=="" || confirm==""){
alert("Nhập đầy đủ")
return
}

if(pass !== confirm){
alert("Mật khẩu không khớp")
return
}


// hiển thị thông tin
let summary = `
Họ tên: ${document.getElementById("fullname").value} <br>
Ngày sinh: ${document.getElementById("birthday").value} <br>
Giới tính: ${document.getElementById("gender").value} <br>
Email: ${email}
`

document.getElementById("summary").innerHTML = summary

step=3
showStep(step)

}


// quay lại bước 2
document.getElementById("back2").onclick = function(){

step=2
showStep(step)

}