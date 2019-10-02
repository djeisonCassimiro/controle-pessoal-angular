import { InMemoryDbService} from "angular-in-memory-web-api";
import { Categoria } from './pages/categorias/compartilhado/categoria.model';

export class InMemoryDatabase implements InMemoryDbService {

    createDb(){
        const categorias: Categoria[]= [
            {id: 1, descricao: "Moradia", detalhes: 'Pagamento de contas da casa'},
            {id: 2, descricao: "Saude", detalhes: 'Plano de saúde e remédios'},
            {id: 3, descricao: "Lazer", detalhes: 'Cinema, parques, praia, etc'},
            {id: 4, descricao: "Salario", detalhes: 'Recebimento de Salário'},
            {id: 5, descricao: "Ferias", detalhes: 'Trabalhos como freelancer'}
        ];
        return {categorias};
    }
}