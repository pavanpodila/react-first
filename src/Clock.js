import React from 'react';
import moment from 'moment';

export class Clock extends React.Component {
    state = {
        time: new Date(),
    };

    static defaultProps = {
        format: 'hh:mm:ss',
        className: '',
    };

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                time: new Date(),
            });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    render() {
        const date = moment(this.state.time);
        const { format, className } = this.props;

        const timeString = date.format(format);
        return (
            <div className={`display-1 text-white mt-5 ${className}`}>
                {timeString}
            </div>
        );
    }
}
