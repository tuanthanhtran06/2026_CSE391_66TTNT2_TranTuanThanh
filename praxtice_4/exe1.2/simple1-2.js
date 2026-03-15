let students = [
    { id: 1, name: "Nguyễn Văn An", score: 8.5 },
    { id: 2, name: "Trần Thị Hoa", score: 6.8 },
    { id: 3, name: "Lê Văn Bình", score: 4.9 },
    { id: 4, name: "Phạm Minh Tuấn", score: 7.2 },
    { id: 5, name: "Hoàng Thu Trang", score: 9.0 }
];

let filteredStudents = [];
let currentKeyword = "";
let currentFilter = "all";
let currentSort = ""; // "", "asc", "desc"
let nextId = 6;

const nameInput = document.getElementById("studentName");
const scoreInput = document.getElementById("studentScore");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");
const tableBody = document.getElementById("tableBody");
const scoreHeader = document.getElementById("scoreHeader");
const sortIcon = document.getElementById("sortIcon");

function getType(score) {
    if (score >= 8) return "Giỏi";
    if (score >= 6.5) return "Khá";
    if (score >= 5) return "Trung bình";
    return "Yếu";
}

function renderTable() {
    tableBody.innerHTML = "";

    if (filteredStudents.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="5">Không có kết quả</td></tr>';
        return;
    }

    filteredStudents.forEach(function (student, index) {
        let row = document.createElement("tr");

        if (student.score < 5) {
            row.classList.add("low-score");
        }

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.score}</td>
            <td>${getType(student.score)}</td>
            <td><button class="delete-btn" onclick="deleteStudent(${student.id})">Xóa</button></td>
        `;

        tableBody.appendChild(row);
    });
}

function updateSortIcon() {
    if (currentSort === "asc") {
        sortIcon.textContent = " ▲";
    } else if (currentSort === "desc") {
        sortIcon.textContent = " ▼";
    } else {
        sortIcon.textContent = "";
    }
}

function applyFilters() {
    let temp = students.filter(function (student) {
        return student.name.toLowerCase().includes(currentKeyword);
    });

    if (currentFilter !== "all") {
        temp = temp.filter(function (student) {
            return getType(student.score) === currentFilter;
        });
    }

    if (currentSort === "asc") {
        temp.sort(function (a, b) {
            return a.score - b.score;
        });
    } else if (currentSort === "desc") {
        temp.sort(function (a, b) {
            return b.score - a.score;
        });
    }

    filteredStudents = temp;
    renderTable();
    updateSortIcon();
}

addBtn.addEventListener("click", function () {
    let name = nameInput.value.trim();
    let score = parseFloat(scoreInput.value);

    if (name === "" || isNaN(score)) {
        alert("Vui lòng nhập đủ tên và điểm");
        return;
    }

    students.push({
        id: nextId++,
        name: name,
        score: score
    });

    nameInput.value = "";
    scoreInput.value = "";

    applyFilters();
});

searchInput.addEventListener("input", function () {
    currentKeyword = searchInput.value.trim().toLowerCase();
    applyFilters();
});

filterSelect.addEventListener("change", function () {
    currentFilter = filterSelect.value;
    applyFilters();
});

scoreHeader.addEventListener("click", function () {
    if (currentSort === "asc") {
        currentSort = "desc";
    } else {
        currentSort = "asc";
    }
    applyFilters();
});

function deleteStudent(id) {
    students = students.filter(function (student) {
        return student.id !== id;
    });
    applyFilters();
}

applyFilters();