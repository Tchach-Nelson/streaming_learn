import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from 'src/dto/create-message.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Message } from './message.entity';
import { CreateAnnonceInfoDto } from 'src/dto/create-annonceInfo.dto';

@Controller('message')
@ApiTags('Message')
export class MessageController {
    constructor(private readonly messageService: MessageService){}

    @Post()
    @ApiOperation({ summary: 'Creer un Message' })
    @ApiResponse({ status: 200, description: 'Message créer' })
    create(@Body() dto: CreateMessageDto){
        return this.messageService.create(dto);
    } 

    @Get()
    @ApiOperation({ summary: 'lister les message' })
    @ApiResponse({ status: 200, description: 'Liste des message' })
    find(){
        return this.messageService.findMany();
    }

    @Put(':id')
    @ApiOperation({ summary: 'Mise a jour du message' })
    @ApiResponse({ status: 200, description: 'Utilisateur mis a jour' })
    update(@Param('id') id:number, @Body() dto: CreateMessageDto){
        return this.messageService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer un message' })
    @ApiResponse({ status: 200, description: 'Utilisateur supprimer' })
    delete(@Param('id') id:number){
        return this.messageService.delete(id) ;
    }

    @Get('/annonce/:idClasse')
    @ApiOperation({ summary: 'Lister les annonces' })
    @ApiResponse({ status: 200, description: 'Annonce Listé' })
    annonce(@Param('idClasse') idClasse:number){
        console.log(idClasse)
        return this.messageService.annonce(idClasse) ;
    }

    @Get('/annonceInfo')
    @ApiOperation({ summary: 'Lister les annonces' })
    @ApiResponse({ status: 200, description: 'Annonce Listé' })
    annonceInfo(){
        return this.messageService.annonceInfo() ;
    }

    @Post('/annonceInfo')
    @ApiOperation({ summary: 'Lister les annonces' })
    @ApiResponse({ status: 200, description: 'Annonce Listé' })
    postAnnonceInfo(@Body() dto: CreateAnnonceInfoDto){
        return this.messageService.postAnnonceInfo(dto) ;
    }

    @Delete('/annonceInfo/:id')
    @ApiOperation({ summary: 'Lister les annonces' })
    @ApiResponse({ status: 200, description: 'Annonce Listé' })
    deleteAnnonceInfo(@Param('id') id:number){
        return this.messageService.delete(id) ;
    }

    @Put('/annonceInfo/:id')
    @ApiOperation({ summary: 'Lister les annonces' })
    @ApiResponse({ status: 200, description: 'Annonce Listé' })
    updateAnnonceInfo(@Param('id') id:number,@Body() dto: CreateAnnonceInfoDto){
        return this.messageService.updateAnnonceInfo(id, dto) ;
    }
}
