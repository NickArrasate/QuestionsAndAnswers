import Ember from 'ember';

export default Ember.Component.extend({

  sortedQuestions: Ember.computed.sort('model','sortBy'),
  sortBy: ['timeCheck:desc'],
});
