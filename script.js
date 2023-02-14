
var menu_btn = document.getElementsByClassName('menu-line-cont')[0];
var collapse_btn = document.getElementsByClassName('collapse-nav')[0];
menu_btn.addEventListener('click',function(){
collapse_btn.classList.toggle('toggle-nav');
})


// for(i=0; i < job_btn.length; i++ ){

//   var get_job_btn_no =  job_btn[i];
//   console.log(get_job_btn_no);
// }
// function open_job_box(my_val){
//     var  job_btn = document.getElementById('get-job-btn');
// }

var  job_btn1 = document.getElementsByClassName('find-job-btn')[0];
var  job_btn2 = document.getElementsByClassName('find-candidate')[0];
var  job_form1 = document.getElementsByClassName('jsf1')[0];
var  job_form2 = document.getElementsByClassName('jsf2')[0];

job_btn1.addEventListener('click', function(){

    job_form1.style.display = 'block';
    job_form2.style.display = 'none';

    job_btn1.style.backgroundColor = 'white';
    job_btn1.style.color = 'gray';

    // for btn 2
    job_btn2.style.backgroundColor = '#157efb ';
    job_btn2.style.color = 'white';



});
job_btn2.addEventListener('click', function(){

    job_form2.style.display = 'block';
    job_form1.style.display = 'none';

    // for btn 1
    job_btn1.style.backgroundColor = '#157efb';
    job_btn1.style.color = 'white';

    // for btn 2
    job_btn2.style.backgroundColor = 'white';
    job_btn2.style.color = 'gray';

});