<script>
  import * as Select from '$lib/components/ui/select'
  import {view} from './stores'
</script>

<Select.Root bind:selected={$view}>
  <Select.Trigger class="w-36 ml-auto">
    <Select.Value placeholder="View" />
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="split">Split</Select.Item>
    <Select.Item value="editor">Editor</Select.Item>
    <Select.Item value="preview">Preview</Select.Item>
  </Select.Content>
</Select.Root>
