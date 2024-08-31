import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { DisciplineService } from './discipline.service';
import { CreateDisciplineDto } from 'src/dto/create-discipline.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('discipline')
@ApiTags('discipline')
export class DisciplineController {
    constructor(private readonly displineService: DisciplineService){}

    @Post()
    @ApiOperation({ summary: 'Creer une displine' })
    @ApiResponse({ status: 200, description: 'displine créer' })
    create(@Body() dto: CreateDisciplineDto){
        return this.displineService.create(dto);
    } 

    @Get()
    @ApiOperation({ summary: 'lister les displines' })
    @ApiResponse({ status: 200, description: 'Liste des displines' })
    find(){
        return this.displineService.findMany();
    }

    @Put(':id')
    @ApiOperation({ summary: 'Mise a jour de l\'displine' })
    @ApiResponse({ status: 200, description: 'displine mis a jour' })
    update(@Param('id') id:number, @Body() dto: CreateDisciplineDto){
        return this.displineService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer une displine' })
    @ApiResponse({ status: 200, description: 'displine supprimer' })
    delete(@Param('id') id:number){
        return this.displineService.delete(id) ;
    }

    @Get('info/:id')
    @ApiOperation({ summary: 'info sur une displine' })
    @ApiResponse({ status: 200, description: 'displine info' })
    info(@Param('id') id:number){
        return this.displineService.info(id) ;
    }
}
