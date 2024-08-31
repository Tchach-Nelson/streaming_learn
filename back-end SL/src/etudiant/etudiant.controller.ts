import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EtudiantService } from './etudiant.service';
import { CreateEtudiantDto } from 'src/dto/create-etudiant.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('etudiant')
@ApiTags('etudiant')
export class EtudiantController {
    constructor(private readonly etudiantService: EtudiantService) {}

    @Post()
    @ApiOperation({ summary: 'Creer un etudiant' })
    @ApiResponse({ status: 200, description: 'etudiant créer' })
    create(@Body() dto: CreateEtudiantDto) {
        return this.etudiantService.create(dto);
    }

    @Post(':id/upload')
    @UseInterceptors(
        FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, callback) => {
            const ext = extname(file.originalname);
            const fileName = `${req.params.id}-${file.originalname}`;
            console.log(file);
            callback(null, fileName);
            },
        }),
        }),
    )
    uploadFile(@Param('id') id: number, @UploadedFile() file: Express.Multer.File) {
        
        return this.etudiantService.uploadFile(id, file);
    }

    @Get()
    @ApiOperation({ summary: 'lister les etudiants' })
    @ApiResponse({ status: 200, description: 'Liste des etudiants' })
    find() {
        return this.etudiantService.findMany();
    }

    @Put(':id')
    @ApiOperation({ summary: 'Mise a jour de l\'etudiant' })
    @ApiResponse({ status: 200, description: 'etudiant mis a jour' })
    update(@Param('id') id: number, @Body() dto: CreateEtudiantDto) {
        return this.etudiantService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer un etudiant' })
    @ApiResponse({ status: 200, description: 'etudiant supprimer' })
    delete(@Param('id') id: number) {
        return this.etudiantService.delete(id);
    }

    @Get('info/:id')
    @ApiOperation({ summary: 'Données sur un etudiant' })
    @ApiResponse({ status: 200, description: 'Données affichées' })
    info(@Param('id') id: number) {
        return this.etudiantService.info(id);
    }

    @Get('etuAllInfo/')
    @ApiOperation({ summary: 'Données sur un etudiant' })
    @ApiResponse({ status: 200, description: 'Données affichées' })
    etuAllInfo() {
        return this.etudiantService.etuAllInfo();
    }
}
