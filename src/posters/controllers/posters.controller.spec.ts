import { Test, TestingModule } from "@nestjs/testing";
import { PostersController } from "./posters.controller";
import { PostersService } from "../services/posters.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Poster } from "../entities/poster.entity";

describe("PostersController", () => {
  let controller: PostersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostersController],
      providers: [
        PostersService,
        {
          provide: getRepositoryToken(Poster),
          useValue: {
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<PostersController>(PostersController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
