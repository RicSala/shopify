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

        case '[UI] - onOpen login modal':
            console.log('onOpen login modal')
            return {
                ...state,
                LoginModalisOpen: true,
            };

        case '[UI] - onClose login modal':
            console.log('onClose login modal')
            return {
                ...state,
                LoginModalisOpen: false,
            };

        case '[UI] - onOpen upload modal':
            console.log('onOpen upload modal')
            return {
                ...state,
                UploadModalisOpen: true,
            };

        case '[UI] - onClose upload modal':
            console.log('onClose upload modal')
            return {
                ...state,
                UploadModalisOpen: false,
            };

        default: return state;
    }


}