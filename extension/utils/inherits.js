const inherits = {
  'list.errorForeground': 'list.invalidItemForeground',
  'list.inactiveSelectionBackground': 'list.activeSelectionBackground',
  'list.inactiveSelectionForeground': 'list.activeSelectionForeground',
  'list.inactiveSelectionIconForeground': 'list.activeSelectionIconForeground',
  'list.inactiveFocusBackground': 'list.focusBackground',
  'list.inactiveFocusOutline': 'list.focusOutline',
  'statusBarItem.prominentBackground': 'statusBarItem.prominentHoverBackground',
  'titleBar.activeBackground': 'titleBar.inactiveBackground',
  'titleBar.activeForeground': 'titleBar.inactiveForeground',
  'tab.inactiveBackground': 'tab.unfocusedInactiveBackground',
  'tab.inactiveForeground': 'tab.unfocusedInactiveForeground',
  'tab.hoverBackground': 'tab.unfocusedHoverBackground',
  'tab.hoverForeground': 'tab.unfocusedHoverForeground',
  'tab.hoverBorder': 'tab.unfocusedHoverBorder',
  'tab.activeBackground': 'tab.unfocusedActiveBackground',
  'tab.activeForeground': 'tab.unfocusedActiveForeground',
  'tab.activeBorder': 'tab.unfocusedActiveBorder',
  'tab.activeBorderTop': 'tab.unfocusedActiveBorderTop',
  'editor.findMatchBackground': 'minimap.findMatchHighlight',
  'editor.selectionBackground': 'editor.inactiveSelectionBackground, minimap.selectionHighlight',
  'editor.selectionHighlightBackground':
    'minimap.selectionOccurrenceHighlight, editorOverviewRuler.selectionHighlightForeground',
  'editorBracketMatch.background': 'editorOverviewRuler.bracketMatchForeground',
  'editor.wordHighlightBackground': 'editorOverviewRuler.wordHighlightForeground',
  'editor.wordHighlightStrongBackground': 'editorOverviewRuler.wordHighlightStrongForeground',
  'minimap.errorHighlight': 'editorOverviewRuler.errorForeground',
  'minimap.warningHighlight': 'editorOverviewRuler.warningForeground',
  'minimap.findMatchHighlight': 'editorOverviewRuler.findMatchForeground',
  'editorWarning.foreground': 'minimap.warningHighlight',
  'editorError.foreground': 'minimap.errorHighlight',
  'settings.textInputBackground': 'settings.numberInputBackground',
  'settings.textInputForeground': 'settings.numberInputForeground',
  'settings.textInputBorder': 'settings.numberInputBorder',
  'gitDecoration.addedResourceForeground': 'editorGutter.addedBackground',
  'gitDecoration.modifiedResourceForeground': 'editorGutter.modifiedBackground',
  'gitDecoration.deletedResourceForeground': 'editorGutter.deletedBackground',
  'meta.object.member': 'support.type.property-name',
  'entity.name.type': 'support.type',
  'entity.name.function': 'support.function',
  'entity.name.type.class': 'support.class',
  comment: 'punctuation.definition.comment',
};

module.exports = name => {
  return (inherits[name] || '').split(', ').filter(Boolean);
};
