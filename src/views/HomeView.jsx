import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Port from "../components/Port";
import Skip from "../components/Skip";
import Skill from "../components/Skill";
import Site from "../components/Site";

const HomeView = () => {
    return (
        <>
            <Skip />
            <Header />
            <Main>
                <Intro />
                <Skill />
                <Site />
                <Port />
                <Contact />
            </Main>
            <Footer />
        </>
    );
};

export default HomeView;
