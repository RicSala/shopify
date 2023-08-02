'use client'

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback, useState } from "react";
import { TbMusic, TbPhotoPlus } from "react-icons/tb";

const SongUpload = ({
    onChange,
    value,
}) => {

    const [originalFilename, setOriginalFilename] = useState(null);


    const handleUpload = useCallback((result) => {
        console.log("image uploaded", result)
        onChange(result.info.secure_url);
        const filename = result.info.original_filename + '.' + result.info.format;
        setOriginalFilename(filename);
    }, [onChange]);


    return (
        <CldUploadWidget
            onUpload={handleUpload}
            uploadPreset="lbgb29le"
            options={
                {
                    maxFiles: 1,
                }
            }>
            {({ open }) => {
                return (
                    <div
                        onClick={() => open?.()}
                        className="
                        relative
                        cursor-pointer
                        hover:opacity-70
                        transition-opacity
                        border-dashed
                        border-2
                        py-5
                        border-neutral-300
                        flex
                        flex-row
                        justify-center
                        items-center
                        gap-4
                        text-neutral-600
                        "
                    >


                        {value ? (
                            <div className="font-semibold text-lg">

                                {/* {value} */}
                                {/* show only the filename */}
                                {originalFilename}
                            </div>
                        )
                            : <>
                                <TbMusic size={30} />
                                <div className="font-semibold text-lg">
                                    Haz click para subir una canción
                                </div>
                            </>}

                    </div>
                )
            }}

        </CldUploadWidget>
    )
}

export default SongUpload;