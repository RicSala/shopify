'use client'

import { createContext } from "react";
import { useReducer } from 'react';
import { uiReducer } from "./uiReducer";

// creates the context
export const UiContext = createContext()

// initial state for the context
const UI_INITIAL_STATE = {
    RegisterModalisOpen: false,
    LoginModalisOpen: false,
    UploadModalisOpen: false,
};


const UiProvider = ({ children }) => {

    // creates the reducer
    // REVIEW: what is the advantage of using a reducer here?
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const onOpenRegisterModal = () => {
        dispatch({ type: '[UI] - onOpen register modal' });
    };

    const onCloseRegisterModal = () => {
        dispatch({ type: '[UI] - onClose register modal' });
    };

    // same for login
    const onOpenLoginModal = () => {
        dispatch({ type: '[UI] - onOpen login modal' });
    };

    const onCloseLoginModal = () => {
        dispatch({ type: '[UI] - onClose login modal' });
    };

    // same for upload modal
    const onOpenUploadModal = () => {
        dispatch({ type: '[UI] - onOpen upload modal' });
    };

    const onCloseUploadModal = () => {
        dispatch({ type: '[UI] - onClose upload modal' });
    };



    return (
        <UiContext.Provider value={{
            ...state,

            // methods
            onOpenRegisterModal,
            onCloseRegisterModal,
            onOpenLoginModal,
            onCloseLoginModal,
            onOpenUploadModal,
            onCloseUploadModal,

        }}>
            {children}
        </UiContext.Provider>
    )
};
export default UiProvider;