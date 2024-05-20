import { useState } from "react";
import { useParams } from "react-router-dom";
import { UofHyd } from "./Universities/UofHyd";
import { Pondicherry } from "./Universities/Pondicherry";
import { BanarasHindu } from "./Universities/BanarasHindu";
import { IIT } from "./Universities/IIT";
import { UofDelhi } from "./Universities/UofDelhi";
import { PuneUniv } from "./Universities/PuneUniv";
import { AndhraUniv } from "./Universities/AndhraUniv";

export const UniversityPage = () =>{
    const {name} = useParams();
    console.log(name);

    // const [univName , setUnivName ] = useRef();

    switch(name){
        case 'university of hyderabad':
            return <UofHyd/>;
            
        case 'pondicherry university':
            return <Pondicherry/>;

        case 'Banaras hindu University':
            return <BanarasHindu/>;

        case 'iit':
            return <IIT/>;
        
        case 'university of delhi':
            return <UofDelhi/>;

        case 'pune university':
            return <PuneUniv/>;

        case 'andhra university':
            return <AndhraUniv/>
    
    }
    
    
}