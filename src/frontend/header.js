import "./css/style.css";
import headerIcon from './media/headerIcon.svg'

function createHeader(){
    const header = document.createElement('header');
    header.classList.add('header');
  
    const title = document.createElement('p');
    title.textContent = 'To-do List';
    title.classList.add('title');

    const icon = new Image();
    icon.classList.add('headerIcon');
    icon.src = headerIcon;
  
    header.appendChild(icon);
    header.appendChild(title);

  
    return header;
}

export default createHeader;