'use client'

import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { useCallback, useContext, useState } from 'react';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { UiContext } from '@/providers/ui/UiProvider';
import ImageUpload from '../inputs/ImageUpload';
import SongUpload from '../inputs/SongUpload';


const UploadModal = ({ }) => {

    const router = useRouter();

    const { UploadModalisOpen, onCloseUploadModal, onOpenUploadModal } = useContext(UiContext);
    const [isLoading, setIsLoading] = useState(false);



    const { reset, control, register, setValue, watch, handleSubmit, formState: { errors } } = useForm({
        defaultValues:
        {
            author: '',
            title: '',
            song: null,
            image: null,
        }
    });

    console.log("ERRORS", errors)

    const image = watch('image');
    const song = watch('song');
    const customSetValue = (field, value) => {
        setValue(field, value, {
            shouldValidate: true, // By default, setting the field value using setValue does not trigger validation. However, if you set shouldValidate to true, it will trigger validation for that field.
            shouldDirty: true,  // Marking a field as dirty means that its value has changed from the initial/default value
            shouldTouch: true, // Marking a field as touched means that the user has interacted with the field, even if it was not changed
        });

    }





    const onSubmit = async (data) => {
        setIsLoading(true);
        // upload to cloudinary

    }


    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading
                title="Sube tu canción"
                subtitle="Utiliza formato mp3"
            />

            <Input
                id="author"
                label="Author"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="title"
                label="Title"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />

            <ImageUpload
                value={image}
                onChange={(value) => customSetValue('image', value)} />

            <SongUpload
                value={song}
                onChange={(value) => customSetValue('song', value)} />

        </div>)

    // const footerContent = (

    //     <div className="flex flex-col gap-4 mt-3">
    //         <hr />
    //         <Button
    //             outline
    //             label="Accede con Google"
    //             icon={FcGoogle}
    //             onClick={() => { signIn('google') }} />

    //         <div className="
    //         text-neutral-500
    //         text-center
    //         mt-4
    //         font-light
    //         ">
    //             <div className='
    //             flex flex-row justify-center items-center gap-2'>
    //                 <div>¿No tienes una cuenta?</div>
    //                 <div
    //                     onClick={toggleModal}
    //                     className="
    //                 text-neutral-800
    //                 cursor-pointer
    //                 hover:underline
    //                 "
    //                 >¡Regístrate!</div>

    //             </div>


    //         </div>

    //     </div>
    // )

    return (

        <Modal
            disabled={isLoading}
            isOpen={UploadModalisOpen}
            title="Login"
            actionLabel={isLoading ? 'Cargando...' : 'Acceder'}
            onClose={onCloseUploadModal}
            onOpen={onOpenUploadModal}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
        // footer={footerContent}
        />

    )
};

export default UploadModal;