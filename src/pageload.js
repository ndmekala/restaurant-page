const pageload = () => {
    const content = document.querySelector('#content');
    const tabholder = document.createElement('div')
    tabholder.setAttribute('id', 'tabholder');
    const tab1 = document.createElement('div');
    tab1.classList.add('tab');
    tab1.setAttribute('id', 'menu');
    tab1.textContent = 'Menus'
    const tab2 = document.createElement('div');
    tab2.setAttribute('id', 'contact');
    tab2.classList.add('tab');
    tab2.textContent = 'Contact'
    const tab3 = document.createElement('div');
    tab3.setAttribute('id', 'about');
    tab3.classList.add('tab');
    tab3.textContent = 'About'
    content.appendChild(tabholder);
    tabholder.appendChild(tab1);
    tabholder.appendChild(tab2);
    tabholder.appendChild(tab3);
  };

  export {pageload}