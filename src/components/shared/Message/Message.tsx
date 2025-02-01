import { Icon, Logo } from '@sharedComponents';
import { MessageStyles } from '@sharedStyles';

export default function Message() {
    return (
        <div className={MessageStyles.Message}>
            <div className={MessageStyles.MessageHead}>
                <Icon
                    name='cancel'
                    alt='Cancel Icon'
                    width={16}
                    height={16}
                />
            </div>
            <div className={MessageStyles.MessageBody}>
                <Logo />
                <p>This is a message.</p>
            </div>
        </div>
    );
}
