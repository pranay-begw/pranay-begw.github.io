import React, { useState } from 'react';

const ProjectCard = ({ title, techStack, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Close modal when clicking outside
  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  // Close modal with Escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  return (
    <>
      <div className="project-item" onClick={openModal}>
        <h3>{title}</h3>
      </div>

      {isModalOpen && (
        <div className={`modal ${isModalOpen ? 'show' : ''}`} onClick={handleModalClick}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{title}</h2>
            <div className="tech-stack">{techStack}</div>
            <p>{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;

