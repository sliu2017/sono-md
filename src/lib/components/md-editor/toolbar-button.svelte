<script>
  import {Button} from '$lib/components/ui/button/index'
  import * as Tooltip from '$lib/components/ui/tooltip/index'

  export let label
  export let icon
  export let onClick = () => {}
</script>

<Tooltip.Root>
  <Tooltip.Trigger asChild let:builder>
    <Button builders={[builder]} variant="outline" size="icon" on:click={onClick}>
      <svelte:component this={icon} class="h-4 w-4" />
    </Button>
  </Tooltip.Trigger>
  <Tooltip.Content>
    <p>{label}</p>
  </Tooltip.Content>
</Tooltip.Root>
