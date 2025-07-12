import { Injectable, Logger } from '@nestjs/common';
import { Resend } from 'resend';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private readonly resend: Resend;

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY!);
  }

  async sendEmail(to: string, subject: string, html: string, from = 'onboarding@resend.dev') {
    try {
      const result = await this.resend.emails.send({
        from,
        to,
        subject,
        html,
      });
      this.logger.log(`Email sent: ${JSON.stringify(result)}`);
      return result;
    } catch (error) {
      this.logger.error(`Failed to send email: ${error.message}`, error.stack);
      throw error;
    }
  }
} 