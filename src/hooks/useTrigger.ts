import { useState } from 'react';

export default function useTrigger() {
    const [trigger, setTrigger] = useState<boolean>(false);
    const toggleTrigger = () => {
        setTrigger(!trigger);
    };
    return { trigger, toggleTrigger };
}
