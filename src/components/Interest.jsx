import React from "react";

import { interestText } from "../constants";

const Interest = () => {
    return (
        <section id="interest">
            <div className="interest__inner">
                <h2 className="interest__title">
                    Research Interest<em>vision</em>
                </h2>
                <div className="interest__desc">
                    {interestText.map((interest, key) => (
                        <div key={key}>
                            <span>{key + 1}</span>
                            <h3>{interest.title}</h3>
                            <p>{interest.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Interest;
