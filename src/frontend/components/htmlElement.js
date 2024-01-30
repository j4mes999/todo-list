function createElement(elementType,className, innerValue){
    const element = document.createElement(elementType);
    element.classList.add(className);
    if(innerValue != null){
        element.innerHTML = innerValue;
    }

    return element;
}

function createOption(className,innerValue,outerValue){
    const option = document.createElement('option');
    option.classList.add(className);
    option.value = innerValue;
    option.innerHTML = outerValue;

    return option;
}

function createInput(className, placeHolder, type){
  const input = document.createElement('input');
  input.classList.add(className);
  input.placeholder = placeHolder;
  if (type != null){
    input.type = type;
  }

  return input
}

function createButton(className, innerValue, type){
    const button = document.createElement('button');
    button.classList.add(className);
    if ( innerValue != null){
      button.appendChild(createElement('span','spanButton',innerValue));
    }
    //button.innerHTML = innerValue;
    if (type != null){
      button.type = type;
    }
    
    return button;
}

function createImage(className, imageFile){
    const image = new Image();
    image.classList.add(className);
    image.src = imageFile;

    return image;
}

export {createElement, createOption, createInput, createButton, createImage};