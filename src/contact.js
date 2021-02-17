const contactload = () => {
    const content = document.querySelector('#content');
    const header = document.createElement('h1');
    header.textContent = 'Contact Us';
    const para = document.createElement('p');
    para.innerHTML = '1-800-BURGER-BALL';
    const image = document.createElement('img');
    image.src = 'https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80';
    content.appendChild(header);
    content.appendChild(para);
    content.appendChild(image);
  };

  export {contactload}