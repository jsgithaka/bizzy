export async function GET(request: Request) {
    try {
        const body = await request.json();
        return Response.json({ message: 'Login successful', data: body });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Something went wrong' }), {
            status: 200,
        });
    }
}
