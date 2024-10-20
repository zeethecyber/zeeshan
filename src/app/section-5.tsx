export default function Section5() {
  return (
    <section id="section-5">
      <div className="min-h-screen py-40">
        <h2 className="text-4xl font-semibold">Write an Email</h2>
        <p>
          If you have any questions or would like to work together, feel free to
          send me an email.
        </p>
        <form action="">
          <div className="grid gap-4 font-condensed">
            <input
              type="text"
              placeholder="Name"
              className="p-4 border-b border-foreground placeholder:text-inherit bg-transparent focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 border-b border-foreground placeholder:text-inherit bg-transparent focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="p-4 border-b border-foreground placeholder:text-inherit bg-transparent focus:outline-none resize-none"
              rows={5}
            ></textarea>
            <button className="w-full p-4 bg-foreground text-background font-bold font-condensed">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
