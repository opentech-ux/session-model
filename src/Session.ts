import { TimeStamped } from './TimeStamped';
import { Lom, LomId } from './Lom';
import { ActionEvent } from './ActionEvent';
import { ExplorationEvent } from './ExplorationEvent';
import { Discriminated } from './Discriminated';

/** A transition event between 2 LOMs. */
export interface LomTransitionEvent extends TimeStamped, Discriminated<'Transition'> {
    /** Instant of this transition relative to the start of the session. */
    readonly timeStamp: number;

    /** ID of the target LOM of the transition. */
    readonly target: LomId;
}

/** Alias for elements that can appear in the session timeline. */
export type TimelineElement = ExplorationEvent | ActionEvent | LomTransitionEvent;

/** An UX session with LOMs, exploration events and action events. */
export interface Session extends TimeStamped {
    /** Unique ID of the session. */
    readonly sessionId: string;

    /** Unique ID of the user owning this session, if available. */
    readonly userId?: string;

    /** Start time of this session. */
    readonly timeStamp: number;

    /** List of LOMs traversed during this session. */
    readonly loms: { readonly [k: LomId]: Lom };

    /** List of events of this session in chronological order. */
    readonly timeline: readonly TimelineElement[];
}
