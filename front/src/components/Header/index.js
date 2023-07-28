import { FaSearch, FaCog, FaBell } from "react-icons/fa";
import { Button, ButtonBox, HeaderBrand, HeaderContainer, SearchBox, SearchButton, SearchInput } from "./style";

function Header() {
    return (
        <HeaderContainer>
            <HeaderBrand to={"/"}>E-Learning</HeaderBrand>
            
            <SearchBox>
                <SearchInput type="text" placeholder="Search Here" />
                <SearchButton>
                    <FaSearch />
                </SearchButton>
            </SearchBox>
            
            <ButtonBox>
                <Button>
                    <FaBell />
                </Button>

                <Button>
                    <FaCog />
                </Button>
            </ButtonBox>
        </HeaderContainer>
    )
}

export default Header