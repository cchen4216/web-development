document.querySelector(".main p").style.display = "none";
document.querySelector(".main").classList.add('spinner-2');

// mimic server req
setTimeout(() => {
    document.querySelector(".main").classList.remove('spinner-2');
    document.querySelector('.main p').style.display = 'block';
}, 4000);

