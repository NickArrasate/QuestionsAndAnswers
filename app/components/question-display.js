import Ember from 'ember';

export default Ember.Component.extend({
  bookmarkQuestion: Ember.inject.service(),
  sortedQuestions: Ember.computed.sort('model','sortBy'),
  sortBy: ['timeCheck:desc'],
  actions:{
    bookmark(question){
      this.get('bookmarkQuestion').add(question);
    }
  }
});
