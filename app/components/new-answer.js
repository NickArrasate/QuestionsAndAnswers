import Ember from 'ember';

export default Ember.Component.extend({
  showAnswer: false,
  actions: {
    showAnswerForm(){
      this.set('showAnswer', true);
    },
    saveAnswer(){
      var params = {
        userName: this.get('userName'),
        answer: this.get('answer'),
        question: this.get('question')
      };
      this.set('showAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
