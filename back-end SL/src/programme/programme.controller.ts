import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { ParticipationService } from 'src/participation/participation.service';
import { CreateProgrammeDto } from 'src/dto/create-programme.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProgrammeService } from './programme.service';

@Controller('programme')
@ApiTags('programme')
export class ProgrammeController {
    constructor(private readonly programmeService: ProgrammeService){}

    @Post()
    @ApiOperation({ summary: 'Creer un programme' })
    @ApiResponse({ status: 200, description: 'programme créer' })
    create(@Body() dto: CreateProgrammeDto){
        return this.programmeService.create(dto);
    } 

    @Get()
    @ApiOperation({ summary: 'lister les programmes' })
    @ApiResponse({ status: 200, description: 'Liste des programmes' })
    find(){
        return this.programmeService.findMany();
    }

    @Put(':id')
    @ApiOperation({ summary: 'Mise a jour de l\'programme' })
    @ApiResponse({ status: 200, description: 'programme mis a jour' })
    update(@Param('id') id:number, @Body() dto: CreateProgrammeDto){
        return this.programmeService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer un programme' })
    @ApiResponse({ status: 200, description: 'programme supprimer' })
    delete(@Param('id') id:number){
        return this.programmeService.delete(id) ;
    }

    @Get('info/:id')
    @ApiOperation({ summary: 'info sur un programme' })
    @ApiResponse({ status: 200, description: 'programme info' })
    info(@Param('id') id:number){
        return this.programmeService.info(id) ;
    }

    @Get('programme/:id')
    @ApiOperation({ summary: 'programme' })
    @ApiResponse({ status: 200, description: 'programme' })
    programmeClasse(@Param('id') id:number){
        return this.programmeService.programmeMatiere(id) ;
    }

    @Get('infoProgramme')
    @ApiOperation({ summary: 'programme' })
    @ApiResponse({ status: 200, description: 'programme' })
    infoProgramme(){
        return this.programmeService.infoProgramme() ;
    }
}
