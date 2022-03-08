import { Module } from "@nestjs/common";
import { PostersService } from "./posters.service";
import { PostersController } from "./posters.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Poster } from "./entities/poster.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Poster])],
  controllers: [PostersController],
  providers: [PostersService],
})
export class PostersModule {}
