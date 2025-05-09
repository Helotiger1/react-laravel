import React from 'react'

interface modalProps{
    isOpen : boolean
}

export const AddModal = ({ isOpen} : modalProps) => {
    if (!isOpen) return null;

    return (<></>)
}
