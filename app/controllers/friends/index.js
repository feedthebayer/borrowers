import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sortBy', 'sortAscending'],
  sortBy: 'firstName',
  sortAscending: true,
  actions: {
    setSortBy(fieldName) {
      this.set('sortBy', fieldName);
      this.toggleProperty('sortAscending');
      return false;
    }
  }
});
