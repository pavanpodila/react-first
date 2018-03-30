import React from 'react';
import { observer } from 'mobx-react';

export const Clock = observer(
    class extends React.Component {
        static defaultProps = {
            format: 'hh:mm:ss',
            className: 'display-1',
            color: 'black',
            store: {},
        };

        render() {
            const { format, className, color, store } = this.props;
            const { time } = store;

            return (
                <div
                    className={className}
                    style={{ color, textShadow: '1px 1px 3px black' }}
                >
                    {time ? time.get().format(format) : 'No Time Set'}
                </div>
            );
        }
    },
);
