import React, {Component} from 'react';
import "../styles/_cardHover.scss"

class HoverCard extends Component {
    render() {
        return (
            <div className="container">
                <div className="box">
                    <span/>
                    <div className="content">
                        <h2>CODE</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur autem culpa
                            deleniti dolorem eaque error esse est ex excepturi iste iure magni maxime nesciunt non,
                            possimus, quaerat quasi qui quis reiciendis sint sit ullam voluptate. Consequatur deserunt
                            eius illum itaque labore, modi molestiae nam numquam, soluta unde veritatis voluptatem? A
                            distinctio fugiat harum iusto labore libero maxime nesciunt perferendis quaerat, quasi
                            repudiandae similique sit tempora totam voluptatibus.
                        </p>
                        <a href="https://t.me/sherzodgulomqodirov" target="_blank">Go telegram</a>
                    </div>
                </div>

            </div>
        );
    }
}

export default HoverCard;