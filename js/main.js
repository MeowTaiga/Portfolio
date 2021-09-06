/*
    Main.js, Written by Aisaka.dev
*/



//Initialize Locomotive Scrolling

(function () {


    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });

    $(`#scrollToBottom`).on('click', () => {
        scroll.scrollTo('bottom');
    })

    let stylesArray = [
        'background-image: url(https://i.pinimg.com/736x/39/74/b1/3974b17c7714a3a3dbf9b79577e01729.jpg)',
        'background-size: cover',
        'color: #fff',
        'padding: 10px 20px',
        'line-height: 35px',
        'width : 200px',
        'height : 150px',
        'border : 1px solid black'
    ].join(';')
    console.log('%c Hire Me!', stylesArray);

    
})();