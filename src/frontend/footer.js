import githubIcon from './media/github.png';
import { createElement, createImage } from './components/htmlElement';
import { Footer } from './constants/uiConstants';

function createFooter(){
    const footer = createElement(Footer.GenericClass, Footer.GenericClass);

    const gitHubLink = document.createElement('a');
    gitHubLink.href = Footer.Link;
    gitHubLink.target = '_blank';
    gitHubLink.appendChild(createImage(Footer.GitHubIcon,githubIcon));

    footer.appendChild(createElement('p', Footer.Text,`Copyright © ${new Date().getFullYear()} Luis J. González`));
    footer.appendChild(gitHubLink);

    return footer;
}

export default createFooter;