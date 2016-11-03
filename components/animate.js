/**
 * Created by dantegg on 2016/11/3.
 */
import TweenOne from 'rc-tween-one';
import React from 'react'

class Animate extends React.Component {

    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <TweenOne
                animation={{ left: '20%', yoyo: true, repeat: -1, duration: 1000 }}
                style={{ left: '-20%' }}
                className="code-box-shape"
            />
        );
    }
}


export default Animate