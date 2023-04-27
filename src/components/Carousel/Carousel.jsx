import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { data, sliderSettings } from './CarouselData';
import { Row, Heading, Section, TextWrapper, TextDiv } from '../../globalStyles';
import { Link } from "react-router-dom";
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	CardButton,
	CardLink,
} from './CarouselStyles';

const Carousel = () => {
	const [sliderRef, setSliderRef] = useState(null);

	return (
		<Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
			<Row justify="space-between" margin="1rem" wrap="wrap">
				<Heading width="auto" inverse>
					Testimonies
				</Heading>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
						<FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>

			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{data.map((el, index) => (
					<ImageWrapper key={index}>
						<CarouselImage src={el.image} />
						<TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
							{el.name}
						</TextWrapper>
						<TextWrapper size="1.1rem" margin="0.4rem 0 0" color="#2c2b2b" weight="600">
							{el.title}
						</TextWrapper>
						<TextDiv size="0.9rem" margin="0.7rem" height="auto" color="#4f4f4f">
							{el.description}
						</TextDiv>

						<CardLink to="testimonies" style={{textDecoration: "none"}}>
							<CardButton>View All</CardButton>
						</CardLink>
					</ImageWrapper>
				))}
			</ReviewSlider>
		</Section>
	);
};

export default Carousel;
