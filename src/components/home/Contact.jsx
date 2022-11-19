import React from 'react';
import { Jumbotron } from './migration';
import { Container } from "react-bootstrap";

const Contact = React.forwardRef(
    ({ contact }, ref) => {
        return (
            <section className="section">
                <Container>
                    <Jumbotron id="contact" className="bg-white">
                        <h2 ref={ref} className="display-4 mb-5 text-center">
                            {contact.heading}
                        </h2>
                        <p className="lead text-center">
                            I'm currently looking Summer 2023 internship opportunities!
                        </p>
                        <p className="lead text-center">
                            If you know of any positions or have any questions, email me at: <a className="text-decoration-none" href={`mailto:${contact.email}`}>{contact.email}</a>.
                        </p>
                    </Jumbotron>
                </Container>
            </section>
        );
    }
);

export default Contact;