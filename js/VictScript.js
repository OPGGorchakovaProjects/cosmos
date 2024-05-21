const Victorina=[
    {
    question:"В каком году был произведен запуск первого искусственного спутника земли",
    answer:['1937 год','1957 год',"2000 год","1986 год"],
    correct:2,
    }
    ,{
        question:"Кто является первым космонавтом Земли?",
        answer:[
        'Юрий Гагарин',
        'Нил Армстронг',
        "Андрей Степанов",
        "Алексей Леонов"],
        correct:1,
    },
    {
        question:"Кто является первым человеком в открытом космосе",
        answer:['Юрий Гагарин',
        'Нил Армстронг',
        "Андрей Степанов",
        "Алексей Леонов"],
        correct:4,
    },
    {
        question:"Какие животные первыми побывали в космосе",
        answer:['Стрелка и Белка',
        'Рекс, Бим и Стелла',
        "Мухтар и Звезда",
        "Стрела и Бром"],
        correct:1,
    },
    {
        question:"Начало эксплуатации МКС",
        answer:['1965 год',
        '2004 год',
        "1998 год",
        "2020 год"],
        correct:3,
    },
    {
        question:"Первая женщина в космосе",
        answer:['Валентина Терешкова',
        'Светлана Серикова',
        "София Пилецкая",
        "Ольга Горчакова"],
        correct:1,
    },
    {
        question:"Первый искусственный спутник",
        answer:['Юнона',
        'СПУТНИК-1',
        "Вояджер-1",
        "Falcon"],
        correct:2,
    },
    {
        question:"Первый человек на луне",
        answer:['Юрий Гагарин',
        'Нил Армстронг',
        "Андрей Степанов",
        "Алексей Леонов"],
        correct:2,
    }, 
    {
        question:"Какого числа отмечается день космонавтики?",
        answer:['30 февраля 1961 год',
        '26 апреля 1986 год',
        "21 августа 1964 год",
        "12 апреля 1961 год"],
        correct:4,
    },
    {
        question:"Как назывался корабль Гагарина?",
        answer:['Восход-1',
        'Запад-1',
        "Север-1",
        "Восток-1"],
        correct:1,
    },
    ]
//===========================
let testQwest=document.getElementById('testQwest')
let listAnswer=document.getElementById('listAnswer')
const btn=document.getElementById('rezult')
//==============================
//переменные игры
//========================
let score=0;
let questionIndex=0;

clearPage();
showQuestion();

//=================
//проверка нажатие на кнопку
//======================
btn.onclick=checkAnswer;


function clearPage(){
    testQwest.innerHTML='';
    listAnswer.innerHTML='';
}
function showQuestion(){
   // console.log('вопрос')
//вопрос
const Question=`<h2>${Victorina[questionIndex]['question']}</h2>`
testQwest.innerHTML=Question
//console.log(Victorina[questionIndex]['question'])
//варианты ответов
for(let i=0;i<Victorina[questionIndex]['answer'].length;i++){
//    console.log(Victorina[questionIndex]['answer'][i])
const Answer=`<label class="answ"> <input type="radio" value="${i+1}" >${Victorina[questionIndex]['answer'][i]}</label>`
listAnswer.innerHTML+=Answer;
        }
}
function checkAnswer(){
console.log('hi')
const checkedRadio=listAnswer.querySelector('input[type=radio]:checked')
//console.log(checkedRadio.value)

if(!checkedRadio){
    btn.blur();
    return;
}
const userAnswer=+checkedRadio.value;

if(userAnswer===Victorina[questionIndex]['correct']){
score++;
}
console.log(score)
//проверка вопросов
//===========================
if(questionIndex!==Victorina.length-1){
    console.log("Это не последний вопрос")
questionIndex++;
clearPage();
showQuestion();
return;
}
else{
    console.log("Это  последний вопрос")
clearPage();
showResult();
btn.innerHTML = "";
}

}
function showResult(){
    console.log("show")
    let message, rez=score*100/Victorina.length;
    if(rez==100){
        message='Молодец!!!'
    }
    else if(rez>=50 && rez<100)
    {
        message='Уже неплохо'
    }
    else {
        message='Необходимо повторить материал'
    }
const result=` <h2>${message}</h2>
<h3> Ваш результат: ${rez}%</h3>
<p class="p"> Вы ответили ${score} из ${Victorina.length}</p>`
listAnswer.innerHTML=result



}