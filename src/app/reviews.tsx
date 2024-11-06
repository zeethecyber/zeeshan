import ReviewCard from "@/components/ui/review-card";

export default function ReviewsSection() {
  return (
    <section id="section-reviews" className="mt-40 grid gap-6">
      <ReviewCard
        client="Kamran Shekh"
        position="CEO KShekh"
        location="India"
        review="Zeeshan has been a great asset to our team. He is a talented developer who is always willing to go the extra mile to get the job done. I highly recommend him to anyone looking for a skilled and reliable developer."
        image="/images/kamran.png"
      />
      <ReviewCard
        client="David Moya"
        position="Founder - Vera AI"
        location="Spain"
        review="Zeeshan is a top-notch developer who is always willing to help. He is a great communicator and always delivers high-quality work on time. I would highly recommend him to anyone looking for a skilled developer."
        image="/images/david.png"
      />
      <ReviewCard
        client="Stefano Volso"
        position="CTO - Volso Tech"
        location="Italy"
        review="Zeeshan is a talented developer who is always willing to learn new technologies. He is a great team player and always delivers high-quality work. I would highly recommend him to anyone looking for a skilled developer."
        image="/images/stefano.png"
      />
    </section>
  );
}
