import { writable } from 'svelte/store'

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "This is the greatest app I've ever seen"
  },
  {
    id: 2,
    rating: 2,
    text: "You call this an app??"
  },
  {
    id: 3,
    rating: 6,
    text: "It's okay I guess, Twitter is better though"
  },
])