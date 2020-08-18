import { useState } from 'react';

import Toolbar from '../../../components/MainHeader/Toolbar/Toolbar';
import SideDrawer from '../../../components/MainHeader/SideDrawer/SideDrawer';
import Backdrop from '../../../components/MainHeader/Backdrop/Backdrop';

const Header = (props) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  
  const drawerToggleClickHandler = () => {
    console.log("btn")
    // return (
      setSideDrawerOpen(!sideDrawerOpen)
      console.log(sideDrawerOpen)
    // )
  }
    
    
  ;

  const backdropClickHandler = () => (
    setSideDrawerOpen(!sideDrawerOpen)
  );

  // render() {
    let backdrop;
    console.log(sideDrawerOpen)
    if (sideDrawerOpen) {
      let backdrop = <Backdrop click={backdropClickHandler} />
      console.log(sideDrawerOpen, "from_backdrop")
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={drawerToggleClickHandler}/>
        <SideDrawer show={sideDrawerOpen}/>   
        {backdrop}    
        <main>
          <p>This is the page content!</p>
        </main>
        
      </div>
    );
}

export default Header;