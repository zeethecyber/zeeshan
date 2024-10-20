export default function Section5() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { name, email, message } = Object.fromEntries(formData.entries());
    if (name && email && message) {
      const res = await fetch("/api/mailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        alert("Email sent successfully.");
      } else {
        alert("Failed to send email.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <section id="section-5">
      <div className="min-h-screen py-40">
        <h2 className="text-4xl font-semibold">Write an Email</h2>
        <p>
          If you have any questions or would like to work together, feel free to
          send me an email.
        </p>
        <form action="" onSubmit={onSubmit}>
          <div className="grid gap-4 font-condensed">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="p-4 border-b border-foreground placeholder:text-inherit bg-transparent focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="p-4 border-b border-foreground placeholder:text-inherit bg-transparent focus:outline-none"
            />
            <textarea
              placeholder="Message"
              name="message"
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
