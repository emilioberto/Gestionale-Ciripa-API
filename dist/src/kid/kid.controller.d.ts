import { KidService } from 'src/shared/services/kid.service';
import { Kid } from 'src/shared/models/kid.entity';

export declare class KidController {
    private kidService;
    constructor(kidService: KidService);
    getKidsList(): Promise<Kid[]>;
    getKid(id: number): string;
    createKid(): void;
}
