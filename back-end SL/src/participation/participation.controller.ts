import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { ParticipationService } from './participation.service';
import { CreateParticipationDto } from 'src/dto/create-participation.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


@Controller('participation')
@ApiTags('participation')
export class ParticipationController {
    constructor(private readonly participationService: ParticipationService){}

    @Post()
    @ApiOperation({ summary: 'Creer un participation' })
    @ApiResponse({ status: 200, description: 'participation créer' })
    create(@Body() dto: CreateParticipationDto){
        return this.participationService.create(dto);
    } 

    @Get()
    @ApiOperation({ summary: 'lister les participations' })
    @ApiResponse({ status: 200, description: 'Liste des participations' })
    find(){
        return this.participationService.findMany();
    }

    @Put(':id')
    @ApiOperation({ summary: 'Mise a jour de l\'participation' })
    @ApiResponse({ status: 200, description: 'participation mis a jour' })
    update(@Param('id') id:number, @Body() dto: CreateParticipationDto){
        return this.participationService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer un participation' })
    @ApiResponse({ status: 200, description: 'participation supprimer' })
    delete(@Param('id') id:number){
        return this.participationService.delete(id) ;
    }

    @Get('info/:id')
    @ApiOperation({ summary: 'info sur un participation' })
    @ApiResponse({ status: 200, description: 'participation info' })
    info(@Param('id') id:number){
        return this.participationService.info(id) ;
    }

}
