import { Test, TestingModule } from '@nestjs/testing';
import { ScolariteController } from './scolarite.controller';

describe('ScolariteController', () => {
  let controller: ScolariteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScolariteController],
    }).compile();

    controller = module.get<ScolariteController>(ScolariteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
