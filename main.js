confirm('Хотите узнать проблему?')
var test1 = 'Компьютер включили?';
var test2 = 'BIOS загрузился?';
var test3 = 'ОС загрузилась?';
var test4 = 'Сигнал был?';
var test5 = 'Джеки чан родився 6 квітня 1954 р';

var answer1 = confirm(test1);
if (answer1 == true) {
confirm(test2);
} else {
alert('Влючите ПК');
}

var answer2 = confirm(test2);
if (answer2 == true) {
confirm(test3);
} else {
confirm(test4);
}

var answer3 = confirm(test3);
if (answer3 == true) {
alert('Всё отлично');
} else {
alert('Перезагрузите ПК');
}

var answer4 = confirm(test4);
if (answer4 == true) {
    alert('Запомните сколько длинных и коротких было и вперёд гугл');
} else {
    alert('Его не спасти');
}
