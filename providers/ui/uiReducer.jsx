export const uiReducer = (state, action) => {
    switch (action.type) {
        case '[UI] - onOpen register modal':

            console.log('onOpen register modal')
            return {
                ...state,
                RegisterModalisOpen: true,
            };

        case '[UI] - onClose register modal':
            console.log('onClose register modal')
            return {
                ...state,
                RegisterModalisOpen: false,
            };


        default: return state;
    }


}