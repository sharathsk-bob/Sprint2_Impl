import React from "react";
import { ReactDOM } from "react";
import NutritionModule from './NutritionModule';
import axios from "axios";
import {render, screen} from "@testing-library/react";
import OptionPage from "./OptionPage";
jest.mock("react-router-dom");
describe("OptionModule Component",()=>{
    it("Rendered Container", ()=>{
        //jest.spyOn(AppointmentService, "getAppointment").mockResolvedValue(mockValue);
        render(<OptionPage appointmentId={2}/>)
        const baseContainer = screen.getByTestId(/option/i);
        expect(baseContainer).toBeInTheDocument();
    })

    it("Rendered Container", ()=>{
        //jest.spyOn(AppointmentService, "getAppointment").mockResolvedValue(mockValue);
        render(<OptionPage appointmentId={2}/>)
        const baseContainer = screen.getByTestId("newdiv");
        expect(baseContainer).toBeInTheDocument();
    })

});