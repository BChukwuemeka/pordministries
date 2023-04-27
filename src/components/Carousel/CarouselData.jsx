export const data = [
	{
		name: 'Name of Testfier',
		title: 'Testimony Title',
		description:
			'Lorem, ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quia repellendus explicabo nam. Quibusdam, minus excepturi. Voluptates veniam nam dolorum corporis eius. Laborum, provident expedita.	amet consectetur adipisicing elit. Iure numquam unde obcaecati, facere ullam nisi eligendi temporibus iste veritatis corporis?',
		image: require('../../images/church.png'),
	},
	{
		name: 'Name of Testfier',
		title: 'Testimony Title ',
		description: 'Learn more about our security systems to make sure your data is always safe',
		image: require('../../images/friends.png'),
	},
	{
		name: 'Name of Testfier',
		title: 'Testimony Title',
		description: 'Our team consists of the best experts in the industry, learn about them',
		image: require('../../images/church.png'),
	},
	{
		name: 'Name of Testfier',
		title: 'Testimony Title',
		description: 'Find more about hardware and software used for your service',
		image: require('../../images/evangelism.png'),
	},
	{
		name: 'Name of Testfier',
		title: 'Testimony Title',
		description: 'We have provided services to top clients in tech industry',
		image: require('../../images/church.png'),
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
