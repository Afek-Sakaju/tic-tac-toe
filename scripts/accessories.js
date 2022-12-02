function removeClasses(element, classes) {
    if (!(classes instanceof Array)) classes = [classes];

    for (const class1 of classes) {
        element.classList.remove(class1);
    }
}

function addClasses(element, classes) {
    if (!(classes instanceof Array)) classes = [classes];

    for (const class1 of classes) {
        element.classList.add(class1);
    }
}

function addAttributes(element, attributes) {
    if (!(attributes instanceof Array)) attributes = [attributes];

    for (const attribute of attributes) {
        for (const [name, value] of Object.entries(attribute)) {
            element.setAttribute(name, value);
        }
    }
}

function removeAttributes(element, attributes) {
    if (!(attributes instanceof Array)) attributes = [attributes];

    for (const attribute of attributes) {
        element.removeAttribute(attribute);
    }
}
