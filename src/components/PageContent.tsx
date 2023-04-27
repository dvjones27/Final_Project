import React from 'react'
// import { BarChart, RadarChart } from 'recharts'
import BarChart from '../pages/Charts/BarChart'
import PieChart from '../pages/Charts/PieChart'
import RadarC from '../pages/Charts/RadarC'

function PageContent() {
  return (
	<div>
		{/* Page Content */}
		<RadarC></RadarC>
		{/* <BarChart></BarChart> */}
		<PieChart></PieChart>
	</div>
  )
}

export default PageContent

// import React from 'react';
// import { Radar, RadarChart, PolarGrid,
// 	PolarAngleAxis, PolarRadiusAxis } from 'recharts';

// const PageContent = () => {

// 	// Sample data
// 	const data = [
// 		{ name: 'Transportation', x: 21 },
// 		{ name: 'Home Energy', x: 22 },
// 		{ name: 'C', x: -32 },
// 		{ name: 'D', x: -14 },
// 		{ name: 'E', x: -51 },
// 		{ name: 'F', x: 16 },
// 		{ name: 'G', x: 7 },
// 		{ name: 'H', x: -8 },
// 		{ name: 'I', x: 9 },
// 	];

// 	return (
// 		<RadarChart height={500} width={500}
// 			outerRadius="80%" data={data}>
// 			<PolarGrid />
// 			<PolarAngleAxis dataKey="name" />
// 			<PolarRadiusAxis />
// 			<Radar dataKey="x" stroke="green"
// 				fill="green" fillOpacity={0.5} />
// 		</RadarChart>
// 	);
// }

// export default PageContent;
