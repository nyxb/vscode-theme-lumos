import { toArray } from '@nyxb/utils'
import { getColors } from './primer'
import { LumosThemes } from './colors'

export default function getTheme({ style, name, soft = false, black = false }) {
   // Usage: `pick({ light: "lightblue", dark: "darkblue" })`
   const pick = options => options[style]

   const lumos = (key: keyof typeof LumosThemes, op = '') => pick({ light: LumosThemes[key][1] + op, dark: LumosThemes[key][0] + op })

   const primer = getColors(style)

   const foreground = black
      ? '#dbd7cacc'
      : lumos('foreground')
   const secondaryForeground = lumos('secondaryForeground')
   const activeForeground = lumos('activeForeground')
   const primary = lumos('primary')

   const border = soft
      ? lumos('lowBorder')
      : lumos('border')
   const background = black
      ? '#000'
      : soft
         ? lumos('lowBackground')
         : lumos('background')
   const activeBackground = black
      ? '#121212'
      : soft
         ? lumos('lowActiveBackground')
         : lumos('activeBackground')

   const punctuation = black
      ? lumos('punctuation', 'cc')
      : lumos('punctuation')

   const selectionBackgroundInActive = pick({ light: '#22222208', dark: '#eeeeee08' })
   const selectionBackgroundActive = pick({ light: '#22222215', dark: '#eeeeee15' })
   const selectionBackground = pick({ light: '#22222215', dark: '#eeeeee15' })

   const theme = {
      name,
      base: pick({ light: 'vs', dark: 'vs-dark' }),
      colors: {
         'focusBorder': '#00000000',
         foreground,
         'descriptionForeground': secondaryForeground,
         'errorForeground': lumos('red'),

         'textLink.foreground': primary,
         'textLink.activeForeground': primary,
         'textBlockQuote.background': background,
         'textBlockQuote.border': border,
         'textCodeBlock.background': background,
         'textPreformat.foreground': primer.gray[6],
         'textSeparator.foreground': primer.gray[3],

         'button.background': primary,
         'button.foreground': background,
         'button.hoverBackground': primary,

         'checkbox.background': activeBackground,
         'checkbox.border': pick({ light: primer.gray[3], dark: primer.gray[1] }),

         'dropdown.background': background,
         'dropdown.border': border,
         'dropdown.foreground': foreground,
         'dropdown.listBackground': activeBackground,

         'input.background': activeBackground,
         'input.border': border,
         'input.foreground': foreground,
         'input.placeholderForeground': secondaryForeground,
         'inputOption.activeBackground': lumos('ignored'),

         'badge.foreground': background,
         'badge.background': secondaryForeground,

         'progressBar.background': primary,

         'titleBar.activeForeground': activeForeground,
         'titleBar.activeBackground': background,
         'titleBar.inactiveForeground': primer.gray[5],
         'titleBar.inactiveBackground': background,
         'titleBar.border': activeBackground,

         'activityBar.foreground': foreground,
         'activityBar.inactiveForeground': lumos('ignored'),
         'activityBar.background': background,
         'activityBarBadge.foreground': background,
         'activityBarBadge.background': activeForeground,
         'activityBar.activeBorder': primary,
         'activityBar.border': border,

         'sideBar.foreground': activeForeground,
         'sideBar.background': background,
         'sideBar.border': border,
         'sideBarTitle.foreground': foreground,
         'sideBarSectionHeader.foreground': foreground,
         'sideBarSectionHeader.background': background,
         'sideBarSectionHeader.border': border,

         'list.hoverForeground': foreground,
         'list.inactiveSelectionForeground': foreground,
         'list.activeSelectionForeground': foreground,
         'list.hoverBackground': activeBackground,
         'list.inactiveSelectionBackground': activeBackground,
         'list.activeSelectionBackground': activeBackground,
         'list.inactiveFocusBackground': background,
         'list.focusBackground': activeBackground,
         'list.highlightForeground': primary,

         'tree.indentGuidesStroke': pick({ light: primer.gray[2], dark: primer.gray[1] }),

         'notificationCenterHeader.foreground': primer.gray[5],
         'notificationCenterHeader.background': background,
         'notifications.foreground': foreground,
         'notifications.background': background,
         'notifications.border': border,
         'notificationsErrorIcon.foreground': lumos('red'),
         'notificationsWarningIcon.foreground': lumos('orange'),
         'notificationsInfoIcon.foreground': lumos('blue'),

         'pickerGroup.border': border,
         'pickerGroup.foreground': foreground,
         'quickInput.background': background,
         'quickInput.foreground': foreground,
         'quickInputList.focusBackground': activeBackground,

         'statusBar.foreground': activeForeground,
         'statusBar.background': background,
         'statusBar.border': border,
         'statusBar.noFolderBackground': background,
         'statusBar.debuggingBackground': activeBackground,
         'statusBar.debuggingForeground': activeForeground,
         'statusBarItem.prominentBackground': activeBackground,

         'editorGroupHeader.tabsBackground': background,
         'editorGroupHeader.tabsBorder': border,
         'editorGroup.border': border,

         'tab.activeForeground': foreground,
         'tab.inactiveForeground': primer.gray[5],
         'tab.inactiveBackground': background,
         'tab.activeBackground': background,
         'tab.hoverBackground': activeBackground,
         'tab.unfocusedHoverBackground': background,
         'tab.border': border,
         'tab.unfocusedActiveBorderTop': border,
         'tab.activeBorder': border,
         'tab.unfocusedActiveBorder': border,
         'tab.activeBorderTop': primary,

         'breadcrumb.foreground': primer.gray[5],
         'breadcrumb.focusForeground': foreground,
         'breadcrumb.background': activeBackground,
         'breadcrumb.activeSelectionForeground': selectionBackgroundActive,
         'breadcrumbPicker.background': background,

         'editor.foreground': foreground,
         'editor.background': background,
         'editorWidget.background': background,
         'editor.foldBackground': pick({ light: '#22222210', dark: '#eeeeee10' }),
         'editor.lineHighlightBackground': activeBackground,
         'editorLineNumber.foreground': lumos('ignored'),
         'editorLineNumber.activeForeground': activeForeground,
         'editorIndentGuide.background': pick({ light: '#00000015', dark: '#ffffff15' }),
         'editorIndentGuide.activeBackground': pick({ light: '#00000030', dark: '#ffffff30' }),
         'editorWhitespace.foreground': pick({ light: '#00000015', dark: '#ffffff15' }),
         // 'editorCursor.foreground': primary,

         'editor.findMatchBackground': pick({ light: '#e6cc7744', dark: '#e6cc7722' }),
         'editor.findMatchHighlightBackground': pick({ light: '#e6cc7766', dark: '#e6cc7744' }),
         'editor.inactiveSelectionBackground': selectionBackgroundInActive,
         'editor.selectionBackground': selectionBackground,
         'editor.selectionHighlightBackground': selectionBackgroundInActive,
         'editor.wordHighlightBackground': pick({ light: '#1c6b4805', dark: '#1c6b4805' }),
         'editor.wordHighlightStrongBackground': pick({ light: '#1c6b4810', dark: '#1c6b4810' }),
         'editorBracketMatch.background': pick({ light: '#1c6b4820', dark: '#4d937520' }),

         'diffEditor.insertedTextBackground': pick({ light: '#1c6b4815', dark: '#4d937522' }),
         'diffEditor.removedTextBackground': pick({ light: '#ab595910', dark: '#ab595922' }),

         'scrollbar.shadow': pick({ light: '#6a737d33', dark: '#0000' }),
         'scrollbarSlider.background': lumos('faded'),
         'scrollbarSlider.hoverBackground': lumos('ignored'),
         'scrollbarSlider.activeBackground': lumos('ignored'),
         'editorOverviewRuler.border': primer.white,

         'panel.background': background,
         'panel.border': border,
         'panelTitle.activeBorder': primary,
         'panelTitle.activeForeground': foreground,
         'panelTitle.inactiveForeground': primer.gray[5],
         'panelInput.border': pick({ light: primer.gray[2], dark: primer.gray[1] }),

         'terminal.foreground': foreground,
         'terminal.selectionBackground': selectionBackground,
         'terminal.ansiBrightBlack': pick({ light: '#aaaaaa', dark: '#777777' }),
         'terminal.ansiBrightBlue': lumos('blue'),
         'terminal.ansiBrightCyan': lumos('cyan'),
         'terminal.ansiBrightGreen': lumos('green'),
         'terminal.ansiBrightMagenta': lumos('magenta'),
         'terminal.ansiBrightRed': lumos('red'),
         'terminal.ansiBrightWhite': pick({ light: '#dddddd', dark: '#ffffff' }),
         'terminal.ansiBrightYellow': lumos('yellow'),
         'terminal.ansiBlack': pick({ light: LumosThemes.background[0], dark: LumosThemes.foreground[1] }),
         'terminal.ansiBlue': lumos('blue'),
         'terminal.ansiCyan': lumos('cyan'),
         'terminal.ansiGreen': lumos('green'),
         'terminal.ansiMagenta': lumos('magenta'),
         'terminal.ansiRed': lumos('red'),
         'terminal.ansiWhite': pick({ light: LumosThemes.foreground[0], dark: LumosThemes.foreground[0] }),
         'terminal.ansiYellow': lumos('yellow'),

         'gitDecoration.addedResourceForeground': lumos('green'),
         'gitDecoration.modifiedResourceForeground': lumos('blue'),
         'gitDecoration.deletedResourceForeground': lumos('red'),
         'gitDecoration.untrackedResourceForeground': lumos('cyan'),
         'gitDecoration.ignoredResourceForeground': lumos('ignored'),
         'gitDecoration.conflictingResourceForeground': lumos('orange'),
         'gitDecoration.submoduleResourceForeground': lumos('secondaryForeground'),

         'editorGutter.modifiedBackground': lumos('blue'),
         'editorGutter.addedBackground': lumos('green'),
         'editorGutter.deletedBackground': lumos('red'),

         'editorBracketHighlight.foreground1': lumos('cyan'),
         'editorBracketHighlight.foreground2': lumos('green'),
         'editorBracketHighlight.foreground3': lumos('orange'),
         'editorBracketHighlight.foreground4': lumos('magenta'),
         'editorBracketHighlight.foreground5': lumos('yellow'),
         'editorBracketHighlight.foreground6': lumos('blue'),

         'debugToolBar.background': background,
         'editor.stackFrameHighlightBackground': pick({ light: primer.yellow[1], dark: '#a707' }),
         'editor.focusedStackFrameHighlightBackground': pick({ light: primer.yellow[2], dark: '#b808' }),

         'peekViewEditor.matchHighlightBackground': pick({ dark: '#ffd33d33' }),
         'peekViewResult.matchHighlightBackground': pick({ dark: '#ffd33d33' }),
         'peekViewEditor.background': background,
         'peekViewResult.background': background,

         'settings.headerForeground': foreground,
         'settings.modifiedItemIndicator': primary,
         'welcomePage.buttonBackground': primer.gray[1],
         'welcomePage.buttonHoverBackground': primer.gray[2],

         'problemsErrorIcon.foreground': lumos('red'),
         'problemsWarningIcon.foreground': lumos('orange'),
         'problemsInfoIcon.foreground': lumos('blue'),

         'editorError.foreground': lumos('red'),
         'editorWarning.foreground': lumos('orange'),
         'editorInfo.foreground': lumos('blue'),
         'editorHint.foreground': lumos('green'),

         'editorGutter.commentRangeForeground': lumos('ignored'),
         'editorGutter.foldingControlForeground': lumos('secondaryForeground'),

         'editorInlayHint.foreground': punctuation,
         'editorInlayHint.background': '#00000000',

         'editorStickyScroll.background': activeBackground,
         'editorStickyScrollHover.background': activeBackground,

         'menu.separatorBackground': border,
      },
      semanticHighlighting: true,
      semanticTokenColors: {
         namespace: lumos('namespace'),
         property: lumos('property'),
         interface: lumos('interface'),
         type: lumos('interface'),
         class: lumos('class'),
      },
      tokenColors: [
         {
            scope: [
               'comment',
               'punctuation.definition.comment',
               'string.comment',
            ],
            settings: {
               foreground: lumos('comment'),
            },
         },
         {
            scope: [
               'delimiter.bracket',
               'delimiter',
               'invalid.illegal.character-not-allowed-here.html',
               'keyword.operator.rest',
               'keyword.operator.spread',
               'keyword.operator.type.annotation',
               'keyword.operator.relational',
               'keyword.operator.assignment',
               'meta.brace',
               'meta.tag.block.any.html',
               'meta.tag.inline.any.html',
               'meta.tag.structure.input.void.html',
               'meta.type.annotation',
               'meta.embedded.block.github-actions-expression',
               'storage.type.function.arrow',
               'keyword.operator.type',
               'meta.objectliteral.ts',
               'punctuation',
            ],
            settings: {
               foreground: punctuation,
            },
         },
         {
            scope: [
               'constant',
               'entity.name.constant',
               'variable.language',
               'meta.definition.variable',
            ],
            settings: {
               foreground: lumos('constant'),
            },
         },
         {
            scope: ['entity', 'entity.name'],
            settings: {
               foreground: lumos('function'),
            },
         },
         {
            scope: 'variable.parameter.function',
            settings: {
               foreground,
            },
         },
         {
            scope: [
               'entity.name.tag',
               'tag.html',
            ],
            settings: {
               foreground: lumos('keyword'),
            },
         },
         {
            scope: 'entity.name.function',
            settings: {
               foreground: lumos('function'),
            },
         },
         {
            scope: [
               'keyword',
               'storage.type.class.jsdoc',
            ],
            settings: {
               foreground: lumos('keyword'),
            },
         },
         {
            scope: [
               'storage',
               'storage.type',
               'support.type.builtin',
               'constant.language.undefined',
               'constant.language.null',
            ],
            settings: {
               foreground: lumos('builtin'),
            },
         },
         {
            scope: [
               'text.html.derivative',
               'storage.modifier.package',
               'storage.modifier.import',
               'storage.type.java',
            ],
            settings: {
               foreground,
            },
         },
         {
            scope: [
               'string',
               'string punctuation.section.embedded source',
               'attribute.value',
            ],
            settings: {
               foreground: lumos('string'),
            },
         },
         {
            scope: [
               'punctuation.definition.string',
               'punctuation.support.type.property-name',
            ],
            settings: {
               foreground: lumos('string', '99'),
            },
         },
         {
            scope: 'support',
            settings: {
               foreground: lumos('property'),
            },
         },
         {
            scope: [
               'property',
               'meta.property-name',
               'meta.object-literal.key',
               'entity.name.tag.yaml',
               'attribute.name',
            ],
            settings: {
               foreground: lumos('property'),
            },
         },
         {
            scope: [
               'entity.other.attribute-name',
               'invalid.deprecated.entity.other.attribute-name.html',
            ],
            settings: {
               foreground: lumos('variable'),
            },
         },
         {
            scope: [
               'variable',
               'identifier',
            ],
            settings: {
               foreground: lumos('variable'),
            },
         },
         {
            scope: [
               'support.type.primitive',
               'entity.name.type',
            ],
            settings: {
               foreground: lumos('type'),
            },
         },
         {
            scope: 'namespace',
            settings: {
               foreground: lumos('namespace'),
            },
         },
         {
            scope: [
               'keyword.operator',
               'keyword.operator.assignment.compound',
               'meta.var.expr.ts',
            ],
            settings: {
               foreground: lumos('operator'),
            },
         },
         {
            scope: 'invalid.broken',
            settings: {
               fontStyle: 'italic',
               foreground: primer.red[7],
            },
         },
         {
            scope: 'invalid.deprecated',
            settings: {
               fontStyle: 'italic',
               foreground: primer.red[7],
            },
         },
         {
            scope: 'invalid.illegal',
            settings: {
               fontStyle: 'italic',
               foreground: primer.red[7],
            },
         },
         {
            scope: 'invalid.unimplemented',
            settings: {
               fontStyle: 'italic',
               foreground: primer.red[7],
            },
         },
         {
            scope: 'carriage-return',
            settings: {
               fontStyle: 'italic underline',
               background: pick({ light: primer.red[5], dark: primer.red[6] }),
               foreground: primer.gray[0],
               content: '^M',
            },
         },
         {
            scope: 'message.error',
            settings: {
               foreground: primer.red[7],
            },
         },
         {
            scope: 'string variable',
            settings: {
               foreground: lumos('string'),
            },
         },
         {
            scope: ['source.regexp', 'string.regexp'],
            settings: {
               foreground: lumos('regex'),
            },
         },
         {
            scope: [
               'string.regexp.character-class',
               'string.regexp constant.character.escape',
               'string.regexp source.ruby.embedded',
               'string.regexp string.regexp.arbitrary-repitition',
            ],
            settings: {
               foreground: lumos('string'),
            },
         },
         {
            scope: 'string.regexp constant.character.escape',
            settings: {
               foreground: lumos('yellow'),
            },
         },
         {
            scope: [
               'support.constant',
            ],
            settings: {
               foreground: lumos('constant'),
            },
         },
         {
            scope: [
               'constant.numeric',
               'number',
            ],
            settings: {
               foreground: lumos('number'),
            },
         },
         {
            scope: [
               'keyword.other.unit',
            ],
            settings: {
               foreground: lumos('builtin'),
            },
         },
         {
            scope: [
               'constant.language.boolean',
               'constant.language',
            ],
            settings: {
               foreground: lumos('boolean'),
            },
         },
         {
            scope: 'meta.module-reference',
            settings: {
               foreground: primary,
            },
         },
         {
            scope: 'punctuation.definition.list.begin.markdown',
            settings: {
               foreground: lumos('orange'),
            },
         },
         {
            scope: ['markup.heading', 'markup.heading entity.name'],
            settings: {
               fontStyle: 'bold',
               foreground: primary,
            },
         },
         {
            scope: 'markup.quote',
            settings: {
               foreground: lumos('interface'),
            },
         },
         {
            scope: 'markup.italic',
            settings: {
               fontStyle: 'italic',
               foreground,
            },
         },
         {
            scope: 'markup.bold',
            settings: {
               fontStyle: 'bold',
               foreground,
            },
         },
         {
            scope: 'markup.raw',
            settings: {
               foreground: primary,
            },
         },
         {
            scope: [
               'markup.deleted',
               'meta.diff.header.from-file',
               'punctuation.definition.deleted',
            ],
            settings: {
               background: primer.red[0],
               foreground: primer.red[7],
            },
         },
         {
            scope: [
               'markup.inserted',
               'meta.diff.header.to-file',
               'punctuation.definition.inserted',
            ],
            settings: {
               background: primer.green[0],
               foreground: primer.green[6],
            },
         },
         {
            scope: ['markup.changed', 'punctuation.definition.changed'],
            settings: {
               background: primer.orange[1],
               foreground: primer.orange[6],
            },
         },
         {
            scope: ['markup.ignored', 'markup.untracked'],
            settings: {
               foreground: primer.gray[1],
               background: primer.blue[6],
            },
         },
         {
            scope: 'meta.diff.range',
            settings: {
               foreground: pick({ light: primer.purple[5], dark: primer.purple[6] }),
               fontStyle: 'bold',
            },
         },
         {
            scope: 'meta.diff.header',
            settings: {
               foreground: primer.blue[6],
            },
         },
         {
            scope: 'meta.separator',
            settings: {
               fontStyle: 'bold',
               foreground: primer.blue[6],
            },
         },
         {
            scope: 'meta.output',
            settings: {
               foreground: primer.blue[6],
            },
         },
         {
            scope: [
               'brackethighlighter.tag',
               'brackethighlighter.curly',
               'brackethighlighter.round',
               'brackethighlighter.square',
               'brackethighlighter.angle',
               'brackethighlighter.quote',
            ],
            settings: {
               foreground: primer.gray[6],
            },
         },
         {
            scope: 'brackethighlighter.unmatched',
            settings: {
               foreground: primer.red[7],
            },
         },
         {
            scope: [
               'constant.other.reference.link',
               'string.other.link',
               'punctuation.definition.string.begin.markdown',
               'punctuation.definition.string.end.markdown',
            ],
            settings: {
               foreground: lumos('string'),
            },
         },
         {
            scope: [
               'markup.underline.link.markdown',
            ],
            settings: {
               foreground: secondaryForeground,
               fontStyle: 'underline',
            },
         },
         {
            scope: [
               'type.identifier',
            ],
            settings: {
               foreground: lumos('class'),
            },
         },
         {
            scope: [
               'entity.other.attribute-name.html.vue',
            ],
            settings: {
               foreground: lumos('function'),
            },
         },
         {
            scope: [
               'invalid.illegal.unrecognized-tag.html',
            ],
            settings: {
               fontStyle: 'normal',
            },
         },
      ],
      rules: [],
   }

   // monaco rules
   const rules: any[] = []

   theme.tokenColors.forEach(({ scope, settings }: any) => {
      for (const s of toArray(scope)) {
         rules.push({
            token: s,
            foreground: settings.foreground?.replace('#', ''),
         })
      }
   })

   theme.rules = rules

   return theme
}
