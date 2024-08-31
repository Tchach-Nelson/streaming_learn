import { Test, TestingModule } from '@nestjs/testing';
import { DisciplineetudiantController } from './disciplineetudiant.controller';

describe('DisciplineetudiantController', () => {
  let controller: DisciplineetudiantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DisciplineetudiantController],
    }).compile();

    controller = module.get<DisciplineetudiantController>(DisciplineetudiantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
