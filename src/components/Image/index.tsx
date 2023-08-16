import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import ph from '../../public/Placeholder_1.png'

interface IProps {
    alt: string;
    src: string | StaticImageData;
    type: 'static' | 'external';
    placeholder?: "empty" | "blur";
    width?: number;
    height?: number;
    loading?: "eager" | "lazy";
}

const AppImage = ({ type, placeholder, alt, src, loading }: IProps) => {
    const [error, seterror] = useState<boolean>(false)

    return (
        <Image
            src={!error ? src : ph}
            fill={true}
            placeholder={type === "static" ? 'blur' : placeholder}
            loading={loading}
            onError={() => seterror(true)}
            alt={alt}
        />
    )
}

export default AppImage