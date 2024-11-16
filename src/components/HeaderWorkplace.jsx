import React, {useState, useEffect} from 'react';

import '../styles/header-workplace.scss';

function HeaderWorkplace(){
    const [workspaceName, setWorkspaceName] = useState(() => {
        // Завантаження з LocalStorage під час початкового рендера
        return localStorage.getItem('workspaceName') || '';
      });
    
      const handleNameChange = (e) => {
        setWorkspaceName(e.target.value);
      };
    
      useEffect(() => {
        // Збереження назви в LocalStorage при кожній зміні
        localStorage.setItem('workspaceName', workspaceName);
      }, [workspaceName]);
    return (
<div className='header-container'>
    <div className='header-workplace'>
        <label htmlFor="input-nameworkplace">
        <input className='input-name-workplace' 
               type="text" 
               name="" 
               id="input-nameworkplace" 
               placeholder='name of workplace' 
               value={workspaceName} 
               onChange={handleNameChange}/>
        </label>
    </div>
</div>
    )
}

export default HeaderWorkplace;