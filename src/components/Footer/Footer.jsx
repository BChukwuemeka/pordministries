import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Button } from "../../globalStyles";
import { FooterContainer, FooterLink, FooterLinksContainer, FooterLinksItems, FooterLinksTitle, FooterLinksWrapper, FooterSubHeading, FooterSubscription, FooterSubText, Form, FormInput, SocialIcon, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from "./Footer.elements";
import { CircleOne, Horizontal, Vertical } from "../Cross/Cross.elements";

const Footer = () => {
    return ( 
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the
                    latest news and trends.
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name='email' type='email' placeholder='Your Email'>
                    </FormInput>
                    <Button fontBig>Subscribe</Button>

                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>About Us</FooterLinksTitle>
                        <FooterLink to='/about'>Mission</FooterLink>
                        <FooterLink to='/testimonies'>Testimonies</FooterLink>
                        <FooterLink to='/about'>Beliefs</FooterLink>
                        <FooterLink to='/signup'>New Here</FooterLink>
                        <FooterLink to='/activities'>Activites</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinksTitle>Contact Us</FooterLinksTitle>
                        <FooterLink to='/services'>Contact</FooterLink>
                        <FooterLink to='/services'>Support</FooterLink>
                        <FooterLink to='/gallery'>Outreach</FooterLink>
                        <FooterLink to='/services'>Sponsorship</FooterLink>
                    </FooterLinksItems>

                    </FooterLinksWrapper>

                    <FooterLinksWrapper>

                    <FooterLinksItems>
                        <FooterLinksTitle>Videos</FooterLinksTitle>
                        <FooterLink to='/gallery'>Submit Videos</FooterLink>
                        <FooterLink to='/gallery'>Ambassadors</FooterLink>
                        <FooterLink to='/gallery'>Sermons</FooterLink>
                        <FooterLink to='/gallery'>Podcast</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinksTitle>Social Media</FooterLinksTitle>
                        <FooterLink to='/'>Instagram</FooterLink>
                        <FooterLink to='/'>FaceBook</FooterLink>
                        <FooterLink to='/'>Youtube</FooterLink>
                        <FooterLink to='/'>Twitter</FooterLink>
                        <FooterLink to='/'>LinkedIn</FooterLink>
                    </FooterLinksItems>

                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' style={{fontSize: '1.3rem'}}>
                        
                            POOL OF REDEMPTION ASSEMBLY
                        </SocialLogo >
                    <WebsiteRights>Brich & Bez Services 2023</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Youtube' rel='noopener' noreferrer>
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
                            <FaLinkedin/>
                        </SocialIconLink>

                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
     );
}
 
export default Footer;