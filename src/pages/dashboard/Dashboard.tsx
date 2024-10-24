import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      titulo="Página inicial"
      barraDeFerramentas={
        <FerramentasDeDetalhe
          mostrarBotaoNovo
          mostrarBotaoSalvarEFechar
          mostrarBotaoSalvarEFecharCarregando
          mostrarBotaoVoltar={false}
        />
      }
    >
      Testando {/* Esta é a área de children */}
    </LayoutBaseDePagina>
  );
};
