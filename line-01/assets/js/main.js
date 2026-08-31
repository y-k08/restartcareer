// =========================
// アコーディオン
// =========================
const qaItems = document.querySelectorAll('.qa-item');

qaItems.forEach((item) => {

	const question = item.querySelector('.qa-question');

	if (!question) return;

	question.addEventListener('click', () => {
		item.classList.toggle('is-open');
	});

});


// =========================
// 追従バナー
// =========================
window.addEventListener('scroll', () => {

	const cta =
		document.querySelector('.header-2');

	const conversion =
		document.querySelector('#conversion');

	if (!cta || !conversion) return;

	const conversionTop =
		conversion.getBoundingClientRect().top;

	// クロージングセクション（conversion）が画面に入ってきたら追従CTAを非表示にする
	if (
		window.scrollY > 1000 &&
		conversionTop > window.innerHeight
	) {

		cta.classList.add('show');

	} else {

		cta.classList.remove('show');

	}

});