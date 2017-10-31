/*!
 * @author juan-pablo barahona
 *
 * @require Ember v2.4.1
 * @reference https://emberjs.com/api/ember/2.4/classes/Ember.Application
 */

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
        
    },
    touchEnd: function(e) {
        
    },
    click: function(e) {
        
    }
});