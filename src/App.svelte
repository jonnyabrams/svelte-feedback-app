<script>
	import FeedbackList from './components/FeedbackList.svelte'

	let feedback = [
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
	]
</script>

<main>
	<FeedbackList {feedback} />
	 
</main>

