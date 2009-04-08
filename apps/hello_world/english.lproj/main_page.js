// ==========================================================================
// Project:   HelloWorld - mainPage
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals HelloWorld */

// This page describes the main user interface for your application.  
HelloWorld.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'labelView buttonView'.w(),
    
    labelView: SC.LabelView.design({
      layout: { centerX: 0, centerY: 0, width: 250, height: 18 },
      valueBinding: "HelloWorld.appController.greeting"
    }),
    
    buttonView: SC.ButtonView.design({
      layout: { centerX: 0, centerY: 20, width: 250, height: 18 },
      title: "Change Title",
      action: "toggleGreeting",
      target: "HelloWorld.appController" 
    })
  })

});
