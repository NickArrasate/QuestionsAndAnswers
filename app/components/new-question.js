import Ember from 'ember';
import Moment from 'moment'

export default Ember.Component.extend({
  actions:{

    saveQuestion(){
      var params = {
        userName: this.get('userName') ? this.get('userName'):'',
        question: this.get('question') ? this.get('question'):'',
        notes: this.get('notes') ? this.get('notes'):'',
        timestamp: moment().format('MMM, Do YYYY'),
        timeCheck: moment().unix()
      };
      this.sendAction('saveQuestion', params);
      this.set('userName', '');
      this.set('question', '');
      this.set('notes', '');
    },
  }
});
