// import ImageWithText from "./ImageWithText";
// import TitleSubtitle from "./TitleSubtitle";

// export default function About() {
//   return (
//     <section className="w-full max-w-7xl mx-auto px-6 py-2">
//       <ImageWithText imageSrc="/codetivitelearning.svg" imageAlt="Learner">
//         <TitleSubtitle 
//           title="Codetivite is a new tech learning platform."
//           subtitle="About us:"
//           description="You can see us as your career mentor who will be there for you every step of the way. Our goal is to help tech-aspirants transition from new-techies to full-time employees..." 
//           leftAligned 
//         />
//       </ImageWithText>

//       <ImageWithText imageSrc="/learnwithus.svg" imageAlt="Learner" reverse >
//         <TitleSubtitle
//           title="Our Mission is to help you as a new techie."
//           subtitle="Our commitment to you"
//           description="We help new techies stay patient and consistent in their job search. Our goal is to reduce the time it takes to get hired by 87%..."
//           />
//       </ImageWithText>
//     </section>
//   );
// }


import ImageWithText from "./ImageWithText";
import TextBlock from "./TextBlock";

export default function About() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-10 ">
      <ImageWithText
        imageSrc="/codetivitelearning.png"
        imageAlt="Tech Learner" >
        <TextBlock title="Codetivite is a new tech learning platform."
          subtitle="About us:"
          description="You can see us as your career mentor who will be there for you every step of the way. Our goal is to help tech-aspirants transition from new-techies to full-time employees..."
          justifyStart />
      </ImageWithText>


      <ImageWithText
        imageSrc="/learnwithus.png"
        imageAlt="User"
        reverse>
        <TextBlock title="Our Mission is to help you as a new techie."
        subtitle="Our commitment to you:"
        description="We help new techies stay patient and consistent in their job search. Our goal is to reduce the time it takes to get hired by 87%..."
        justifyStart/>
      </ImageWithText>
      
    </section>
  );
}
