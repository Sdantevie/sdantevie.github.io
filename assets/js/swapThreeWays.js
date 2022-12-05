
const swap = (e) => {
    e.stopImmediatePropagation();
    removeActive();
    e.currentTarget.classList.toggle('active');
    const newSrc = e.currentTarget.dataset.src;

    const iframe = document.getElementById('publishWays');
    iframe.setAttribute('src', newSrc);
}

const removeActive = () => {
    const swapContent = document.querySelectorAll('.publish-but');
    swapContent.forEach(element => {
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        }
    })
}

document.querySelectorAll('.publish-but').forEach(element => {
    element.addEventListener('click', (e) => { swap(e) });
})