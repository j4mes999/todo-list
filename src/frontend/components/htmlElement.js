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

function createInput(className, placeHolder){
  const input = document.createElement('input');
  input.classList.add(className);
  input.placeholder = placeHolder;

  return input
}

function createButton(className, innerValue, type){
    const button = document.createElement('button');
    button.classList.add(className);
    button.innerHTML = innerValue;
    if (type != null){
      button.type = type;
    }
    
    return button;
  }

export {createElement, createOption, createInput, createButton};