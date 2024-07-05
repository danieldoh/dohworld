import React from "react";

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <h1 className="intro__title">Hyungjun Doh</h1>
                <div className="intro__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="intro__text">
                    <div className="text">
                        <div>MS in Electrical and Computer Engineering</div>
                        <div>Purdue University</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
