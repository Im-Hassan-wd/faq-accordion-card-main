const faqList = document.querySelector('ul');

faqList.addEventListener('click', e => {
  if(e.target.tagName === 'IMG' || e.target.tagName === 'P'){
    e.target.classList.toggle('active');
    if(e.target.classList.contains( 'active')){
      e.target
      .parentElement
      .parentElement
      .children[1]
      .style.height = 'initial';
    }else {
      e.target
      .parentElement
      .parentElement
      .children[1]
      .style.height = '0';
    }
  }
})
