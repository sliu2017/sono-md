import {writable} from 'svelte/store'

export const view = writable({value: 'split', label: 'Split', disabled: false})

export const text = writable()

export const ranges = writable()

export const dispatch = writable()
