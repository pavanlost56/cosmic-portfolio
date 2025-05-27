export const config = {
  email: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  whatsapp: {
    number: process.env.WHATSAPP_NUMBER,
  },
  validateConfig: () => {
    const requiredEnvVars = [
      { key: 'EMAIL_USER', value: process.env.EMAIL_USER },
      { key: 'EMAIL_PASS', value: process.env.EMAIL_PASS },
      { key: 'WHATSAPP_NUMBER', value: process.env.WHATSAPP_NUMBER },
    ];

    const missingVars = requiredEnvVars.filter(({ value }) => !value);
    if (missingVars.length > 0) {
      throw new Error(
        `Missing required environment variables: ${missingVars.map(({ key }) => key).join(', ')}`
      );
    }
  },
};
