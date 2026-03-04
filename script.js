let katta = document.getElementById('katta');
let kichik = document.getElementById('kichik')
let input = document.getElementById('input');
let qiymat = 0;
katta.addEventListener('click',()=>{
    qiymat++
    input.value = qiymat
})
kichik.addEventListener('click',()=>{
    qiymat=0;
    input.value=qiymat
})