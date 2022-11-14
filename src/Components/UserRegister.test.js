import {fireEvent, getByTestId, render, screen} from "@testing-library/react";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
jest.mock("react-redux")
jest.mock("react-router-dom")
describe("User Register Component",()=>{
    it("Rendered Container", ()=>{
        //jest.spyOn(AppointmentService, "getAppointment").mockResolvedValue(mockValue);
        render(<UserRegister />)
        const baseContainer = screen.getByTestId(/loginname/i);
        expect(baseContainer).toBeInTheDocument();
    })
    it("Rendered Container", ()=>{
        //jest.spyOn(AppointmentService, "getAppointment").mockResolvedValue(mockValue);
        render(<UserRegister />)
        const baseContainer = screen.getByTestId(/email/i);
        expect(baseContainer).toBeInTheDocument();
    })
    it("Rendered Container", ()=>{
        //jest.spyOn(AppointmentService, "getAppointment").mockResolvedValue(mockValue);
        render(<UserRegister />)
        const baseContainer = screen.getByTestId(/email/i);
        expect(baseContainer).toBeInTheDocument();
    })
    it("Rendered Container", ()=>{
        //jest.spyOn(AppointmentService, "getAppointment").mockResolvedValue(mockValue);
        render(<UserRegister/>)
        const baseContainer = screen.getByTestId(/role/i);
        expect(baseContainer).toBeInTheDocument();
    })
    it("Rendered Container", ()=>{
        //jest.spyOn(AppointmentService, "getAppointment").mockResolvedValue(mockValue);
        render(<UserRegister />)
        const baseContainer = screen.getByTestId(/password/i);
        expect(baseContainer).toBeInTheDocument();
    })
});