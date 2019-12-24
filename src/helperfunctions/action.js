export const createActionsWithPrefix = (prefix, actions) => {
    for (let prop in actions) {
        if (actions.hasOwnProperty(prop)) {
            actions[prop] = prefix + prop;
        }
    }
    return actions;
};