import createHeader from "./header";
import createFooter from "./footer";

function loadWebsite(){
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createFooter());
}

export default loadWebsite;