// cronRunner.ts
import { runJobA } from '@/app/lib/jobA';
import { runJobB } from '@/app/lib/jobB';

let initialized = false;

export async function runAllJobs() {
  try {
    console.log('▶️ Starting all jobs...');

    await runJobA();
    await runJobB();

    console.log('✅ All jobs finished.');
  } catch (err) {
    console.error('❌ Error in runAllJobs:', err);
    throw err;
  }
}
