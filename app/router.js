import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('question-page');
  this.route('answer-page', {path: '/answer/:question_id'});
  this.route('bookmarks');
});

export default Router;
