new Vue({
  el: "#app",
  data: {
    addCardQuestion: "",
    addCardAnswer: "",
    addCardCategory: "",
    errMessage: "",
    cards: [
      {
        question:"What year was IUPUI founded?",
        answer:"1969",
        category:"history",
        flipped:false
      },
      {
        question:"What is 2+2?",
        answer:"Fish",
        category:"math",
        flipped:false
      },{
        question:"Is mayonnaise an instrument?",
        answer:"No",
        category:"science",
        flipped:false
      }
    ]
 },
  methods: {
    flipCard: function(index) {
      this.cards[index].flipped = !this.cards[index].flipped;
    },
    addCard: function() {
      if(this.addCardQuestion == "" || this.addCardAnswer == "" || this.addCardCategory == "") {
        this.errMessage = "Please fill out all fields";
      } else {
      this.cards.push({
        question: this.addCardQuestion,
        answer: this.addCardAnswer,
        category: this.addCardCategory,
        flipped: false
      });
      this.addCardQuestion = "";
      this.addCardAnswer = "";
      this.addCardCategory = "";
    }
    }
  }
});