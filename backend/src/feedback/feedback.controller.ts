import { Controller, Post, Get, Body, Param, Patch } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { Feedback } from './feedback.schema';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  // Create feedback
  @Post()
  async createFeedback(@Body() createFeedbackDto:any): Promise<Feedback> {
    return this.feedbackService.createFeedback(createFeedbackDto);
  }

  // Get all feedback
  @Get()
  async getAllFeedback(): Promise<Feedback[]> {
    return this.feedbackService.getAllFeedback();
  }

  // Archive feedback
  @Patch(':id/archive')
  async archiveFeedback(@Param('id') id: string): Promise<Feedback> {
    return this.feedbackService.archiveFeedback(id);
  }
}
