import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { ScolariteService } from './scolarite.service';
import { CreateScolariteDto } from 'src/dto/create-scolarite.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


@Controller('scolarite')
@ApiTags('scolarite')
export class ScolariteController {
    constructor(private readonly scolariteService: ScolariteService){}

    @Post()
    @ApiOperation({ summary: 'Creer la scolarité' })
    @ApiResponse({ status: 200, description: 'scolarité créer' })
    create(@Body() dto: CreateScolariteDto){
        return this.scolariteService.create(dto);
    } 

    @Get()
    @ApiOperation({ summary: 'lister les scolarités' })
    @ApiResponse({ status: 200, description: 'Liste des scolarités' })
    find(){
        return this.scolariteService.findMany();
    }

    @Put(':id')
    @ApiOperation({ summary: 'Mise a jour de l\'scolarité' })
    @ApiResponse({ status: 200, description: 'scolarité mis a jour' })
    update(@Param('id') id:number, @Body() dto: CreateScolariteDto){
        return this.scolariteService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer la scolarité' })
    @ApiResponse({ status: 200, description: 'scolarité supprimer' })
    delete(@Param('id') id:number){
        return this.scolariteService.delete(id) ;
    }

    @Get('info/:id')
    @ApiOperation({ summary: 'info sur la scolarité' })
    @ApiResponse({ status: 200, description: 'scolarité info' })
    info(@Param('id') id:number){
        return this.scolariteService.info(id) ;
    }
}
