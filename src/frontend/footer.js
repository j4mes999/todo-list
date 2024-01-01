function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');
  
    const footerText = document.createElement('p');
    footerText.textContent = `Copyright © ${new Date().getFullYear()} Luis J. González`;
    footerText.classList.add('textFooter');
    footer.appendChild(footerText);

    return footer;
}

export default createFooter;