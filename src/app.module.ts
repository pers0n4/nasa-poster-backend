import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PostersModule } from "./posters/posters.module";

@Module({
  imports: [PostersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
