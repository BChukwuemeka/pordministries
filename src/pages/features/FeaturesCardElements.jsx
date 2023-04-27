import { Link } from "react-router-dom";
import styled from "styled-components";




export const FeaturesSection = styled.div`
    padding: 3rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #22101590;
    margin: auto;
    height: 15rem;
`





export const FeaturesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;


    @media screen and (max-width: 960px) {
        margin: 0 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;





export const FeaturesHeading = styled.h1`
    color: #fff;
    font-size: 48px;
    margin-bottom: 24px;
`


export const FeaturesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;


    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`



export const FeaturesCard = styled(Link)`
    /* background: #101522; */
    background: linear-gradient(183.22deg, #6795fa -13.86%, #101522 59.55%);
    box-shadow: 0 6px 20px #27336633;
    width: 280px;
    height: 28rem;
    text-decoration: none;
    border-radius: 4px;

    &:nth-child(2) {
        margin: 24px;
    }


    &:hover {
        transform: scale(1.06);
        transition: all 0.3s ease-out;
        color: #1c2237;
    }

    @media screen and (max-width: 960px) {
        width: 90%;

        &:hover {
            transform: none;
        }
    }
`;



export const FeaturesCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    padding: 24px;
    align-items: center;
    color: #fff;
`


export const FeaturesCardIcon = styled.div`
    margin: 24px 0;
`


export const FeaturesCardPlan = styled.h3`
    margin-bottom: 5px;
    font-size: 24px;
`


export const FeaturesCardCost = styled.h4`
    font-size: 40px;
`


export const FeaturesCardLength = styled.p`
    font-size: 14px;
    margin-bottom: 24px;
`


export const FeaturesCardFeatures = styled.ul`
    margin: 16px 0 32px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #a9b3c1;
`


export const FeaturesCardFeature = styled.li`
    margin-bottom: 10px;
`