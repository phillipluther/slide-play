import { NextResponse } from 'next/server';
// import { PREVIOUS_SLIDE_URL } from '@/consts';

export async function GET() {
  return NextResponse.json({
    message: 'Go back, please',
  }, {
    status: 200,
  });
}
