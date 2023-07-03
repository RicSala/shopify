
// import prisma from "@/utils/prismadb";
import { useSession } from "next-auth/react";
import { createContext, useContext, useState } from "react";



export const UserContext = createContext(undefined);


export const MyUserContextProvider = (props) => {

    const { data, status } = useSession()

    const user = data?.user || null;
    const accessToken = data?.accessToken || null;
    const [isLoading, setIsLoading] = useState(false);
    const [userDetails, setUserDetails] = useState(null);
    const [subscription, setSubscription] = useState(null);


    // const getUserDetails = async () => prisma.user.findUnique({ where: { email: user.id } });

    // const getUserSubscription = async () => prisma.subscription.findFirst({ where: { userId: user.id } });

    // const getSubscriptin = async () => prisma.subscription.findMany({ where: { userId: user.id } });

    const value = {
        user,
        accessToken,
        isLoading,
        userDetails,
        subscription,
    };


    return <UserContext.Provider value={value} {...props} />;
};


export const useUser = () => {

    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error(`useUser must be used within a MyUserContextProvider.`);
    }
    return context;
};