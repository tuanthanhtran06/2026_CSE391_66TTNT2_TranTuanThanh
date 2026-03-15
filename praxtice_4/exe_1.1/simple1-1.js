const nameInput = document.getElementById("nameInput");
const scoreInput = document.getElementById("scoreInput");
const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("tableBody");
const stats = document.getElementById("stats");

let students = [];


function getRank(score){

    if(score >= 8.5) return "Giỏi";
    if(score >= 7) return "Khá";
    if(score >= 5) return "Trung bình";
    return "Yếu";

}


function renderTable(){

    tableBody.innerHTML = "";

    students.forEach((sv,index)=>{

        let tr = document.createElement("tr");

        if(sv.score < 5){
            tr.classList.add("low-score");
        }

        tr.innerHTML = `
        <td>${index+1}</td>
        <td>${sv.name}</td>
        <td>${sv.score}</td>
        <td>${getRank(sv.score)}</td>
        <td><button class="delete-btn" data-index="${index}">Xóa</button></td>
        `;

        tableBody.appendChild(tr);

    });

    updateStats();
}

function updateStats(){

    let total = students.length;

    let sum = 0;

    students.forEach(sv=>{
        sum += sv.score;
    });

    let avg = total ? (sum/total).toFixed(2) : 0;

    stats.textContent = `Tổng sinh viên: ${total} | Điểm trung bình: ${avg}`;

}


function addStudent(){

    let name = nameInput.value.trim();
    let score = parseFloat(scoreInput.value);

    if(name === "" || isNaN(score) || score < 0 || score > 10){
        alert("Dữ liệu không hợp lệ!");
        return;
    }

    students.push({
        name:name,
        score:score
    });

    renderTable();

    nameInput.value = "";
    scoreInput.value = "";
    nameInput.focus();
}


addBtn.addEventListener("click",addStudent);


scoreInput.addEventListener("keypress",function(e){

    if(e.key === "Enter"){
        addStudent();
    }

});


tableBody.addEventListener("click",function(e){

    if(e.target.classList.contains("delete-btn")){

        let index = e.target.dataset.index;

        students.splice(index,1);

        renderTable();
    }

});

