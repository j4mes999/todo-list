import githubIcon from './media/github.png';
const MY_GIT_HUB_LINK = 'https://github.com/j4mes999';

function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');
  
    const footerText = document.createElement('p');
    footerText.textContent = `Copyright © ${new Date().getFullYear()} Luis J. González`;
    footerText.classList.add('textFooter');

    const gitHubLink = document.createElement('a');
    gitHubLink.href = MY_GIT_HUB_LINK;
    const githubImg = new Image();
    githubImg.classList.add('githubIcon');
    githubImg.src = githubIcon;
    gitHubLink.appendChild(githubImg);


    footer.appendChild(footerText);
    footer.appendChild(gitHubLink);

    return footer;
}

export default createFooter;