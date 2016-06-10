import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    saveQuestion(){
      var params = {
        userName: this.get('userName'),
        question: this.get('question'),
        notes: this.get('notes')
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
