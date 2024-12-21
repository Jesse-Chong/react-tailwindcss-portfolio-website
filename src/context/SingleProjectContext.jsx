import { useState, createContext } from 'react';
import { freshStartData } from '../data/freshStartData.js';
import { charlesSchwabData } from '../data/charlesSchwabData.js';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const [singleProjectData, setSingleProjectData] = useState(freshStartData);

	const switchProject = (projectId) => {
		switch (projectId) {
			case 1:
				setSingleProjectData(freshStartData);
				break;
			case 2:
				setSingleProjectData(charlesSchwabData);
				break;
			default:
				setSingleProjectData(freshStartData);
		}
	};

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData, switchProject }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;