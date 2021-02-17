const pageload = () => {
    const content = document.querySelector('#content');
    const header = document.createElement('h1');
    header.textContent = 'Burger Me Once!';
    const para = document.createElement('p');
    para.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fuga ad quibusdam expedita. Ea nobis unde optio minima at voluptatum totam, dolor dignissimos. Obcaecati illum amet commodi atque quam excepturi!'
    const image = document.createElement('img');
    image.src = 'https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80';
    content.appendChild(header);
    content.appendChild(para);
    content.appendChild(image);
  };

  export {pageload}