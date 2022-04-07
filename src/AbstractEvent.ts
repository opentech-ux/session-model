import { TimeStamped } from './TimeStamped';

/** Base class for captured events. */
export interface AbstractEvent extends TimeStamped {
    /** Instant of this event relative to the start of the session. */
    readonly timeStamp: number;

    /** Type of this event. */
    readonly type: string;

    /** ID of the LOM in which the event occurred. */
    readonly lom: string;
}
