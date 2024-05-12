<script>
  import {
    Bold,
    Italic,
    Strikethrough,
    Highlighter,
    Subscript,
    Superscript,
    Quote,
    List,
    ListOrdered,
    ListTodo,
    Code,
    CodeXml,
    Link,
    Image,
  } from 'lucide-svelte'
  import {ranges, dispatch} from './stores'
  import HeadingDropdown from './heading-dropdown.svelte'
  import TablePopover from './table-popover.svelte'
  import ToolbarButton from './toolbar-button.svelte'
  import ViewSelect from './view-select.svelte'

  const doWrap = (syntax) => {
    const changes = []
    $ranges?.forEach((range) => {
      const from = range?.from
      const to = range?.to
      if (from >= 0 && to >= 0) {
        changes.push({from: from, insert: syntax})
        changes.push({from: to, insert: syntax})
      }
    })
    $dispatch = {changes}
  }

  const doAppend = (syntax) => {
    const changes = []
    $ranges?.forEach((range) => {
      const from = range?.from
      if (from >= 0) {
        changes.push({from: from, insert: syntax})
      }
    })
    $dispatch = {changes}
  }
</script>

<div class="flex flex-nowrap p-1 gap-1 border-b bg-muted/40">
  <ToolbarButton label="Bold" icon={Bold} onClick={() => doWrap('**')} />
  <ToolbarButton label="Italic" icon={Italic} onClick={() => doWrap('*')} />
  <ToolbarButton label="Strikethrough" icon={Strikethrough} onClick={() => doWrap('~~')} />
  <ToolbarButton label="Mark" icon={Highlighter} onClick={() => doWrap('==')} />
  <HeadingDropdown />
  <ToolbarButton label="Subscript" icon={Subscript} onClick={() => doWrap('~')} />
  <ToolbarButton label="Superscript" icon={Superscript} onClick={() => doWrap('^')} />
  <ToolbarButton label="Quote" icon={Quote} onClick={() => doAppend('> ')} />
  <ToolbarButton label="Unordered List" icon={List} onClick={() => doAppend('- ')} />
  <ToolbarButton label="Ordered List" icon={ListOrdered} onClick={() => doAppend('1. ')} />
  <ToolbarButton label="Todo List" icon={ListTodo} onClick={() => doAppend('- [ ] ')} />
  <ToolbarButton label="Inline Code" icon={Code} onClick={() => doWrap('`')} />
  <ToolbarButton label="Code Block" icon={CodeXml} onClick={() => doWrap('```')} />
  <ToolbarButton label="Link" icon={Link} onClick={() => doAppend('[]()')} />
  <ToolbarButton label="Image Link" icon={Image} onClick={() => doAppend('![]()')} />
  <TablePopover />
  <ViewSelect />
</div>
