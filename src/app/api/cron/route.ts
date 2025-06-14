import { NextResponse } from 'next/server';
import cron from 'node-cron';
import { runAllJobs } from '@/app/cronRunner';
import { getACounter } from '@/app/lib/jobA';
import { getBCounter } from '@/app/lib/jobB';

let counter = 0;

export async function GET() {
  try {
    await runAllJobs();
    const jobACounter = getACounter();
    const jobBCounter = getBCounter();

    console.log(`✅ Job B has executed ${jobBCounter} times`);
    console.log(`✅ Job A has executed ${jobACounter} times`);

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
