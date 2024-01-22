import "./css/style.css";
import headerIcon from './media/headerIcon.png'
import { createElement, createImage } from './components/htmlElement';
import { Header } from "./constants/uiConstants";

function createHeader(){
    const header = createElement(Header.GENERIC_CLASS, Header.GENERIC_CLASS);    
    header.appendChild(createImage(Header.ICON,headerIcon));
    header.appendChild(createElement('h1',Header.TITLE,'To-do List'));

    return header;
}

export default createHeader;