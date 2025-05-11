document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.services__item-header');

    items.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.closest('.services__item');
            const sublist = item.querySelector('.services__sublist');

            const isOpen = item.classList.contains('services__item--open');

            if (isOpen) {
                // Закрытие
                sublist.style.maxHeight = sublist.scrollHeight + 'px'; // сначала ставим текущую высоту
                requestAnimationFrame(() => {
                    sublist.style.maxHeight = '0';
                });
                item.classList.remove('services__item--open');
            } else {
                // Открытие
                sublist.style.maxHeight = sublist.scrollHeight + 'px';
                item.classList.add('services__item--open');
            }
        });
    });
});
