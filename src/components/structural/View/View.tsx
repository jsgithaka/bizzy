export default function View({ id, styles, children }: ViewProps) {
    return (
        <section
            id={id}
            className={styles}
        >
            {children}
        </section>
    );
}
