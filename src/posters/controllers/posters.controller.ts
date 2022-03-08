import { Controller, Get, Param } from "@nestjs/common";
import { PostersService } from "../services/posters.service";

@Controller("posters")
export class PostersController {
  constructor(private readonly postersService: PostersService) {}

  @Get()
  findRoot() {
    return this.postersService.findChildren();
  }

  @Get(":id")
  findNode(@Param("id") id: string) {
    return this.postersService.findChildren(+id);
  }
}
