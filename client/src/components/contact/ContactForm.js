import { useState } from "react";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`https://vegas-flooring-outlet-server.vercel.app/contact`, {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, phone, email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.json());

    if (response.ok) {
      alert("Message sent");
    }
  };

  const mailToLink = `mailto:bhanubansal913@gmail.com?subject=&body=First Name: ${firstName}%0D%0ALast Name: ${lastName}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0A ${message}`;

  return (
    <main className="relative flex flex-col items-center my-32">
      <div
        className="absolute opacity-20 bg-gradient-to-tl from-green-500 to-transparent size-60 rounded-full z-0 
        right-64 bottom-1/4"
      ></div>

      <div
        className="absolute opacity-20 bg-gradient-to-br from-green-500 to-transparent size-36 rounded-3xl z-0
        top-1/3 left-72"
      ></div>
      <section className="mb-12">
        <h2 className="text-5xl font-bold mb-6 text-center">
          SEND US AN <span className="text-blue-600 font-normal">EMAIL</span>
        </h2>
        <p className="text-xl font-light text-stone-500 max-w-[747px] text-center">
          We're happy to answer any questions you may have. Just send us a
          message in the form below and we will get back to you shortly.
        </p>
      </section>

      <section className="relative bg-white py-12 px-16 rounded-3xl border border-gray-300">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-[45vw]">
          <TextInput
            labelText="First Name"
            type="text"
            id="fullName"
            onChange={setFirstName}
          />
          <TextInput
            labelText="Last Name"
            type="text"
            id="lastName"
            onChange={setLastName}
          />
          <TextInput
            labelText="Phone"
            type="number"
            id="phone"
            onChange={setPhone}
          />
          <TextInput
            labelText="Email"
            type="email"
            id="email"
            onChange={setEmail}
          />

          <div className="flex flex-col gap-3">
            <label
              htmlFor="message"
              className="text-md font-semibold text-blue-600"
            >
              Your Message
            </label>
            <textarea
              id="message"
              className="p-3 bg-white border-2 border-gray-300 rounded-2xl"
              rows="4"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* <div className="mt-8">
            <a href={mailToLink} className="nav-a">
              Send Message
            </a>
          </div> */}
          <div>
            <button className="nav-a" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

const TextInput = ({ labelText, id, type, onChange }) => (
  <div className="flex flex-col gap-3">
    <label htmlFor={id} className="text-md font-semibold text-blue-600">
      {labelText}
    </label>
    <input
      id={id}
      type={type}
      onChange={(e) => onChange(e.target.value)}
      className="p-3 bg-white border-2 border-gray-300 rounded-full"
    />
  </div>
);

export default ContactForm;
