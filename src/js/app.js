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