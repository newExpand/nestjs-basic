import { Module } from '@nestjs/common';
import { BlogController } from './blog.controll';
import { BlogService } from './blog.service';

@Module({
  imports: [],
  controllers: [BlogController],
  providers: [BlogService],
})
export class AppModule {}
