import React from 'react';
import { Radar, RadarChart, PolarGrid,
	PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const RadarC = () => {

	// Sample data
	const data = [
		{ name: 'Transportation', x: 21 },
		{ name: 'Home Energy', x: 22 },
		{ name: '', x: -32 },
		{ name: 'D', x: -14 },
		{ name: 'E', x: -51 },
		{ name: 'F', x: 16 },
		{ name: 'G', x: 7 },
		{ name: 'H', x: -8 },
		{ name: 'I', x: 9 },
	];

	return (
		<RadarChart height={500} width={500}
			outerRadius="80%" data={data}>
			<PolarGrid />
			<PolarAngleAxis dataKey="name" />
			<PolarRadiusAxis />
			<Radar dataKey="x" stroke="green"
				fill="green" fillOpacity={0.5} />
		</RadarChart>
	);
}

export default RadarC;
