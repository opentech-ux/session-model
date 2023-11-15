/** Measures the loading time of external resources of the pages. */
export interface ResourceTiming {
    /** Start time of this performance ressource timing. */
    readonly timeStamp: number;

    /** Name for the performance entry. */
    readonly name: string;

    /** First timestamp recorded for the performance entry. */
    readonly startTime: number;

    /** Timestamp after the browser receives the last byte of the resource. */
    readonly responseEnd: number;

    /** Type of performance metric that this entry represents. */
    readonly entryType: string;

    /** Duration of the performance entry. */
    readonly duration: number;
}
