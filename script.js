document.addEventListener('DOMContentLoaded', function() {
    var btnYes = document.querySelector('.btnYes');
    var btnNo = document.querySelector('.btnNo');
    var img1 = document.querySelector('.img2');
    var img2 = document.querySelector('.img1');

    btnYes.addEventListener('click', function() {
        img1.style.display = 'block';
        img2.style.display = 'none';
    });

    btnNo.addEventListener('click', function() {
        img1.style.display = 'none';
        img2.style.display = 'block';
    });
});