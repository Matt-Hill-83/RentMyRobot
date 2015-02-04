RentMyRobot.Views.RobotShow = Backbone.CompositeView.extend({
  className: 'clearfix',

  // events: {
  //   'sortstop': 'saveOrds'
  // },

  // orderOptions: {
  //   modelElement: '.list-display',
  //   modelName: 'list',
  //   subviewContainer: '#lists'
  // },

  template: JST['robots/show'],

  initialize: function () {
    $('body').css('background-color', 'rgb(35, 113, 159)')
    this.collection = this.model.lists();
    this.listenTo(this.model, 'sync', this.render);
    // this.listenTo(this.collection, 'add', this.addList);
  },

  // addList: function (list) {
  //   var view = new Robot.Views.ListShow({
  //     model: list
  //   });
  //   this.addSubview('#lists', view);
  // },

  render: function () {
    var content = this.template({
      robot: this.model
    });
    this.$el.html(content);
    // this.renderLists();
    // this.renderListForm();
    return this;
  },

  // renderLists: function () {
  //   this.model.lists().each(this.addList.bind(this));
  //   this.$('#lists').sortable();
  // },
  //
  // renderListForm: function () {
  //   var view = new Robot.Views.ListForm({
  //     collection: this.collection
  //   });
  //   this.addSubview('#list-form', view);
  // }
});

// _.extend(Robot.Views.RobotShow.prototype, Robot.Utils.OrdView);
