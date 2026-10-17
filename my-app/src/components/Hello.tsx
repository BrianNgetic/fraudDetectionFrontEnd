import React from "react";
import { NumberLiteralType } from "typescript";

import type {Person} from "./model"
import type { Car } from "./model";

function  Hello( {name , age ,model, year} :Person & Car){


    return(
        <>
            <p>Hello {name} , you are {age} years old</p>
            <p>You drive a {year} {model}</p>
        </>

    );

}

export default Hello;