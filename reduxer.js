
import { CRUDStrategy, buildCommunication, StoreBranch } from '@axmit/redux-communications';

const number = 2545.42;

const strategy = new CRUDStrategy({
    number,
});

export const taskCommunication = buildCommunication(strategy);