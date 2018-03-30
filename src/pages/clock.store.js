import { observable } from 'mobx';
import moment from 'moment';

class ClockStore {
    time = observable.box(moment());

    constructor() {
        this.startTimer();
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.time.set(moment());
        }, 1000);
    }

    endTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
}

export const clockStore = new ClockStore();
