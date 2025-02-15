import BuildtiviteCourses from "@/app/components/BuildtiviteCourses";
import BuildtiviteHero from "@/app/components/BuildtiviteHero";
import BuildtiviteFAQ from "@/app/components/BuildtiviteFAQ";
import WhyBuildtivite from "@/app/components/WhyBuildtivite";

export default function Contact() {

    return (
        <div className="container">
            <BuildtiviteHero />
            <WhyBuildtivite />
            <BuildtiviteCourses />
            <BuildtiviteFAQ />
        </div>
    );
}