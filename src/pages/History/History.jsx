import React from "react";
import vehicles from "../../../public/vehicles";
import { useParams } from "react-router-dom";
import { Title } from "../Vehicles/VehiclesStyled";
import {
    OverviewWrapper,
    History,
    HistoryWrapper,
    Active,
    DateActivity,
    InfoUser,
    UserAvatar,
    Divider,
    Label,
    DateItem,
} from "../Overview/Overview.styled";

export default function HistoryVehicle() {
    const { id } = useParams()
    const filteredVehicle = vehicles.filter(v => v.id === +id)
    return (
        <OverviewWrapper>
            <Title>
                Activity
            </Title>


            {filteredVehicle.map(v =>
                v.history.map(h =>
                    <History>
                        <HistoryWrapper key={h.id}>
                            <Active>
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
                            <Divider />
                        </HistoryWrapper>
                    </History>

                )

            )}


        </OverviewWrapper>
    )

}