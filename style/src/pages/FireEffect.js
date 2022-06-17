import React, {Component} from 'react';
import "../styles/_fireEffect.scss";

class FireEffect extends Component {
    render() {
        return (
            <div className="row">
                <div className="fire">
                    <div className="fire-left">
                        <div className="main-fire"/>
                        <div className="particle-fire"/>
                    </div>
                    <div className="fire-center">
                        <div className="main-fire"/>
                        <div className="particle-fire"/>
                    </div>
                    <div className="fire-right">
                        <div className="main-fire"/>
                        <div className="particle-fire"/>
                    </div>
                    <div className="fire-bottom">
                        <div className="main-fire"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FireEffect;