import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ReviewModule } from './review/review.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [UserModule, ReviewModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
