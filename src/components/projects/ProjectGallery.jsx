import { useContext, useState } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import ImageModal from '../ImageModal';

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
  
	// Open the modal with the selected image
	const openModal = (image) => {
	  setSelectedImage(image);
	  setIsModalOpen(true);
	};
  
	// Close the modal
	const closeModal = () => {
	  setIsModalOpen(false);
	  setSelectedImage(null);
	};
  
	return (
	  <>
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		  {singleProjectData.ProjectImages.map((project) => (
			<div className="mb-10 sm:mb-0" key={project.id}>
			  <img
				src={project.img}
				className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
				alt={project.title}
				onClick={() => openModal(project.img)}
			  />
			</div>
		  ))}
		</div>
  
		{/* Modal for larger image view */}
		<ImageModal isOpen={isModalOpen} image={selectedImage} closeModal={closeModal} />
	  </>
	);
  };
  
  export default ProjectGallery;