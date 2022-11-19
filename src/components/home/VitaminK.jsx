import React from 'react';
import { Jumbotron } from './migration';
import { Container } from "react-bootstrap";

const VitaminK = React.forwardRef(
    ({ vitamink }, ref) => {
        return (
            <section className="section">
                <Container>
                    <Jumbotron id="vitamink" className="bg-white">
                        <h2 ref={ref} className="display-4 mb-5 text-center">
                            {vitamink.heading}
                        </h2>
                        <div className="text-center">
                            <img
                                className="mb-3"
                                src={require('../../assets/img/vitamink/vk1.jpeg')}
                                width="300"
                                height="auto"
                                alt=""
                            />
                        </div>
                    </Jumbotron>
                </Container>
            </section>
        );
    }
);

export default VitaminK;