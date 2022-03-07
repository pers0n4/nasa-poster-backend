import { Controller, Get, Param } from "@nestjs/common";
import { PostersService } from "./posters.service";

@Controller("posters")
export class PostersController {
  constructor(private readonly postersService: PostersService) {}

  @Get()
  findAll() {
    return this.postersService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.postersService.findOne(+id);
  }
}
