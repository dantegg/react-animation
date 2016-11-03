/**
 * Created by dantegg on 2016/11/3.
 */
import TweenOne from 'rc-tween-one';

class Demo extends React.Component {

    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <TweenOne
                animation={{ left: '20%', yoyo: true, repeat: -1, duration: 1000 }}
                paused={this.props.paused}
                style={{ left: '-20%' }}
                className="code-box-shape"
            />
        );
    }
}