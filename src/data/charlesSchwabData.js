import DemoVideo from '../images/charlesschwab-demo.mp4';

export const charlesSchwabData = {
	ProjectHeader: {
		title: 'Charles Schwab Market Analysis',
		publishDate: 'Dec 12, 2024',
		tags: 'Data Analysis'
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Demo Video',
			video: DemoVideo
		}
	],
	ProjectInfo: {
		ClientHeading: 'About',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Charles Schwab Market Analysis'
			},
			{
				id: 2,
				title: 'Services',
				details: 'Data Analysis'
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://github.com/Jesse-Chong/Schwab-Market-Analysis'
			}
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'A comprehensive financial analysis tool that leverages the Charles Schwab API to provide real-time stock data, technical analysis, and advanced market metrics for investment decision-making.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Backend: Python, requests, json',
					'APIs: Charles Schwab Market Data API',
					'Authentication: OAuth2, base64 encoding',
					'Environment: dotenv for configuration',
					'Other Tools: Git (version control)'
				],
			},
		],
		InsightsHeading: 'Project Insights',
    InsightsDetails: [
      {
        id: 1,
        details: "Working on this project taught me the importance of modular code design and API integration best practices."
      },
      {
        id: 2,
        details: "I learned how to implement complex financial calculations and present data in a clear, actionable format."
      },
      {
        id: 3,
        details: "Building robust error handling and data validation proved crucial when working with real-time financial data."
      },
      {
        id: 4,
        details: "The importance of API rate limiting and token management became evident when dealing with production-level financial APIs."
      }
    ],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					"My biggest hurdle came when trying to obtain an access token for the Charles Schwab Market Data API. After spending weeks scouring online resources and attempting various solutions, I finally decided to reach out to the API's support team. This turned out to be a game-changer - by providing detailed information about my application and relevant code snippets, I received a solution almost immediately. This experience taught me a valuable lesson: when working with complex APIs, it's perfectly okay (and often more efficient) to engage directly with the development team rather than spinning your wheels."
			},
			{
				id: 2,
				details:
					"Learning Python while racing against a deadline presented another significant challenge. As a JavaScript/React developer, I was excited to expand my skill set, but the learning curve was steeper than anticipated. Each debugging session and concept I had to learn meant another day closer to the deadline. The experience helped me better understand the importance of realistic timeline planning when working with new technologies."
			},
			{
				id: 3,
				details:
					"A seemingly simple oversight - using a non-working callback URL - cost me nearly a week of development time. It was particularly frustrating because I had encountered (and solved) this same issue in a previous project. This experience reinforced the importance of maintaining a permanent callback URL through a reliable server (even a free one works great!) for API development. Most importantly, I learned that sometimes pushing past a deadline to ensure the API can truly deliver what the client needs is better than rushing to meet a deadline with incomplete functionality."
			}
		],
	},
};