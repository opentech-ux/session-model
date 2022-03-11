/** An axis aligned rectangle defining bounds of a graphical element on screen. */
export interface Bounds {
    /** X coordinates of the upper-left corner of the rectangle. */
    readonly x: number;

    /** Y coordinates of the upper-left corner of the rectangle. */
    readonly y: number;

    /** Width of the rectangle. */
    readonly width: number;

    /** Height of the rectangle. */
    readonly height: number;
}
