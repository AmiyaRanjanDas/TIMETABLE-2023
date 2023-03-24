//-------------local host name----------------

let nowName, nowGroup;
// console.log(localStorage.getItem("UserNameUp1"));
if (localStorage.getItem("UserNameUp1") === null) {
    AddName();
}
else {
    nowName = localStorage.getItem("UserNameUp1");
    nowGroup = localStorage.getItem("Group");
    document.getElementById("UserName").innerHTML = nowName;
}

function AddName() {
    var UserName1 = prompt("Enter your Name");
    var Group1 = prompt("Enter Your Group A1 or A2:");
    if (UserName1.length < 3 || Group1 != "A1" && Group1 != "A2") {
        // console.log("Invalid Input !!");
        var just = confirm("Invalid Credentials");
        if (just) {
            EditName();
        }
    }
    else {
        localStorage.setItem("UserNameUp1", UserName1);
        localStorage.setItem("Group", Group1);
    }
    nowName = localStorage.getItem("UserNameUp1");
    nowGroup = localStorage.getItem("Group");
    document.getElementById("UserName").innerHTML = nowName;
}


function EditName() {
    var UserName2 = prompt("Enter your Name", nowName);
    var Group2 = prompt("Enter Your Group A1 or A2:", nowGroup);

    if (UserName2.length < 3 || Group2 != "A1" && Group2 != "A2") {
        // console.log("Invalid Input !!");
        var just = confirm("Invalid Credentials");
        if (just) {
            EditName();
        }
    }
    else {
        localStorage.setItem("UserNameUp1", UserName2);
        localStorage.setItem("Group", Group2);
    }
    nowName = localStorage.getItem("UserNameUp1");
    nowGroup = localStorage.getItem("Group");
    document.getElementById("UserName").innerHTML = nowName;

}

// ----------TimeLine----------

let maintime = document.getElementById("mainTime");
const myDate = () => {
    const d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let day = d.getDay();
    if (day == 1)
        day = "MON";
    else if (day == 2)
        day = "TUES";
    else if (day == 3)
        day = "WED";
    else if (day == 4)
        day = "THU";
    else if (day == 5)
        day = "FRI";
    else if (day == 6)
        day = "SAT";
    else
        day = "SUN";
    if (hour < 10) { hour = "0" + hour }
    if (min < 10) { min = "0" + min }
    if (sec < 10) { sec = "0" + sec }
    if (hour > 12) {
        hour = hour % 12;
        if (hour < 10) { hour = "0" + hour }
        maintime.innerHTML = "(" + day + ") " + hour + ":" + min + ":" + sec + " p.m.";
    }
    else {
        maintime.innerHTML = "(" + day + ") " + hour + ":" + min + ":" + sec + " a.m.";
    }
}
myDate();
setInterval(myDate, 1000);


// -------------Logicssss--------------

const d = new Date();
let hour = d.getHours();
let min = d.getMinutes();
let day = d.getDay();
let time = hour + min / 100;
// console.log(day,time);
let fp = document.getElementById("firstPeriod");
let ft = document.getElementById("firstTime");
let sp = document.getElementById("secondPeriod");
let st = document.getElementById("secondTime");
let countdown;

function updateTimeTable() {
    if (day == 1) {
        if (time < 17.10 && time > 15.20) {
            if (nowGroup == "A1") {
                fp.innerHTML = ("DBMS-LAB || RoomNo:#465");
                ft.innerHTML = ("03:20 - 05:10");
            }
            else {
                fp.innerHTML = ("PDS-LAB || RoomNo:#309");
                ft.innerHTML = ("03:20 - 05:10");
            }
            sp.innerHTML = ("--NO CLASSES--");
            st.innerHTML = ("");
            countdown = "";
        }
        else if (time < 15.20 && time > 14.25) {
            fp.innerHTML = ("E-Commerce || RoomNo:#431");
            ft.innerHTML = ("02:25 - 03.20");
            if (nowGroup == "A1") {
                sp.innerHTML = ("DBMS-LAB || RoomNo:#465");
                st.innerHTML = ("03:20 - 05:10");
            }
            else {
                sp.innerHTML = ("PDS-LAB || RoomNo:#309");
                st.innerHTML = ("03:20 - 05:10");
            }
            countdown = "15.20";
        }
        else if (time < 14.25 && time > 13.30) {
            fp.innerHTML = ("--LUNCH BREAK--");
            ft.innerHTML = ("01:30 - 02.25");
            sp.innerHTML = ("E-Commerce || RoomNo:#431");
            st.innerHTML = ("02:25 - 03.20");
            countdown = "14.25";
        }
        else if (time < 13.30 && time > 12.35) {
            fp.innerHTML = ("SEU || RoomNo:#435");
            ft.innerHTML = ("12:35 - 01.30");
            sp.innerHTML = ("LUNCH -> E-Commerce || RoomNo:#431");
            st.innerHTML = ("01:30 - 02.25");
            countdown = "14.25";
        }
        else if (time < 12.35 && time > 11.40) {
            fp.innerHTML = ("DBMS || RoomNo:#435");
            ft.innerHTML = ("11:40 - 12.35");
            sp.innerHTML = ("SEU || RoomNo:435");
            st.innerHTML = ("12:35 - 01.30");
            countdown = "12.35";
        }
        else if (time < 11.40 && time > 10.45) {
            fp.innerHTML = ("DataStructure || RoomNo:#435");
            ft.innerHTML = ("10:45 - 11.40");
            sp.innerHTML = ("DBMS || RoomNo:#435");
            st.innerHTML = ("11:40 - 12.35");
            countdown = "11.40";
        }
        else if (time < 10.45) {
            fp.innerHTML = ("--NO CLASSES--");
            ft.innerHTML = ("");
            sp.innerHTML = ("DataStructure || RoomNo:#435");
            st.innerHTML = ("(MON) 10:45 - 11.40");
            countdown = "10.45";
        }
        else {
            fp.innerHTML = ("--NO CLASSES--");
            ft.innerHTML = ("");
            sp.innerHTML = ("Tommorow Classes:" + "<br/>" + " E-Commerce || RoomNo:#431");
            st.innerHTML = ("(TUES) 09:50 - 10:45");
            countdown = "";
        }
    }
    else if (day == 2) {
        if (time < 17.10 && time > 15.20) {
            if (nowGroup == "A1") {
                fp.innerHTML = ("SEU-LAB || RoomNo:#466");
                ft.innerHTML = ("03:20 - 05:10");
            }
            else {
                fp.innerHTML = ("DataStructure-LAB || RoomNo:#465");
                ft.innerHTML = ("03:20 - 05:10");
            }
            sp.innerHTML = ("--NO CLASSES--");
            st.innerHTML = ("");
            countdown = "";
        }
        else if (time < 15.20 && time > 14.25) {
            fp.innerHTML = ("JAVA || RoomNo:#467");
            ft.innerHTML = ("02:25 - 03.20");
            if (nowGroup == "A1") {
                sp.innerHTML = ("SEU-LAB || RoomNo:#466");
                st.innerHTML = ("03:20 - 05:10");
            }
            else {
                sp.innerHTML = ("DataStructure-LAB || RoomNo:#465");
                st.innerHTML = ("03:20 - 05:10");
            }
            countdown = "15.20";
        }
        else if (time < 14.25 && time > 13.30) {
            fp.innerHTML = ("SEU || RoomNo:#467");
            ft.innerHTML = ("01:30 - 02:25");
            sp.innerHTML = ("JAVA || RoomNo:#467");
            st.innerHTML = ("02:25 - 03:20");
            countdown = "14.25";
        }
        else if (time < 13.30 && time > 12.35) {
            fp.innerHTML = ("--LUNCH BREAK--");
            ft.innerHTML = ("12:35 - 01.30");
            sp.innerHTML = ("SEU || RoomNo:#467");
            st.innerHTML = ("01:30 - 02:25");
            countdown = "13.30";
        }
        else if (time < 12.35 && time > 11.40) {
            fp.innerHTML = ("DBMS || RoomNo:#431");
            ft.innerHTML = ("11:40 - 12.35");
            sp.innerHTML = ("LUNCH -> SEU || RoomNo:#467");
            st.innerHTML = ("01.30 - 02:25");
            countdown = "13.30";
        }
        else if (time < 11.40 && time > 10.45) {
            fp.innerHTML = ("DataStructure || RoomNo:#431");
            ft.innerHTML = ("10:45 - 11.40");
            sp.innerHTML = ("DBMS || RoomNo:#431");
            st.innerHTML = ("11:40 - 12.35");
            countdown = "11.40";
        }
        else if (time < 10.45 && time > 9.50) {
            fp.innerHTML = ("E-Commerce || RoomNo:#431");
            ft.innerHTML = ("09:50 - 10:45");
            sp.innerHTML = ("DataStructure || RoomNo:#431");
            st.innerHTML = ("10:45 - 11.40");
            countdown = "10.45";
        }
        else if (time < 9.50) {
            fp.innerHTML = ("--NO CLASSES--");
            ft.innerHTML = ("");
            sp.innerHTML = ("E-Commerce || RoomNo:#431");
            st.innerHTML = ("(TUES)09:50 - 10:45");
            countdown = "9.50";
        }
        else {
            fp.innerHTML = ("--NO CLASSES--");
            ft.innerHTML = ("");
            sp.innerHTML = ("Tommorow Classes:" + "<br/>" + " JAVA || RoomNo:#467");
            st.innerHTML = ("(WED)10:45 - 11:40");
            countdown = "";
        }
    }
    else if (day == 3) {
        if (time < 17.10 && time > 15.20) {
            if (nowGroup == "A1") {
                fp.innerHTML = ("DataStructure-LAB || RoomNo:#465");
                ft.innerHTML = ("03:20 - 05:10");
            }
            else {
                fp.innerHTML = ("JAVA-LAB || RoomNo:#466");
                ft.innerHTML = ("03:20 - 05:10");
            }
            sp.innerHTML = ("--NO CLASSES--");
            st.innerHTML = ("");
            countdown = "";
        }
        else if (time < 15.20 && time > 14.25) {
            fp.innerHTML = ("E-Commerce || RoomNo:#467");
            ft.innerHTML = ("02:25 - 03.20");
            if (nowGroup == "A1") {
                sp.innerHTML = ("DataStructure-LAB || RoomNo:#465");
                st.innerHTML = ("03:20 - 05:10");
            }
            else {
                sp.innerHTML = ("JAVA-LAB || RoomNo:#466");
                st.innerHTML = ("03:20 - 05:10");
            }
            countdown = "15.20";
        }
        else if (time < 14.25 && time > 13.30) {
            fp.innerHTML = ("-- Consultancy Hour --");
            ft.innerHTML = ("01:30 - 02.25");
            sp.innerHTML = ("E-Commerce || RoomNo:#467");
            st.innerHTML = ("02:25 - 03.20");
            countdown = "14.25";
        }
        else if (time < 13.30 && time > 12.35) {
            fp.innerHTML = ("--LUNCH BREAK--");
            ft.innerHTML = ("12:35 - 01.30");
            sp.innerHTML = ("Consultancy Hour -> E-Commerce || RoomNo:#467");
            st.innerHTML = ("01:30 - 02:25");
            countdown = "14.25";
        }
        else if (time < 12.35 && time > 11.40) {
            fp.innerHTML = ("DataStructure || RommNo:#467");
            ft.innerHTML = ("11.40 - 12.35");
            sp.innerHTML = ("LUNCH -> Con.Hour -> E-Commerce || RoomNo:#467");
            st.innerHTML = ("12:35 - 01.30");
            countdown = "14.25";
        }
        else if (time < 11.40 && time > 10.45) {
            fp.innerHTML = ("JAVA || RoomNo:#467");
            ft.innerHTML = ("10:45 - 11.40");
            sp.innerHTML = ("DataStructure || RommNo:#467");
            st.innerHTML = ("11:40 - 12.35");
            countdown = "11.40";
        }
        else if (time < 10.45) {
            fp.innerHTML = ("--NO CLASSES--");
            ft.innerHTML = ("");
            sp.innerHTML = ("JAVA || RoomNo:#467");
            st.innerHTML = ("(WED)10:45 - 11.40");
            countdown = "10.45";
        }
        else {
            fp.innerHTML = ("--NO CLASSES--");
            ft.innerHTML = ("");
            sp.innerHTML = ("Tommorow Classes:" + "<br/>" + " SEU || RoomNo:#467");
            st.innerHTML = ("(THU)10:45 - 11:40");
            countdown = "";
        }
    }
    else if (day == 4) {
        if (time < 16.15 && time > 15.20) {
            fp.innerHTML = ("DBMS || RoomNo:#467");
            ft.innerHTML = ("03:20 - 04:15");
            sp.innerHTML = ("--NO CLASSES--");
            st.innerHTML = ("");
            countdown = "";
        }
        else if (time < 15.20 && time > 14.25) {
            fp.innerHTML = ("DataStructure || RoomNo:#467");
            ft.innerHTML = ("02:25 - 03:20");
            sp.innerHTML = ("DBMS || RoomNo:#467");
            st.innerHTML = ("03:20 - 04:15");
            countdown = "15.20";
        }
        else if (time < 14.25 && time > 13.30) {
            fp.innerHTML = ("--LUNCH BREAK--");
            ft.innerHTML = ("01:30 - 02:25");
            sp.innerHTML = ("DataStructure || RoomNo:#467");
            st.innerHTML = ("02:25 - 03:20");
            countdown = "14.25";
        }
        else if (time < 13.30 && time > 11.40) {
            if (nowGroup == "A1") {
                fp.innerHTML = ("JAVA-LAB || RoomNo:#466");
                ft.innerHTML = ("11:40 - 01:30");
            }
            else {
                fp.innerHTML = ("DBMS-LAB || RoomNo:#465");
                ft.innerHTML = ("11:40 - 01:30");
            }
            sp.innerHTML = ("LUNCH -> DataStructure || RoomNo:#467");
            st.innerHTML = ("01:30 - 02:25");
            countdown = "14.25";
        }
        else if (time < 11.40 && time > 10.45) {
            fp.innerHTML = ("SEU || RoomNo:#467");
            ft.innerHTML = ("10:45 - 11.40");
            if (nowGroup == "A1") {
                sp.innerHTML = ("JAVA-LAB || RoomNo:#466");
                st.innerHTML = ("11:40 - 01:30");
            }
            else {
                sp.innerHTML = ("DBMS-LAB || RoomNo:#465");
                st.innerHTML = ("11:40 - 01:30");
            }
            countdown = "11.40";
        }
        else if (time < 10.45) {
            fp.innerHTML = ("--NO CLASSES--");
            ft.innerHTML = ("");
            sp.innerHTML = ("SEU || RoomNo:#467");
            st.innerHTML = ("10:45 - 11.40");
            countdown = "10.45";
        }
        else {
            fp.innerHTML = ("--NO CLASSES--");
            ft.innerHTML = ("");
            if (nowGroup == "A1") {
                sp.innerHTML = ("Tommorow Classes:" + "<br/>" + " PDS-LAB || RoomNo:#309");
                st.innerHTML = ("(FRI)09:50 - 11:40");
            }
            else {
                sp.innerHTML = ("Tommorow Classes:" + "<br/>" + " DataStructure-LAB || RoomNo:#465");
                st.innerHTML = ("(FRI)09:50 - 11:40");
            }
            countdown = "";
        }
    }
    else if (day == 5) {
        if (time < 17.10 && time > 15.20) {
            if (nowGroup == "A1") {
                fp.innerHTML = ("DataStructure-LAB || RoomNo:#465");
                ft.innerHTML = ("03:20 - 05:10");
            }
            else {
                fp.innerHTML = ("SEU-LAB || RoomNo:#466");
                ft.innerHTML = ("03:20 - 05:10");
            }
            sp.innerHTML = ("--NO CLASSES--");
            st.innerHTML = ("");
            countdown = "";
        }
        else if (time < 15.20 && time > 14.25) {
            fp.innerHTML = ("-- Consultancy Hour --");
            ft.innerHTML = ("02:25 - 03.20");
            if (nowGroup == "A1") {
                sp.innerHTML = ("DataStructure-LAB || RoomNo:#465");
                st.innerHTML = ("03:20 - 05:10");
            }
            else {
                sp.innerHTML = ("SEU-LAB || RoomNo:#466");
                st.innerHTML = ("03:20 - 05:10");
            }
            countdown = "15.20";
        }
        else if (time < 14.25 && time > 13.30) {
            fp.innerHTML = ("--LUNCH BREAK--");
            ft.innerHTML = ("01:30 - 02:25");
            if (nowGroup == "A1") {
                sp.innerHTML = ("Cons Hour -> DataStructure-LAB || RoomNo:#465");
                st.innerHTML = ("02:25 - 03:20");
            }
            else {
                sp.innerHTML = ("Cons Hour -> SEU-LAB || RoomNo:#466");
                st.innerHTML = ("02:25 - 03:20");
            }
            countdown = "15.20";
        }
        else if (time < 13.30 && time > 12.35) {
            fp.innerHTML = ("JAVA || RoomNo:#453");
            ft.innerHTML = ("12-35 - 01:30");
            if (nowGroup == "A1") {
                sp.innerHTML = ("Lunch -> Cons Hour -> DataStructure-LAB || RoomNo:#465");
                st.innerHTML = ("01:30 - 02:25");
            }
            else {
                sp.innerHTML = ("Lunch -> Cons Hour -> SEU-LAB || RoomNo:#466");
                st.innerHTML = ("01:30 - 02:25");
            }
            countdown = "15.20";
        }
        else if (time < 12.35 && time > 11.40) {
            fp.innerHTML = ("DataStructure || RoomNo:#453");
            ft.innerHTML = ("11:40 - 12.35");
            sp.innerHTML = ("JAVA || RoomNo:#453");
            st.innerHTML = ("12-35 - 01:30");
            countdown = "12.35";
        }
        else if (time < 11.40 && time > 9.50) {
            if (nowGroup == "A1") {
                fp.innerHTML = ("PDSS-LAB RoomNo:309(A)");
                ft.innerHTML = ("09:50 - 11:40");
            } else {
                fp.innerHTML = ("DataStructure-LAB RoomNo:465");
                ft.innerHTML = ("09:50 - 11:40");
            }
            sp.innerHTML = ("DataStructure || RoomNo:#453");
            st.innerHTML = ("11:40 - 12.35");
            countdown = "11.40";
        }
        else if (time < 9.50) {
            fp.innerHTML = ("--NO CLASSES--");
            ft.innerHTML = ("");
            if (nowGroup == "A1") {
                sp.innerHTML = ("PDSS-LAB RoomNo:309(A)");
                st.innerHTML = ("09:50 - 11:40");
            } else {
                sp.innerHTML = ("DataStructure-LAB RoomNo:465");
                st.innerHTML = ("09:50 - 11:40");
            }
            countdown = "9.50";
        }
        else {
            fp.innerHTML = ("--NO CLASSES--");
            ft.innerHTML = ("");
            sp.innerHTML = ("Next Classes:" + "<br/>" + "DataStructure || RoomNo:334");
            st.innerHTML = ("(MON)10:45 - 11:40");
            countdown = "";
        }
    }
    else if (day == 6) {
        fp.innerHTML = ("SaturDay:"+ "<br/>" + "--NO CLASSES--");
        ft.innerHTML = ("");
        sp.innerHTML = ("Next Classes:" + "<br/>" + "DataStructure || RoomNo:334");
        st.innerHTML = ("(MON)10:45 - 11:40");
        countdown = "";
    }
    else {
        fp.innerHTML = ("SunDay:"+ "<br/>" + "--NO CLASSES--");
        ft.innerHTML = ("");
        sp.innerHTML = ("Next Classes:" + "<br/>" + " DataStructure || RoomNo:334");
        st.innerHTML = ("(MON)10:45 - 11:40");
        countdown = "";
    }
}
updateTimeTable();
setInterval(updateTimeTable, 300000);
// console.log(countdown);

function SetCountdown() {
    let CountdownTime = document.getElementById("CountdownTime");
    if (countdown == "") {
        CountdownTime.innerHTML = "";
    }
    else {
        // console.log(1);
        const da = new Date();
        let [hour1, min1] = countdown.split('.');
        let date1 = da.getDate();
        let month1 = da.getMonth() + 1;
        let year1 = da.getUTCFullYear();
        // console.log(now);
        let a = new Date(month1 + " " + date1 + ", " + year1 + " " + hour1 + ":" + min1).getTime();
        let now = new Date().getTime();
        var diff = a - now;
        // console.log(now);
        // console.log(diff);   
        let hour2 = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let min2 = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let sec2 = Math.floor((diff % (1000 * 60)) / (1000));
        if (hour2 < 10) { hour2 = "0" + hour2 }
        if (min2 < 10) { min2 = "0" + min2 }
        if (sec2 < 10) { sec2 = "0" + sec2 }
        CountdownTime.innerHTML = hour2 + " : " + min2 + " : " + sec2;
        // console.log(min2);
        if (min2 <= 5) {
            CountdownTime.style.color = "red";
        }
        else if (min2 <= 10) {
            CountdownTime.style.color = "rgb(255 158 0)";
        }
        else {
            CountdownTime.style.color = "#70ff00";
        }
    }
}
SetCountdown();
setInterval(SetCountdown, 1000);
