var Governorates = [
        "القاهرة",
        "الإسكندرية",
        "بورسعيد",
        "السويس",
        "دمياط",
        "الدقهلية",
        "الشرقية",
        "القليوبية",
        "كفر الشيخ",
        "الغربية",
        "المنوفية",
        "البحيرة",
        "الإسماعيلية",
        "الجيزة",
        "بني سويف",
        "الفيوم",
        "المنيا",
        "أسيوط",
        "سوهاج",
        "قنا",
        "أسوان",
        "الأقصر",
        "البحر الأحمر",
        "الوادى الجديد",
        "مطروح",
        "شمال سيناء",
        "جنوب سيناء",
        "خارج الجمهورية"
    ],
    GovernoratesNum = [
        "01",
        "02",
        "03",
        "04",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "31",
        "32",
        "33",
        "34",
        "35",
        "88"
    ],
    Governoratessite = [{
        lat: 30.0174975,
        lng: 31.2367928
    }, {
        lat: 31.2240919,
        lng: 30.02493
    }, {
        lat: 31.2386733,
        lng: 32.3201889
    }, {
        lat: 29.9770447,
        lng: 32.5809538
    }, {
        lat: 31.34245,
        lng: 32.0487382
    }, {
        lat: 31.0599069,
        lng: 32.2054688
    }, {
        lat: 30.7217825,
        lng: 31.9996971
    }, {
        lat: 30.3555586,
        lng: 31.5157011
    }, {
        lat: 31.29763,
        lng: 31.1189988
    }, {
        lat: 30.8670921,
        lng: 31.3094749
    }, {
        lat: 30.4658066,
        lng: 31.3018608
    }, {
        lat: 30.6999114,
        lng: 30.7528732
    }, {
        lat: 30.5801542,
        lng: 32.3062715
    }, {
        lat: 29.9688688,
        lng: 31.2796974
    }, {
        lat: 28.990318,
        lng: 31.1748179
    }, {
        lat: 29.3024281,
        lng: 30.9067376
    }, {
        lat: 29.3024281,
        lng: 30.7857407
    }, {
        lat: 27.1770325,
        lng: 31.2019276
    }, {
        lat: 26.5428336,
        lng: 32.036312
    }, {
        lat: 26.0968578,
        lng: 32.8287509
    }, {
        lat: 24.0923336,
        lng: 32.9176813
    }, {
        lat: 25.6948967,
        lng: 32.694517
    }, {
        lat: 25.6788223,
        lng: 36.0617272
    }, {
        lat: 24.8273401,
        lng: 31.2051287
    }, {
        lat: 29.5468909,
        lng: 27.8153729
    }, {
        lat: 30.5723069,
        lng: 33.7330492
    }, {
        lat: 28.8681876,
        lng: 34.2261395
    }, {
        lat: 30.7011147,
        lng: 30.1926238
    }],
    monthName = [
        "كانون الثّاني / يناير",
        "شباط / فبراير",
        "آذار / مارس",
        "نيسان / أبريل",
        "أيّار / مايو",
        "حزيران / يونيو",
        "تمّوز / يوليو",
        "آب / أغسطس",
        "أيلول / سبتمبر",
        "تشرين الأوّل / أكتوبر",
        "تشرين الثّاني / نوفمبر",
        "كانون الأوّل / ديسمبر"
    ],
    butn = document.getElementById('btn'),
    input = document.getElementById('input');

butn.onclick = function() {
    if (input.value.length == 14 & isNaN(parseInt(input.value)) == false) {
        document.getElementsByClassName('explane')[0].classList.toggle("hidebyme");
        document.getElementsByClassName('result')[0].classList.toggle("hidebyme");
        butn.classList.toggle("hidebyme");

        function century() {
            if (input.value.slice(0, 1) == 2) {
                document.getElementById('one').textContent = "أنت من القرن العشرين";
            } else if (input.value.slice(0, 1) == 3) {
                document.getElementById('one').textContent = "أنت من القرن الواحد والعشرين";
            } else {
                document.getElementsByClassName('result')[0].classList.toggle("hidebyme");
                butn.classList.add("hidebyme");
                document.getElementById('alertmasg').classList.toggle("hidebyme");
            }
        };

        function year() {
            if (input.value.slice(0, 1) == 2) {
                document.getElementById('year').textContent = 1900 + eval(input.value.slice(1, 3));
            } else if (input.value.slice(0, 1) == 3) {
                document.getElementById('year').textContent = 2000 + eval(input.value.slice(1, 3));
            } else {
                document.getElementsByClassName('result')[0].classList.toggle("hidebyme");
                butn.classList.add("hidebyme");
                document.getElementById('alertmasg').classList.toggle("hidebyme");
            }
        };

        function month() {
            if (input.value.slice(3, 5) <= 12 & input.value.slice(3, 5) > 0) {
                if (input.value.slice(3, 5) < 10) {
                    document.getElementById('month').textContent = monthName[eval(input.value.slice(4, 5)) - 1] + " " + "( " + input.value.slice(4, 5) + " )";
                } else {
                    document.getElementById('month').textContent = monthName[eval(input.value.slice(3, 5)) - 1] + " " + "( " + input.value.slice(3, 5) + " )";
                }
            } else {
                document.getElementsByClassName('result')[0].classList.toggle("hidebyme");
                butn.classList.add("hidebyme");
                document.getElementById('alertmasg').classList.toggle("hidebyme");
            }
        };

        function day() {
            if (input.value.slice(5, 7) <= 31 & input.value.slice(5, 7) > 0) {
                if (input.value.slice(5, 7) < 10) {
                    document.getElementById('day').textContent = input.value.slice(6, 7);
                } else {
                    document.getElementById('day').textContent = input.value.slice(5, 7);
                }
            } else {
                document.getElementsByClassName('result')[0].classList.toggle("hidebyme");
                butn.classList.add("hidebyme");
                document.getElementById('alertmasg').classList.toggle("hidebyme");
            }
        };

        function birth() {
            if (input.value.slice(0, 1) == 2) {
                document.getElementById('birth').textContent = input.value.slice(5, 7) + " / " + input.value.slice(4, 5) + " / " + (1900 + eval(input.value.slice(1, 3)));
            } else if (input.value.slice(0, 1) == 3) {
                document.getElementById('birth').textContent = input.value.slice(5, 7) + " / " + input.value.slice(4, 5) + " / " + (2000 + eval(input.value.slice(1, 3)));
            }
        };

        function Governoratesfun() {
            if ((Governorates[GovernoratesNum.indexOf(input.value.slice(7, 9))]) == undefined) {
                document.getElementsByClassName('result')[0].classList.toggle("hidebyme");
                butn.classList.add("hidebyme");
                document.getElementById('alertmasg').classList.toggle("hidebyme");
            } else {
                document.getElementById('Governorate').textContent = Governorates[GovernoratesNum.indexOf(input.value.slice(7, 9))];
                document.getElementById('Governoratetwo').textContent = Governorates[GovernoratesNum.indexOf(input.value.slice(7, 9))];
            }
        };

        function maleOrFemale() {
            if (input.value.slice(12, 13) % 2 == 0) {
                document.getElementById('sex').textContent = " أنثي ";
                document.getElementById('age').textContent = "تبلغي";
                document.getElementsByClassName('media-object')[0].src = "img/avatar07.png";
                if (input.value.slice(0, 1) == 2) {
                    var d = new Date(),
                        n = d.getFullYear(),
                        re = n - (1900 + eval(input.value.slice(1, 3)));
                    if (re <= 10) {
                        document.getElementById('allage').textContent = re + " أعوام ";
                    } else {
                        document.getElementById('allage').textContent = re + " عام ";
                    }
                } else if (input.value.slice(0, 1) == 3) {
                    var d = new Date(),
                        n = d.getFullYear(),
                        re = n - (2000 + eval(input.value.slice(1, 3)));
                    if (re <= 10) {
                        document.getElementById('allage').textContent = re + " أعوام ";
                    } else {
                        document.getElementById('allage').textContent = re + " عام ";
                    }
                }
            } else {
                document.getElementById('sex').textContent = " ذكر ";
                document.getElementById('age').textContent = "تبلغ";
                document.getElementsByClassName('media-object')[0].src = "img/avatar05.png";
                if (input.value.slice(0, 1) == 2) {
                    var d = new Date(),
                        n = d.getFullYear(),
                        re = n - (1900 + eval(input.value.slice(1, 3)));
                    if (re <= 10) {
                        document.getElementById('allage').textContent = re + " أعوام ";
                    } else {
                        document.getElementById('allage').textContent = re + " عام ";
                    }
                } else if (input.value.slice(0, 1) == 3) {
                    var d = new Date(),
                        n = d.getFullYear(),
                        re = n - (2000 + eval(input.value.slice(1, 3)));
                    if (re <= 10) {
                        document.getElementById('allage').textContent = re + " أعوام ";
                    } else {
                        document.getElementById('allage').textContent = re + " عام ";
                    }
                }
            }
        };

        century();
        year();
        month();
        day();
        birth();
        Governoratesfun();
        initMap();
        maleOrFemale();
    } else {
        document.getElementsByClassName('explane')[0].classList.toggle("hidebyme");
        butn.classList.toggle("hidebyme");
        document.getElementById('alertmasg').classList.toggle("hidebyme");

    }
}

function tryfun() {
    document.getElementsByClassName('explane')[0].classList.remove("hidebyme");
    butn.classList.remove("hidebyme");
    document.getElementById('alertmasg').classList.add("hidebyme");
    document.getElementsByClassName('result')[0].classList.add("hidebyme");
    input.value = "";
}






function fadeOutByMe(element) {
    'use strict';
    var opacity = 1,
        timer = setInterval(function name(params) {
            if (opacity <= .1) {
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = opacity;
            opacity -= 0.1;
        }, 50);
}

function fadeInByMe(element) {
    'use strict';
    var opacity = 0.1,
        timer = setInterval(function name(params) {
            if (opacity >= 1) {
                clearInterval(timer);
            }
            if (opacity >= .5) {}
            element.style.opacity = opacity;
            opacity += 0.1;
        }, 50);
    element.style.display = 'block';
}










/*

function century() {
    if (id.slice(0, 1) == 2) {
        console.log("أنت من القرن العشرين");
    } else if (id.slice(0, 1) == 3) {
        console.log("أنت من القرن الحادى والعشرين");
    } else {
        console.log("الرقم القومى خطأ");
    }
};*/
/*
function year() {
    if (id.slice(0, 1) == 2) {
        console.log(1900 + eval(id.slice(1, 3)) + " أنت مواليد عام ");
    } else if (id.slice(0, 1) == 3) {
        console.log(2000 + eval(id.slice(1, 3)) + " أنت مواليد عام ");
    } else {
        console.log("الرقم القومى خطأ");
    }
};

function month() {
    if (id.slice(3, 5) <= 12) {
        if (id.slice(3, 5) < 10) {
            console.log(id.slice(4, 5) + " أنت مواليد شهر ");
        } else {
            console.log(id.slice(3, 5) + " أنت مواليد شهر ");
        }
    } else {
        console.log("الرقم القومى خطأ");
    }
};

function day() {
    if (id.slice(5, 7) <= 31) {
        if (id.slice(5, 7) < 10) {
            console.log(id.slice(6, 7) + " أنت مواليد يوم ");
        } else {
            console.log(id.slice(5, 7) + " أنت مواليد يوم ");
        }
    } else {
        console.log("الرقم القومى خطأ");
    }
};

function Governoratesfun() {
    if ((Governorates[GovernoratesNum.indexOf(id.slice(7, 9))]) == undefined) {
        console.log("الرقم القومى خطأ");
    } else {
        console.log("أنت من " + Governorates[GovernoratesNum.indexOf(id.slice(7, 9))]);
    }
};

function maleOrFemale() {
    if (id.slice(12, 13) % 2 == 0) {
        console.log("أنت تكونين أنثى");
    } else {
        console.log("أنت تكون ذكر");
    }
};*/