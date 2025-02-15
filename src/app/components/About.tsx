import ImageWithText from "./ImageWithText";

export default function About() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 space-y-20">
      <ImageWithText
        imageSrc="/codetivitelearning.png"
        imageAlt="Tech Learner"
        title="Codetivite is a new tech learning platform."
        subtitle="About us:"
        description="You can see us as your career mentor who will be there for you every step of the way. Our goal is to help tech-aspirants transition from new-techies to full-time employees..."
      />

      <ImageWithText
        imageSrc="/learnwithus.png"
        imageAlt="User"
        title="Our Mission is to help you as a new Techie."
        subtitle="Our commitment to you"
        description="We help new techies stay patient and consistent in their job search. Our goal is to reduce the time it takes to get hired by 87%..."
        reverse
      />
    </section>
  );
}
