import React from "react";
import { ReactDOM } from "react";
import NutritionModule from './NutritionModule';
import axios from "axios";
import {render, screen} from "@testing-library/react";
jest.mock("react-router-dom");
describe("NutritionModule Component",()=>{
    it("Rendered Container", ()=>{
        //jest.spyOn(AppointmentService, "getAppointment").mockResolvedValue(mockValue);
        render(<NutritionModule appointmentId={2}/>)
        const baseContainer = screen.getByTestId(/nutritiontest/i);
        expect(baseContainer).toBeInTheDocument();
    })
    it("Rendered Container", ()=>{
        //jest.spyOn(AppointmentService, "getAppointment").mockResolvedValue(mockValue);
        render(<NutritionModule appointmentId={2}/>)
        const baseContainer = screen.getByTestId(/headtag/i);
        expect(baseContainer).toBeInTheDocument();
    })
    // it("Rendered Container", ()=>{
    //     //jest.spyOn(AppointmentService, "getAppointment").mockResolvedValue(mockValue);
    //     render(<NutritionModule appointmentId={2}/>)
    //     const baseContainer = screen.getByTestId(/btag/i);
    //     expect(baseContainer).toBeInTheDocument();
    // })

});