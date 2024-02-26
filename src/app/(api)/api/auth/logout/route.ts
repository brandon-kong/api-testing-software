import { NextRequest, NextResponse } from "next/server";
import { PUBLIC_API_URL } from "@/util/constants";

export async function POST (request: NextRequest) {
    const body = await request.json();

    const refresh = body.refresh as string | undefined;

    if (!refresh) {
        return NextResponse.json({ error: 'No refresh token provided' }, { status: 400 });
    }

    const res = await fetch(`${PUBLIC_API_URL}/auth/logout/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            refresh: refresh
        })
    });

    const data = await res.json();
    return NextResponse.json(data);
}