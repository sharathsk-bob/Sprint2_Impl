import {fireEvent, getByTestId, render, screen} from "@testing-library/react";
import UserLogin from "./UserLogin";
jest.mock("react-redux")
jest.mock("react-router-dom")
describe("User Login Component",()=>{
    it("Rendered Container", ()=>{
        //jest.spyOn(AppointmentService, "getAppointment").mockResolvedValue(mockValue);
        render(<UserLogin />)
        const baseContainer = screen.getByTestId(/login/i);
        expect(baseContainer).toBeInTheDocument();
    })
    it("Rendered Container", ()=>{
        //jest.spyOn(AppointmentService, "getAppointment").mockResolvedValue(mockValue);
        render(<UserLogin />)
        const baseContainer = screen.getByTestId(/login/i);
        expect(baseContainer).toBeInTheDocument();
    })
    it("Rendered Container", ()=>{
        //jest.spyOn(AppointmentService, "getAppointment").mockResolvedValue(mockValue);
        render(<UserLogin />)
        const baseContainer = screen.getByTestId(/inputfield/i);
        expect(baseContainer).toBeInTheDocument();
    })
    it("Rendered Container", ()=>{
        //jest.spyOn(AppointmentService, "getAppointment").mockResolvedValue(mockValue);
        render(<UserLogin />)
        const baseContainer = screen.getByTestId(/emailfield/i);
        expect(baseContainer).toBeInTheDocument();
    })
    it("Rendered Container", ()=>{
        //jest.spyOn(AppointmentService, "getAppointment").mockResolvedValue(mockValue);
        render(<UserLogin />)
        const baseContainer = screen.getByTestId(/emailfield/i);
        expect(baseContainer).toBeInTheDocument();
    })
    it("Rendered Container", ()=>{
        //jest.spyOn(AppointmentService, "getAppointment").mockResolvedValue(mockValue);
        render(<UserLogin />)
        const baseContainer = screen.getByTestId(/passfield/i);
        expect(baseContainer).toBeInTheDocument();
    })
})