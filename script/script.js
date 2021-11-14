window.addEventListener('load',()=>{
    let progressBars = document.querySelectorAll('.progress-bar');
    let values = [
        '60%',
        '40%',
        '20%',
        '30%',
        '40%'
    ];
    progressBars.forEach((progressBar,index)=>{
        progressBar.style.width = values[index];
    });
});