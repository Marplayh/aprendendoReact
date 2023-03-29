import { Rating } from "@mui/material";
import styled from "styled-components";
import IProfissional from "../../../types/IProfissional";

const ContainerEstilizado = styled.div`
   flex: 40%;
   max-width: 100%;
   background-color: #fff;
   padding: 1em;
   box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
   border-radius: 8px;
   color: var(--cinza);
   margin: 1em 2em 1em;
`

const NomeEstilizado = styled.p`
 font-family: 'Public Sans';
 font-style: normal;
 font-weight: 700;
 font-size: 16px;
 line-height: 19px;
 color: #6B6E71;
 margin: .5em 0;
`
const EspecialidadeEstilizada = styled.p`
font-family: 'Public Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #6B6E71;
margin: .5em 0;
`

const ImagemEstilizada = styled.img`
width: 64px;
height: 64px;
border: 2px solid #339CFF;
border-radius: 100%;
object-fit: cover;
margin-right: 1em;
`
const ListaEstilizada = styled.ul`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0;
`
const CelulaEstilizada = styled.li`
   list-style-type: none;
`
const ItemInformacoesEstilizado = styled(CelulaEstilizada)`
    flex-grow: 1;
`


function Card({profissional} : { profissional: IProfissional }){
    return(
        <ContainerEstilizado>
          <ListaEstilizada>
            <CelulaEstilizada>
                <ImagemEstilizada src={profissional.imagem} alt={`Foto de Perfil do ${profissional.nome}`}></ImagemEstilizada>
            </CelulaEstilizada>
            <ItemInformacoesEstilizado>
                <NomeEstilizado>{profissional.nome}</NomeEstilizado>
                <EspecialidadeEstilizada>{profissional.especialidade}</EspecialidadeEstilizada>
            </ItemInformacoesEstilizado>
            <CelulaEstilizada>
                <Rating name="simple-controlled" value={profissional.nota} readOnly={true} />
            </CelulaEstilizada>
          </ListaEstilizada>
        </ContainerEstilizado>
    )
}

export default Card;