import {getByTestId, render} from "@testing-library/react";
import NutritionModule from './NutritionModule';

describe("NutritionModule Component",()=>{
    it("rendered input",()=>{
     const{getByTestId}= render(<NutritionModule/>);
     const nutritionModule= getByTestId('nutri-head-id');
    expect(nutritionModule).toBeTruthy();
    
    });

});