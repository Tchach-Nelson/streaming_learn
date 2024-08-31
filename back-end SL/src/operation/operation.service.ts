import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Operation } from './operation.entity';
import { Connection, Repository } from 'typeorm';
import { CreateOperationDto } from 'src/dto/create-operation.dto';
import { Scolarite } from 'src/scolarite/scolarite.entity';

@Injectable()
export class OperationService {
    constructor(
        @InjectRepository(Operation) private readonly operationRepo: Repository<Operation>,
         @InjectRepository(Scolarite) private readonly scolariteRepository: Repository<Scolarite>,
        private connection: Connection
    ){}

    async create(operationDto: CreateOperationDto){
        try {
            const operation = this.operationRepo.create(operationDto);
             await this.operationRepo.save(operation) ;

            //calculer du reste
            this.resteCalcule(operation.idScolarite)
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }



    async findMany(){
        try {
            // return this.operationRepo.find();
            const query = ` 
            SELECT o.idOp, o.datePaiement, o.type, o.montant, u.nom as idScolarite
            from operation o
            INNER JOIN etudiant e on e.idScolarite = o.idScolarite
            INNER JOIN utilisateur u on u.idUser = e.idUser ; `;    

            const infoAll = await this.connection.query(query);

            return infoAll;

        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async update(idOp: number, operationDto: CreateOperationDto){
        try {
            const operation = await this.operationRepo.findOne({where: {idOp}}) ;
            Object.assign(operation, operationDto);
            await this.operationRepo.save(operation);

            //calculer du reste
            this.resteCalcule(operation.idScolarite)
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }

    }

    async delete(idOp:number){
        try {
            const operation = await this.operationRepo.findOne({where: {idOp}}) ;
            await this.operationRepo.remove(operation);

            //calculer du reste
            this.resteCalcule(operation.idScolarite)
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async info(idOp:number){
        try {
            const operation = await this.operationRepo.findOne({where: {idOp}}) ;
            return operation;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async infoScolarite(idScolarite:number){
        try {
            const operation = await this.operationRepo.find({where: {idScolarite}}) ;
            return operation;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async resteCalcule(idScolarite: number): Promise<void> {
        await this.scolariteRepository.query(`
        CREATE TEMPORARY TABLE TempSums AS
        SELECT 
            (SELECT COALESCE(SUM(s.montant), 0) FROM scolarite s WHERE s.idScolarite = ?) AS total_scolarite,
            (SELECT COALESCE(SUM(o.montant), 0) FROM operation o WHERE o.idScolarite = ?) AS total_operation;
        `, [idScolarite, idScolarite]);

        await this.scolariteRepository.query(`
        UPDATE scolarite
        JOIN TempSums ON 1=1
        SET scolarite.reste = TempSums.total_scolarite - TempSums.total_operation
        WHERE scolarite.idScolarite = ?;
        `, [idScolarite]);

        await this.scolariteRepository.query(`
        DROP TEMPORARY TABLE TempSums;
        `);
    }
}
