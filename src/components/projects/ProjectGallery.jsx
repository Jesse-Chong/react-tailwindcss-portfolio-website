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
      <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-10 mt-12">
        {singleProjectData.ProjectImages.map((project) => (
          <div className="mb-10 sm:mb-0" key={project.id}>
            {/* Conditionally render either an image or a video */}
            {project.img ? (
              <img
                src={project.img}
                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                alt={project.title}
                onClick={() => openModal(project.img)}
              />
            ) : (
              <video
                controls
                className="rounded-xl shadow-lg sm:shadow-none w-full"
                src={project.video}
                alt={project.title}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>

      {/* Modal for larger image view */}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          image={selectedImage}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default ProjectGallery;