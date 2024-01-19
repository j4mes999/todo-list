function createElement(elementType,className, innerValue){
    const element = document.createElement(elementType);
    element.classList.add(className);
    element.innerHTML = innerValue;

    return element;
}

function createOption(className,innerValue,outerValue){
    const option = document.createElement('option');
    option.classList.add(className);
    option.value = innerValue;
    option.innerHTML = outerValue;

    return option;
}

export {createElement, createOption};