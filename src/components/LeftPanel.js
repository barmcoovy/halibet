import React, { useState } from "react";
import { Sports, iconMapping } from "./databases/Sports";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown,faAngleUp } from "@fortawesome/free-solid-svg-icons";

const LeftPanel = () => {
  const [competition, setCompetition] = useState(null);

  const toogleCompetiton = (id) =>{
    if(competition === id){
      setCompetition(null)
    }
    else{
      setCompetition(id)
    }
  }
  return (
    <div className="overflow-y-scroll w-[20%] bg-gray-200 hidden md:block max-h-[650px]">
      <h1 className=" text-xl lg:text-2xl m-4">Sport</h1>
      <div className="bg-white rounded-lg h-full w-100% m-3">
        {Sports.map((element, index) => {
          const isExpanded =element.id === competition;
          return (

            <div
              key={index}
              className="flex flex-col gap-2 p-2 ml-2"
            >
              <div className="flex gap-2 items-center ">
                <span>{iconMapping[element.icon]}</span>
                <h1 className="lg:text-[1.2rem] text-[.8rem]">{element.name}</h1>
                 
                  <span
                    onClick={()=>toogleCompetiton(element.id)}
                    className="cursor-pointer rounded-md hover:bg-gray-100 w-6 text-center"
                  >
                    <FontAwesomeIcon
                      icon= {isExpanded ? faAngleUp : faAngleDown}
                    />
                  </span>
                
              </div>
              {isExpanded && (
                <div>
                  <ul>
                    {Object.entries(element.competitions).map(
                      ([competitionName, country], id) => (
                        <li key={id} >
                          <span className="block cursor-pointer my-2 lg:text-[.9rem] text-[.7rem] "> 
                          {competitionName} - {country}
                          </span>
                        </li>
                        
                      )
                    )}
                  </ul>
                </div>
              )}
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftPanel;
