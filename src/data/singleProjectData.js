// Import images
import Image1 from '../images/FreshStart-UserFlow.png';
import Image2 from '../images/FreshStart-ERD.png';
import Image3 from '../images/FreshStart-WireFrame.png';
// Import icons
// import {
// 	FiLinkedin
// } from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'Fresh Start',
		publishDate: 'Apr 15, 2024',
		tags: 'Full Stack',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'User flow',
			img: Image1
		},
		{
			id: 2,
			title: 'Entity Relationship Diagram',
			img: Image2
		},
		{
			id: 3,
			title: 'WireFrame',
			img: Image3
		},
	],
	ProjectInfo: {
		ClientHeading: 'About',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Pursuit',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Full Stack',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://pursuit.org',
			}
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'A user-friendly app targeted for migrants to easily access information and locations needed to assimilate and thrive in NYC.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Frontend: JavaScript, React, Vite, React Router, i18next',
					'Backend: Node.js, Express.js',
					'Database: PostgreSQL',
					'APIs: Google Maps API, Lokalise API',
					'Authentication: JSON Web Tokens (JWT), bcrypt',
					'Other tools: Axios (for HTTP requests), Git (for version control)'
				],
			},
		],
		InsightsHeading: 'Project Insights',
    InsightsDetails: [
      {
        id: 1,
        details: "Working on this project taught me the importance of clear communication in a team setting."
      },
      {
        id: 2,
        details: "I learned how crucial it is to plan for scalability from the beginning, especially when dealing with data-heavy applications."
      },
      {
        id: 3,
        details: "Implementing internationalization early in the development process proved to be a wise decision, making it easier to expand language support later."
      },
      {
        id: 4,
        details: "The challenge of integrating multiple APIs reinforced my skills in reading documentation and troubleshooting."
      }
    ],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					"The biggest challenge my team has overcame was not having enough time to finish a minimum viable product(MVP). Within the last two weeks of the deadline, we had a problem with an infinite loop that is constantly calling the API's we used to make the app function. We all had our free trial credits run out and we had no way to work a functioning app unless we find another API to use to replace it. But because of the time constraint we've decided to make another account and finish the app. This led to finishing a fully functional webapp that we displayed in BlackRock downtown manhattan."
			},
			{
				id: 2,
				details:
					"Another challenge my team overcame was not having enough research to pinpoint the main functionalities of the app. As we were in the planning phase of creating the app we didnt know what resources to focus on that migrants needed. My team and I teammed up with a person from the organization pursuit to translate and video interview migrants that we're staying temporarily at a hotel in Long Island City. We understood the resources that migrants needed but found out that jobs are the most important resource migrants needed. We researched more on job agencies and what oppurtunities migrants can get. We ended reaching out to various government resources that aid in job training and qualifications."
			},
			{
				id: 3,
				details:
					"One of the biggest challenge I personally had throughout the project was asking for help and peer reviews. Throughout developement I would take on a lot of technical tasks that sometimes took a long time to finish. Earlier on the development phase I was working on finding an easy way to translate the entire app into a list of languages. After finding a free API for storing translation keys and trying to figure it out for days, I asked my team for help during morning standups. This got me back on track with finishing my part of the assignment at that time and we had a fully translated app"
			}
		],
	},
};