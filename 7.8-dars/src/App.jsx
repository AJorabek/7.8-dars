import { React, useState } from "react";
import flag from "./assets/flag.png";
const App = () => {
  const [number, setNumber] = useState([]);
  const [numberBeeline, setBeeline] = useState([]);
  const [numberUcell, setUcell] = useState([]);
  const [numberUzmobi, setUzmobi] = useState([]);
  const companies = [
    {
      codes: [90, 91],
      icon: "https://beeline.uz/favicon.ico",
    },
    {
      codes: [94, 93, 50],
      icon: "https://ucell.uz/img/favicon.ico",
    },
    {
      codes: [33],
      icon: "https://humans.uz/app-icons/favicon-32x32.png",
    },
    {
      codes: [99, 98, 77, 95],
      icon: "https://uztelecom.uz/images/favicon.ico",
    },
  ];
  const handleChange=(e)=>{
    console.log('changed');
    let image=document.createElement('li')
    let input=document.getElementById('input')
    let form=document.getElementById('form')
    image.textContent='hi there'
    if(input.value===91){
      form.append(image)
    }
  }
  return (
    <>
      <div className="app container">
        <div className="header">
          <form className="form" id="form">
            <img className="flag" src={flag} width={45} height={45} />
            <input type="text" className="input" id="input" value={number} onChange={handleChange} />
          </form>
        </div>
        <div className="footer">
          <div className="number-container">
            <button
              className="btn-number"
              onClick={() => {
                setNumber((prev) => prev + "1");
              }}
            >
              1
            </button>
            <button
              className="btn-number"
              onClick={() => {
                setNumber((prev) => prev + "2");
              }}
            >
              2
            </button>
            <button
              className="btn-number"
              onClick={() => {
                setNumber((prev) => prev + "3");
              }}
            >
              3
            </button>
            <button
              className="btn-number"
              onClick={() => {
                setNumber((prev) => prev + "4");
              }}
            >
              4
            </button>
            <button
              className="btn-number"
              onClick={() => {
                setNumber((prev) => prev + "5");
              }}
            >
              5
            </button>
            <button
              className="btn-number"
              onClick={() => {
                setNumber((prev) => prev + "6");
              }}
            >
              6
            </button>
            <button
              className="btn-number"
              onClick={() => {
                setNumber((prev) => prev + "7");
              }}
            >
              7
            </button>
            <button
              className="btn-number"
              onClick={() => {
                setNumber((prev) => prev + "8");
              }}
            >
              8
            </button>
            <button
              className="btn-number"
              onClick={() => {
                setNumber((prev) => prev + "9");
              }}
            >
              9
            </button>
            <button className="btn-number">+</button>
            <button
              className="btn-number"
              onClick={() => {
                setNumber((prev) => prev + "0");
              }}
            >
              0
            </button>
            <button
              className="del"
              onClick={() => {
                setNumber("");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="currentColor"
              >
                <path d="M6.53451 3H20.9993C21.5516 3 21.9993 3.44772 21.9993 4V20C21.9993 20.5523 21.5516 21 20.9993 21H6.53451C6.20015 21 5.88792 20.8329 5.70246 20.5547L0.369122 12.5547C0.145189 12.2188 0.145189 11.7812 0.369122 11.4453L5.70246 3.4453C5.88792 3.1671 6.20015 3 6.53451 3ZM12.9993 10.5858L10.1709 7.75736L8.75668 9.17157L11.5851 12L8.75668 14.8284L10.1709 16.2426L12.9993 13.4142L15.8277 16.2426L17.242 14.8284L14.4135 12L17.242 9.17157L15.8277 7.75736L12.9993 10.5858Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
