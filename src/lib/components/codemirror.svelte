<script>
  import {basicSetup} from 'codemirror'
  import {defaultKeymap, indentWithTab} from '@codemirror/commands'
  import {markdown, markdownLanguage} from '@codemirror/lang-markdown'
  import {languages} from '@codemirror/language-data'
  import {Prec} from '@codemirror/state'
  import {EditorView, keymap} from '@codemirror/view'
  import {onDestroy, onMount} from 'svelte'

  export let text
  export let ranges
  export let doc = ''
  export let dispatch = null
  let element
  let view

  // TODO: Highlight, Todo list, Subscript, Superscript, Numbered List, fix links

  const doDispatch = () => {
    if (view && dispatch) {
      view.dispatch(dispatch)
    }
    dispatch = null
  }
  $: dispatch, doDispatch()

  const doUpdate = ({state}) => {
    if (state?.doc?.text) {
      text = state?.doc?.text
    } else if (state?.doc?.children) {
      text = state?.doc?.children
    }
    ranges = state?.selection?.ranges
  }

  onMount(() => {
    view = new EditorView({
      doc,
      extensions: [
        basicSetup,
        Prec.high(keymap.of(defaultKeymap)),
        keymap.of([indentWithTab]),
        markdown({base: markdownLanguage, codeLanguages: languages}),
        EditorView.updateListener.of((update) => doUpdate(update)),
      ],
      parent: element,
    })
  })
  onDestroy(() => view?.destroy())
</script>

<div
  bind:this={element}
  class="h-full w-full [&>.cm-editor]:h-full [&>.cm-focused]:outline-0 [&>.cm-editor>.cm-scroller>.cm-gutters]:bg-muted [&>.cm-editor>.cm-scroller>.cm-gutters]:text-muted-foreground"
/>
