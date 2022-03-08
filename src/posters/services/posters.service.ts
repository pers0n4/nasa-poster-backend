import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Poster } from "../entities/poster.entity";

@Injectable()
export class PostersService {
  constructor(
    @InjectRepository(Poster)
    private posterRepository: Repository<Poster>,
  ) {}

  // create(createPosterDto: CreatePosterDto) {
  //   return "This action adds a new poster";
  // }

  findAll() {
    return this.posterRepository.find();
  }

  findOne(id: number) {
    return this.posterRepository.findOne(id);
  }

  // update(id: number, updatePosterDto: UpdatePosterDto) {
  //   return `This action updates a #${id} poster`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} poster`;
  // }
}
