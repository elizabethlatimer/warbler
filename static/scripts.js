$(function () {
	$(".follow").on("click", ".btn", async function (evt) {
		await handleFollow(evt);
	});

	$(".like-form").on("click", ".like", async function (evt) {
		await handleLikes(evt);
	});
});

async function handleFollow(evt) {
	evt.preventDefault();
	let form = evt.target.parentElement;
	const followUserId = form.dataset.userId;
	const response = await axios.post(`/users/handlefollow/${followUserId}`);
	form.innerHTML = response.data.html;
	if (response.data.follow_count) {
		$("#following-count").empty().append(response.data.follow_count);
	}
}

async function handleLikes(evt) {
	evt.preventDefault();
	let $star = $(evt.target.closest("i"));

	const messageId = $(evt.target.closest("form")).data().messageId;
	const response = await axios.post(`/messages/${messageId}/handle-like`);
	if (response) {
		$star.toggleClass("far fas");
		if (response.data.count){
			$("#user-likes").empty().append(response.data.count);
		}
	}
}
