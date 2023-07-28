import { BiSolidDashboard } from "react-icons/bi";
import { MdClass } from "react-icons/md";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { LuMessagesSquare } from "react-icons/lu";
import { LogoutBox, LogoutButton, LogoutImg, LogoutParagraph, Nav, NavItem, NavLink, SidebarContainer } from "./style";
import logoutImg from "../../assets/logout.jpg";

function SideBarLeft() {
    return (
        <SidebarContainer>
            <Nav>
                <NavItem>
                    <NavLink to={"#"}>
                        <BiSolidDashboard /> Dashboard
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={"#"}>
                        <MdClass /> Class
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={"#"}>
                        <BsFillCameraVideoFill /> Streaming
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={"#"}>
                        <LuMessagesSquare /> Message
                    </NavLink>
                </NavItem>
            </Nav>

            <LogoutBox>
                <LogoutImg src={logoutImg} alt="Logout illustration" />
                <LogoutParagraph>Are you sure to log out from E-Learning ?</LogoutParagraph>
                <LogoutButton to={"/logout"}>Log out</LogoutButton>
            </LogoutBox>
        </SidebarContainer>
    )
}

export default SideBarLeft