import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { email, password, confirm_password } = await request.json();
        if (password !== confirm_password) {
            return NextResponse.json({
                information:
                    'Kindly ensure that `Password` and `Confirm Password` input fields match.',
            });
        }
        return NextResponse.redirect(new URL('/login', request.url));
    } catch (error) {
        return NextResponse.json({ test: 'okay' });
    }
}
