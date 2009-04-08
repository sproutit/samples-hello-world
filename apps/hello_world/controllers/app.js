// ==========================================================================
// Project:   HelloWorld.appController
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals HelloWorld */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
HelloWorld.appController = SC.Object.create(
/** @scope HelloWorld.appController.prototype */ {

  greeting: "Hello World!",
  
  toggleGreeting: function() {
    var currentGreeting = this.get('greeting');
    var newGreeting = (currentGreeting === 'Hello World!') ? 'I am on SproutCore!' : 'Hello World!' ;
    this.set('greeting', newGreeting);
  }

}) ;
