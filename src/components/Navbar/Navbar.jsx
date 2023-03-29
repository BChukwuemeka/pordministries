import { Nav, NavbarContainer,NavLogo,NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } from "./Navbar.elements";
import {FaBars, FaTimes} from "react-icons/fa"
import { IconContext } from "react-icons/lib";
import { useEffect, useState } from "react";
import { Button } from "../../globalStyles";
import Logo from '../../images/logo.png';





const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }



    useEffect(() => {
        showButton()
    }, []);


window.addEventListener('resize', showButton)





    return ( 
        <>
        <IconContext.Provider value={{color: 'fff'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' onClick={closeMobileMenu}>
                <NavIcon src={Logo} alt='logo'/>              
                      BRICH AND BEZ SERVICES
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/'>
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/services'>
                        Services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/products'>
                            Products
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/activities'>
                            Activities
                        </NavLinks>
                    </NavItem>
                    <NavItemBtn>
                        {button ? (<NavBtnLink to='signup'>
                            <Button primary>SIGN UP</Button>
                        </NavBtnLink>) : (<NavBtnLink to='/signup'>
                            <Button fontBig primary>
                                SIGN UP
                            </Button>
                        </NavBtnLink>)}
                    </NavItemBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>

     );
}
 
export default Navbar;