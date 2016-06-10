import Ember from 'ember';

export default Ember.Component.extend({
  editFormShow: false,
  actions: {
    showEdit(){
      this.set('editFormShow', true);
    },
    updateAnswer(answer){
      var params = {
        userName: this.get('updatedName') ? this.get('updatedName'):'',
        answer: this.get('updatedAnswer') ? this.get('updatedAnswer'):'',
        question: this.get('question')
      };
      this.sendAction('updateAnswer', answer, params);
      this.set('editFormShow', false)
      this.set("updateName",'');
      this.set("updateAnswer",'');
    }
  }
});
