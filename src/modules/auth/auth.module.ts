import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { CompanyModule } from "../company/company.module";
import { PersonModule } from "../person/person.module";
import { RolModule } from "../rol/rol.module";
import { UserCompanyModule } from "../user-company/user-company.module";
import { UserRolModule } from "../user-rol/user-rol.module";
import { UserModule } from "../user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>("JWT_SECRET")
        };
      }
    }),
    UserModule,
    UserRolModule,
    PersonModule,
    RolModule,
    UserCompanyModule,
    CompanyModule
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
