import { Module } from "@nestjs/common";
import { PostersService } from "./services/posters.service";
import { PostersController } from "./controllers/posters.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Poster } from "./entities/poster.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Poster])],
  controllers: [PostersController],
  providers: [PostersService],
})
export class PostersModule {}
