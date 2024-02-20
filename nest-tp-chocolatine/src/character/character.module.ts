import {Module} from "@nestjs/common";
import {CharacterController} from "./character.controller";
import {CharacterService} from "./character.service";

@Module({
    imports: [],
    controllers: [CharacterController],
    providers: [CharacterService],
    exports: [CharacterService]
})
export class CharacterModule {}