window.onload = () => {

    let start = new Date('05-27-2021');
    let today = new Date();

    let delta = Math.ceil((today.getTime() - start.getTime()) / (1000*60*60*24));

    anime({
        targets: '#days',
        innerText: [0,delta],
        color: '#ffef2f',
        round: 1,
        easing: 'cubicBezier(0.055, 0.370, 0.050, 1.055)',
        duration: 4000
    });

}