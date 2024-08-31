import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { ClasseService } from './classe.service';
import { CreateClasseDto } from 'src/dto/Create-classe.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('classe')
@ApiTags('classe')
export class ClasseController {
    constructor(private readonly classeService: ClasseService){}

    @Post()
    @ApiOperation({ summary: 'Creer une classe' })
    @ApiResponse({ status: 200, description: 'classe créer' })
    create(@Body() dto: CreateClasseDto){
        return this.classeService.create(dto);
    } 

    @Get()
    @ApiOperation({ summary: 'lister les classes' })
    @ApiResponse({ status: 200, description: 'Liste des classes' })
    find(){
        return this.classeService.findMany();
    }

    @Put(':id')
    @ApiOperation({ summary: 'Mise a jour de la classe' })
    @ApiResponse({ status: 200, description: 'classe mis a jour' })
    update(@Param('id') id:number, @Body() dto: CreateClasseDto){
        return this.classeService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer une classe' })
    @ApiResponse({ status: 200, description: 'classe supprimer' })
    delete(@Param('id') id:number){
        return this.classeService.delete(id) ;
    }

    @Get('info/:id')
    @ApiOperation({ summary: 'info sur un classe' })
    @ApiResponse({ status: 200, description: 'classe info' })
    info(@Param('id') id:number){
        return this.classeService.info(id) ;
    }
}
