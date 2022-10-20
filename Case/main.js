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

let person1 = new Object("Âu Mạnh Tường", "0368568751", "Vantu@gmail.com", "Một giường đôi", 2, 0, "20/10/2022", "30/10/2022");
let person2 = new Object("Nguyễn Phi Hùng", "0366684662", "hungnguyen@gmail.com", "Hai giường đôi", 5, 2, "14/11/2022", "18/11/2022");
let person3 = new Object("Mai Minh Phương", "0974492555", "phuongcoi@gmail.com", "Ba giường đôi", 7, 0, "20/9/2022", "5/10/2022");
let person4 = new Object("Trần Văn Tú", "0398384812", "tu182@gmail.com", "Phòng VIP", 3, 1, "15/7/2022", "14/10/2022");
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



}


