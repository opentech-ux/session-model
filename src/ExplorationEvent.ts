import { Point } from './Point';
import { AbstractEvent } from './AbstractEvent';
import { Discriminated } from './Discriminated';

/** A captured exploration event (mouse move, scrolling, keyboard navigation, ...). */
export interface ExplorationEvent extends AbstractEvent, Discriminated<'Exploration'> {
    /** Scroll position of the document when this event occurred. */
    readonly scrollPosition: Point;

    /** Mouse position in page when this event occurred if applicable. */
    readonly mousePosition?: Point;

    /** ID of the LOM zone having the focus if applicable. */
    readonly focusedZoneId?: string;
}
