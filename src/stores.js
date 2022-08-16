import { writable } from 'svelte/store'

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'oi oi'
  },
  {
    id: 2,
    rating: 9,
    text: 'oi oiiiiii'
  },
  {
    id: 3,
    rating: 8,
    text: 'oi oiiiiiiiiiiiiii'
  },
])