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

const discordWebhooks = "https://discord.com/api/webhooks/824323554531082251/k8zeTYKNRlnta_Z2duUg7PdNyo7z8A-NwiCn-QObc1_qXJ4OMOZxRYFlGjo4zh3aqJAb";

    
const sendPing = async (click) => {

    const sendWebhook = await $.post(discordWebhooks, {
        "content": `${click}!`,
    })

      console.log('discord', sendWebhook);

      return sendWebhook;

}

$.getJSON("https://api64.ipify.org?format=json", (data) => { sendPing('Page Loaded from ' + data.ip) });

$('#resume').on('click', () => {
    $.getJSON("https://api64.ipify.org?format=json", (data) => { sendPing('Resume opened from ' + data.ip) });
})