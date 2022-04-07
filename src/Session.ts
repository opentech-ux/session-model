import { TimeStamped } from './TimeStamped';
import { Lom, LomId } from './Lom';
import { ActionEvent } from './ActionEvent';
import { ExplorationEvent } from './ExplorationEvent';

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

    /** List of exploration events captured in this session chunk. */
    readonly explorationEvents: ExplorationEvent[];

    /** List of action events captured in this session chunk. */
    readonly actionEvents: ActionEvent[];
}
