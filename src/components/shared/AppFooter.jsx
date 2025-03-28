import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiDevdotto, SiMedium } from 'react-icons/si';
import AppFooterCopyright from './AppFooterCopyright';
import HackerRankLogo from '../../images/HackerRank_logo.svg';

const socialLinks = [
	{
		id: 1,
		icon: <FiGithub />,
		url: 'https://github.com/Jesse-Chong',
	},
	{
		id: 2,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/jessemchong',
	},
	{
		id: 3,
		icon: <SiDevdotto />,
		url: 'https://dev.to/jesse_chong_3bcc276c4f950',
	},
	{
		id: 4,
		icon: <SiMedium />,
		url: 'https://medium.com/@jessechong',
	},
	{
		id: 5,
		icon: (
			<img
				src={HackerRankLogo}
				alt="HackerRank"
				style={{ width: '24px', height: '24px' }}
			/>
		),
		url: 'https://www.hackerrank.com/profile/jessechong',
	},
];

const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								rel="noopener noreferrer"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
};

export default AppFooter;
