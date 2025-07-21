import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const services = [
	{
		title: 'Installation Services',
		description:
			'Professional installation of new air conditioning systems for homes and businesses, ensuring optimal performance and efficiency.',
		bullets: [
			'New HVAC system installation (furnaces, air conditioners, heat pumps, ductless systems)',
			'Ductwork installation and modification',
			'Thermostat installation (including smart thermostats)',
			'Zoning system installation',
			'Ventilation system installation (exhaust fans, air exchangers, etc.)',
		],
	},
	{
		title: 'Repair Services',
		description:
			'Expert repair services for furnaces, heat pumps, and other heating systems to keep you warm during the colder months.',
		bullets: [
			'Furnace and boiler',
			'AC Repair',
			'Heat Pump',
			'Ductwork and airflow',
			'Themorstat and sensor',
			'Refrigerant leaks',
		],
	},
	{
		title: 'Maintenance',
		description:
			'Routine maintenance to extend the life of your HVAC system, improve air quality, and reduce energy costs.',
		bullets: [
			'Seasonal tune-ups (spring for AC, fall for heating)',
			'Filter replacement',
			'Cleaning coils, blower motors, and ducts',
			'Checking refrigerant levels',
			'Inspecting electrical components and safety controls',
		],
	},
	{
		title: 'Indoor Air Quality Services',
		description:
			'Thorough cleaning of air ducts to remove dust, allergens, and improve overall system efficiency.',
		bullets: [
			'Air purifiers and filtration systems',
			'Humidifiers and dehumidifiers',
			'UV light installation for air disinfection',
			'Carbon monoxide testing',
		],
	},
	{
		title: 'Energy Efficiency and Upgrades',
		description:
			'Upgrade or fix your thermostat for better temperature control and energy savings.',
		bullets: [
			'Energy audits and inspections',
			'High-efficiency system upgrades',
			'Smart HVAC system integration',
		],
	},
];

const Services = () => {
	const [expanded, setExpanded] = useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Container
			maxWidth="md"
			sx={{
				mt: isMobile ? 2 : 6,
				mb: isMobile ? 2 : 6,
				px: isMobile ? 1 : 3,
			}}
		>
			<Typography
				variant={isMobile ? 'h5' : 'h3'}
				align="center"
				gutterBottom
				sx={{ fontWeight: 600 }}
			>
				Our Services
			</Typography>
			{services.map((service, idx) => (
				<Accordion
					key={idx}
					sx={{ mb: 2 }}
					expanded={expanded === idx}
					onChange={handleChange(idx)}
				>
					<AccordionSummary expandIcon={<ExpandMore />}>
						<Typography variant={isMobile ? 'subtitle1' : 'h6'}>
							{service.title}
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography
							gutterBottom
							align="left"
							sx={{ fontSize: isMobile ? '1rem' : '1.1rem' }}
						>
							{service.description}
						</Typography>
						{service.bullets && (
							<ul
								style={{
									marginTop: 0,
									paddingLeft: 20,
									textAlign: 'left',
								}}
							>
								{service.bullets.map((point, i) => (
									<li key={i} style={{ textAlign: 'left' }}>
										<Typography
											variant="body2"
											align="left"
											sx={{
												fontSize: isMobile ? '0.95rem' : '1rem',
											}}
										>
											{point}
										</Typography>
									</li>
								))}
							</ul>
						)}
					</AccordionDetails>
				</Accordion>
			))}
		</Container>
	);
};

export default Services;
