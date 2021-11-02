let body = document.querySelector('body');
body.classList.add('menu-close');
document.querySelector('.toggle-menu').addEventListener('click', function(){
  body.classList.toggle('menu-close');
});

document.querySelectorAll('.main-menu li a').forEach((item, i) => {
  if(document.location.pathname == item.href.replace(document.location.origin,'')){
    item.parentElement.classList.add('active');
  }
});

if(document.location.hash == '#broken'){

  document.querySelectorAll('a[href="#"], a[href$=".docx"]').forEach((item, i) => {
    item.classList.add('broken-link')
  });

}

function checkContrastPref(){
  if(localStorage.getItem('hc') == 'true'){
    body.classList.add('hight-contrasted')
  }else{
    body.classList.remove('hight-contrasted')
  }
}
checkContrastPref()

document.querySelector('a.contrast').addEventListener('click', (e)=>{
  e.preventDefault()


  if(localStorage.getItem('hc') == 'true'){
    localStorage.setItem('hc',false)
  }else{
    localStorage.setItem('hc',true)
  }
  checkContrastPref()
})