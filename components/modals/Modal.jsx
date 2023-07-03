import { useCallback, useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

const Modal = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel
}) => {

    const [showModal, setShowModal] = useState(false)

    // OUTSIDE -> CLOSE: To close the modal when clicking outside of it
    const modalRef = useRef();
    const handleOutsideClick = (event) => {
        if (!modalRef.current.contains(event.target) || modalRef.current === event.target) {
            handleClose();
        }
    };
    // END OF OUTSIDE -> CLOSE

    const handleClose = useCallback(() => {
        if (disabled) return;
        setShowModal(false);
        setTimeout(() => { // we wait for the animation to finish before closing the modal, so it doesn't disappear abruptly
            onClose();
        }, 300);
    }, [disabled, onClose]);

    // If is disabled, we don't submit, else we submit the function that was passed as a prop
    const handleSubmit = useCallback(() => {
        if (disabled) return;
        onSubmit(); // REVIEW: how does the modal dissapear after submitting? --> it's closed on the parent component
    }, [disabled, onSubmit]);


    // if disabled or there is no secondary action, we don't do anything, else we do the secondary action
    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) return;
        secondaryAction();
    }, [disabled, secondaryAction]);


    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    // if (!isOpen) we don't even render the modal (it's not that we display:none it)
    if (!isOpen) return null;

    return (
        // this is the background that is gonna cover the whole screen
        // overflow hidden = hide the scroll bar and the content that is outside the screen
        // inset-0 = top, right, bottom, left = 0 --> this is what makes the background cover the whole screen
        // TODO: what does we need the rest for?
        <div

            onClick={handleOutsideClick}
            ref={modalRef}
            className="
        flex
        fixed
        inset-0
        z-50

        bg-neutral-800/70
        text-black
        backdrop-blur-sm
        ">
            {/* This is positioning the modal */}
            <div className="
            relative
            w-full
            md:w-4/6
            lg:w-3/6
            xl:w-2/5
            my-6
            mx-auto
            h-full
            lg:h-auto
            md:h-auto
            ">

                {/* This is CONTENT, the modal itself */}

                <div className={`
                    translate
                    duration-300
                    h-full
                    ${showModal ? 'translate-y-0' : 'translate-y-full'}
                    ${showModal ? 'opacity-100' : 'opacity-0'}
                    `}
                >

                    <div className="
                    flex
                    flex-col
                    relative
                    translate
                    w-full
                    h-full
                    lg:h-auto
                    md:h-auto
                    bg-white
                    border-0
                    rounded-lg
                    shadow-lg
                    outline-none
                    focus:outline-none
                    ">
                        {/* HEADER */}
                        <div className="
                    flex
                    relative
                    items-center
                    justify-center
                    p-6
                    border-b-[1px]
                    rounded-t
                    ">
                            <button className="
                        absolute
                        left-9
                        hover:opacity-70
                        transition
                        p-1
                        ">
                                <IoMdClose size={18}
                                    onClick={handleClose}
                                />


                            </button>
                            <div className="text-lg font-semibold">
                                {title}
                            </div>
                        </div>
                        {/* END OF HEADER */}

                        {/* BODY */}
                        <div className="relative p-6 flex-auto">
                            {body}
                        </div>
                        {/* END OF BODY */}

                        {/* FOOTER */}

                        <div className="
                    flex
                    flex-col
                    gap-2
                    p-6">
                            <div className="
                        flex
                        flex-row
                        items-center
                        gap-4
                        w-full
                        ">

                                {secondaryAction && secondaryActionLabel &&
                                    <Button onClick={handleSecondaryAction} label={secondaryActionLabel} />
                                }
                                <Button onClick={handleSubmit} label={actionLabel} disabled={disabled} />
                            </div>
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Modal;