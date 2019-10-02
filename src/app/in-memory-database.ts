import { InMemoryDbService} from "angular-in-memory-web-api";
import { Observable } from 'rxjs';

export class InMemoryDatabase implements InMemoryDbService {

    createDb() : Observable<any>{
        const categorias = [
            {id: 1, name: "Moradia", description: 'Pagamento de contas da casa'},
            {id: 2, name: "Saude", description: 'Plano de saúde e remédios'},
            {id: 3, name: "Lazer", description: 'Cinema, parques, praia, etc'},
            {id: 4, name: "Salario", description: 'Recebimento de Salário'},
            {id: 5, name: "Ferias", description: 'Trabalhos como freelancer'}
        ];
        return;
    }
}