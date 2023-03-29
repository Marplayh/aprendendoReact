import styled from "styled-components";
import IProfissional from "../../types/IProfissional";
import Botao from "../Botao";
import Card from "./Card";

const SecaoCard = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   width: 100%;
`

function Avaliacao({profissionais}: {profissionais: IProfissional[] | null}){
    return (
        <SecaoCard>
            {profissionais?.map((profissional)=>{
                return <Card profissional={profissional} />
            })}
            <Botao>Ver mais</Botao>
        </SecaoCard> 
    )
}

export default Avaliacao;