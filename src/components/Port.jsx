import React from "react";
import caringAI from "../assets/img/caring_ai.jpg";

const Port = () => {
    return (
        <section id="port">
            <div className="port__inner">
                <div className="port__title">
                    Portfolio <em>Project</em>
                </div>
                <div className="port__wrap">
                    <article className="port__item p1">
                        <span className="num">01.</span>
                        <a
                            href="https://github.com/danieldoh"
                            target="_blank"
                            className="img"
                            rel="noreferrer"
                        >
                            <img src={caringAI} alt="CARING-AI" />
                        </a>
                        <h3 className="title">CARING-AI</h3>
                        <p className="desc">
                            스크롤링을 활용하여 훌륭한 사용자 경험을 선사하는
                            포트폴리오 사이트입니다. 스크롤을 내리면서 작품들이
                            순차적으로 나타나고 효과적으로 전환되는 것은 마치
                            예술적인 이야기를 읽어나가는 듯한 느낌을 주며
                            사용자를 매료시킵니다. 스크롤의 움직임을 통해
                            작품들이 서서히 드러나고, 각 페이지 간의 전환은
                            자연스럽고 부드럽습니다. 이러한 트랜지션과
                            애니메이션들이 작품들의 내용과 테마를 더욱
                            강조해줍니다.
                        </p>
                        <a
                            href="https://portfoliosj-react.netlify.app/"
                            target="_blank"
                            className="site"
                            rel="noreferrer"
                        >
                            사이트 보기
                        </a>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Port;
