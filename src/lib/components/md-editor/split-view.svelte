<script>
  import * as Resizable from '$lib/components/ui/resizable/index'
  import Codemirror from '../codemirror.svelte'
  import MarkdownIt from '../markdown-it.svelte'
  import {text, ranges, dispatch} from './stores'
</script>

<Resizable.PaneGroup direction="horizontal">
  <Resizable.Pane defaultSize={50}>
    <Codemirror bind:text={$text} bind:ranges={$ranges} bind:dispatch={$dispatch} />
  </Resizable.Pane>
  <Resizable.Handle />
  <Resizable.Pane defaultSize={50}>
    <MarkdownIt text={$text} />
  </Resizable.Pane>
</Resizable.PaneGroup>
