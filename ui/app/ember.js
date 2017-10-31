/*!
 * @author juan-pablo barahona
 *
 * @require Ember v2.4.1
 * @reference https://emberjs.com/api/ember/2.4/classes/Ember.Application
 */

App = Ember.Application.create();

// router
App.Router.map(function() {
    this.route("intro");
    this.route("selecttest");
    this.route("control");
    this.route("intervenidos");
});

// routes
App.IndexRoute = Em.Route.extend({
    redirect: function() {
        this.transitionTo("intro")
    }
});

App.selecttestRoute = Em.Route.extend({
    redirect: function() {
        this.transitionTo("selecttest")
    }
});

App.controlRoute = Em.Route.extend({
    redirect: function() {
        this.transitionTo("control")
    }
});

App.intervenidosRoute = Em.Route.extend({
    redirect: function() {
        this.transitionTo("intervenidos")
    }
});

// templates
App.IntroView = Em.View.extend({
	didInsertElement: function() {
        var e = this.get("controller");
    },
    touchEnd: function(e) {

    },
    click: function(e) {
        e.target.nodeName === "BUTTON" && this.get("controller").transitionToRoute("selecttest");   
    }
});

App.SelecttestView = Em.View.extend({
    didInsertElement: function() {
        var e = this.get("controller");
    },
    touchEnd: function(e) {
        
    },
    click: function(e) {
        if(e.target.value === "control")
            e.target.nodeName === "BUTTON" && this.get("controller").transitionToRoute("control");
        else
            e.target.nodeName === "BUTTON" && this.get("controller").transitionToRoute("intervenidos");
    }
});

App.ControlView = Em.View.extend({
    didInsertElement: function() {
        var e = this.get("controller");
        controlInit();
    },
    touchEnd: function(e) {
        
    },
    click: function(e) {
        
    }
});

App.IntervenidosView = Em.View.extend({
    didInsertElement: function() {
        var e = this.get("controller");
        intervenidosInit();
    },
    touchEnd: function(e) {
        
    },
    click: function(e) {
        
    }
});