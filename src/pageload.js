const pageload = () => {
    const content = document.querySelector('#content');
    const tabholder = document.createElement('div')
    tabholder.setAttribute('id', 'tabholder');
    const tab1 = document.createElement('div');
    tab1.classList.add('tab');
    tab1.textContent = 'Menus'
    const tab2 = document.createElement('div');
    tab2.classList.add('tab');
    tab2.textContent = 'Contact'
    const tab3 = document.createElement('div');
    tab3.classList.add('tab');
    tab3.textContent = 'About'
    const header = document.createElement('h1');
    header.textContent = 'Burger Me Once!';
    const para = document.createElement('p');
    para.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fuga ad quibusdam expedita. Ea nobis unde optio minima at voluptatum totam, dolor dignissimos. Obcaecati illum amet commodi atque quam excepturi!'
    const image = document.createElement('img');
    image.src = 'https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80';
    content.appendChild(tabholder);
    tabholder.appendChild(tab1);
    tabholder.appendChild(tab2);
    tabholder.appendChild(tab3);
    content.appendChild(header);
    content.appendChild(para);
    content.appendChild(image);
  };

  export {pageload}