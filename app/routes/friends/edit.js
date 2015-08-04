import Ember from 'ember';

export default Ember.Route.extend({
  resetController: function (controller, isExiting) {
    if (isExiting) {
      var model = controller.get('model');
      model.rollback();
    }
  }
});
