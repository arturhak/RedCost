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
    // let el:any = document.querySelectorAll(".lastMainComponent");
    let el:any = document.querySelector(".lastMainComponent");
    let elLeft:any = document.querySelector(".lastMainComponent .right-side ");
    let elRight:any = document.querySelector(".lastMainComponent .left-side");

    let el1:any = document.querySelector(".lastMainComponent1");
    let elLeft1:any = document.querySelector(".lastMainComponent1 .left-side");
    let elRight1:any = document.querySelector(".lastMainComponent1 .right-side");

    // el.forEach((el:any)=>{
        let position = el.getBoundingClientRect();
        let position1 = el1.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom > 0) {    //position.top + 100
            elLeft.classList.add("anim-from-left")
            elRight.classList.add("anim-from-right")
            // el.classList.add("visible")
        }
        else {
            // elLeft.classList.remove("anim-from-left")
            // elRight.classList.remove("anim-from-right")
            // el.classList.remove("visible")
        }

    if (position1.top < window.innerHeight && position1.bottom > 0) {    //position.top + 200
        elLeft1.classList.add("anim-from-left")
        elRight1.classList.add("anim-from-right")
        // el1.classList.add("visible")
    }
    else {
        // elLeft1.classList.remove("anim-from-left")
        // elRight1.classList.remove("anim-from-right")
        // el1.classList.remove("visible")
    }
    // })

}
window.addEventListener("scroll", handleScroll)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
