/** Measure the loading navigation time of a page. */
export interface NavigationTiming {
    /** Start time of this performance timing chunk. */
    readonly timeStamp: number;

    /** Timestamp when the page starts loading. */
    readonly originTs: number;

    /** Timestamp where the page is usable but external resources are not loaded. */
    readonly interactiveTs: number;

    /** Timestamp where the page and all its resources are completely loaded. */
    readonly completeTs: number;

    /** Timestamp of the event that triggered the page change. */
    readonly eventTs: number;

    /** Elapsed time in seconds to load the page without external files. */
    readonly interactiveLoadingTime: number;

    /** Elapsed time in seconds to load the page with all external files already loaded. */
    readonly completeLoadingTime: number;

    /** Id of the lom where the triggering event was produced. */
    readonly fromLomId: string | null;

    /** Id of the lom where the loading time is analyzed. */
    readonly toLomId: string;
}
