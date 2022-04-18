registerListeners();

function showModal(dataId) {
    hideAllModals();
    const modalElement = document.querySelector('.modal[data-id="' + dataId + '"]');
    if(modalElement) {
        modalElement.classList.add('show');
        modalElement.querySelector('.modal-content').scrollTo(0, 0);
        document.body.classList.add('no-scroll');
    }
}

function hideAllModals() {
    document.querySelectorAll('.modal').forEach(modalElement => modalElement.classList.remove('show'));
    document.body.classList.remove('no-scroll');
}

function registerListeners() {
    document.querySelectorAll('.backdrop').forEach(backgdropElement => {
        backgdropElement.addEventListener('click', e => {
            if(e.target === e.currentTarget) {
                hideAllModals();
            }
        });
    });

    document.querySelectorAll('.dot').forEach(dotElement => {
        dotElement.addEventListener('click', e => showModal(e.target.dataset.target));
    })
}
