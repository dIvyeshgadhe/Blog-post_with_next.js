import Head from 'next/head'
import React from 'react'

interface IProps {
    title: string;
    description: string;
    favicon?: string
}

const Meta = (props: IProps) => {
    const { title, description, favicon } = props
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href={favicon ? favicon : `/favicon.ico/`} />
        </Head>
    )
}

export default Meta;