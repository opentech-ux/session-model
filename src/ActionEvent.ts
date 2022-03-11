import { AbstractEvent } from './AbstractEvent';
import { Point } from './Point';

/** A captured action event (mouse click, keystroke, drag & drop, ...). */
export interface ActionEvent extends AbstractEvent {
    /** ID of the LOM zone at which the event occurred. */
    readonly zoneId: string;

    /** mask containing modifiers 1:shift, 2 ctrl, 4 alt, 8 meta & co */
    readonly modifiers: number;

    /** Mouse position when event occurred, if relevant. */
    readonly mousePosition?: Point;
}
