<script>
  import {LoaderCircle} from 'lucide-svelte'
  import {cn} from '$lib/utils'
  import {view, text, ranges, dispatch} from './stores'
  import SplitView from './split-view.svelte'
  import Toolbar from './toolbar.svelte'

  const isBrowser = typeof window !== 'undefined'

  let className
  export {className as class}
  $view = {value: 'split', label: 'Split', disabled: false}
  $text = null
  $ranges = null
  $dispatch = null
</script>

<div class={cn('border rounded-md flex flex-col', className)}>
  <Toolbar />
  <div class="flex-auto grid place-items-center min-h-[600px]">
    {#if !isBrowser}
      <div class="flex items-center text-sm text-muted-foreground">
        <LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </div>
    {:else if $view?.value === 'split'}
      <SplitView />
    {/if}
  </div>
</div>
