function modifyClasses(
    element,
    classes = { classesToRemove: [], classesToAdd: [] }
) {
    classesToRemove = classes.classesToRemove ?? [];
    classesToAdd = classes.classesToAdd ?? [];

    for (const class1 of classesToRemove) {
        element.classList.remove(class1);
    }

    for (const class1 of classesToAdd) {
        element.classList.add(class1);
    }
}

function modifyAttributes(
    element,
    attributes = {
        attributesToRemove: [],
        attributesToAdd: [],
    }
) {
    attributesToRemove = attributes.attributesToRemove ?? [];
    attributesToAdd = attributes.attributesToAdd ?? [];

    for (const attribute1 of attributesToRemove) {
        element.removeAttribute(attribute1);
    }

    for (const obj of attributesToAdd) {
        for (const [attribute, value] of Object.entries(obj)) {
            element.setAttribute(attribute, value);
        }
    }
}

function clearLockedGameButtons(element) {
    modifyClasses(element, {
        classesToRemove: ['locked', 'buttonO', 'buttonX'],
    });
}

function resetGameButtons(element) {
    modifyAttributes(element, {
        attributesToAdd: [
            { onclick: `chooseButton(${element.id[12]})` },
            { name: 'empty' },
        ],
    });
    modifyClasses(element, { classesToAdd: ['playing'] });
}
