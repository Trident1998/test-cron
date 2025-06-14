import { NextResponse } from 'next/server';

let counter = 0;

export async function GET() {
  try {
    counter += 1;
    return NextResponse.json({
      message: 'Hello world!',
      executionCount: counter,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Error fetching users' },
      { status: 500 }
    );
  }
}
