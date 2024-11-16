import React, { useState } from 'react';
import '../styles/navigation.scss';
import NavOptions from './NavOptions';

function Navigation() {
  // Ініціалізація з одним проектом
  const [projects, setProjects] = useState([
    { id: 1, project: "Main Workspace", role: "Admin", description: "Main workspace description" }
  ]);
  const [visiblePopupIndex, setVisiblePopupIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [popupSearchTerm, setPopupSearchTerm] = useState(""); // Пошуковий термін для попапа

  const handleProjectChange = (index, value) => {
    const updatedProjects = projects.map((proj, projIndex) =>
      projIndex === index ? { ...proj, project: value } : proj
    );
    setProjects(updatedProjects);
  };

  const togglePopup = (index) => {
    setVisiblePopupIndex(visiblePopupIndex === index ? null : index);
  };

  const addProject = () => {
    const newProject = { id: Date.now(), project: "", role: "Participant", description: "New workspace" };
    setProjects([...projects, newProject]);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePopupSearchChange = (e) => {
    setPopupSearchTerm(e.target.value); // Оновлюємо пошуковий термін для попапа
  };

  // Фільтрація проектів за пошуковим запитом (пошук по назві або опису)
  const filteredProjects = projects.filter((project) =>
    project.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Фільтрація елементів у попапі
  const filteredPopupItems = ["hello", "friend", "test", "only", "hello"].filter(item =>
    item.toLowerCase().includes(popupSearchTerm.toLowerCase())
  );

  return (
    <div className="nav-container">
      <div className="main">
        <NavOptions iconClass="fa-solid fa-house icon" ariaLabel="Main" children='main'>Main</NavOptions>
        <NavOptions iconClass="fa-regular fa-calendar-check icon" ariaLabel="My work" children='my work'>My work</NavOptions>
      </div>

      <div className="chosen">
        <NavOptions iconClass="fa-regular fa-star icon" ariaLabel="Chosen" children='chosen'>Chosen</NavOptions>
      </div>

      <div className="page-container">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((entry, index) => (
            <div key={entry.id} className="chosen-page">
              <NavOptions iconClass="fa-solid fa-house-user" ariaLabel="Home" children=''/>
              <input
                type="text"
                onChange={(e) => handleProjectChange(index, e.target.value)}
                value={entry.project}
                required
                className="current-project"
                placeholder="Main work space"
              />

              <div className="popup-window">
                <span
                  className="input-option"
                  role="button"
                  aria-expanded={visiblePopupIndex === index}
                  aria-label="Toggle role options"
                  onClick={() => togglePopup(index)}
                >
                  <i
                    className={`fa-solid ${
                      visiblePopupIndex === index ? "fa-chevron-up" : "fa-chevron-down"
                    }`}
                    aria-hidden="true"
                  />
                </span>
                {visiblePopupIndex === index && (
                  <div className="project-window" role="dialog" aria-modal="true">
                    <div className="container-search-workspace">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      <input
                        className="input-workspace"
                        type="text"
                        placeholder="Search for a workspace"
                        value={popupSearchTerm}
                        onChange={handlePopupSearchChange}
                      />
                    </div>
                    <div className="catalogue">
                      <h1>My workspaces</h1>
                      <div className="list-all-project">
                        <ul>
                          {filteredPopupItems.length > 0 ? (
                            filteredPopupItems.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))
                          ) : (
                            <li>No workspaces found</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No projects available</p>
        )}

        <div className="search-container">
          <div className="search">
            <NavOptions iconClass="fa-solid fa-search" ariaLabel="Search" children='' />
            <input
              type="text"
              placeholder="Search"
              className="input-search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <button className="btn-submit" onClick={addProject} aria-label="Add new project">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>

        <div className="list">
          {/* <h1>Hello</h1> */}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
