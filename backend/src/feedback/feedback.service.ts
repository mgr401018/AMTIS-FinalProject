import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Feedback } from './feedback.schema';

@Injectable()
export class FeedbackService {
  constructor(@InjectModel(Feedback.name) private feedbackModel: Model<Feedback>) {}

  // Create new feedback
  async createFeedback(createFeedbackDto: any): Promise<Feedback> {
    const newFeedback = new this.feedbackModel(createFeedbackDto);
    return newFeedback.save();
  }

  // Retrieve all feedback
  async getAllFeedback(): Promise<Feedback[]> {
    return this.feedbackModel.find().exec();
  }

  // Archive feedback by ID
  async archiveFeedback(id: string): Promise<Feedback> {
    const feedback = await this.feedbackModel.findById(id);
    if (!feedback) {
      throw new NotFoundException('Feedback not found');
    }
    feedback.archived = true;
    return feedback.save();
  }
}
