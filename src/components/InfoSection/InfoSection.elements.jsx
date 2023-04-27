import styled from "styled-components";
import { ButtonS } from "../../globalStyles";




export const InfoSec = styled.div`
    color: #fff;
    padding: 160px 0;
    background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};

`;


export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};


`;


export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;



    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;

    }
`;



export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;


@media screen and (max-width: 768px) {
    padding-bottom: 65px;
}
`


export const TopLine = styled.div`
    color: ${({lightTopLine}) => (lightTopLine ? '#a9b3c1' : '#4b59f7')};
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`


export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#1c2237')};

`


export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({lightTextDesc}) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`


export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};
`;


export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    max-height: 500px;
`


export const InfoVideo = styled.video`
    object-fit: cover;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0, 0.7), rgba(0,0,0, 0.1)) ;
    top: 0;
    position: absolute;
    z-index: -1;
`




// export const InfoButton = styled(ButtonS)`

    

//     &:before{
//         height: 500%;
//     }

//     &:hover:before {
//         height: 0%;
//     }

//     &:hover {
//         color: ${({ inverse }) => (inverse ? '#1c2237' : '#fff')};
//     }
// `

export const InfoButton = styled(ButtonS)`
	color: ${({ inverse }) => (inverse ? '#1c2237' : 'white')};
    border: 1px solid ${({ inverse }) => (inverse ? '#1c2237' : 'white')};

    &:before{
        background: ${({ inverse }) => (inverse ? '#fff' : '#1c2237')};
        height: 0%;
    }

    &:hover:before {
        height: 500%;
        background: ${({ inverse }) => (inverse ? '#1c2237' : 'white')};
    }

    &:hover {
        color: ${({ inverse }) => (inverse ? '#fff' : '#1c2237')};
        border: 1px solid ${({ inverse }) => (inverse ? '#fff' : '#1c2237')};
        background: ${({ inverse }) => (inverse ? '#1c2237' : 'white')};
    }
`







































