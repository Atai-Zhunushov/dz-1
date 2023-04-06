var rating = Number(prompt('Введите оценку сервиса!'))
if (rating >= 5 && rating <= 10) {
    alert('Спасибо за высокую оценку!')
} else if (rating < 5 ) {
    alert('Мы работаем над улучшением сервиса!')
} else {
    alert('Вводите цифры!')
}

// 2
var obj = {
    arr1:  ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    arr2:  ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
    error: 'Error'
}

var lang = prompt('Выберите язык!').trim().toLowerCase()
if (lang === 'rus') {
    console.log(obj.arr1)
} else if (lang === 'eng') {
    console.log(obj.arr2)
} else {
    console.log(obj.error)
}