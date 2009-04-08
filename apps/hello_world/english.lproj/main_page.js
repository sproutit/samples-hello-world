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
    childViews: 'labelView checkboxView'.w(),
    
    labelView: SC.LabelView.design({
      layout: { centerX: 0, centerY: 0, width: 300, height: 50 },
      valueBinding: "HelloWorld.appController.greeting"
    }),
    
    checkboxView: SC.CheckboxView.design({
      layout: { centerX: 0, centerY: 30, width: 300, height: 18 },
      title: "Show Clock",
      valueBinding: "HelloWorld.appController.isClockShowing" 
    })
  }).classNames('clock')

});
