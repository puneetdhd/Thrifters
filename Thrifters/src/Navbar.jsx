import './css/nav.css'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CategoriesSidebar from './sidebar';
import { useState } from 'react';

export default function Navbar() {
    let [click,setClick]=useState(false);
    const triggerfn = () => {
        setClick((prev) => !prev); // Toggle state
      };
      
  return (
    <div className="container">
      <nav className="nav">
        <a href="#">Explore</a>
        <a href="#">Shop</a>
        <button>Menu</button>

        <a onClick={triggerfn}><DensityMediumIcon/></a>
      </nav>
      {click && <CategoriesSidebar click={click} setClick={setClick} className="component" />}
      

    </div>
  )
}
