window.onload = () => {

    console.log('test');
    let start = new Date('03-27-2021');
    let today = new Date();

    let delta = (today.getTime() - start.getTime()) / (1000*60*60*24);

    anime({
        targets: '#days',
        innerText: [0,delta],
        color: '#ffef2f',
        round: 1,
        easing: 'easeInOutExpo',
        duration: 5000
    });

}