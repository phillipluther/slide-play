import { NextResponse } from 'next/server';
// import { NEXT_SLIDE_URL } from '@/consts';

export async function GET() {
  return NextResponse.json({
    message: 'Next slide, please',
  }, {
    status: 200,
  });
}
