import React, { useState } from 'react';
import "./Accordion.css"

const Accordion = (props) => {


    const [height,setHeight] = useState("");


    const toggleHandler = ()=>{

        setHeight(height === "" ? "heightToggle":"");

    }


  return (

      <div className='accordion1'>
        
        <button   onClick={toggleHandler}>
                <p> {props.title}</p>
        </button>

        <div className='accordion_content'>
            <div className={`accordion_data ${height}`} >
                  
                  settingInnerHtml = {props.content}   

                  {/* passsomething */}
            </div>

        </div>

        <div>
        </div>

      </div>

  )
}

export default Accordion