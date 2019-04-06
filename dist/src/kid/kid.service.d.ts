import { Repository } from 'typeorm';
import { Kid } from 'src/shared/models/kid.entity';
export declare class KidService {
    private readonly kidRepository;
    constructor(kidRepository: Repository<Kid>);
    findAll(): Promise<Kid[]>;
    createKid(): Promise<Kid>;
}
