import { Injectable } from '@nestjs/common';

@Injectable()
export class WelcomeService {
  getWelcome(): string {
    return 'Welcome to the Skilled Trades Learning Platform. Master your trade with bite-sized, AI-powered lessons.';
  }
}
