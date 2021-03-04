import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders App without crashing", () => {
  render(<ContactForm />);
});

test("adds input to screen after filling form and submitting", async () => {
    render(<ContactForm />)
    // const firstNameInput = screen.getByLabelText('First Name*');
    const firstNameInput = screen.getByPlaceholderText('Edd')
    const lastNameInput = screen.getByPlaceholderText('Burke');
    const ageInput = screen.getByPlaceholderText('18')
    const emailInput = screen.getByPlaceholderText('bluebill1049@hotmail.com');
    const messageInput = screen.getByText('Message');
    const submitButton = screen.getByRole("button", { name: "Submit"})

    await act( async() => {
      fireEvent.change(firstNameInput, { target: { value: 'elizabeth' } });
        fireEvent.change(lastNameInput, { target: { value: 'bailey' } });
        fireEvent.change(ageInput, {target: {value: 32}})
        fireEvent.change(emailInput, { target: { ref: 'email@email.com' } });
        fireEvent.change(messageInput, { target: { ref: 'some messages' } });
        fireEvent.click(submitButton)   
    })
       
       

       await expect( screen.getByDisplayValue('elizabeth')).toBeInTheDocument();
   
})
  