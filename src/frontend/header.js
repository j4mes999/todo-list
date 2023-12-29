import "./css/style.css";

function createHeader(){
    const header = document.createElement('header');
    header.classList.add('header');
  
    const title = document.createElement('p');
    title.textContent = 'To-do List';
    title.classList.add('title');
  
    header.appendChild(title);
  
    return header;
}

export default createHeader;