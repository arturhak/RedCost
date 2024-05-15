import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




const handleScroll = () => {
    let el:any = document.querySelectorAll(".main-component");
    // let el:any = document.querySelector(".main-component");
    let elLeft:any = document.querySelector(".left-side");
    let elRight:any = document.querySelector(".right-side");


    el.forEach((el:any)=>{
        let position = el.getBoundingClientRect();

        if (position.top < window.innerHeight-50 && position.bottom >= 0) {
            // elLeft.classList.add("anim-from-left")
            // elRight.classList.add("anim-from-right")
            el.classList.add("visible")
        }
        else {
            // elLeft.classList.remove("anim-from-left")
            // elRight.classList.remove("anim-from-right")
            el.classList.remove("visible")
        }
    })

}
window.addEventListener("scroll", handleScroll)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
