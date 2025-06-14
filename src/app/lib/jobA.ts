import cron from 'node-cron';

let counter = 0;

export async function runJobA() {
  try {
    cron.schedule('* * * * *', async () => {
      counter += 1;
      console.log('⏰ Running scheduled cron job A...');
      console.log(`✅ Job A has executed ${counter} times`);
    });
    console.log('job B finished...');
  } catch (error) {
    console.error('❌ Job A failed:', error);
  }
}

export function getACounter() {
  return counter;
}
