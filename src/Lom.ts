import { Zone } from './Zone';

/** Representation of the wireframe layout of a Web page. */
export interface Lom {
    /** Page title to help identify the LOM. */
    readonly title?: string;

    /** Page URL to help identify the LOM. */
    readonly url?: string;

    /** Global page width. */
    readonly pageWidth: number;

    /** Global page height. */
    readonly pageHeight: number;

    /** Root zone corresponding to the HTML body element. */
    readonly root: Zone;
}

/** Alias for LOM ID. */
export type LomId = string;
