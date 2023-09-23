const startBtn = document.querySelector('.startbtn')
const popup = document.querySelector('.popup')
const exitBtn = document.querySelector('.exit')
const main = document.querySelector('.main')
const continueBtn = document.querySelector('.continue')
const quizSection = document.querySelector('.quiz-section')
const quizBox = document.querySelector('.quiz-box')
const resultBox = document.querySelector('.result-box');
const homebtn = document.querySelector('.gohomebtn');
let stressScore = 0;
let anxietyScore = 0;
let socialPressureScore = 0;
let onlineHarassmentScore = 0;
let wellBeingScore = 0;
let informationOverloadScore = 0;

var audio = document.getElementById("background-audio");
audio.volume = 0.1;

startBtn.onclick = () =>{
    popup.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () =>{
    popup.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () =>{
    quizSection.classList.add('active');
    popup.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestion(0);
    questionCounter(1);
}

homebtn.onclick = () => {
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    let questionCount = 0;
    let questionNumber = 1;
    let stressScore = 0;
    let anxietyScore = 0;
    let socialPressureScore = 0;
    let onlineHarassmentScore = 0;
    let wellBeingScore = 0;
    let informationOverloadScore = 0;
    showQuestion(questionCount);
    questionCounter(questionNumber);
}

let questionCount = 0;
let questionNumber = 1;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    if (questionCount<questions.length - 1){
        questionCount++;
        showQuestion(questionCount);

        questionNumber++;
        questionCounter(questionNumber);

        nextBtn.classList.remove('active');
    }
    else{
        showResultBox();
    }
}

const optionList = document.querySelector('.option-list');

function showQuestion(index){
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
                     <div class="option"><span>${questions[index].options[1]}</span></div>
                     <div class="option"><span>${questions[index].options[2]}</span></div>
                     <div class="option"><span>${questions[index].options[3]}</span></div>
                     <div class="option"><span>${questions[index].options[4]}</span></div>`
    
    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i=0;i<option.length;i++){
        option[i].setAttribute('onclick','optionSelected(this)');
    }
}

function optionSelected(answer){
    let userAnswer = answer.textContent;
    let allOptions = optionList.children.length;
    answer.classList.add('marked');

    for(let i=0;i< allOptions; i++){
        optionList.children[i].classList.add('disable');
    }

    nextBtn.classList.add('active');

    if (questionNumber >= 1 && questionNumber <= 3) {
        // Questions 1 to 3 belong to the "Stress" category
        if (userAnswer === "Never") {
          stressScore += 1;
        } else if (userAnswer === "Rarely") {
          stressScore += 2;
        } else if (userAnswer === "Sometimes") {
          stressScore += 3;
        } else if (userAnswer === "Often") {
          stressScore += 4;
        } else if (userAnswer === "Always") {
          stressScore += 5;
        }
      } else if (questionNumber >= 4 && questionNumber <= 6) {
        // Questions 4 to 6 belong to the "Anxiety" category
        if (userAnswer === "Never") {
          anxietyScore += 1;
        } else if (userAnswer === "Rarely") {
          anxietyScore += 2;
        } else if (userAnswer === "Sometimes") {
          anxietyScore += 3;
        } else if (userAnswer === "Often") {
          anxietyScore += 4;
        } else if (userAnswer === "Always") {
          anxietyScore += 5;
        }
      } else if (questionNumber >= 7 && questionNumber <= 9) {
        // Questions 7 to 9 belong to the "Social Pressure" category
        if (userAnswer === "Never") {
          socialPressureScore += 1;
        } else if (userAnswer === "Rarely") {
          socialPressureScore += 2;
        } else if (userAnswer === "Sometimes") {
          socialPressureScore += 3;
        } else if (userAnswer === "Often") {
          socialPressureScore += 4;
        } else if (userAnswer === "Always") {
          socialPressureScore += 5;
        }
      } else if (questionNumber >= 10 && questionNumber <= 12) {
        // Questions 10 to 12 belong to the "Online Harassment" category
        if (userAnswer === "Never") {
          onlineHarassmentScore += 1;
        } else if (userAnswer === "Rarely") {
          onlineHarassmentScore += 2;
        } else if (userAnswer === "Sometimes") {
          onlineHarassmentScore += 3;
        } else if (userAnswer === "Often") {
          onlineHarassmentScore += 4;
        } else if (userAnswer === "Always") {
          onlineHarassmentScore += 5;
        }
      } else if (questionNumber >= 13 && questionNumber <= 15) {
        // Questions 13 to 15 belong to the "Well-Being" category
        if (userAnswer === "Never") {
          wellBeingScore += 1;
        } else if (userAnswer === "Rarely") {
          wellBeingScore += 2;
        } else if (userAnswer === "Sometimes") {
          wellBeingScore += 3;
        } else if (userAnswer === "Often") {
          wellBeingScore += 4;
        } else if (userAnswer === "Always") {
          wellBeingScore += 5;
        }
      } else if (questionNumber >= 16 && questionNumber <= 18) {
        // Questions 16 to 18 belong to the "Information Overload" category
        if (userAnswer === "Never") {
          informationOverloadScore += 1;
        } else if (userAnswer === "Rarely") {
          informationOverloadScore += 2;
        } else if (userAnswer === "Sometimes") {
          informationOverloadScore += 3;
        } else if (userAnswer === "Often") {
          informationOverloadScore += 4;
        } else if (userAnswer === "Always") {
          informationOverloadScore += 5;
        }
      }
      
}

function questionCounter(index){
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`
}

function getAssessmentLevel(score) {
    if (score >= 1 && score <= 5) {
        return "Good";
    } else if (score >= 6 && score <= 11) {
        return "Moderate";
    } else if (score >= 12 && score <= 15) {
        return "Poor";
    }
    return "Unknown";
}

function getCategoryData(categoryName, assessmentLevel) {
    const category = reportData.categories.find(category => category.name === categoryName);
    if (category) {
        console.log(category.assessmentLevels.find(level => level.level === assessmentLevel));
        return category.assessmentLevels.find(level => level.level === assessmentLevel);
    }
    return null;
}

function generateCategoryReport(categoryName, score) {
    const assessmentLevel = getAssessmentLevel(score);
    const categoryData = getCategoryData(categoryName, assessmentLevel);
    if (categoryData) {
        const content = categoryData.content;
        const solutions = categoryData.solutions;
        return `
            <br><p><h4>Category: ${categoryName}</h4></p><br>
            ${content}<br>
            <br><p>Recommended Solutions:<p><br>
            <ul>
                ${solutions.map(solution => `<li>${solution}</li>`).join("")}
            </ul>
        `;
    }
    return `No data available for ${categoryName}`;
}

function showResultBox(){
    quizBox.classList.remove('active');    
    resultBox.classList.add('active');
    
    const stressReport = generateCategoryReport("Stress", stressScore);
    const anxietyReport = generateCategoryReport("Anxiety", anxietyScore);
    const socialPressureReport = generateCategoryReport("Social Pressure", socialPressureScore);
    const onlineHarassmentReport = generateCategoryReport("Online Harassment", onlineHarassmentScore);
    const wellBeingReport = generateCategoryReport("Well Being", wellBeingScore);
    const informationOverloadReport = generateCategoryReport("Information Overload", informationOverloadScore);

    document.querySelector(".stress-result").innerHTML = stressReport;
    document.querySelector(".anxiety-result").innerHTML = anxietyReport;
    document.querySelector(".social-pressure-result").innerHTML = socialPressureReport;
    document.querySelector(".online-harassment-result").innerHTML = onlineHarassmentReport;
    document.querySelector(".well-being-result").innerHTML = wellBeingReport;
    document.querySelector(".information-overload-result").innerHTML = informationOverloadReport;
}