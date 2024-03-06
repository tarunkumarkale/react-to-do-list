import React, { useEffect, useState } from "react";
import { BsListColumns } from "react-icons/bs";
import { IoAddSharp } from "react-icons/io5";
import "./App.css";
import { FaTrashCan } from "react-icons/fa6";
import { ImCheckmark } from "react-icons/im";
import { ImCross } from "react-icons/im";

const datagetting = () => {
  let datalist = localStorage.getItem("data");
  if (datalist) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return [];
  }
};

const App = () => {
  const [Inp, setInp] = useState("");
  const [finalInp, setFinalInp] = useState(datagetting());
  const [showPage, setShowPage] = useState(false);
  const [tickk, settickk] = useState([]);

  const Trash = (receive) => {
    const afterDelete = finalInp.filter((_, id) => id !== receive);
    const aftertick = tickk.filter((_, id) => id !== receive);
    settickk(aftertick);
    setFinalInp(afterDelete);
  };

  const mark = (ind) => {
    let thickk = [...tickk];
    thickk[ind] = !thickk[ind];
    settickk(thickk);
  };

  const handleChange = (e) => {
    setInp(e.target.value);
  };

  const Send = () => {
    setFinalInp((prev) => [...prev, Inp]);
    settickk((prev) => [...prev, false]); // Initialize tickk state for new item
    setInp("");
    setShowPage(true);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(finalInp));
  }, [finalInp]);

  return (
    <>
      <div className="">
        <div className="upper">
          <h1>KEEP NOTES</h1> &nbsp; &nbsp;&nbsp;
          <h1>
            <BsListColumns />
          </h1>
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="write here"
            value={Inp}
            className="inside"
            onChange={handleChange}
          />
          <button onClick={Send}>
            <IoAddSharp />
          </button>
        </div>

        <div>
          {showPage &&
            finalInp.map((Element, index) => (
              <ul key={index}>
                <li style={tickk[index] ? { backgroundColor: 'red', width: '400px', height: '100px' } : {}}>
                  {Element}
                  <button onClick={() => mark(index)}>
                    {tickk[index] ? <ImCheckmark /> : <ImCross />}
                  </button>
                  <button onClick={() => Trash(index)}><FaTrashCan /></button>
                </li>
              </ul>
            ))}
        </div>
      </div>
    </>
  );
};

export default App;
