import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { CoursService } from './cours.service';
import { CreateCoursDto } from 'src/dto/create-cours.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('cours')
@ApiTags('cours')
export class CoursController {
    constructor(private readonly coursService: CoursService){}

    @Post()
    @ApiOperation({ summary: 'Creer un cours' })
    @ApiResponse({ status: 200, description: 'cours créer' })
    create(@Body() dto: CreateCoursDto){
        return this.coursService.create(dto);
    } 

    @Get()
    @ApiOperation({ summary: 'lister les courss' })
    @ApiResponse({ status: 200, description: 'Liste des courss' })
    find(){
        return this.coursService.findMany();
    }

    @Put(':id')
    @ApiOperation({ summary: 'Mise a jour un cours' })
    @ApiResponse({ status: 200, description: 'cours mis a jour' })
    update(@Param('id') id:number, @Body() dto: CreateCoursDto){
        return this.coursService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer un cours' })
    @ApiResponse({ status: 200, description: 'cours supprimer' })
    delete(@Param('id') id:number){
        return this.coursService.delete(id) ;
    }

    @Get('infoClasse/:id')
    @ApiOperation({ summary: 'info sur un cours' })
    @ApiResponse({ status: 200, description: 'cours info' })
    infoClasse(@Param('id') id:number){
        return this.coursService.infoClasse(id) ;
    }

    @Get('presence/:id/:idClasse')
    @ApiOperation({ summary: 'Presence au cours' })
    @ApiResponse({ status: 200, description: 'Statiques' })
    presence(@Param('id') id:number,@Param('idClasse') idClasse:number){
        return this.coursService.presence(id,idClasse) ;
    }

    @Get('participation/:id/:idClasse')
    @ApiOperation({ summary: 'Presence au cours' })
    @ApiResponse({ status: 200, description: 'Statiques' })
    participation(@Param('id') id:number,@Param('idClasse') idClasse:number){
        return this.coursService.participation(id,idClasse) ;
    }

    @Get('startCours/:id')
    @ApiOperation({ summary: 'Presence au cours' })
    @ApiResponse({ status: 200, description: 'Statiques' })
    startCours(@Param('id') idNom:string){
        return this.coursService.startCours(idNom) ;
    }

    @Get('connectCours/:id')
    @ApiOperation({ summary: 'Presence au cours' })
    @ApiResponse({ status: 200, description: 'Statiques' })
    connectCours(@Param('id') idClasse:number){
        return this.coursService.connectCours(idClasse) ;
    }

    // @Get('infoClasse/:id')
    // @ApiOperation({ summary: 'info sur un cours' })
    // @ApiResponse({ status: 200, description: 'cours info' })
    // infoClasse(@Param('id') id:number){
    //     return this.coursService.info(id) ;
    // }

}
