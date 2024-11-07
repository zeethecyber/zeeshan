import ReviewCard from "@/components/ui/review-card";

export default function ReviewsSection() {
  return (
    <section id="section-reviews" className="mt-40 grid gap-6">
      <ReviewCard
        client="Kamran S."
        position="CEO - KShekh"
        location="India"
        review="Zeeshan has been a great asset to our team. He is a talented developer who is always willing to go the extra mile to get the job done. I highly recommend him to anyone looking for a skilled and reliable developer."
        image="/images/kamran.png"
      />
      <ReviewCard
        client="David M."
        position="Founder - Vera AI"
        location="Spain"
        review="Zeeshan took what was a project in crisis and completely transformed it. In fact, I was so impressed with his work that I decided to continue hiring him for a series of smaller front-end development tasks for an application. Today, after a year of working together, I can confidently say that the experience has been so positive that it has led to an even more permanent collaboration"
        image="/images/david.png"
      />
      <ReviewCard
        client="Stefano V."
        position="Freelancer"
        location="Italy"
        review="Working with you has been really satisfying, trying the Fiverr Platform for the first time, I found in Zeeshan, the professional I was looking for, he helped me develop my project and did it both in the best times and ways! I will continue to work on new projects with Zeeshan."
        image="/images/stefano.png"
      />
    </section>
  );
}
