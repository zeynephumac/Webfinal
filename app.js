const studentsData = [
  {
      studentID: 20012,
      studentFName: "Elif",
      studentLName : "Demir",
      courseID: 103,
      midterm: 90,
      final : 70,
      gradingScale: 7
  },
  {
    studentID: 20012,
    studentFName: "Elif",
    studentLName : "Demir",
    courseID: 102,
    midterm: 80,
    final : 70,
    gradingScale: 10
  },
  {
      studentID: 21312,
      studentFName: "Ali",
      studentLName : "Demir",
      courseID: 102,
      midterm: 30,
      final : 64,
      gradingScale: 10
  },
  {
    studentID: 25543,
    studentFName: "Sena",
    studentLName : "Kılıç",
    courseID: 102,
    midterm: 92,
    final : 89,
    gradingScale: 10
  },
  {
    studentID: 23461,
    studentFName: "Ali",
    studentLName : "İl",
    courseID : 102,
    midterm: 30,
    final : 76,
    gradingScale: 10
  },
  {
    studentID: 26830,
    studentFName: "Aslı",
    studentLName : "Zeybek",
    courseID : 102,
    midterm: 80,
    final: 100,
    gradingScale: 10
  },
  {
    studentID: 26830,
    studentFName: "Aslı",
    studentLName : "Zeybek",
    courseID : 103,
    midterm: 90,
    final : 100,
    gradingScale: 7
  },
  {
    studentID: 28839,
    studentFName: "Efe",
    studentLName : "Kaygısız",
    courseID : 102,
    midterm: 12,
    final : 36,
    gradingScale: 10
  },
  {
    studentID: 23414,
    studentFName: "Mine",
    studentLName : "Seven",
    courseID : 102,
    midterm: 24,
    final : 74,
    gradingScale: 10
  },
  {
    studentID: 48389,
    studentFName: "Deniz",
    studentLName : "Akça",
    courseID: 304,
    midterm: 70,
    final : 80,
    gradingScale: 7
  },
  {
    studentID: 25224,
    studentFName: "Hafize",
    studentLName : "Zeybek",
    courseID : 304,
    midterm: 10,
    final : 34,
    gradingScale: 7
  },
  {
    studentID: 25321,
    studentFName: "Canan",
    studentLName : "Zeybek",
    courseID : 304,
    midterm: 14,
    final : 35,
    gradingScale: 7
  },
  {
    studentID: 13443,
    studentFName: "Metin",
    studentLName : "Kaygısız",
    courseID : 210,
    midterm: 89,
    final : 67,
    gradingScale: 10
  },
  {
    studentID: 23452,
    studentFName: "Güven",
    studentLName : "Karakuş",
    courseID : 507,
    midterm: 34,
    final : 52,
    gradingScale: 10
  },
  {
    studentID: 98732,
    studentFName: "Murat",
    studentLName : "Akça",
    courseID: 507,
    midterm: 50,
    final : 65,
    gradingScale: 10
  },
  {
    studentID: 15834,
    studentFName: "Leman",
    studentLName : "Akça",
    courseID : 210,
    midterm: 90,
    final : 90,
    gradingScale: 10
  },
  {
    studentID: 12342,
    studentFName: "Zeliha",
    studentLName : "Ballıoğlu",
    courseID: 102,
    midterm: 50,
    final : 80,
    gradingScale: 10
  },
  {
    studentID: 43563,
    studentFName: "Vahit",
    studentLName : "Ballıoğlu",
    courseID: 103,
    midterm: 49,
    final : 61,
    gradingScale: 7
  },
  {
    studentID: 14575,
    studentFName: "Sabit",
    studentLName : "Ballıoğlu",
    courseID: 102,
    midterm: 40,
    final : 70,
    gradingScale: 10
  },
  {
    studentID: 29024,
    studentFName: "Nuray",
    studentLName : "Uslu",
    courseID: 304,
    midterm: 70,
    final : 75,
    gradingScale: 7
  },
  {
    studentID: 82024,
    studentFName: "Ayça",
    studentLName : "Mutlugil",
    courseID: 304,
    midterm: 92,
    final : 13,
    gradingScale: 7
  },
  {
    studentID: 13414,
    studentFName: "Okan",
    studentLName : "Selvi",
    courseID: 102,
    midterm: 78,
    final : 70,
    gradingScale: 10
  },
  {
    studentID: 12342,
    studentFName: "Volkan",
    studentLName : "Girgin",
    courseID : 102,
    midterm: 84,
    final : 70,
    gradingScale: 10
  },
  {
    studentID: 83293,
    studentFName: "Olgun",
    studentLName : "Şimşek",
    courseID: 507,
    midterm: 43,
    final : 87,
    gradingScale: 10
  },
  {
    studentID: 23241,
    studentFName: "Aşkın",
    studentLName : "Şenol",
    courseID: 102,
    midterm: 90,
    final : 70,
    gradingScale: 10
  },
  {
    studentID: 98903,
    studentFName: "Ruhi",
    studentLName : "Sarı",
    courseID: 304,
    midterm: 20,
    final : 60,
    gradingScale: 7
  },
  {
    studentID: 24105,
    studentFName: "Yaman",
    studentLName : "Koper",
    courseID: 507,
    midterm: 50,
    final : 40,
    gradingScale: 10
  },
  {
    studentID: 87425,
    studentFName: "Kuzey",
    studentLName : "Tekinoğlu",
    courseID : 507,
    midterm: 84,
    final : 20,
    gradingScale: 10
  },
  {
    studentID: 63728,
    studentFName: "Emir",
    studentLName : "Sarrafoğlu",
    courseID : 103,
    midterm: 64,
    final : 72,
    gradingScale: 7
  },
  {
    studentID: 76899,
    studentFName: "Feriha",
    studentLName : "Yılmaz",
    courseID : 507,
    midterm: 90,
    final : 99,
    gradingScale: 10
  },
  {
    studentID: 72894,
    studentFName: "İrfan",
    studentLName : "Alkara",
    courseID : 304,
    midterm: 64,
    final : 87,
    gradingScale: 7
  },
  {
    studentID: 82782,
    studentFName: "Ecevit",
    studentLName : "Uran",
    courseID : 304,
    midterm: 100,
    final : 90,
    gradingScale: 7
  },
  {
    studentID: 13983,
    studentFName: "Ahu",
    studentLName : "Kumral",
    courseID : 103,
    midterm: 90,
    final : 80,
    gradingScale: 7
  },
  {
    studentID: 28732,
    studentFName: "Bilal",
    studentLName : "Tutkun",
    courseID : 210,
    midterm: 38,
    final : 63,
    gradingScale: 10
  },
  {
    studentID: 27380,
    studentFName: "Gurur",
    studentLName : "Kutay",
    courseID : 102,
    midterm: 89,
    final : 67,
    gradingScale: 10
  },
  {
    studentID: 23872,
    studentFName: "Zeki",
    studentLName : "Sinanlı",
    courseID : 103,
    midterm: 64,
    final : 87,
    gradingScale: 7
  },
  {
    studentID: 79402,
    studentFNamename: "Ali",
    studentLName : "Akarsu",
    courseID : 304,
    midterm: 23,
    final : 45,
    gradingScale: 7
  },
  {
    studentID: 78290,
    studentFName: "Bihter",
    studentLName : "Ziyagil",
    courseID : 210,
    midterm: 78,
    final: 53,
    gradingScale: 10
  },
  {
    studentID: 72890,
    studentFName: "Behlül",
    studentLName : "Haznedar",
    courseID : 304,
    midterm: 90,
    final : 37,
    gradingScale: 7
  },
  {
    studentID: 76490,
    studentFName: "Firdevs",
    studentLName : "Yöreoğlu",
    courseID : 210,
    midterm: 99,
    final : 88,
    gradingScale: 10
  },
  {
    studentID: 76490,
    studentFName: "Firdevs",
    studentLName : "Yöreoğlu",
    courseID : 304,
    midterm: 99,
    final : 88,
    gradingScale: 7
  },
  {
    studentID: 23982,
    studentFName: "Kıraç",
    studentLName : "Özdal",
    courseID : 210,
    midterm: 98,
    final : 77,
    gradingScale: 10
  },
  {
    studentID: 26789,
    studentFName: "Dicle",
    studentLName : "Ertem",
    courseID : 507,
    midterm: 90,
    final : 90,
    gradingScale: 10
  },
  {
    studentID: 54880,
    studentFName: "Feris",
    studentLName : "Dikmen",
    courseID : 507,
    midterm: 99,
    final : 99,
    gradingScale: 10
  },
  {
    studentID: 38909,
    studentFName: "Barış",
    studentLName : "Havas",
    courseID : 210,
    midterm: 60,
    final : 50,
    gradingScale: 10
  },
  {
    studentID: 24500,
    studentFName: "Yamaç",
    studentLName : "Koçovalı",
    courseID : 210,
    midterm: 34,
    final: 90,
    gradingScale: 10
  },
  {
    studentID: 74893,
    studentFName: "Akgün Gökalp",
    studentLName : "Taşkın",
    courseID : 507,
    midterm:50,
    final : 99,
    gradingScale: 10
  },
  {
    studentID: 93894,
    studentFName: "Selim",
    studentLName : "Kara",
    courseID : 210,
    midterm: 90,
    final: 99,
    gradingScale: 10
  },
  {
    studentID: 48332,
    studentFName: "Soner",
    studentLName : "Sancaktar",
    courseID : 507,
    midterm: 50,
    final : 60,
    gradingScale: 10
  },
  {
    studentID: 48332,
    studentFName: "Soner",
    studentLName : "Sancaktar",
    courseID : 304,
    midterm: 60,
    final : 55,
    gradingScale: 7
  },
  {
    studentID: 34839,
    studentFName: "Eray",
    studentLName : "Duraner",
    courseID : 210,
    midterm: 20,
    final : 60,
    gradingScale: 10
  },
  {
    studentID: 38909,
    studentFName: "Ahmet",
    studentLName : "Tunalı",
    courseID : 102,
    midterm: 60,
    final : 50,
    gradingScale: 10
  },
  {
    studentID: 98832,
    studentFName: "Ahmet Poyraz",
    studentLName : "Karayel",
    courseID : 507,
    midterm: 40,
    final : 90,
    gradingScale: 10
  },
  {
    studentID: 30085,
    studentFName: "Ayşegül",
    studentLName : "Umman",
    courseID : 103,
    midterm: 90,
    final : 97,
    gradingScale: 7
  },
  {
    studentID: 88393,
    studentFName: "Cemile",
    studentLName : "Karaboğa",
    courseID : 304,
    midterm: 38,
    final : 87,
    gradingScale: 7
  },
  {
    studentID: 29380,
    studentFName: "Caroline",
    studentLName : "Enke",
    courseID : 210,
    midterm: 40,
    final : 20,
    gradingScale: 10
  },
  {
    studentID: 29489,
    studentFName: "Soner",
    studentLName : "Talaşoğlu",
    courseID : 507,
    midterm: 90,
    final : 99,
    gradingScale: 10
  },
  {
    studentID: 22422,
    studentFName: "Hakan",
    studentLName : "Tatlıoğlu",
    courseID : 103,
    midterm: 77,
    final : 80,
    gradingScale: 7
  },
  {
    studentID: 28790,
    studentFName: "Safiye",
    studentLName : "Derenoğlu",
    courseID : 304, 
    midterm: 80,
    final : 90,
    gradingScale: 7
  },
  {
    studentID: 22420,
    studentFName: "Esat",
    studentLName : "Bilen",
    courseID: 304,
    midterm: 60,
    final : 80,
    gradingScale: 7
  },
  {
    studentID: 25901,
    studentFName: "Naci",
    studentLName : "Ataç",
    courseID : 103,
    midterm: 40,
    final : 70,
    gradingScale: 7
  },
  {
    studentID: 39032,
    studentFName: "İnci",
    studentLName : "Özdemir",
    courseID : 102,
    midterm: 90,
    final : 70,
    gradingScale: 10
  },
  {
    studentID: 24092,
    studentFName: "Celal",
    studentLName : "Kün",
    courseID : 102,
    midterm: 90,
    final : 80,
    gradingScale: 10
  },
  {
    studentID: 23295,
    studentFName: "Mahur",
    studentLName : "Türel",
    courseID : 102,
    midterm: 50,
    final : 90,
    gradingScale: 10
  },
  {
    studentID: 34001,
    studentFName: "Savaş",
    studentLName : "Yıldırım",
    courseID : 210,
    midterm: 60,
    final : 90,
    gradingScale: 10
  },
  {
    studentID: 29000,
    studentFName: "Mecnun",
    studentLName : "Çınar",
    courseID : 210,
    midterm: 30,
    final : 70,
    gradingScale: 10
  },
  {
    studentID: 26772,
    studentFName: "Leyla",
    studentLName : "Çevik",
    courseID : 210,
    midterm: 40,
    final : 90,
    gradingScale: 10
  },
  {
    studentID: 13224,
    studentFName: "Ahmet",
    studentLName : "Özdemir",
    courseID : 103,
    midterm: 90,
    final : 60,
    gradingScale: 7
  },
  {
    studentID: 90225,
    studentFName: "Gülden",
    studentLName : "Petek",
    courseID : 304,
    midterm: 98,
    final : 78,
    gradingScale: 7
  },
  {
    studentID: 24912,
    studentFName: "Sami",
    studentLName : "Adıgüzel",
    courseID : 210,
    midterm: 40,
    final : 60,
    gradingScale: 10
  },
  {
    studentID: 89309,
    studentFName: "Rıza",
    studentLName : "Çakıroğlu",
    courseID : 210,
    midterm: 50,
    final : 90,
    gradingScale: 10
  },
  {
    studentID: 12439,
    studentFName: "Şahin",
    studentLName : "Balcı",
    courseID : 507,
    midterm: 20,
    final : 50,
    gradingScale: 10
  },
  {
    studentID: 85399,
    studentFName: "Burhan",
    studentLName : "Altıntop",
    courseID : 507,
    midterm: 34,
    final : 74,
    gradingScale: 10
  },
  {
    studentID: 93923,
    studentFName: "Süleyman",
    studentLName : "Çakır",
    courseID : 304,
    midterm: 48,
    final : 99,
    gradingScale: 7
  },
  {
    studentID: 23989,
    studentFName: "Ramiz",
    studentLName : "Karaeski",
    courseID : 210,
    midterm: 70,
    final: 40,
    gradingScale: 10
  },
  {
    studentID: 33900,
    studentFName: "Polat",
    studentLName : "Alemdar",
    courseID : 210,
    midterm: 20,
    final : 94,
    gradingScale: 10
  },
  {
    studentID: 23990,
    studentFName: "Memati",
    studentLName : "Baş",
    courseID : 102,
    midterm: 40,
    final : 70,
    gradingScale: 10
  },
  {
    studentID: 53312,
    studentFName: "Ezel",
    studentLName : "Bayraktar",
    courseID : 507,
    midterm: 78,
    final : 54,
    gradingScale: 10
  },
  {
    studentID: 18729,
    studentFName: "Şahika",
    studentLName : "Koçarslanlı",
    courseID : 210,
    midterm: 83,
    final : 23,
    gradingScale: 10
  },
  {
    studentID: 74832,
    studentFName: "Nazlı",
    studentLName : "Baklavacıoğlu",
    courseID : 103,
    midterm: 78,
    final : 89,
    gradingScale: 7
  },
  {
    studentID: 38920,
    studentFName: "Niko",
    studentLName : "Angelopoulos",
    courseID : 103,
    midterm: 89,
    final : 94,
    gradingScale: 7
  },
  {
    studentID: 23849,
    studentFName: "Afet",
    studentLName : "Güçverir",
    courseID : 210,
    midterm: 90,
    final : 90,
    gradingScale: 10
  },
  {
    studentID: 25322,
    studentFName: "Mesut",
    studentLName : "Güneri",
    courseID : 102,
    midterm: 90,
    final : 70,
    gradingScale: 10
  },
  {
    studentID: 25322,
    studentFName: "Hüsnü",
    studentLName : "Çoban",
    courseID : 210,
    midterm: 50,
    final : 40,
    gradingScale: 10
  },
  {
    studentID: 78905,
    studentFName: "Elif",
    studentLName : "Eylül",
    courseID : 304,
    midterm: 40,
    final : 90,
    gradingScale: 7
  },
  {
    studentID: 84799,
    studentFName: "Aslan",
    studentLName : "İbrahimoğlu",
    courseID : 507,
    midterm: 90,
    final : 90,
    gradingScale: 10
  },
  {
    studentID: 43593,
    studentFName: "Zenan",
    studentLName : "Parlar",
    courseID : 507,
    midterm: 98,
    final : 96,
    gradingScale: 10
  },
  {
    studentID: 78893,
    studentFName: "Süreyya",
    studentLName : "Boran",
    courseID : 103,
    midterm: 78,
    final : 98,
    gradingScale: 7
  },
  {
    studentID: 48943,
    studentFName: "Ela",
    studentLName : "Altındağ",
    courseID : 210,
    midterm: 90,
    final : 67,
    gradingScale: 10
  },
  {
    studentID: 38490,
    studentFName: "Adem",
    studentLName : "Sezgin",
    courseID : 210,
    midterm: 89,
    final : 64,
    gradingScale: 10
  },
  {
    studentID: 89403,
    studentFName: "Cansu",
    studentLName : "İlhanlı",
    courseID : 103,
    midterm: 25,
    final : 54,
    gradingScale: 7
  },
  {
    studentID: 32903,
    studentFName: "Koray",
    studentLName : "Sargın",
    courseID : 102,
    midterm: 50,
    final : 60,
    gradingScale: 10
  }
];

const coursesData = [
{
    courseID: 102,
    courseName: "Web Development",
    courseCredit : 6,
    gradingScale: 10,
    gradingScale: 10
},
{
  courseID: 103,
  courseName: "Database Management System",
  courseCredit : 6,
  gradingScale: 7,
},
{
courseID: 210,
courseName: "Artificial Intelligence",
courseCredit : 6,
gradingScale: 10
},
{
courseID: 304,
courseName: "Calculus",
courseCredit : 5,
gradingScale: 7
},
{
courseID: 507,
courseName: "Computer Organization",
courseCredit :5,
gradingScale: 10
}  
];


//displays students from studentsData
function students() {
  const studentList = document.getElementById('studentList');
  studentList.innerHTML = '';

  if (studentsData.length === 0) {
    studentList.innerHTML = '<p>Öğrenci yok</p>';
  } else {
    studentsData.forEach(student => {
      const score = (0.4 * student.midterm) + (0.6 *student.final); // calculates score according to midterm and final
      let grade = calculateGrade(score, student.gradingScale);
      const passFail = grade === 'F' ? 'Fail' : 'Pass';
      const studentDiv = `<tr>
          <td>${student.courseID}</td>
          <td>${student.studentID}</td>
          <td>${student.studentFName}</td>
          <td>${student.studentLName}</td>
          <td>${student.midterm}</td>
          <td>${student.final}</td>
          <td>${score}</td>
          <td>${grade}</td>
          <td>${passFail}</td>
        </tr>`;
        studentList.innerHTML+=studentDiv
    });
  }
}
window.onload = students;

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("addStudentForm").style.display = "none";
});

//this function calculates grade letter according to score and grading scale
function calculateGrade(score, gradingScale) {
  let grade = '';
  //if grading scale is 10
  if (gradingScale === 10) {
    if (score >= 90 && score <= 100) {
      grade = 'A';
    } else if (score >= 80 && score < 90) {
      grade = 'B';
    } else if (score >= 70 && score < 80) {
      grade = 'C';
    } else if (score >= 60 && score < 70) {
      grade = 'D';
    } else {
      grade = 'F';
    }
     //if grading scale is 7
  } else if (gradingScale === 7) {
    if (score >= 93 && score <= 100) {
      grade = 'A';
    } else if (score >= 85 && score < 93) {
      grade = 'B';
    } else if (score >= 77 && score < 85) {
      grade = 'C';
    } else if (score >= 70 && score < 77) {
      grade = 'D';
    } else {
      grade = 'F';
    }
  }

  return grade;
}

//check if student in table
function studenthere(studentID, courseID) {
  const localstudents = JSON.parse(localStorage.getItem('students')) || [];
  const arrayStudents = studentsData;

  // check localstorage and array data
  const isInLocal = localstudents.some(student => student.courseID === courseID && student.studentID === studentID);
  const isInArray = arrayStudents.some(student => student.courseID === courseID && student.studentID === studentID);

  return isInLocal || isInArray;
}


// it adds new student to local storage
function addStudent() {
  var studentID = document.getElementById("studentID").value;
  var courseID = document.getElementById("courseID").value;
  var studentFName = document.getElementById("studentFName").value;
  var studentLName = document.getElementById("studentLName").value;
  var midterm = document.getElementById("midterm").value;
  var final = document.getElementById("final").value;
  var gradingScale = document.getElementById("gradingScale").value;

  if (studenthere(courseID, studentID)) {
    alert("The student already registered");
    return;
  }

  var student = {
    studentID: studentID,
    courseID: courseID,
    studentFName: studentFName,
    studentLName: studentLName,
    midterm: midterm,
    final: final,
    gradingScale : gradingScale
  };

  var students = JSON.parse(localStorage.getItem("students")) || [];

  students.push(student);

  localStorage.setItem("students", JSON.stringify(students));

  closeAddStudentForm();
  alert("The student added successfully, please reload page");
}

function showAddStudentForm() {
  document.getElementById("addStudentForm").style.display = "block";
}

function closeAddStudentForm() {
  document.getElementById("addStudentForm").style.display = "none";
}


//display students from local storage
function localStudents() {
  const studentList = document.getElementById('studentList');
  studentList.innerHTML = '';
  const localstudents = JSON.parse(localStorage.getItem('students')) || [];

  if (localstudents.length === 0) {
    studentList.innerHTML = '<p>Öğrenci yok</p>';
  } else {
    localstudents.forEach(student => {
      const score = (0.4 * student.midterm) + (0.6 * student.final);
      let grade = calculateGrade(score, student.gradingScale);
      const passFail = grade === 'F' ? 'Fail' : 'Pass';
      const studentRow = `<tr>
          <td>${student.courseID}</td>
          <td>${student.studentID}</td>
          <td>${student.studentFName}</td>
          <td>${student.studentLName}</td>
          <td>${student.midterm}</td>
          <td>${student.final}</td>
          <td>${score}</td>
          <td>${grade}</td>
          <td>${passFail}</td>
        </tr>`;
      studentList.insertAdjacentHTML('beforeend', studentRow);
    });
  }
}

window.onload = localStudents;

//display both of them
function displayStudents(studentList, studentsData) {
  studentList.innerHTML = '';

  if (studentsData.length === 0) {
    studentList.innerHTML = '<p>Öğrenci yok</p>';
  } else {
    studentsData.forEach(student => {
      const score = (0.4 * student.midterm) + (0.6 * student.final);
      let grade = calculateGrade(score, student.gradingScale);
      const passFail = grade === 'F' ? 'Fail' : 'Pass';
      const studentRow = `<tr id="student-${student.studentID}">
          <td>${student.courseID}</td>
          <td>${student.studentID}</td>
          <td>${student.studentFName}</td>
          <td>${student.studentLName}</td>
          <td>${student.midterm}</td>
          <td>${student.final}</td>
          <td>${score}</td>
          <td>${grade}</td>
          <td>${passFail}</td>
          <td><button style="background-color: #191970; border-radius: 10px; color: #ECEFF1; padding: 10px;" onclick="deleteStudent(${student.studentID})">Delete</button></td>
        </tr>`;
      studentList.insertAdjacentHTML('beforeend', studentRow);
    });
  }
}


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("addStudentForm").style.display = "none";

  const studentList1 = document.getElementById('studentList1');
  const studentList2 = document.getElementById('studentList2');

  const localStudentsData = JSON.parse(localStorage.getItem('students')) || [];

  displayStudents(studentList1, studentsData);
  displayStudents(studentList2, localStudentsData);
});

//delete student row
function deleteStudent(studentID) {
  const studentRow = document.getElementById(`student-${studentID}`);
  
  if (studentRow) {
      studentRow.remove();
      return true;
  }

  return false;
}

//delete course row
function deleteCourse(courseID) {
  const courseRow = document.getElementById(`course-${courseID}`);
  
  if (courseRow) {
      courseRow.remove();
      return true;
  }

  return false;
}


// displays courses from coursesData
function courses() {
  const courseList = document.getElementById('courseList');
  courseList.innerHTML = '';

  if (coursesData.length === 0) {
    courseList.innerHTML = '<p>Öğrenci yok</p>';
  } else {
    coursesData.forEach(course => {
      const courseDiv = `<tr>
          <td>${course.courseID}</td>
          <td>${course.courseName}</td>
          <td>${course.courseCredit}</td>
          <td>${course.gradingScale}</td>
        </tr>`;
        courseList.innerHTML+=courseDiv
    });
  }
}
window.onload = courses;

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("addCourseForm").style.display = "none";
});

//check if course in table
function coursehere(courseID) {
  const localCourses = JSON.parse(localStorage.getItem('courses')) || [];
  const arraycourses = coursesData;

  // check localstorage and array data
  const isInLocal = localCourses.some(course => course.courseID === courseID);
  const isInArray = arraycourses.some(course => course.courseID === courseID);

  return isInLocal || isInArray;
}

//it addes new course to local storage
function addCourse() {

  var courseID = document.getElementById("courseID").value;
  var courseName = document.getElementById("courseName").value;
  var courseCredit = document.getElementById("courseCredit").value;
  var gradingScale = document.getElementById("gradingScale").value;

  if (coursehere(courseID)) {
    alert("The course already in table");
    return;
  }

  var course = {
    courseID: courseID,
    courseName: courseName,
    courseCredit: courseCredit,
    gradingScale: gradingScale,

  };

  var courses = JSON.parse(localStorage.getItem("courses")) || [];

    courses.push(course);

    //add local storage
    localStorage.setItem("courses", JSON.stringify(courses));

    closeAddCourseForm();
    localCourses();
}

function showAddCourseForm() {
  document.getElementById("addCourseForm").style.display = "block";
}



//displays courses in local storage
function localCourses() {
  const courseList = document.getElementById('courseList');
  courseList.innerHTML = '';

  const localcourses = JSON.parse(localStorage.getItem('courses')) || [];

  if (localcourses.length === 0) {
    courseList.innerHTML = '<p>No added courses</p>';
  } else {
    localcourses.forEach(course => {
      const courseRow = `<tr>
          <td>${course.courseID}</td>
          <td>${course.courseName}</td>
          <td>${course.courseCredit}</td>
          <td>${course.gradingScale}</td>
        </tr>`;
      courseList.insertAdjacentHTML('beforeend', courseRow);
    });
  }
}

// call localCourses when the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  localCourses();
});


//displays courses from coursesData
function displayCourses(courseList, coursesData) {
  courseList.innerHTML = '';

  if (coursesData.length === 0) {
    courseList.innerHTML = '<p>kurs yok</p>';
  } else {
    coursesData.forEach(course => {
      const courseRow = `<tr id="course-${course.courseID}">
      <td>${course.courseID}</td>
      <td>${course.courseName}</td>
      <td>${course.courseCredit}</td>
      <td>${course.gradingScale}</td>
      <td><button style="background-color: #191970; border-radius: 10px; color: #ECEFF1; padding: 10px;" onclick="deleteCourse(${course.courseID})">Delete</button></td>
    </tr>`;
      courseList.insertAdjacentHTML('beforeend', courseRow);
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("addCourseForm").style.display = "none";

  const courseList1 = document.getElementById('courseList1');
  const courseList2 = document.getElementById('courseList2');

  const localCoursesData = JSON.parse(localStorage.getItem('courses')) || [];

  displayCourses(courseList1, coursesData);
  displayCourses(courseList2, localCoursesData);
});

function closeAddCourseForm() {
  document.getElementById("addCourseForm").style.display = "none";
}


//search students from table
function searchStudents(e) {
  const searchbox = document.getElementById("searchbox");
  const rows = document.querySelectorAll("tbody tr");

  searchbox.addEventListener("input", function(event){
    const q = event.target.value.toLowerCase();
    rows.forEach(row => {
      const courseID = row.querySelector("td:nth-child(1)").textContent.toLowerCase();
      const studentID = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
      const firstName = row.querySelector("td:nth-child(3)").textContent.toLowerCase();
      const lastName = row.querySelector("td:nth-child(4)").textContent.toLowerCase();

      const matchesSearch = (
        courseID.startsWith(q) ||
        studentID.startsWith(q) ||
        firstName.startsWith(q) ||
        lastName.startsWith(q)
      );

      matchesSearch ? null : (row.style.display = "none");
    });
  });
}






