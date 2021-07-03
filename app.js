const dropDowns = document.querySelectorAll('li img');

dropDowns.forEach(drop => {
  drop.addEventListener('click', (e) => {
    drop.classList.toggle('active');
    if(drop.classList.contains( 'active')){
      console.log('drop is activeee')
    }
  })
});
