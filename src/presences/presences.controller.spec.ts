import { Test, TestingModule } from '@nestjs/testing';
import { PresencesController } from './presences.controller';

describe('Presences Controller', () => {
  let controller: PresencesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PresencesController],
    }).compile();

    controller = module.get<PresencesController>(PresencesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
