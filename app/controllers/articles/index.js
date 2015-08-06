import Ember from 'ember';

export default Ember.Controller.extend({
  possibleStates: ['borrowed', 'returned'],
  queryParams: ['showReturned'],
  showReturned: false,

  filteredArticles: Ember.computed('showReturned', 'model', function() {
    if (this.get('showReturned')) {
      return this.get('model');
    }
    else {
      return this.get('model').filterBy('state', 'borrowed');
    }
  }),

  actions: {
    toggleShowReturned() {
      this.toggleProperty('showReturned');
      return false;
    }
  }
});
