import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { DisciplineetudiantService } from './disciplineetudiant.service';
import { CreateDisciplineetudiantDto } from 'src/dto/create-disciplineetudiant.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateInfoDisciplineDto } from 'src/dto/create-infoDiscipline.dto';

@Controller('disciplineetudiant')
@ApiTags('disciplineetudiant')
export class DisciplineetudiantController {
    constructor(private readonly disciplineetudiantService: DisciplineetudiantService){}


    @Post()
    @ApiOperation({ summary: 'Creer un displine->ETu' })
    @ApiResponse({ status: 200, description: 'displine->ETu créer' })
    create(@Body() dto: CreateDisciplineetudiantDto){
        return this.disciplineetudiantService.create(dto);
    } 

    @Get()
    @ApiOperation({ summary: 'lister les displine->ETus' })
    @ApiResponse({ status: 200, description: 'Liste des displine->ETus' })
    find(){
        return this.disciplineetudiantService.findMany();
    }

    @Put(':id')
    @ApiOperation({ summary: 'Mise a jour de l\'displine->ETu' })
    @ApiResponse({ status: 200, description: 'displine->ETu mis a jour' })
    update(@Param('id') id:number, @Body() dto: CreateDisciplineetudiantDto){
        return this.disciplineetudiantService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer un displine->ETu' })
    @ApiResponse({ status: 200, description: 'displine->ETu supprimer' })
    delete(@Param('id') id:number){
        return this.disciplineetudiantService.delete(id) ;
    }

    @Get('info/:id')
    @ApiOperation({ summary: 'info sur un displine->ETu' })
    @ApiResponse({ status: 200, description: 'displine->ETu info' })
    info(@Param('id') id:number){
        return this.disciplineetudiantService.info(id) ;
    }

    @Get('infoDispline/')
    @ApiOperation({ summary: 'info sur un displine->ETu' })
    @ApiResponse({ status: 200, description: 'displine->ETu info' })
    infoDispline(){
        return this.disciplineetudiantService.infoDispline() ;
    }

    @Post('infoDispline/')
    @ApiOperation({ summary: 'info sur un displine->ETu' })
    @ApiResponse({ status: 200, description: 'displine->ETu info' })
    postInfoDispline(@Body() dto: CreateInfoDisciplineDto){
        return this.disciplineetudiantService.postInfoDispline(dto) ;
    }
}
