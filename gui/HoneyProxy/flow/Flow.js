define(["dojo/_base/declare","dojo/Stateful","./Request","./Response","../util/Observer"],function(declare, Stateful, requestDecorator, responseDecorator, Observer){
  var Flow = declare([Stateful, Observer.polyfillMixin],{
    constructor: function(json){
    
      this.request = {};
      this.response = {};
      this.filters = new Stateful();
      declare.safeMixin(this, json);
      
      requestDecorator.decorate(this);
      responseDecorator.decorate(this);
    }
  });

  return Flow;
});