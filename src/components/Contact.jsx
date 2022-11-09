import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gjd8sqw",
        "template_cla19p3",
        form.current,
        "AnRn0fTJZdDQUAPjS"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          console.log("Message failed to send");
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      id="contact"
      className="px-2 sm:px-4 py-2.5"
    >
      <div className="flex flex-col gap-4 container mx-auto rounded-lg bg-cyan-700 p-4 md:py-8 md:px-12">
        <h1 className="text-lg text-white font-bold uppercase">
          Interested? Contact me.
        </h1>
        <div className="flex md:flex-row flex-col gap-4">
          <div className="flex-1 flex flex-col gap-1">
            <p className="text-slate-200 text-xs">Name</p>
            <input
              ref={nameRef}
              name="user_name"
              type="text"
              className="rounded h-10 p-2"
              required
            />
            <p className="text-slate-200 text-xs">Phone Number</p>
            <input
              ref={phoneRef}
              name="user_phone"
              type="number"
              className="rounded h-10 p-2"
              required
            />
            <p className="text-slate-200 text-xs">Email</p>
            <input
              ref={emailRef}
              name="user_email"
              type="email"
              className="rounded h-10 p-2"
              required
            />
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <p className="text-slate-200 text-xs">Message</p>
            <textarea
              ref={messageRef}
              name="message"
              type="text"
              className="md:flex-1 md:h-auto h-32 rounded p-2"
              required
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="self-end text-white font-bold uppercase bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center transition ease-in-out delay-150 hover:scale-110 duration-200"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Contact;
