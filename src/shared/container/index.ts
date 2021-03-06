import { container } from "tsyringe";
import { UserRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/infra/typeorm/repositories/SpecificationRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationRepository"
import { ICarsRepository } from "../../modules/cars/repositories/ICarsRepository";
import { CarsRepository } from "../../modules/cars/infra/typeorm/repositories/CarsRepository";

// Singleton ->  Este padrão garante a existência de apenas uma instância de uma classe, mantendo um ponto global de acesso ao seu objeto.


// ICategoriesRepository

// Todo vez que a gente tiver uma implementação do tipo ICategoriesRepository, onde eu tiver uma injeção apontando pro "CategoriesRepository", eu quero que chame a classe CategoriesRepository

// O que está dentro dos < > é um type, por que como podemos ver, CategoriesRepository é do type de ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
  "UserRepository",
  UserRepository
)

container.registerSingleton<ICarsRepository>(
  "CarsRepository",
  CarsRepository
)