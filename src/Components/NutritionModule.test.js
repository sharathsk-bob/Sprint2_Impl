import React from "react";
import { ReactDOM } from "react";
import NutritionModule from './NutritionModule';
import axios from "axios";
import {render} from "@testing-library/react";
describe("NutritionModule Component",()=>{
    it("rendered input",()=>{
     const nutri = document.getElementById('nutri-head-id');
     expect(nutri).toBe("Nutrition Modules");
    
    });

});