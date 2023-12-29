import createHeader from "./header";

function loadWebsite(){
    const content = document.getElementById('content');
    content.appendChild(createHeader());
}

export default loadWebsite;