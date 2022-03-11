/** Base class for object registering their capture instant. */
export interface TimeStamped {
    /** Instant of this object capture, expressed as the number of milliseconds since 1970-01-01 00:00:00 UTC. */
    readonly timeStamp: number;
}
