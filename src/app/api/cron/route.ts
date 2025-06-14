import { NextResponse } from 'next/server';
import cron from 'node-cron';
import { runAllJobs } from '@/app/cronRunner';

let counter = 0;

export async function GET() {
  try {
    await runAllJobs();
    return NextResponse.json({
      message: '✅ Cron jobs executed manually via API',
    });
  } catch (error) {
    console.error('❌ API-triggered job run failed:', error);
    return NextResponse.json(
      { error: 'Cron jobs execution failed' },
      { status: 500 }
    );
  }
}
