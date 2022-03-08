import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PostersModule } from "./posters/posters.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "..", "static"),
      serveRoot: "/static",
    }),
    PostersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
