'use server';
// Define the structure of the email payload to be sent via SES
export interface EmailPayload {
  source: string;
  destination: string;
  subject: string;
  link?: string;
  body_html: string;
  type?: string;
  notify?: boolean;
  description?: string;
}



import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient({ region: 'eu-north-1' });

/**
 * Sends an email directly via AWS SES.
 *
 * @param payload - The email details including source, destination, subject, and HTML body.
 * @returns A promise that resolves to the SES response.
 *
 * @throws Will throw an error if sending the email fails.
 */
export async function sendEmail(payload: EmailPayload): Promise<any> {
  const { link = '', type = 'ra-system', notify = true, description = '' } = payload;

  try {
    const command = new SendEmailCommand({
      Source: payload.source,
      Destination: { ToAddresses: [payload.destination] },
      Message: {
        Subject: { Data: payload.subject, Charset: 'UTF-8' },
        Body: {
          Html: { Data: payload.body_html, Charset: 'UTF-8' },
          Text: { Data: payload.subject, Charset: 'UTF-8' },
        },
      },
    });

    const response = await sesClient.send(command);

    return { message: 'Email sent successfully', response };
  } catch (error) {
    // Log the error for debugging purposes
    console.error('💥 Critical error in sendEmail:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      payload: {
        to: payload.destination,
        from: payload.source,
        subject: payload.subject,
      },
    });
    // Re-throw the error to allow further handling by the calling code if needed
    throw error;
  }
}
