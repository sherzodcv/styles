import React, {Component} from 'react';
import "../styles/_cardHOver2.scss"

class HoverCard2 extends Component {
    render() {
        return (
            <div className="row">
                <div className="card">
                    <ul>
                        <li><i className="bx bx-drink"/></li>
                        <li><i className="bx bx-film"/></li>
                        <li><i className="bx bx-store-alt"/></li>
                        <li><i className="bx bx-map"/></li>
                    </ul>
                    <img src={require("../images/imgHoverCard.jpg")} alt=""/>
                    <div className="con-text">
                        <h2>Nature</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi blanditiis
                            doloremque
                            fugit labore libero magni minus mollitia officiis voluptatibus! Delectus quod sapiente
                            similique. Corporis deleniti doloribus laboriosam laborum maiores possimus quis similique
                            voluptate!
                            <button>See more</button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HoverCard2;