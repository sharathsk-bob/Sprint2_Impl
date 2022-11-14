import {fireEvent, getByTestId, render} from "@testing-library/react";
import UserLogin from "./UserLogin";

describe("User Login Component",()=>{
    it("change on input causes change on header",async()=>{
       await act(async()=>{
            const {getByTestId}=render(<Input />)
            const input =getByTestId("searchBar");
            const header=getByTestId("displayBar");
            const inputWorld="Andrew";
            await fireEvent.change(input,{target:{value:inputWorld}})
            expect(header.innerHTML).toBe(inputWorld);
       })
    })
})