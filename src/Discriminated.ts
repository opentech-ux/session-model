/** Base interface for discriminated polymorphic types. */
export interface Discriminated<T extends string> {
    /** Polymorphic discriminator. */
    readonly t: T;
}
