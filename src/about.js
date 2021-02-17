const aboutload = () => {
    const content = document.querySelector('#content');
    const header = document.createElement('h1');
    header.textContent = 'Burger Me Once!';
    const para = document.createElement('p');
    para.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu. Proin fermentum leo vel orci. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Porta lorem mollis aliquam ut porttitor leo a. Morbi tristique senectus et netus et malesuada fames ac. At volutpat diam ut venenatis tellus in metus vulputate. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Neque ornare aenean euismod elementum nisi quis eleifend quam. Luctus venenatis lectus magna fringilla. Sed libero enim sed faucibus turpis in eu mi bibendum. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Ac turpis egestas maecenas pharetra convallis. Rhoncus urna neque viverra justo. Tristique senectus et netus et malesuada fames ac turpis. Tortor posuere ac ut consequat semper viverra nam libero. Venenatis a condimentum vitae sapien. Sit amet consectetur adipiscing elit. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Ornare suspendisse sed nisi lacus sed viverra tellus in. Amet nulla facilisi morbi tempus iaculis. Nullam non nisi est sit amet facilisis magna etiam. Commodo ullamcorper a lacus vestibulum sed arcu non. Tincidunt lobortis feugiat vivamus at augue. Fusce ut placerat orci nulla pellentesque dignissim enim. Egestas purus viverra accumsan in nisl nisi scelerisque. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Ut etiam sit amet nisl purus in mollis nunc. Quis eleifend quam adipiscing vitae proin sagittis nisl. Arcu non sodales neque sodales ut etiam.';
    const image = document.createElement('img');
    image.src = 'https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80';
    content.appendChild(header);
    content.appendChild(para);
    content.appendChild(image);
  };

  export {aboutload}