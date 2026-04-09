import React from "react";
import { Title } from "../Vehicles/VehiclesStyled";
import styled from "styled-components";
import PlusIcon from '../../assets/svg/plus.svg?react'
import vehicles from "../../../public/vehicles";
import ModalWindow from "../Modal/Modal";
import { useDispatch,useSelector } from "react-redux";
import { closeModal,openTypeModal } from "../../store/appslice";
import { openModal,title } from "../../store/selectors";
import { Button } from "../Vehicles/VehiclesStyled";
import {
    OverviewWrapper,
    Documents,
    Police,
    PoliceInfo,
    File,
    Label,
    Badge,
    DateItem,
    Dates,
    Divider,
    DividerVertical,
    TextWrapper,
    Value
} from '../Overview/Overview.styled'
const DocumentsStyled = styled(Documents)`
flex-direction:column;
margin-top:20px;
gap:20px;
`
const TextWrapperStyled = styled(TextWrapper)`
flex-direction: row;
align-items:center;
gap:20px;
`
const DateItemStyled = styled(DateItem)`
flex-direction: row;
align-items:center;
gap:20px;
`
const PoliceStyled = styled(Police)`
width:100%;
box-sizing: border-box;
`
import { useParams } from "react-router-dom";
export default function Document() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const modal = useSelector(openModal)
    const titleModal = useSelector(title)
    const filteredVehicle = vehicles.filter(v => v.id === +id)
    function openAddModal(){
        dispatch(openTypeModal('Do you want to add document?(this functionality is not working yet)'))
    }
    function closeModalka(){
       dispatch(closeModal())
    }
    return (
        <OverviewWrapper>
            {modal && (
                <ModalWindow closeModal={closeModalka} 
                title={titleModal}/>
            )}
            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                <Title>
                    Documents
                </Title>
                <Button variant="notice" onClick={()=>openAddModal()}>
                    <PlusIcon />
                    Add document
                </Button>
            </div>
            <DocumentsStyled>
                {filteredVehicle.map(v =>
                    v.documents.map(d =>
                        <React.Fragment key={d.id}>
                            <PoliceStyled>
                                <PoliceInfo>
                                    <File />
                                    <TextWrapperStyled>
                                        <Title>{d.title}</Title>
                                        <p>
                                            {d.number}
                                        </p>
                                    </TextWrapperStyled>
                                </PoliceInfo>
                                <Divider/> 
                                <Dates>
                                    <DateItemStyled>
                                        <Label>Effective from</Label>
                                        <Value>{d.validFrom}</Value>
                                    </DateItemStyled>
                                    <DividerVertical />

                                    <DateItemStyled>
                                        <Label>Effective to</Label>
                                        <Value>{d.validTo}</Value>
                                        <Badge status={d.status}>
                                            {d.status === "active" ? "Active" : "Expired"}
                                        </Badge>
                                    </DateItemStyled>
                                </Dates>
                            </PoliceStyled>
                        </React.Fragment>
                    )


                )}
            </DocumentsStyled>



        </OverviewWrapper>

    )


}