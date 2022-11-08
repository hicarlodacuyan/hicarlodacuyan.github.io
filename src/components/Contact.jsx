const Contact = () => {
  return (
    <form className="px-2 sm:px-4 py-2.5">
      <div className="flex flex-col gap-4 container mx-auto rounded-lg bg-cyan-700 p-4 md:py-8 md:px-12">
        <h1 className="text-lg text-white font-bold uppercase">
          Interested? Contact me.
        </h1>
        <div className="flex md:flex-row flex-col gap-4">
          <div className="flex-1 flex flex-col gap-1">
            <p className="text-slate-200 text-xs">Name</p>
            <input type="text" className="rounded h-8 p-2" />
            <p className="text-slate-200 text-xs">Phone Number</p>
            <input type="number" className="rounded h-8 p-2" />
            <p className="text-slate-200 text-xs">Email</p>
            <input type="email" className="rounded h-8 p-2" />
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <p className="text-slate-200 text-xs">Message</p>
            <textarea
              type="text"
              className="md:flex-1 md:h-auto h-32 rounded p-2"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="self-end text-white font-bold uppercase bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Contact;
