import Ember from 'ember';

export default Ember.Component.extend({
  actions:{

    saveQuestion(){
      var params = {
        userName: this.get('userName') ? this.get('userName'):'',
        question: this.get('question') ? this.get('question'):'',
        notes: this.get('notes') ? this.get('notes'):''
      };
      this.sendAction('saveQuestion', params);
      this.set('userName', '');
      this.set('question', '');
      this.set('notes', '');
    },
  }
});
