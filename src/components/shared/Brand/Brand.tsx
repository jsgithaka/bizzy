import { Logo } from '@sharedComponents';
import { BrandStyles } from '@sharedStyles';

export default function Brand() {
    return (
        <div className={BrandStyles.Brand}>
            <Logo />
            <p>Bizzy</p>
        </div>
    );
}
