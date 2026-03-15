const form = document.getElementById("registerForm")

const fullname = document.getElementById("fullname")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")

const strengthBar = document.getElementById("strengthBar")
const strengthText = document.getElementById("strengthText")

const togglePass = document.getElementById("togglePass")

const nameCount = document.getElementById("nameCount")

const success = document.getElementById("success")


// hiển thị lỗi
function showError(id,msg){
document.getElementById(id+"Error").textContent = msg
}

// xóa lỗi
function clearError(id){
document.getElementById(id+"Error").textContent = ""
}


// validate họ tên
function validateFullname(){

let value = fullname.value.trim()

let regex = /^[A-Za-zÀ-ỹ\s]+$/

if(value.length < 3){
showError("fullname","Tên ≥ 3 ký tự")
return false
}

if(!regex.test(value)){
showError("fullname","Chỉ chứa chữ")
return false
}

clearError("fullname")
return true
}


// validate email
function validateEmail(){

let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(!regex.test(email.value)){
showError("email","Email không hợp lệ")
return false
}

clearError("email")
return true
}


// validate phone
function validatePhone(){

let regex = /^0\d{9}$/

if(!regex.test(phone.value)){
showError("phone","SĐT không hợp lệ")
return false
}

clearError("phone")
return true
}


// validate password
function validatePassword(){

let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

if(!regex.test(password.value)){
showError("password","Mật khẩu ≥8 ký tự có hoa thường số")
return false
}

clearError("password")
return true
}


// confirm password
function validateConfirm(){

if(password.value !== confirmPassword.value){
showError("confirmPassword","Không khớp")
return false
}

clearError("confirmPassword")
return true
}


// validate gender
function validateGender(){

let gender = document.querySelector('input[name="gender"]:checked')

if(!gender){
showError("gender","Chọn giới tính")
return false
}

clearError("gender")
return true
}


// validate terms
function validateTerms(){

if(!document.getElementById("terms").checked){
showError("terms","Phải đồng ý")
return false
}

clearError("terms")
return true
}


// submit
form.addEventListener("submit",function(e){

e.preventDefault()

let valid =
validateFullname() &
validateEmail() &
validatePhone() &
validatePassword() &
validateConfirm() &
validateGender() &
validateTerms()

if(valid){

form.style.display="none"

success.textContent="Đăng ký thành công 🎉 Xin chào "+fullname.value

}

})


// đếm ký tự họ tên
fullname.addEventListener("input",function(){

nameCount.textContent = fullname.value.length + "/50"

clearError("fullname")

})


// thanh độ mạnh mật khẩu
password.addEventListener("input",function(){

let value = password.value

let strength = 0

if(value.length >= 8) strength++
if(/[A-Z]/.test(value)) strength++
if(/[0-9]/.test(value)) strength++

if(strength === 1){

strengthBar.style.width="33%"
strengthBar.style.background="red"
strengthText.textContent="Yếu"

}

else if(strength === 2){

strengthBar.style.width="66%"
strengthBar.style.background="orange"
strengthText.textContent="Trung bình"

}

else if(strength === 3){

strengthBar.style.width="100%"
strengthBar.style.background="green"
strengthText.textContent="Mạnh"

}

})


// hiện / ẩn mật khẩu
togglePass.addEventListener("click",function(){

if(password.type === "password"){
password.type = "text"
}else{
password.type = "password"
}

})