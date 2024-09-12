import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectInfo = () => {
	const { singleProjectData } = useContext(SingleProjectContext);
  
	return (
	  <div className="block sm:flex gap-0 sm:gap-10 mt-14">
		<div className="w-full sm:w-1/3 text-left">
		  {/* Single project client details */}
		  <div className="mb-7">
			<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
			  {singleProjectData.ProjectInfo.ClientHeading}
			</p>
			<ul className="leading-loose">
			  {singleProjectData.ProjectInfo.CompanyInfo.map((info) => {
				return (
				  <li
					className="font-general-regular text-ternary-dark dark:text-ternary-light"
					key={info.id}
				  >
					<span>{info.title}: </span>
					<span>{info.details}</span>
				  </li>
				);
			  })}
			</ul>
		  </div>
  
		  {/* Single project objectives */}
		  <div className="mb-7">
			<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
			  {singleProjectData.ProjectInfo.ObjectivesHeading}
			</p>
			<p className="font-general-regular text-primary-dark dark:text-ternary-light">
			  {singleProjectData.ProjectInfo.ObjectivesDetails}
			</p>
		  </div>
  
		  {/* Single project technologies */}
		  <div className="mb-7">
			<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
			  {singleProjectData.ProjectInfo.Technologies[0].title}
			</p>
			<p className="font-general-regular text-primary-dark dark:text-ternary-light">
			  {singleProjectData.ProjectInfo.Technologies[0].techs.join(", ")}
			</p>
		  </div>
  
		  {/* Single Project Insights */}
		  <div className="mt-10">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
			  {singleProjectData.ProjectInfo.InsightsHeading}
			</p>
			{singleProjectData.ProjectInfo.InsightsDetails.map((insight) => {
			  return (
				<p
				  key={insight.id}
				  className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
				>
				  {insight.details}
				</p>
			  );
			})}
		  </div>
		</div>
  
		{/*  Single project right section */}
		<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
		  <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
			{singleProjectData.ProjectInfo.ProjectDetailsHeading}
		  </p>
		  {singleProjectData.ProjectInfo.ProjectDetails.map((details) => {
			return (
			  <p
				key={details.id}
				className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
			  >
				{details.details}
			  </p>
			);
		  })}
		</div>
	  </div>
	);
  };
  
  export default ProjectInfo;