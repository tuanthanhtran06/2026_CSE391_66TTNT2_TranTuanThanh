const form = document.getElementById("orderForm")

const product = document.getElementById("product")
const quantity = document.getElementById("quantity")
const deliveryDate = document.getElementById("deliveryDate")
const address = document.getElementById("address")
const note = document.getElementById("note")

const total = document.getElementById("total")

const confirmBox = document.getElementById("confirmBox")
const summary = document.getElementById("summary")

const success = document.getElementById("success")

const noteCount = document.getElementById("noteCount")


// giá sản phẩm
const prices = {
Ao:150000,
Quan:200000,
Giay:300000
}


// hiển thị lỗi
function showError(id,msg){
document.getElementById(id+"Error").textContent = msg
}

// xóa lỗi
function clearError(id){
document.getElementById(id+"Error").textContent = ""
}


// validate sản phẩm
function validateProduct(){

if(product.value === ""){
showError("product","Phải chọn sản phẩm")
return false
}

clearError("product")
return true
}


// validate số lượng
function validateQuantity(){

let value = Number(quantity.value)

if(value < 1 || value > 99){
showError("quantity","Số lượng 1-99")
return false
}

clearError("quantity")
return true
}


// validate ngày
function validateDate(){

let selected = new Date(deliveryDate.value)

let today = new Date()

let max = new Date()
max.setDate(today.getDate()+30)

if(selected < today){
showError("date","Không chọn ngày quá khứ")
return false
}

if(selected > max){
showError("date","Không quá 30 ngày")
return false
}

clearError("date")
return true
}


// validate địa chỉ
function validateAddress(){

let value = address.value.trim()

if(value.length < 10){
showError("address","Địa chỉ ≥ 10 ký tự")
return false
}

clearError("address")
return true
}


// validate ghi chú
function validateNote(){

let value = note.value

if(value.length > 200){
showError("note","Tối đa 200 ký tự")
return false
}

clearError("note")
return true
}


// validate thanh toán
function validatePayment(){

let pay = document.querySelector('input[name="payment"]:checked')

if(!pay){
showError("payment","Chọn phương thức")
return false
}

clearError("payment")
return true
}



// tính tiền
function calculateTotal(){

let price = prices[product.value] || 0

let qty = Number(quantity.value) || 0

let money = price * qty

total.textContent = money.toLocaleString("vi-VN")
}


// đếm ký tự ghi chú
note.addEventListener("input",function(){

let length = note.value.length

noteCount.textContent = length + "/200"

if(length > 200){
noteCount.style.color = "red"
}else{
noteCount.style.color = "black"
}

clearError("note")
})


// tính tiền khi đổi sản phẩm hoặc số lượng
product.addEventListener("change",calculateTotal)
quantity.addEventListener("input",calculateTotal)


// validate blur
product.addEventListener("blur",validateProduct)
quantity.addEventListener("blur",validateQuantity)
deliveryDate.addEventListener("blur",validateDate)
address.addEventListener("blur",validateAddress)



// submit
form.addEventListener("submit",function(e){

e.preventDefault()

let valid =
validateProduct() &
validateQuantity() &
validateDate() &
validateAddress() &
validateNote() &
validatePayment()

if(valid){

let money = total.textContent

summary.textContent =
"Sản phẩm: "+product.value+
" | Số lượng: "+quantity.value+
" | Tổng tiền: "+money+
" | Ngày giao: "+deliveryDate.value

confirmBox.style.display = "block"

}

})



// xác nhận
document.getElementById("confirmBtn").onclick = function(){

confirmBox.style.display = "none"

form.style.display = "none"

success.textContent = "Đặt hàng thành công 🎉"

}


// hủy
document.getElementById("cancelBtn").onclick = function(){

confirmBox.style.display = "none"

}