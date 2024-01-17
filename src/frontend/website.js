import createHeader from "./header";
import createFooter from "./footer";
import createProjectTree from "./projectTree";
import {createTaskPane} from "./taskpane";

function loadWebsite(){
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    
    const bodyPane = document.createElement('bodyPane');
    bodyPane.classList.add('bodyPane');
    bodyPane.appendChild(createProjectTree());
    bodyPane.appendChild(createTaskPane());

    content.appendChild(bodyPane);
    content.appendChild(createFooter());
    
}

export default loadWebsite;