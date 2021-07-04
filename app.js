const faqList = document.querySelector('ul');

faqList.addEventListener('click', e => {
  if(e.target.tagName === 'IMG'){
    e.target.classList.toggle('active');
    if(e.target.classList.contains( 'active')){
      e.target
      .parentElement
      .parentElement
      .children[1]
      .style.display = 'block';
    }else {
      e.target
      .parentElement
      .parentElement
      .children[1]
      .style.display = 'none';
    }
  }
})
