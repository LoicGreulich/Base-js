// class Question {
//   constructor(test,choices,answer) {
//     this.test = test;
//     this.choices= choices;
//     this.answer = answer;
//   }
//   isCorrectAnswer(choice) {
//     return choice === this.answer;
//   }
// }



// const questions = [
//   new Question(
//     "Quelle méthode Javascript permet de filtrer les éléments d'un tableau",
//     ["indexOf()", "map()", "filter()", "reduce()"],
//     "filter()"
//   ),
//   new Question(
//     "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau",
//     ["isNaN()", "includes()", "findIndex()", "isOdd()"],
//     "includes()"
//   ),
//   new Question(
//     "Quelle méthode transforme du JSON en un objet Javascript ?",
//     ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"],
//     "JSON.parse()"
//   ),
//   new Question(
//     "Quel objet Javascript permet d'arrondir à l'entier le plus proche",
//     ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
//     "Math.round()"
//   ),
// ];
// class Quiz {
//   constructor(questions) {
//     this.score = 0;
//     this.questions = questions;
//     this.currentQuestionIndex = 0;
//   }
//   getCurrentQuestion() {
//     return this.questions(this.currentQuestionIndex)
//   }
//   guess(answer) {
//     if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
//       this.score++;
//     }
//     this.currentQuestionIndex++;
//   }
//   hasEnded() {
//     return this.currentQuestionIndex >= this.questions.length;
//   }
// }

// const display = {
//   elementShown : function(id,test) {
//     let element = document.querySelectorId(id);
//     element.innerHTML = test;
//   },
//   question: function() {
//     this.elementShown('questions',quiz.getCurrentQuestion().text);
//   }
// }

// quizApp = () => {
//   if(quiz.hasEnded()) {

//   }else {
//     display.question();
//   }
// }


// let quiz = new Quiz(questions);
// quizApp();

// Modèle
class Model {
  constructor() {
    this.data = [];
  }

  addData(item) {
    this.data.push(item);
  }

  getData() {
    return this.data;
  }
}

// Vue
class View {
  constructor() {}

  render(data) {
    console.log(`Données actuelles : ${JSON.stringify(data)}`);
  }
}

// Contrôleur
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  addData(item) {
    this.model.addData(item);
    this.view.render(this.model.getData());
  }
}

// Utilisation du MVC
const model = new Model();
const view = new View();
const controller = new Controller(model, view);

// Ajout de données
controller.addData("Donnée 1");
controller.addData("Donnée 2");