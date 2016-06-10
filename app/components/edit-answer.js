import Ember from 'ember';

export default Ember.Component.extend({
  editFormShow: false,
  actions: {
    showEdit(){
      this.set('editFormShow', true);
    },
    updateAnswer(answer){
      var params = {
        userName: this.get('updatedName'),
        answer: this.get('updatedAnswer'),
        question: this.get('question')
      };
      this.sendAction('updateAnswer', answer, params)
    }
  }
});
