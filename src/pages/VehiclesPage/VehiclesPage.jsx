import React from "react";
import vehicles from "../../../public/vehicles";
import { useParams } from "react-router-dom";
import { Button, Title } from "../Vehicles/VehiclesStyled";
import PencilIcon from '../../assets/svg/pencil.svg?react'
import Trash from '../../assets/svg/trash.svg?react'
import { Outlet } from "react-router-dom";
import ModalWindow from "../Modal/Modal";
import Refresh from '../../assets/svg/refresh-cw.svg?react'
import { openModal, title } from "../../store/selectors";
import { closeModal, openTypeModal } from "../../store/appslice";
import { useSelector, useDispatch } from "react-redux";
import {
    VehicleCard,
    VehicleCardContent,
    VehicleCardHeader,
    VehicleInformation,
    Truck,
    NoteText,
    AddNotice,
    TitleLabel,
    TitleValue,
    SideMenu,
    Ul,
    Li,
    MenuLink
} from './VehiclePage.styled'


export default function LayoutPage() {
    const { id } = useParams()
    const modal = useSelector(openModal)
    const titleModal = useSelector(title)
    const dispatch = useDispatch()

    function openDeleteModal() {
        dispatch(openTypeModal('Do you really want to delete this vehicle?(this functionality is not working yet)'))
    }
    function openEditModal() {
       dispatch(openTypeModal('Edit vehicle(this functionality is not working yet)'))
    }
    function openNoticeModal() {
        dispatch(openTypeModal('Do you want to add this notice?(this functionality is not working yet)'))
    }
    function closeModalka() {
        dispatch(closeModal())
       
    }
    const filteredVehicle = vehicles.filter(v => v.id === +id)
    return (
        <VehicleCard>
            {filteredVehicle.map(v => {
                const rows = [
                    { label: "Number", value: v.number },
                    { label: "Model", value: `${v.brand} ${v.model}` },
                    { label: "Year", value: `${v.year}` },
                    { label: "VIN", value: `${v.vin}` },
                    { label: "Mileage", value: `${v.mileage} km` },
                    { label: "EuroClass", value: `${v.euroClass}` },
                ];

                return (
                    <React.Fragment key={v.id}>
                        {modal && (
                            <ModalWindow
                                closeModal={closeModalka}
                                title={titleModal}
                            />
                        )}
                        <VehicleCardHeader>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <Truck />
                                <Title>{v.brand} {v.model}</Title>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <Button variant='primary' onClick={() => openEditModal()}><PencilIcon /> Edit</Button>
                                <Button variant='delete' onClick={() => openDeleteModal()}><Trash /> Delete</Button>
                            </div>
                        </VehicleCardHeader>

                        <VehicleCardContent>
                            <div>
                                <img
                                    style={{ width: '400px', height: '300px', marginTop: '20px' }}
                                    src={v.imageUrl}
                                    alt="truck"
                                />

                                <VehicleInformation>
                                    <Title>Vehicle Information</Title>

                                    {rows.map((row, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                borderBottom: '1px solid #E0E2E7',
                                                paddingBottom: '5px',
                                                marginTop: '10px'
                                            }}
                                        >
                                            <TitleLabel>{row.label}</TitleLabel>
                                            <TitleValue>{row.value}</TitleValue>
                                        </div>
                                    ))}
                                    <AddNotice>
                                        <Button variant='notice' onClick={() => openNoticeModal()}>
                                            <Refresh /> Add Note
                                        </Button>
                                        <NoteText>
                                            No notes yet... You can add an intra note for vehicle.
                                        </NoteText>
                                    </AddNotice>
                                </VehicleInformation>
                            </div>
                            <SideMenu>
                                <Ul>
                                    <Li>
                                        <MenuLink to='overview'>
                                            Overview
                                        </MenuLink>
                                    </Li>
                                    <Li>
                                        <MenuLink to='documents'>
                                            Documents
                                        </MenuLink>
                                    </Li>
                                    <Li>
                                        <MenuLink to='gallery'>
                                            Gallery
                                        </MenuLink>
                                    </Li>
                                    <Li>
                                        <MenuLink to='history'>
                                            History
                                        </MenuLink>

                                    </Li>
                                </Ul>
                                <Outlet />
                            </SideMenu>
                        </VehicleCardContent>
                    </React.Fragment>
                );
            })}
        </VehicleCard>
    )
}