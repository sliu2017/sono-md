<script>
  import {Heading, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6} from 'lucide-svelte'
  import {Button} from '$lib/components/ui/button/index'
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index'
  import * as Tooltip from '$lib/components/ui/tooltip/index'
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild let:builder>
    <Tooltip.Root>
      <Tooltip.Trigger>
        <Button builders={[builder]} variant="outline" size="icon">
          <Heading class="h-4 w-4" />
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <p>Headings</p>
      </Tooltip.Content>
    </Tooltip.Root>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content class="w-44">
    <DropdownMenu.Group>
      <DropdownMenu.Item inset>
        <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <Heading1 class="w-4 h-4" />
        </span>
        Heading 1
      </DropdownMenu.Item>
      <DropdownMenu.Item inset>
        <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <Heading2 class="w-4 h-4" />
        </span>
        Heading 2
      </DropdownMenu.Item>
      <DropdownMenu.Item inset>
        <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <Heading3 class="w-4 h-4" />
        </span>
        Heading 3
      </DropdownMenu.Item>
      <DropdownMenu.Item inset>
        <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <Heading4 class="w-4 h-4" />
        </span>
        Heading 4
      </DropdownMenu.Item>
      <DropdownMenu.Item inset>
        <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <Heading5 class="w-4 h-4" />
        </span>
        Heading 5
      </DropdownMenu.Item>
      <DropdownMenu.Item inset>
        <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <Heading6 class="w-4 h-4" />
        </span>
        Heading 6
      </DropdownMenu.Item>
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
