import React from "react";

const formFields = [
  {
    id: "fname",
    field: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "First Name",
  },
  {
    id: "lname", 
    field: "lastName", 
    label: "Last Name", 
    type: "text", 
    placeholder: "Last Name"
  }, 
  {
    id: "email", 
    field: "email", 
    label: "Email", 
    type: "email", 
    placeholder: "Email"
  }, 
  {
    id: "phone", 
    field: "phone", 
    label: "Phone Number", 
    type: "tel", 
    placeholder: "Phone Number"
  }, 
  {
    id: "subject", 
    field: "subject", 
    label: "Subject", 
    type: "text", 
    placeholder: "Subject"
  }
];

function Form() {
  return (
    <div className='flex flex-col items-center bg-gray-600 p-10 justify-evenly'>
      <form className='flex flex-col md:w-1/3 w-2/3 text-white font-karla'>
        {formFields.map((field) => (
          <>
            <label for={field.id} className='py-4 inline-block '>
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.id}
              name={field.label}
              placeholder={field.placeholder}
              className='inline-block outline-none rounded-md pl-3'
            />
          </>
        ))}
        <label for="messageText" className='py-4 inline-block'>Message</label>
        <textarea id="messageText" name="messageText" rows="4" className="rounded-md"></textarea>
        <button className="py-4 bg-burnt-pink text-white my-12 rounded-md w-36 md:self-start self-center">Submit</button>
      </form>
    </div>
  );
}

export default Form;
