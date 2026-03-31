import React from "react";
import { Outlet } from "react-router-dom";
import vehicles from "../../../public/vehicles";
import { NavLink } from "react-router-dom";
import TruckIcon from '../../assets/svg/truck.svg?react'
import HomeIcon from '../../assets/svg/house.svg?react'
import ArrowIcon from '../../assets/svg/move-left.svg?react'
import SettingsIcon from '../../assets/svg/settings.svg?react'
import ProfileIcon from '../../assets/svg/circle-user-round.svg?react'
import NotificationBell from '../../assets/svg/bell.svg?react'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ChangeThemeIcon from '../../assets/svg/sun-moon.svg?react';
import { UserAvatar } from "../Overview/Overview.styled";
import {
    VehicleSection,
    MenuWrapper,
    StyledNavLink,
    TopMenu,
    HeaderTopBar,
    BottomMenu,
    Location,
    Vehicle,
    LogOut,
    SideBar,
    TopBar,
    IconWrapper,
    Title
} from '../Vehicles/VehiclesStyled'

export default function Layout({setTheme}) {
    const navigate = useNavigate()
    const { id } = useParams()
    const location = useLocation()
    const pathParts = location.pathname.split('/').filter(Boolean)
    let page = pathParts[0] || 'home'
    let pageName = page.charAt(0).toUpperCase() + page.slice(1)

    const filteredVehicle = vehicles.filter(v => v.id === +id)
    function clickBack() {
        navigate(-1)
    }
    return (
        <VehicleSection>
            <MenuWrapper>
                <SideBar>
                    <NavLink to='/'>
                        <Vehicle />
                    </NavLink>
                    <TopMenu>
                        <StyledNavLink to='/'>
                            <IconWrapper>
                                <HomeIcon />
                                Home
                            </IconWrapper>
                        </StyledNavLink>
                        <StyledNavLink to='/vehicles'>
                            <IconWrapper>
                                <TruckIcon />
                                Vehicles
                            </IconWrapper>
                        </StyledNavLink>
                        <StyledNavLink to='/settings'>
                            <IconWrapper>
                                <SettingsIcon />
                                Settings
                            </IconWrapper>
                        </StyledNavLink>
                        <StyledNavLink to='/profile'>
                            <IconWrapper>
                                <ProfileIcon />
                                Profile
                            </IconWrapper>
                        </StyledNavLink>
                    </TopMenu>
                    <BottomMenu>
                        <NavLink to='/logout'>
                            <LogOut />
                        </NavLink>
                    </BottomMenu>
                </SideBar>
                <TopBar>
                    <HeaderTopBar>
                        <Location>
                            <ArrowIcon onClick={clickBack} />
                            {filteredVehicle.map(v =>
                                <React.Fragment key={v.id}>

                                    <Title>{pageName} / {v.brand} {v.model} / {pathParts[2] && (

                                        pathParts[2].charAt(0).toUpperCase() + pathParts[2].slice(1)
                                    )}</Title>

                                </React.Fragment>
                            )}
                            {id === undefined && <Title>{pageName}</Title>}

                        </Location>
                        <NotificationBell />
                        <ChangeThemeIcon onClick={() =>
                            setTheme(prev => prev === "light" ? "dark" : "light")
                        } />
                        <UserAvatar src='https://w7.pngwing.com/pngs/842/134/png-transparent-avatar-face-man-boy-male-profile-smiley-avatar-icon.png' />
                    </HeaderTopBar>
                    <Outlet />
                </TopBar>
            </MenuWrapper>
        </VehicleSection>


    )

}
