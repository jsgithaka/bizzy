import { ViewStyles } from '@structuralStyles';

export default function View({ id, styles, children }: ViewProps) {
    return (
        <section
            id={id}
            className={[ViewStyles.View, styles].join(' ')}
        >
            {children}
        </section>
    );
}
