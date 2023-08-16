import React, {useState} from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';

function App() {
  const slides = [{
    url: 'https://images.unsplash.com/photo-1615454782617-e69bbd4f2969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=828&q=80'
  },

  {
    url: 'https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
  },

  {
    url: 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80'
  },

  {
    url: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
  },

  {
    url: 'https://images.unsplash.com/photo-1636488363495-a06805603784?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNvZGluZyUyMGJvb3RjYW1wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  },

  ];

const [currentIndex, setCurrenteIndex] = useState(0)

//FUNZIONAMENTO FRECCIA SINISTRA

const prevSlide = () => {
  const isFirstSlide = currentIndex === 0;
  const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
  setCurrenteIndex(newIndex);
};

//FUNZIONAMENTO FRECCIA DESTRA

const nextSlide = () => {
  const isLastSlide = currentIndex === slides.length -1;
  const newIndex = isLastSlide ? 0 : currentIndex +1;
  setCurrenteIndex(newIndex);
};

//FUNZIONAMENTO PUNTINI SLIDE

const goToSlide = (slideIndex) => {
  setCurrenteIndex(slideIndex);
}

  return (
  <>
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      {/* CARICHIAMO LE IMMAGINI*/}
      <div style={{backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
      {/* ARROW LEFT*/}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 transalte-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20  text-white cursor-pointer"><BsChevronCompactLeft onClick={prevSlide} size={30}/></div>
      {/*ARROW RIGHT*/}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 transalte-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20  text-white cursor-pointer" ><BsChevronCompactRight onClick={nextSlide}  size={30}/></div> 
    </div>

    {/*CREIAMO I PUNTINI PER LE SLIDE*/}
    <div className="flex top-4 justify-center py-2">
      {slides.map((slide, slideIndex)=> (
        <div 
        key = {slideIndex}
        onClick = {() => goToSlide (slideIndex)}
        className="text-2xl cursor-pointer"><RxDotFilled/></div>
      ))

      }
    </div>
   
</>

  );
}

export default App;
