import { useState } from "react";

export default function Contact() {
  function formSubmission(e) {
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={formSubmission}>
        <label>
          First Name:
          <input type="text" name="userFirstName" />
        </label>
        <label>
          Last Name:
          <input type="text" name="userLastName" />
        </label>
        <label>
          Mail:
          <input type="email" name="userMail" />
        </label>
        <label>
          Phone:
          <input type="tel" name="userPhone" />
        </label>
        <label>Message:</label>
      </form>
    </>
  );
}
