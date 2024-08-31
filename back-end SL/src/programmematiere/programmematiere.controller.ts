import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { ProgrammematiereService } from './programmematiere.service';
import { CreateProgrammematiereDto } from 'src/dto/create-programmematiere.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';



@Controller('programmematiere')
@ApiTags('programmematiere')
export class ProgrammematiereController {
    constructor(private readonly programmematiereService: ProgrammematiereService){}

    @Post()
    @ApiOperation({ summary: 'Creer un programme->matiere' })
    @ApiResponse({ status: 200, description: 'programme->matiere créer' })
    create(@Body() dto: CreateProgrammematiereDto){
        return this.programmematiereService.create(dto);
    } 

    @Get()
    @ApiOperation({ summary: 'lister les programme->matieres' })
    @ApiResponse({ status: 200, description: 'Liste des programme->matieres' })
    find(){
        return this.programmematiereService.findMany();
    }

    @Put(':id')
    @ApiOperation({ summary: 'Mise a jour de l\'programme->matiere' })
    @ApiResponse({ status: 200, description: 'programme->matiere mis a jour' })
    update(@Param('id') id:number, @Body() dto: CreateProgrammematiereDto){
        return this.programmematiereService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer un programme->matiere' })
    @ApiResponse({ status: 200, description: 'programme->matiere supprimer' })
    delete(@Param('id') id:number){
        return this.programmematiereService.delete(id) ;
    }

    @Get('info/:id')
    @ApiOperation({ summary: 'info sur un programme->matiere' })
    @ApiResponse({ status: 200, description: 'programme->matiere info' })
    info(@Param('id') id:number){
        return this.programmematiereService.info(id) ;
    }
}
