
import React from "react";
import WhyBuildtivite from "../../components/WhyBuildtivite";
import BuildtiviteFAQ from "../../components/BuildtiviteFAQ";
import BuildtiviteCourses from "../../components/BuildtiviteCourses";
import BuildtiviteHero from "../../components/BuildtiviteHero";

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