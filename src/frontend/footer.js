import githubIcon from './media/github.png';
import { createElement, createImage } from './components/htmlElement';
import { Footer } from './constants/uiConstants';

function createFooter(){
    const footer = createElement(Footer.GENERIC_CLASS, Footer.GENERIC_CLASS);

    const gitHubLink = document.createElement('a');
    gitHubLink.href = Footer.LINK;
    gitHubLink.target = '_blank';
    gitHubLink.appendChild(createImage(Footer.GIT_HUB_ICON,githubIcon));

    footer.appendChild(createElement('p', Footer.TEXT,`Copyright © ${new Date().getFullYear()} Luis J. González`));
    footer.appendChild(gitHubLink);

    return footer;
}

export default createFooter;