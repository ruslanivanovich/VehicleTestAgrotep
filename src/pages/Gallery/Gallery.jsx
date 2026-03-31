import React from "react";
import vehicles from "../../../public/vehicles";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Title } from "../Vehicles/VehiclesStyled";

import ModalWindow from "../Modal/Modal";
import {
    Gallery,
    GalleryItem,
    GalleryWrapper,
    Close,
    NextIcon,
    PrevIcon
} from './Gallery.style'

export default function GalleryVehicle() {
    const { id } = useParams()
    const filteredVehicle = vehicles.find(v => v.id === +id)
    const [vehicle, setVehicle] = useState(filteredVehicle)
    const [activeIndex, setActiveIndex] = useState(null);
    const [modal, setModal] = useState(false)
    function closeModal() {
        setModal(!modal)
    }
    function nextImg() {
        setActiveIndex(prev =>
            prev === vehicle.gallery.length - 1 ? 0 : prev + 1
        )

    }
    function prevImg() {
        setActiveIndex(prev =>
            prev === 0 ? vehicle.gallery.length - 1 : prev - 1
        )


    }
    function deleteImg(imgId) {
        const updatedGallery = vehicle.gallery.filter(g => g.id !== imgId)

        setVehicle({
            ...vehicle,
            gallery: updatedGallery
        })

    }

    return (
        <>
            <Gallery>
                <Title>
                    Gallery
                </Title>
                <GalleryWrapper>
                    {vehicle.gallery.map((g, index) =>
                        <React.Fragment key={g.id} >
                            <GalleryItem size={g.size}>
                                <Close onClick={() => deleteImg(g.id)} />
                                <img onClick={() => {
                                    closeModal();
                                    setActiveIndex(index)
                                }} src={g.url} alt="vehicle photo" />
                            </GalleryItem>
                        </React.Fragment>

                    )}
                </GalleryWrapper>
                {modal && activeIndex !== null && (
                    <ModalWindow
                        closeModal={closeModal}
                        children={<img src={vehicle.gallery[activeIndex].url} />}
                        prevImg={()=>
                            prevImg()}
                        nextImg={()=>
                            nextImg()}
                        prevSvg={<PrevIcon />}
                        nextSvg={<NextIcon />}
                    />
                )}


            </Gallery>



        </>

    )

}