import "./css/style.css";
import headerIcon from './media/headerIcon.png'
import { createElement, createImage } from './components/htmlElement';
import { Header } from "./constants/uiConstants";

function createHeader(){
    const header = createElement(Header.GenericClass, Header.GenericClass);    
    header.appendChild(createImage(Header.Icon,headerIcon));
    header.appendChild(createElement('h1',Header.Title,'To-do List'));

    return header;
}

export default createHeader;