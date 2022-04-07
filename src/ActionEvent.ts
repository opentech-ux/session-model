import { Point } from './Point';
import { AbstractEvent } from './AbstractEvent';
import { Discriminated } from './Discriminated';

/** A captured action event (mouse click, keystroke, drag & drop, ...). */
export interface ActionEvent extends AbstractEvent, Discriminated<'Action'> {
    /** ID of the LOM zone at which the event occurred. */
    readonly zoneId: string;

    /** mask containing modifiers 1:shift, 2 ctrl, 4 alt, 8 meta & co */
    readonly modifiers: number;

    /** Mouse position when event occurred, if relevant. */
    readonly mousePosition?: Point;
}
