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

	$: count = feedback.length
	$: average = feedback.reduce((a, {rating}) => a + rating, 0) / feedback.length

	const deleteFeedback = (e) => {
		const itemId = e.detail
		feedback = feedback.filter((item) => item.id !== itemId)
	}
</script>

<main class="container">
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback} /> 
</main>

