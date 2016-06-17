import DS from 'ember-data';


export default DS.Model.extend({
  userName: DS.attr(),
  question: DS.attr(),
  notes: DS.attr(),
  timestamp: DS.attr(),
  timeCheck: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
