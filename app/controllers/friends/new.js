import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  actions : {
    cancel() {
      this.get('model').destroyRecord();
      this.transitionToRoute('friends.index');
      return false;
    }
  }
});
