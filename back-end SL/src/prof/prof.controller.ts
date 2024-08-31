import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProfService } from './prof.service';
import { CreateAdminDto } from 'src/dto/create-admin.dto';
import { CreateProfDto } from 'src/dto/create-prof.dto';
import { CreateAllProfDto } from 'src/dto/create-allProf.dto';


@Controller('prof')
@ApiTags('prof')
export class ProfController {
    constructor(private readonly profService: ProfService){}

    @Post()
    @ApiOperation({ summary: 'Creer un prof' })
    @ApiResponse({ status: 200, description: 'Prof créer' })
    create(@Body() dto: CreateAdminDto){
        return this.profService.create(dto);
    } 

    @Get()
    @ApiOperation({ summary: 'lister les prof' })
    @ApiResponse({ status: 200, description: 'Liste des prof' })
    find(){
        return this.profService.findMany();
    }

    @Put(':id')
    @ApiOperation({ summary: 'Mise a jour de l\'utilisateur' })
    @ApiResponse({ status: 200, description: 'Utilisateur mis a jour' })
    update(@Param('id') id:number, @Body() dto: CreateAdminDto){
        return this.profService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer un utilisateur' })
    @ApiResponse({ status: 200, description: 'Utilisateur supprimer' })
    delete(@Param('id') id:number){
        return this.profService.delete(id) ;
    }

    @Get('/allInfo/')
    @ApiOperation({ summary: 'lister allInfo prof' })
    @ApiResponse({ status: 200, description: 'Liste allInfo prof' })
    allInfo(){
        return this.profService.profAllInfo();
    }

    @Post('/allInfo/')
    @ApiOperation({ summary: 'lister allInfo prof' })
    @ApiResponse({ status: 200, description: 'Liste allInfo prof' })
    postAllInfo(@Body() dto: CreateAllProfDto){
        return this.profService.postprofAllInfo(dto);
    }

    @Delete('/allInfo/:id')
    @ApiOperation({ summary: 'lister allInfo prof' })
    @ApiResponse({ status: 200, description: 'Liste allInfo prof' })
    deleteAllInfo(@Param('id') id:number ){
        return this.profService.deleteAllInfo(id);
    }

    @Put('/allInfo/:id')
    @ApiOperation({ summary: 'lister allInfo prof' })
    @ApiResponse({ status: 200, description: 'Liste allInfo prof' })
    updateAllInfo(@Param('id') id:number, @Body() dto: CreateAllProfDto ){
        return this.profService.updateAllInfo(id, dto);
    }

    //     {
    //     "idProf": 0,
    //     "nom": "azer max 15",
    //     "date": "2024-07-15",
    //     "email": "maxazer184@gmail.com",
    //     "sexe": "masculin",
    //     "specialite": "langue",
    //     "telephone": 654231990,
    //     "poste": "enseignant",
    //     "salaire": 200000
    //   }

}
