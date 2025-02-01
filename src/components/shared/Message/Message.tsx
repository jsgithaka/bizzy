import { Button, Icon } from '@sharedComponents';
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
                <div>
                    <Icon
                        name='bell'
                        alt='Bell Icon'
                        width={20}
                        height={20}
                    />
                    <h1>Error</h1>
                </div>
                <p>
                    This is a message. This is a message. This is a message.
                    This is a message.
                </p>
                <Button
                    href=''
                    name='More'
                />
            </div>
        </div>
    );
}
