import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    updateAnswer(answer, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          answer.set(key,params[key]);
        }
      });
      answer.save();
      this.transitionTo('answer-page');
    },
    saveAnswer(params){
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('answer-page');
    },
    deleteAnswer(answer){
      if(confirm('Delete this answer?')){
      answer.destroyRecord();
      this.transitionTo('answer-page');
    }
    }
  }
});
