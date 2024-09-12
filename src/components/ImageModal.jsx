import { FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ImageModal = ({ isOpen, closeModal, image, altText }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-30 flex items-center justify-center"
    >
      {/* Modal Backdrop */}
      <div className="bg-black bg-opacity-80 fixed inset-0 w-full h-full z-20"></div>

      {/* Modal Content */}
      <div className="relative z-30 flex items-center justify-center">
        <div className="relative bg-white dark:bg-gray-900 p-5 rounded-lg shadow-lg max-w-4xl w-full max-h-screen overflow-auto">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-white dark:text-gray-300"
          >
            <FiX className="text-3xl" />
          </button>

          {/* Image */}
          {image ? (
            <img
              src={image}
              alt={altText}
              className="w-full h-auto object-contain rounded-lg"
            />
          ) : (
            <p className="text-center text-white">Image not available</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ImageModal;