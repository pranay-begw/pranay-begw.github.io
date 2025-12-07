import React, { useState, useEffect } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar on window resize if screen becomes larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar when clicking on a link (mobile)
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button className="mobile-menu-toggle" onClick={toggleSidebar}>
        <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </button>

      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>

      <div className={`sidebar ${isOpen ? 'active' : ''}`} id="sidebar">
        <img src="/pranay.png" alt="Pranay Begwani" className="profile-img" />
        <h2>Pranay Begwani</h2>
        <div className="about-me">
          <p>
          📍 Amazon - AGI Infra <br></br><br></br>            
          </p>
        </div>
        <div className="social-links">
          <a href="https://linkedin.com/in/pranay-begwani" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/PranayBegwani" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://github.com/pranay-begw" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
            <i className="fab fa-github"></i>
          </a>
          <a href="https://medium.com/@pranaybeg" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
            <i className="fab fa-medium"></i>
          </a>
          <a href="mailto:pranaybegwani@gmail.com" onClick={handleLinkClick}>
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div className="email">pranaybegwani@gmail.com</div>
      </div>
    </>
  );
};

export default Sidebar;

