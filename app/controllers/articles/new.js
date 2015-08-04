import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed('model.description', {
    get() {
      return !Ember.isEmpty(this.get('model.description'));
    }
  }),
  actions : {
    save() {
      if (!this.get('isValid')) {
        this.set('errorMessage', 'Uh oh, you need a description!');
        return false;
      }
      return true;
    }
  }
});
