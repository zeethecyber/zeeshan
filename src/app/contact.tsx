import Button from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { name, email, message } = Object.fromEntries(formData.entries());
    if (name && email && message) {
      setLoading(true);
      const res = await fetch("/api/mailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        toast.success("Email sent successfully.");
      } else {
        toast.error("Failed to send email.");
      }
    } else {
      toast.error("Please fill in all fields.");
    }
    setLoading(false);
  };

  return (
    <section id="section-contact">
      <div className="lg:min-h-screen py-20 xl:py-40">
        <h2 className="text-4xl font-semibold">Write an Email</h2>
        <p className="mt-4">
          If you have any questions or would like to work together, feel free to
          send me an email.
        </p>
        <form action="" onSubmit={onSubmit} className="mt-8">
          <div className="grid gap-4 font-space">
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
            {/* <button className="mt-8 w-full p-4 bg-secondary text-white font-bold font-space active:after:top-0 active:after:left-0 after:duration-100 duration-100 rounded-lg relative after:absolute after:size-full after:bg-primary after:rounded-lg after:top-2 after:left-2 after:-z-10">
              {loading ? "Sending your words..." : "Get Started"}
            </button> */}
            <Button>{loading ? "Sending your words..." : "Get Started"}</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
