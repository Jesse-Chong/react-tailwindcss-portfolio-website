import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import SingleProjectContext, { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';

const ProjectSingleContent = () => {
	const { id } = useParams(); // This will get the project ID from the URL
	const { switchProject } = useContext(SingleProjectContext);

	useEffect(() => {
		// Convert string ID to number and switch project
		switchProject(Number(id));
	}, [id, switchProject]);

	return (
		<>
			<ProjectHeader />
			<ProjectGallery />
			<ProjectInfo />
		</>
	);
};

const ProjectSingle = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<SingleProjectProvider>
				<ProjectSingleContent />
			</SingleProjectProvider>
		</motion.div>
	);
};

export default ProjectSingle;
