import { Module } from "@nestjs/common";
import { PostersService } from "./posters.service";
import { PostersController } from "./posters.controller";

@Module({
  controllers: [PostersController],
  providers: [PostersService],
})
export class PostersModule {}
