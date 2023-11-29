import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title="Erro 404"
      html="<p>A pagina que você busca não foi encontrada. <a href='/'> Clique para voltar </a> </p>"
    />
  );
};
