<script>
  import 'highlight.js/styles/github-dark-dimmed.min.css'
  import hljs from 'highlight.js'
  import markdownit from 'markdown-it'
  import {debounce} from '$lib/utils'
  import {onMount} from 'svelte'
  import {markdownitTagClass} from './markdown-it-class'

  export let text
  let md
  let result = ''

  const doText = () => {
    const joinedText = text?.join('\n') ?? ''
    if (md) {
      result = md.render(joinedText) ?? ''
    }
  }
  const debounceDoText = debounce(() => doText())
  $: text, debounceDoText()

  // TODO: Todo List

  onMount(() => {
    md = markdownit({
      html: true,
      breaks: true,
      typographer: true,
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return (
              '<div class="relative rounded-md overflow-hidden mt-2">' +
              '<div class="absolute top-0 right-0 px-4 pt-2 text-muted-foreground/40">' +
              lang +
              '</div>' +
              '<pre><code class="hljs overflow-auto bg-current"><div class="pt-6">' +
              hljs.highlight(str, {language: lang, ignoreIllegals: true}).value +
              '</div></code></pre></div>'
            )
          } catch (__) {}
        }

        return (
          '<pre><code class="hljs overflow-auto rounded-md mt-2">' +
          md.utils.escapeHtml(str) +
          '</code></pre>'
        )
      },
    }).use(markdownitTagClass, {
      h1: ['text-4xl', 'font-extrabold', 'tracking-tight', 'lg:text-5xl', 'mt-6'],
      h2: ['border-b', 'text-3xl', 'font-semibold', 'tracking-tight', 'mt-6'],
      h3: ['text-2xl', 'font-semibold', 'tracking-tight', 'mt-5'],
      h4: ['text-xl', 'font-semibold', 'tracking-tight', 'mt-5'],
      h5: ['text-lg', 'font-semibold', 'tracking-tight', 'mt-4'],
      h6: ['font-semibold', 'tracking-tight', 'mt-4'],
      p: ['leading-7', 'mt-2'],
      blockquote: ['border-l-2', 'pl-6', 'italic', 'my-4'],
      ul: ['ml-6', 'list-disc', 'mt-2'],
      code: [
        '[&:not(:has(div))]:relative',
        '[&:not(:has(div))]:rounded',
        '[&:not(:has(div))]:bg-muted',
        '[&:not(:has(div))]:px-[0.3rem]',
        '[&:not(:has(div))]:py-[0.2rem]',
        '[&:not(:has(div))]:font-mono',
        '[&:not(:has(div))]:text-sm',
        '[&:not(:has(div))]:font-semibold',
      ],
      table: ['mt-2'],
      tr: ['m-0', 'border-t', 'p-0', 'even:bg-muted'],
      th: [
        'border',
        'px-4',
        'py-2',
        'text-left',
        'font-bold',
        '[&[align=center]]:text-center',
        '[&[align=right]]:text-right',
      ],
      td: [
        'border',
        'px-4',
        'py-2',
        'text-left',
        '[&[align=center]]:text-center',
        '[&[align=right]]:text-right',
      ],
    })
  })
</script>

<div class="p-4">
  {@html result}
</div>
