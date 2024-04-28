const moreBtn = document.querySelector('.brands-repair-list__more-btn');
const list = document.querySelector('.brands-repair-list__wrapper');

const createMoreBtnHandler = function (button) {

    button.addEventListener('click', function () {
        let isExpanded = moreBtn.classList.contains('brands-repair-list__less-btn');
        list.classList.toggle('brands-repair-list__wrapper--expanded');
        moreBtn.classList.toggle('brands-repair-list__less-btn');

        if (isExpanded) {
            moreBtn.textContent = 'Показать все';
        } else {
            moreBtn.textContent = 'Свернуть';
        }
    });

}

if (window.innerWidth >= 768) {
    createMoreBtnHandler(moreBtn);
}