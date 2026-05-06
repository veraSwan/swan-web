import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  if (!apiKey || !listId) {
    return NextResponse.json(
      { error: 'Newsletter is not configured.' },
      { status: 500 },
    );
  }

  let email: unknown;
  try {
    const body = await req.json();
    email = body?.email;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email.' }, { status: 400 });
  }

  const parsedListId = parseInt(listId, 10);
  if (Number.isNaN(parsedListId)) {
    return NextResponse.json(
      { error: 'Newsletter list misconfigured.' },
      { status: 500 },
    );
  }

  try {
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [parsedListId],
        updateEnabled: true,
      }),
    });

    if (res.ok || res.status === 204) {
      return NextResponse.json({ ok: true });
    }

    const data = await res.json().catch(() => null);
    if (data && typeof data === 'object' && 'code' in data && data.code === 'duplicate_parameter') {
      return NextResponse.json({ ok: true, alreadySubscribed: true });
    }

    return NextResponse.json(
      { error: (data as { message?: string } | null)?.message ?? `Brevo error (${res.status})` },
      { status: 502 },
    );
  } catch {
    return NextResponse.json({ error: 'Network error reaching Brevo.' }, { status: 502 });
  }
}
