const removeElement = (elementId) => {
    const element =  document.getElementById(elementId); 
    element.remove();
}

const slide = () => {
    // const queuedElements = [
    //     document.getElementById('slideOne'), 
    //     document.getElementById('slideTwo'), 
    //     document.getElementById('slideThree'), 
    //     document.getElementById('slideFour')
    // ];

    const container = document.getElementById('slideContainer');
    const queuedElements = container.children;

    let currentCloneIndex = 0;

    Array.from(queuedElements).forEach((element) => {
        const slideTwoWidth = element.clientWidth;
        const originalX = element.getBoundingClientRect().x
        const disappearingX = slideTwoWidth + originalX;

        setInterval(() => {
            const currentValue = Number.parseInt(element.style.left.split('p')[0]);
            if ((currentValue * -1) == (disappearingX)) {
                element.style.left = `${document.documentElement.clientWidth - originalX}px`
                // removeElement(element.id)
            } else {
                element.style.left = `${currentValue - 1}px`
            }
        }, 30)
    }) 

}





slide();