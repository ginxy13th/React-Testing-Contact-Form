import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders App without crashing", () => {
  render(<ContactForm />);
});

test("adds input to screen after filling form and submitting", () => {
    render(<ContactForm />)
    // const firstNameInput = screen.getByLabelText('First Name*');
    const firstNameInput = screen.getByPlaceholderText('Edd')
    const lastNameInput = screen.getByPlaceholderText('Burke');
    const emailInput = screen.getByPlaceholderText('bluebill1049@hotmail.com');
    const messageInput = screen.getByText('Message');

        fireEvent.change(firstNameInput, { target: { value: 'elizabeth' } });

        fireEvent.change(lastNameInput, { target: { value: 'bailey' } });
        fireEvent.change(emailInput, { target: { ref: 'email@email.com' } });
        fireEvent.change(messageInput, { target: { ref: 'some messages' } });

        const submitInput = screen.getByRole("input", {type: "submit"})

        fireEvent.onChange(submitInput)

        expect(screen.getByText(/elizabeth/i)).toBeInTheDocument();
   
})
  