import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./auth/ScrollTop";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <ScrollToTop />
          <App />
      </BrowserRouter>
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

    let el2:any = document.querySelector(".lastMainComponent2");
    let elLeft2:any = document.querySelector(".lastMainComponent2 .right-side");
    let elRight2:any = document.querySelector(".lastMainComponent2 .left-side");

    let el3:any = document.querySelector(".lastMainComponent3");
    let elLeft3:any = document.querySelector(".lastMainComponent3 .left-side");
    let elRight3:any = document.querySelector(".lastMainComponent3 .right-side");


    // let el2:any = document.querySelector(".roadmap");


    // el.forEach((el:any)=>{
        let position:any = el?.getBoundingClientRect();
        let position1:any = el1?.getBoundingClientRect();
        let position2:any = el2?.getBoundingClientRect();
        let position3:any = el3?.getBoundingClientRect();
        // let position2:any = el2?.getBoundingClientRect();

        if (position?.top + 400< window.innerHeight && position?.bottom > 0) {    //position.top + 100
            elLeft?.classList.add("anim-from-left")
            elRight?.classList.add("anim-from-right")
            // el.classList.add("visible")
        }
        else {
            elLeft?.classList.remove("anim-from-left")
            elRight?.classList.remove("anim-from-right")
            // el.classList.remove("visible")
        }

    if (position1?.top + 400 < window.innerHeight && position1?.bottom > 0) {
        elLeft1.classList.add("anim-from-left")
        elRight1.classList.add("anim-from-right")
        // el1.classList.add("visible")
    }
    else {
        elLeft1?.classList.remove("anim-from-left")
        elRight1?.classList.remove("anim-from-right")
        // el1.classList.remove("visible")
    }
    if (position2?.top + 400 < window.innerHeight && position1?.bottom > 0) {
        elLeft2.classList.add("anim-from-left")
        elRight2.classList.add("anim-from-right")
        // el1.classList.add("visible")
    }
    else {
        elLeft2?.classList.remove("anim-from-left")
        elRight2?.classList.remove("anim-from-right")
        // el1.classList.remove("visible")
    }
    if (position3?.top + 400 < window.innerHeight && position1?.bottom > 0) {
        elLeft3.classList.add("anim-from-left")
        elRight3.classList.add("anim-from-right")
        // el1.classList.add("visible")
    }
    else {
        elLeft3?.classList.remove("anim-from-left")
        elRight3?.classList.remove("anim-from-right")
        // el1.classList.remove("visible")
    }

    // if (position2?.top + 200 < window.innerHeight && position2?.bottom > 0) {
    //     el2?.classList.add("visible-roadmap")
    // }
    // else {
    //     // el2.classList.remove("visible-roadmap")
    // }
    // })

}
window.addEventListener("scroll", handleScroll)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
