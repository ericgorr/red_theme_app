RedThemeApp.statechart = SC.Statechart.create({

  initialState: 'readyState',

  readyState: SC.State.plugin('RedThemeApp.ReadyState')
  // someOtherState: SC.State.plugin('RedThemeApp.SomeOtherState')

});
