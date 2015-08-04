import Ember from 'ember';
import request from 'ic-ajax';

export default Ember.Route.extend({
  model() {
    return request('/api/v2/friends').then(function(data) {
      return {
        friendsCount: data.friends.length
      };
    });
  }
});
