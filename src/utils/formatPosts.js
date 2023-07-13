export function formatPosts(
	posts,
	{
		filterOutDrafts = true,
		filterOutFuturePosts = true,
		sortByDate = true,
		limit = 0
	} = {}
) {
	const filteredPosts = posts.reduce((acc, post) => {
		const { date, draft } = post.data;

		if (filterOutDrafts && draft) return acc;

		if (filterOutFuturePosts && new Date(date) > new Date()) return acc;

		acc.push(post);

		return acc;
	}, []);

	if (sortByDate) {
		filteredPosts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
	} else {
		filteredPosts.sort(() => Math.random() - 0.5);
	}

	if (typeof limit === 'number') {
		return filteredPosts.slice(0, limit);
	}
	return filteredPosts;
}
