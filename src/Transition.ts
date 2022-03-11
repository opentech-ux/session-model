/** A transition to a target LOM based on an event. */
export interface Transition {
    /** ID of the target LOM of this transition. */
    readonly targetLom: string;

    /** Nature of the event triggering this transition. */
    readonly eventType: 'click' | 'hover';
}
