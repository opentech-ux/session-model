import { Bounds } from './Bounds';
import { Transition } from './Transition';

/** An area on screen that can be subdivided in smaller sub-zones. */
export interface Zone {
    /** Parent Zone of this zone. */
    readonly parent?: Zone;

    /** Unique ID of the zone in the context of its owning LOM. */
    readonly zoneId: string;

    /** Transitions attached to this zone. */
    readonly transitions: Transition[];

    /** Bounding rectangle of this zone in world coordinates. */
    readonly bounds: Bounds;

    /** Styling info on this zone. */
    readonly style?: { readonly background?: string; readonly border?: string };

    /** Sub-zones of this zone. */
    readonly children: Zone[];
}
