import { Injectable }   from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './admin.entity';
import { Repository } from 'typeorm';
import { CreateAdminDto } from 'src/dto/create-admin.dto';

@Injectable()
export class AdminService {
    constructor(@InjectRepository(Admin) private readonly adminRepo: Repository<Admin>){}

    async create(adminDto: CreateAdminDto){
        try {
            const admin = this.adminRepo.create(adminDto);
            return await this.adminRepo.save(admin) ;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

     findMany(){
        try {
            return this.adminRepo.find();
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async update(idAmin: number, adminDto: CreateAdminDto){
        try {
            const admin = await this.adminRepo.findOne({where: {idAmin}}) ;
            Object.assign(admin, adminDto);
            return await this.adminRepo.save(admin);
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }

    }

    async delete(idAmin:number){
        try {
            const admin = await this.adminRepo.findOne({where: {idAmin}}) ;
            return await this.adminRepo.remove(admin);
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }

    async info(idAmin:number){
        try {
            const admin = await this.adminRepo.findOne({where: {idAmin}}) ;
            return admin;
        } catch (error) {
            console.log(error)
            return { error: `erreur ${error}` };
        }
    }
    
}

// try {
    
// } catch (error) {
//     console.log(error)
//     return { error: `erreur ${error}` };
// }
