import cron from 'node-cron';

let counter = 0;

export async function runJobB() {
  try {
    cron.schedule('* * * * *', async () => {
      counter += 1;
      console.log('⏰ Running scheduled cron job B...');
      console.log(`✅ Job B has executed ${counter} times`);
    });

    console.log('job B finished...');
  } catch (error) {
    console.error('❌ Job B failed:', error);
  }
}
