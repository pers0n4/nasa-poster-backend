import { Injectable } from "@nestjs/common";

@Injectable()
export class PostersService {
  // create(createPosterDto: CreatePosterDto) {
  //   return "This action adds a new poster";
  // }

  findAll() {
    return `This action returns all posters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} poster`;
  }

  // update(id: number, updatePosterDto: UpdatePosterDto) {
  //   return `This action updates a #${id} poster`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} poster`;
  // }
}
