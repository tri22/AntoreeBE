import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { reviewList } from './data';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewService {
  create(createReviewDto: CreateReviewDto) {
    const nextId = reviewList.length + 1;
    const review: Review = {
      ...createReviewDto,
      id: nextId,
      createAt: new Date()
    };
    reviewList.push(review)
    return review;
  }

  findAllByTeacher(teacherId: number) {
    const list = reviewList.filter(review => review.teacherId == teacherId)
    if(list.length==0){
       throw new BadRequestException('Invalid teacher ID');
    }
    return list;
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
     const idx = reviewList.findIndex(review => review.id == id)
    if(idx==-1){
      throw new BadRequestException('Invalid review ID');
    }
    reviewList[idx]={
      ...reviewList[idx],
      ...updateReviewDto
    }
    return reviewList[idx];
  }

  remove(id: number) {
    const idx = reviewList.findIndex(review => review.id == id)
    if(idx==-1){
      throw new BadRequestException('Invalid review ID');
    }
    reviewList.splice(idx,1)
    return 'Delete successfully!';
  }
}
