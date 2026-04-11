import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Title } from "../Vehicles/VehiclesStyled";
import { closeModal } from "../../store/appslice";
import { openModal, activeInd, filteredVehicles } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { nextIndex, prevIndex, deleteImg, filteredVehicle, setActiveIndex } from "../../store/galleryslice";

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
    const dispatch = useDispatch()
    const modal = useSelector(openModal)
    useEffect(() => {
         dispatch(filteredVehicle(id))
    }, [id, dispatch])
    const filteredV = useSelector(filteredVehicles)
    const activeIndex = useSelector(activeInd)
    function closeModalka() {
        dispatch(closeModal())
    }
    function nextImg() {
        dispatch(nextIndex())
    }
    function prevImg() {
        dispatch(prevIndex())
    }
    function deleteImage(imgId) {
        dispatch(deleteImg(imgId))
    }

    return (
        <>
            <Gallery>
                <Title>
                    Gallery
                </Title>
                <GalleryWrapper>
                    {filteredV?.gallery?.map((g, index) =>
                        <React.Fragment key={g.id} >
                            <GalleryItem size={g.size}>
                                <Close onClick={() => deleteImage(g.id)} />
                                <img onClick={() => {
                                    closeModalka();
                                    dispatch(setActiveIndex(index))
                                }} src={g.url} alt="vehicle photo" />
                            </GalleryItem>
                        </React.Fragment>

                    )}
                </GalleryWrapper>
                {modal && activeIndex !== null && (
                    <ModalWindow
                        closeModal={closeModalka}
                        children={<img src={filteredV.gallery[activeIndex].url} />}
                        prevImg={() =>
                            prevImg()}
                        nextImg={() =>
                            nextImg()}
                        prevSvg={<PrevIcon />}
                        nextSvg={<NextIcon />}
                    />
                )}


            </Gallery>



        </>

    )

}