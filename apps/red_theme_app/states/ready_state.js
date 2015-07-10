RedThemeApp.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    RedThemeApp.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    RedThemeApp.getPath('mainPage.mainPane').remove();
  }

});

