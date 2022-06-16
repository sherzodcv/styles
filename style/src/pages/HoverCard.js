import React, {Component} from 'react';
import "../styles/_cardHover.scss"

class HoverCard extends Component {
    render() {
        return (
            <div className="container">
                <div className="box">
                    <span/>
                    <div className="content">
                        <h2>ABOUT MYSELF</h2>
                        <p>
                            My name is Sherzod, my surname is G'ulomqodirov. I was born 15th august in 2001. When I was
                            7 years old, I went to the 1st grade of secondary school № 52 in Yangiyul district of
                            Tashkent region. I graduated from the 9th grade of this school in 2017 and continued my
                            studies in the 10th grade of this school. After graduating from the 11th grade of this
                            school in 2019, I entered the Personal Development Process IT academy in Tashkent in October
                            2019 and graduated from this academy in December 2020. I am currently a 2nd-grade student of
                            Information Systems and Technologies at the National University of Uzbekistan.
                        </p>
                        <a href="https://t.me/sherzodgulomqodirov" rel="noreferrer" target="_blank">CONTACT ME</a>
                    </div>
                </div>

            </div>
        );
    }
}

export default HoverCard;