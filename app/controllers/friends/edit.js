import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  actions : {
    cancel() {
      this.transitionToRoute('articles.index', this.get('model'));
      return false;
    }
  }
});
