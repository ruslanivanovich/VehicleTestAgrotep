import React from "react";
import vehicles from "../../../public/vehicles";
import { Title } from "../Vehicles/VehiclesStyled";
import { useParams } from "react-router-dom";
import FuelIcon from '../../assets/svg/fuel.svg?react'
import BatteryIcon from '../../assets/svg/battery.svg?react'
import HealthIcon from '../../assets/svg/wrench.svg?react'
import ModalWindow from "../Modal/Modal";
import { Button } from "../Vehicles/VehiclesStyled";
import PlusIcon from '../../assets/svg/plus.svg?react'
import { openTypeModal,closeModal } from "../../store/appslice";
import { useDispatch,useSelector } from "react-redux";
import { title,openModal} from "../../store/selectors";

import {
    OverviewWrapper,
    Documents,
    Police,
    PoliceInfo,
    File,
    DateActivity,
    DateItem,
    Dates,
    Divider,
    DividerVertical,
    Telematics,
    TelematicsLevel,
    TelematicsWrapper,
    TextWrapper,
    Label,
    Value,
    Badge,
    Bar,
    Fill,
    Active,
    UserAvatar,
    History,
    HistoryWrapper,
    InfoUser
} from './Overview.styled'

export default function Overview() {
    const dispatch = useDispatch();
    const titleModal = useSelector(title);
    const modal = useSelector(openModal);

    const { id } = useParams()
    function openAddModal() {
        dispatch(openTypeModal('Do you want to add document?(this functionality is not working yet)'))
    }
    function closeModalka() {
        dispatch(closeModal())
    }

    const filteredVehicle = vehicles.filter(v => v.id === +id)
    return (
        <OverviewWrapper>
            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                <Title>
                    Last Documents
                </Title>
                <Button variant="notice" onClick={()=>openAddModal()}>
                    <PlusIcon />
                    Add document
                </Button>
            </div>
            <Documents>
                {filteredVehicle.map(v =>
                    v.documents.map(d =>
                        <React.Fragment key={d.id}>
                            <Police>
                                {modal && (
                                    <ModalWindow closeModal={closeModalka}
                                    title={titleModal}/>
                                )}
                                <PoliceInfo>
                                    <File />
                                    <TextWrapper>
                                        <Title>{d.title}</Title>
                                        <p>
                                            {d.number}
                                        </p>
                                    </TextWrapper>
                                </PoliceInfo>
                                <Divider />
                                <Dates>
                                    <DateItem>
                                        <Label>Effective from</Label>
                                        <Value>{d.validFrom}</Value>
                                    </DateItem>
                                    <DividerVertical />

                                    <DateItem>
                                        <Label>Effective to</Label>
                                        <Value>{d.validTo}</Value>
                                        <Badge status={d.status}>
                                            {d.status === "active" ? "Active" : "Expired"}
                                        </Badge>
                                    </DateItem>
                                </Dates>
                            </Police>
                        </React.Fragment>
                    )


                )}
            </Documents>
            <Telematics>
                <Title>
                    Telematics
                </Title>
                <Divider></Divider>
                <TelematicsWrapper>
                    {filteredVehicle.map(v =>
                        <React.Fragment key={v.id}>
                            <TelematicsLevel>
                                <FuelIcon />
                                <Bar>
                                    <Fill level={v.telematics.fuelLevel} />
                                </Bar>
                            </TelematicsLevel>
                            <TelematicsLevel>
                                <BatteryIcon />
                                <Bar>
                                    <Fill level={v.telematics.battery} />
                                </Bar>
                            </TelematicsLevel>
                            <TelematicsLevel>
                                <HealthIcon />
                                <Bar>
                                    <Fill level={v.telematics.health} />
                                </Bar>
                            </TelematicsLevel>
                            <Title>
                                Mileage: {v.telematics.mileage} km
                            </Title>
                        </React.Fragment>

                    )}
                </TelematicsWrapper>
            </Telematics>
            <History>
                <Title>
                    Latest activity
                </Title>
                <HistoryWrapper>
                    {filteredVehicle.map(v =>
                        v.history.map(h =>
                            <React.Fragment key={h.id}>
                                <Active >
                                    <DateActivity>
                                        <Label>{h.date}</Label>
                                        <Title>
                                            {h.title}
                                        </Title>
                                    </DateActivity>
                                    <InfoUser>
                                        <UserAvatar src={h.userImage} alt="avatar" />
                                        <DateItem>
                                            <Title>{h.user}</Title>
                                            <Label>
                                                {h.email}
                                            </Label>
                                        </DateItem>
                                    </InfoUser>
                                </Active>
                                <Divider></Divider>

                            </React.Fragment>

                        )

                    )}

                </HistoryWrapper>

            </History>



        </OverviewWrapper>



    )


}