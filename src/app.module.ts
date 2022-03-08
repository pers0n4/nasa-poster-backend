import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PostersModule } from "./posters/posters.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forRoot(), PostersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
