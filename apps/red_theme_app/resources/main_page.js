// ==========================================================================
// Project:   RedThemeApp - mainPage
// Copyright: @2015 My Company, Inc.
// ==========================================================================
/*globals RedThemeApp */

// This page describes the main user interface for your application.
RedThemeApp.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['button', 'textfield'],
    themeName:  'red-look',

    button: SC.ButtonView.extend({
      classNames: ['welcome-label'],
      layout: { top: 10, left: 10, width: 300, height: 24 },
      title: "Welcome to SproutCore!"
    }),
    
    textfield: SC.TextFieldView.extend({
    	layout: { top: 50, left: 10, width: 300, height: 100 },
    	
    	isTextArea: true,
    	isEditable: false,
    	isBrowserFocusable: false,
    	acceptsFirstResponder: false,
    	value: 'some text'
	})

  })

});
