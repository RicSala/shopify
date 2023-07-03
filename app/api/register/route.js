import prisma from '@/utils/prismadb';
// import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';


export async function POST(req) {

    const { name, email, password, confirmPassword } = await req.json()

    // VALIDATIONS ##############################
    if (password.length < 8) {
        console.log("password.length < 8")
        return NextResponse.json({ error: 'La contraseña debe tener al menos 8 caracteres' }, { status: '400', })
    }

    if (name.length < 3) {
        console.log("name.length < 3")
        return NextResponse.json({ error: 'El nombre debe tener al menos 3 caracteres' }, { status: '400', })
    }

    // if (!isValidEmail(email)) {
    //     console.log("!isValidEmail(email)")
    //     return NextResponse.json({ error: 'Por favor, introduce un email válido' }, { status: '400', })
    // }

    // check if user exists using prisma
    const userExists = await prisma.user.findUnique({
        where: {
            email: email.toLowerCase(),
        }
    });

    if (userExists) {
        return NextResponse.json({ error: 'No ha sido posible realizar el registro - USUARIO' }, { status: '400' })
        // return NextResponse.json({ error: 'No ha sido posible realizar el registro - USUARIO' }, { status: '500', })
    }

    try {
        // const registeredUser = await newUser.save();
        console.log("CREATING NEW USER");
        const newUser = await prisma.user.create({
            data: {
                name,
                email: email.toLowerCase(),
                // city: 'Pending',
                // role: 'user',
                password,
                confirmPassword
            }
        })

        console.log("NEW USER CREATED", newUser);

        // save the user in the db

        return NextResponse.json({
            user: newUser
        })


    } catch (error) {
        console.log("Error while saving new user", error);
        return NextResponse.json({ error: 'No ha sido posible realizar el registro - ERROR ON SAVE' }, { status: '500', });
    }

}