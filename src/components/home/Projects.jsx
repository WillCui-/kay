import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Jumbotron } from './migration';

const dendriteLink =
    <a
        href='https://www.imdb.com/title/tt21263496/'
        target="_blank"
        rel="noreferrer"
        aria-label='Dendrite IMDB'>
        American Dendrite
    </a>

const Projects = React.forwardRef(
    ({ projects }, ref) => {
        return (
            <section className="section">
                <Jumbotron id="projects" className="bg-white">
                    <h2 ref={ref} className="display-4 mb-5 text-center">
                        {projects.heading}
                    </h2>
                    <div className='d-grid gap-3'>
                        <Card>
                            <Card.Img>

                            </Card.Img>
                            <Card.Body>
                                <Card.Title>
                                    American Dendrite&nbsp;
                                    <a
                                        href="https://seedandspark.com/fund/americandendrite#updates/37633/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className='fa fa-globe' />
                                    </a>
                                </Card.Title>
                                <Card.Text>
                                    I worked as a sound mixer on {dendriteLink}, an experimental hybrid documentary film project. My crew and I road tripped from Chicago to New Orleans while following the path of the Mississippi River. Along the way, we collected field recordings and interviewed folks from small towns and large cities. Everything was shot using Super 8 film.
                                </Card.Text>
                                <Button
                                    href="https://seedandspark.com/fund/americandendrite#updates/37633/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="American Dendrite"
                                >
                                    More Information
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    Soul4Real&nbsp;
                                    <a
                                        href="https://www.instagram.com/soul4realnu/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className='fab fa-instagram' />
                                    </a>
                                </Card.Title>
                                <Card.Text>
                                    I have done recording and audio-mixing work in my a cappella group, Soul4Real. I love to sing and I did a lot of sound engineering work during our virtual concerts in the pandemic. Check out some of our work below!
                                </Card.Text>
                                <Tabs forceRenderTabPanel>
                                    <TabList>
                                        <Tab>Cover of Kali Uchis' Feel Like a Fool</Tab>
                                        <Tab>Survivor x I Will Survive Mashup</Tab>
                                        <Tab>Cover of Lauryn Hill's Can't Take My Eyes off of You</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <div className='d-flex justify-content-center'>
                                            <iframe
                                                width="560"
                                                height="315"
                                                src="https://www.youtube.com/embed/3mw1xXW_oR0"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen />
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className='d-flex justify-content-center'>
                                            <iframe
                                                width="560"
                                                height="315"
                                                src="https://www.youtube.com/embed/opfj_Q5kw2E"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen />
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className='d-flex justify-content-center'>
                                            <iframe
                                                width="560"
                                                height="315"
                                                src="https://www.youtube.com/embed/g3OgiVaaVw0"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen>
                                            </iframe>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    Bernards Ensemble&nbsp;
                                    <a
                                        href="https://www.bernardsensemble.org/about/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className='fa fa-globe' />
                                    </a>
                                </Card.Title>
                                <Card.Text>
                                    I co-founded Bernards Ensemble, a group of musicians that conducts chamber music performances for neurodivergent individuals in my local community. I played flute and sang vocals in our events and organised rehearsals.
                                </Card.Text>
                                <Button
                                    href="https://www.bernardsensemble.org/about"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Bernards Ensemble"
                                >
                                    More Information
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Jumbotron>
            </section >
        );
    }
);

export default Projects;