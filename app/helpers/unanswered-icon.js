import Ember from 'ember';

export function unansweredIcon(params) {
  var question = params[0];

  if(question.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-question-sign"></span>');
  } else if (question.get('answers').get('length') >= 3){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-exclamation-sign"></span>');
  }
}

export default Ember.Helper.helper(unansweredIcon);
