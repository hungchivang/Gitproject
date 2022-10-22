let index = 1;
let changeImage = function () {
    let images = ["anh1.jpg", "anh2.jpg", "anh3.jpg", "anh4.jpg"];
    document.getElementById("img").src = images[index];
    index++;
    if (index === 4) {
        index = 0;
    }
}
setInterval(changeImage, 4000);

class Object {
    name;
    phone;
    email;
    roomStyle;
    person;
    baby;
    checkin;
    checkout;

    constructor(name, phone, email, roomStyle, person, baby, checkin, checkout) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.roomStyle = roomStyle;
        this.person = person;
        this.baby = baby;
        this.checkin = checkin;
        this.checkout = checkout;
    }
}

let person1 = new Object("Âu Mạnh Tường", "0368568751", "Vantu@gmail.com", "Một giường đôi", 2, 0, "2022-10-20", "2022-10-30");
let person2 = new Object("Nguyễn Phi Hùng", "0366684662", "hungnguyen@gmail.com", "Hai giường đôi", 5, 2, "2022-11-14", "2022-11-18");
let person3 = new Object("Mai Minh Phương", "0974492555", "phuongcoi@gmail.com", "Ba giường đôi", 7, 0, "2022-12-5", "2022-12-30");
let person4 = new Object("Trần Văn Tú", "0398384812", "tu182@gmail.com", "Phòng VIP", 3, 1, "2022-7-15", "2022-10-14");
let Objects = [person1, person2, person3, person4];
let divshow = document.getElementById("show");

function show() {
    let srt = "";
    for (let i = 0; i < Objects.length; i++) {
        srt += "<tr>";
        srt += "<td>" + Objects[i].name + "</td>";
        srt += "<td>" + Objects[i].phone + "</td>";
        srt += "<td>" + Objects[i].email + "</td>";
        srt += "<td>" + Objects[i].roomStyle + "</td>";
        srt += "<td>" + Objects[i].person + "</td>";
        srt += "<td>" + Objects[i].baby + "</td>";
        srt += "<td>" + Objects[i].checkin + "</td>";
        srt += "<td>" + Objects[i].checkout + "</td>";
        srt += "<td><button style='background: lawngreen' onclick='sua(" + i + ")'>Sửa</button></td>";
        srt += "<td><button style='background: lawngreen' onclick='luu(" + i + ")'>Lưu</button></td>";
        srt += "<td><button style='background: lawngreen' onclick='xoa(" + i + ")'>Xóa</button></td>";
        srt += "</tr>";
    }
    divshow.innerHTML = srt;
}

show();

function add() {
    let name = document.getElementById("inputName").value;
    let phone = document.getElementById("inputPhone").value;
    let email = document.getElementById("inputEmail").value;
    let roomStyle = document.getElementById("inputRoom").value;
    let person = document.getElementById("inputPerson").value;
    let baby = document.getElementById("inputBaby").value;
    let checkin = document.getElementById("inputDayIn").value;
    let checkout = document.getElementById("inputDayOut").value;
    let newObjects = new Object(name, phone, email, roomStyle, person, baby, checkin, checkout)
    Objects.push(newObjects);
    show();
    Clear();
}

function Clear() {
    document.getElementById("inputName").value = "";
    document.getElementById("inputPhone").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputRoom").value = "";
    document.getElementById("inputPerson").value = "";
    document.getElementById("inputBaby").value = "";
    document.getElementById("inputDayIn").value = "";
    document.getElementById("inputDayOut").value = "";
}

function xoa(index) {
    Objects.splice(index, 1);
    show();
}

function sua(index) {
    document.getElementById("inputName").value = Objects[index].name;
    document.getElementById("inputPhone").value = Objects[index].phone;
    document.getElementById("inputEmail").value = Objects[index].email;
    document.getElementById("inputRoom").value = Objects[index].roomStyle;
    document.getElementById("inputPerson").value = Objects[index].person;
    document.getElementById("inputBaby").value = Objects[index].baby;
    document.getElementById("inputDayIn").value = Objects[index].checkin;
    document.getElementById("inputDayOut").value = Objects[index].checkout;
}

function luu(index) {
    let name = document.getElementById("inputName").value;
    let phone = document.getElementById("inputPhone").value;
    let email = document.getElementById("inputEmail").value;
    let roomStyle = document.getElementById("inputRoom").value;
    let person = document.getElementById("inputPerson").value;
    let baby = document.getElementById("inputBaby").value;
    let checkin = document.getElementById("inputDayIn").value;
    let checkout = document.getElementById("inputDayOut").value;
    let newObjects = new Object(name, phone, email, roomStyle, person, baby, checkin, checkout)
    Objects.splice(index, 1, newObjects);
    show();
    Clear();
}
function dieuhuong() {
    location.assign("trang chu chinh.html");
}