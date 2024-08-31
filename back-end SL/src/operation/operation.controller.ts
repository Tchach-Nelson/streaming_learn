import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { OperationService } from './operation.service';
import { CreateOperationDto } from 'src/dto/create-operation.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('operation')
@ApiTags('operation')
export class OperationController {
    constructor(private readonly operationService: OperationService){}

    @Post()
    @ApiOperation({ summary: 'Creer un operation' })
    @ApiResponse({ status: 200, description: 'operation créer' })
    create(@Body() dto: CreateOperationDto){
        return this.operationService.create(dto);
    } 

    @Get()
    @ApiOperation({ summary: 'lister les operations' })
    @ApiResponse({ status: 200, description: 'Liste des operations' })
    find(){
        return this.operationService.findMany();
    }

    @Put(':id')
    @ApiOperation({ summary: 'Mise a jour de l\'operation' })
    @ApiResponse({ status: 200, description: 'operation mis a jour' })
    update(@Param('id') id:number, @Body() dto: CreateOperationDto){
        return this.operationService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer un operation' })
    @ApiResponse({ status: 200, description: 'operation supprimer' })
    delete(@Param('id') id:number){
        return this.operationService.delete(id) ;
    }

    @Get('info/:id')
    @ApiOperation({ summary: 'info sur un operation' })
    @ApiResponse({ status: 200, description: 'operation info' })
    info(@Param('id') id:number){
        return this.operationService.info(id) ;
    }

    @Get('infoScolarite/:id')
    @ApiOperation({ summary: 'infoScolarite sur un operation' })
    @ApiResponse({ status: 200, description: 'operation infoScolarite' })
    infoScolarite(@Param('id') id:number){
        return this.operationService.infoScolarite(id) ;
    }
}
