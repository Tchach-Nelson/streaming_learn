import { Test, TestingModule } from '@nestjs/testing';
import { ScolariteService } from './scolarite.service';

describe('ScolariteService', () => {
  let service: ScolariteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScolariteService],
    }).compile();

    service = module.get<ScolariteService>(ScolariteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
