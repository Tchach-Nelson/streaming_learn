import { Test, TestingModule } from '@nestjs/testing';
import { ProgrammematiereService } from './programmematiere.service';

describe('ProgrammematiereService', () => {
  let service: ProgrammematiereService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgrammematiereService],
    }).compile();

    service = module.get<ProgrammematiereService>(ProgrammematiereService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
