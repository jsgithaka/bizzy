'use client';
import { useState } from 'react';

import { Form, Input, Logo } from '@sharedComponents';
import { View } from '@structuralComponents';
import { SignUpStyles } from '@viewsStyles';

export default function SignUp() {
    const [information, setInformation] = useState('');
    const [form, setForm] = useState({
        email: '',
        password: '',
        confirm_password: '',
    });
    const handleRegister = async (event: Event) => {
        event.preventDefault();
        const response = await fetch('/api/authentication/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });
        const information = await response.json();
        setInformation(information.information);
    };
    return (
        <View
            id='register'
            styles={SignUpStyles.SignUp}
        >
            <Logo />
            {information && <p>{information}</p>}
            <Form
                value='Register'
                method={handleRegister}
            >
                <Input
                    type='email'
                    label='Email'
                    placeholder='your@email.com'
                    id='email'
                    method={(event) =>
                        setForm({ ...form, email: event.target.value })
                    }
                />
                <Input
                    type='password'
                    label='Password'
                    placeholder='********'
                    id='password'
                    method={(event) =>
                        setForm({ ...form, password: event.target.value })
                    }
                />
                <Input
                    type='password'
                    label='Confirm Password'
                    placeholder='********'
                    id='confirm_password'
                    method={(event) =>
                        setForm({
                            ...form,
                            confirm_password: event.target.value,
                        })
                    }
                />
            </Form>
        </View>
    );
}
