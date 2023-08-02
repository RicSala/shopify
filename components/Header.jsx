'use client'

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from "react-icons/bi";
import Button from "./Button";
import { useContext } from "react";
import { UiContext } from "@/providers/ui/UiProvider";
import { useUser } from "@/hooks/useUser";
import { signOut } from "next-auth/react";
import { toast } from "react-hot-toast";
import { FaUserAlt } from "react-icons/fa";


const Header = ({
    children,
    className,
}) => {

    const { onOpenRegisterModal, onCloseRegisterModal, onOpenLoginModal } = useContext(UiContext)
    const router = useRouter();
    const { user,
        accessToken,
        isLoading,
        userDetails,
        subscription,
        data } = useUser();

    console.log("USE USER VALUE", user, accessToken, isLoading, userDetails, subscription, "DATA", data)

    const handleLogOut = () => {

        signOut()
            .then(() => {
                toast.success("Logged out successfully");
                router.refresh();
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };


    return (
        <div className={twMerge(`
        h-fit
        bg-gradient-to-b
        from-emerald-800
        p-6
        `)}>
            <div className="
        w-full
        mb-4
        flex
        items-center
        justify-between
        ">
                <div className="hidden md:flex gap-x-2 items-center">
                    <button
                        onClick={() => router.back()}
                        className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
                        <RxCaretLeft size={35} className="text-white" />
                    </button>
                    <button
                        onClick={() => router.forward()}
                        className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
                        <RxCaretRight size={35} className="text-white" />
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="
                    rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                        <HiHome className="text-black" size={20} />
                    </button>
                    <button className="
                    rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                        <BiSearch className="text-black" size={20} />
                    </button>

                </div>
                <div className="flex justify-between items-center gap-x-4">

                    {user ? <div className="
                    flex gap-x-4 items-center">
                        <Button className="bg-white px-6 py-2"
                            onClick={handleLogOut}
                        >

                            Logout
                        </Button>
                        <Button className="bg-white"
                            onClick={() => { router.push('/account') }}>
                            <FaUserAlt />
                        </Button>
                    </div> :
                        <>
                            <div>
                                <Button
                                    onClick={onOpenRegisterModal}
                                    className="bg-transparent text-neutral-300 font-medium">
                                    Sign Up
                                </Button>
                            </div>
                            <div>
                                <Button
                                    onClick={onOpenLoginModal}
                                    className="bg-white px-6 py-2">
                                    Login
                                </Button>
                            </div>
                        </>
                    }

                </div>
            </div>
            {children}
        </div>
    )
};
export default Header;