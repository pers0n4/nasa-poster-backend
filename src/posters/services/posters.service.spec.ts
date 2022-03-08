import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Poster } from "../entities/poster.entity";
import { PostersService } from "./posters.service";

describe("PostersService", () => {
  let service: PostersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostersService,
        {
          provide: getRepositoryToken(Poster),
          useValue: {
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<PostersService>(PostersService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
