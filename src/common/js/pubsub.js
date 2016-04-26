//use pub and sub
(function () {
  console.log('hello world');

  var API = function () {
    this.actions = {};
  };

  API.prototype.subscribe = function (action, todo) {
  	var actions = this.actions;
    var list = actions[action]  || [];
    list.push(todo);
    actions[action] = list;
  }

  API.prototype.publish = function (action, params) {
  	var actions = this.actions;
    var list = actions[action];
    if (list === undefined) {
      return console.warn('Action(' + action + ') Not Exist!!!')
    }
    list.forEach((item)=> {
    	item(params);
      // item.apply(item, params);
    });
  }

  window.PubSub = new API();


})();