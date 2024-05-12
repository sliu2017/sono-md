<script>
  import {Table} from 'lucide-svelte'
  import {Button} from '$lib/components/ui/button/index'
  import * as Popover from '$lib/components/ui/popover/index'
  import * as Tooltip from '$lib/components/ui/tooltip/index'
  import {cn} from '$lib/utils'

  let open = false
  let hoverI = -1
  let hoverJ = -1

  const resetHover = () => {
    hoverI = -1
    hoverJ = -1
  }
  $: open, resetHover()
</script>

<Popover.Root bind:open>
  <Popover.Trigger asChild let:builder>
    <Tooltip.Root>
      <Tooltip.Trigger>
        <Button builders={[builder]} variant="outline" size="icon">
          <Table class="h-4 w-4" />
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <p>Table</p>
      </Tooltip.Content>
    </Tooltip.Root>
  </Popover.Trigger>
  <Popover.Content class="w-fit">
    <div class="grid grid-cols-6 gap-1">
      {#each Array(4).fill() as _, i}
        {#each Array(6).fill() as _, j}
          <button
            class={cn(
              'h-4 w-4 bg-primary/10 rounded-sm transition-colors',
              i <= hoverI && j <= hoverJ ? 'bg-primary/40' : ''
            )}
            on:mouseover={() => {
              hoverI = i
              hoverJ = j
            }}
            on:focus
          />
        {/each}
      {/each}
    </div>
  </Popover.Content>
</Popover.Root>
