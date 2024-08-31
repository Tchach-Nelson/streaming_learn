import { Test, TestingModule } from '@nestjs/testing';
import { DisciplineetudiantService } from './disciplineetudiant.service';

describe('DisciplineetudiantService', () => {
  let service: DisciplineetudiantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DisciplineetudiantService],
    }).compile();

    service = module.get<DisciplineetudiantService>(DisciplineetudiantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
