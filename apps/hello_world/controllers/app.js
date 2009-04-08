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
  
  isClockShowing: NO,
  
  tick: function() {
    this.set('greeting', this.now()) ;
  },

  now: function() {
    return new Date().format('hh:mm:ss');
  },
  
  toggleGreeting: function() {
    var currentGreeting = this.get('greeting');
    var newGreeting = (currentGreeting === 'Hello World!') ? 'I am on SproutCore!' : 'Hello World!' ;
    this.set('greeting', newGreeting);
  },
  
  isClockShowingObserver: function() {
    var isClockShowing = this.get('isClockShowing') ;

    // create a timer if it does not exist already
    if (!this._timer) this._timer = SC.Timer.schedule({
      target: this, action: 'tick', repeats: YES, interval: 1000
    });

    // pause the timer unless the clock is showing
    this._timer.set('isPaused', !isClockShowing) ;

    // update right now
    var newGreeting = (isClockShowing) ? this.now() : 'Hello World';
    this.set('greeting', newGreeting) ;
  }.observes('isClockShowing')

}) ;
