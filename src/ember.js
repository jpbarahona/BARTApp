App = Ember.Application.create();

App.Router.map(function() {
    this.route("intro");
});

App.IndexRoute = Em.Route.extend({
    redirect: function() {
        this.transitionTo("intro")
    }
});

App.IntroView = Em.View.extend({
	 didInsertElement: function() {
        console.log("Index view");
    },
    touchEnd: function(e) {
        
    },
    click: function(e) {
        
    }
});