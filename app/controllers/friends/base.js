import Ember from 'ember';

export default Ember.Controller.extend({
  hasFirstName: Ember.computed.notEmpty('model.firstName'),
  hasLastName:  Ember.computed.notEmpty('model.lastName'),
  hasEmail:     Ember.computed.notEmpty('model.email'),
  hasTwitter:   Ember.computed.notEmpty('model.twitter'),
  isValid:      Ember.computed.and(
    'hasFirstName',
    'hasLastName',
    'hasEmail',
    'hasTwitter'
  ),
  actions : {
    save() {
      if (this.get('isValid')) {
        this.get('model').save().then((friend) => {
          this.transitionToRoute('articles.index', friend);
        });
      } else {
        this.set('errorMessage', 'Uh oh, everything needs filled in!');
      }
      return false;
    },
    cancel() {
      return true;
    }
  }
});
