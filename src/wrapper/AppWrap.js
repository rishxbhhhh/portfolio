import React from 'react';
import { NavigationDots, SocialMedia } from '../components';


const AppWrap = (Component,idName,classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`} style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: '1rem', width: '100%'}}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
            <Component />
            <div className="copyright">
                <p className="p-text">&copy; Rishabh Rajpurohit 2022</p>
                <p className="p-text">Made with ❤️ and REACT-JS</p>
            </div>
        </div>
        <NavigationDots active={idName} />
    </div>
  );
}

export default AppWrap;