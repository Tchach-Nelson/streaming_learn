import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { MatiereService } from './matiere.service';
import { CreateMatiereDto } from 'src/dto/create-matiere.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('matiere')
@ApiTags('matiere')
export class MatiereController {
    constructor(private readonly matiereService: MatiereService){}

    @Post()
    @ApiOperation({ summary: 'Creer un matiere' })
    @ApiResponse({ status: 200, description: 'matiere créer' })
    create(@Body() dto: CreateMatiereDto){
        return this.matiereService.create(dto);
    } 

    @Get()
    @ApiOperation({ summary: 'lister les matieres' })
    @ApiResponse({ status: 200, description: 'Liste des matieres' })
    find(){
        return this.matiereService.findMany();
    }

    @Put(':id')
    @ApiOperation({ summary: 'Mise a jour de l\'matiere' })
    @ApiResponse({ status: 200, description: 'matiere mis a jour' })
    update(@Param('id') id:number, @Body() dto: CreateMatiereDto){
        return this.matiereService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer un matiere' })
    @ApiResponse({ status: 200, description: 'matiere supprimer' })
    delete(@Param('id') id:number){
        return this.matiereService.delete(id) ;
    }

    @Get('info/:id')
    @ApiOperation({ summary: 'info sur un matiere' })
    @ApiResponse({ status: 200, description: 'matiere info' })
    info(@Param('id') id:number){
        return this.matiereService.info(id) ;
    }
}
