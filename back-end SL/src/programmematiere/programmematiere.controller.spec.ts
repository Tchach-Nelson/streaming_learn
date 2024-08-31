import { Test, TestingModule } from '@nestjs/testing';
import { ProgrammematiereController } from './programmematiere.controller';

describe('ProgrammematiereController', () => {
  let controller: ProgrammematiereController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgrammematiereController],
    }).compile();

    controller = module.get<ProgrammematiereController>(ProgrammematiereController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
