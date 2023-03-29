import IProfissional from "./types/IProfissional";
import useFetch from "./useFetch";

const useDadosProfissionais = ()=> {
    return useFetch<IProfissional[]>({url: 'Profissionais'});
}

export default useDadosProfissionais;