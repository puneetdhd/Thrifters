import React from "react";
import Navbar from './Navbar'

export default function Home() {
  return (

    <div 
    className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
    style={{ 
      backgroundImage: `url('https://honeycando.com/cdn/shop/products/HNG-01265_3000px_copy_1200x.jpg?v=1607011132')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',  // This makes the background fixed while scrolling
      minHeight: '100vh',

    }}
  >
      <Navbar />
    </div>

  );
}