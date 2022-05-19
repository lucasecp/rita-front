import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'

import { ErrorState } from '../../'

import { Container, TextGroup } from './styles'

interface TermsProps {
  setTerms: React.Dispatch<React.SetStateAction<boolean>>
  setErrors: React.Dispatch<React.SetStateAction<ErrorState>>
}

export const Terms: React.FC<TermsProps> = ({ setTerms, setErrors }) => {
  const { closeModal } = useModal()

  const onReadAndAcceptTerms = () => {
    setTerms(true)
    setErrors((errors) => {
      return { ...errors, terms: '' }
    })
    closeModal()
  }

  return (
    <Container>
      <h2>Termos de uso - PACIENTE</h2>
      <TextGroup>
        <p>
          A Plataforma RITA (“Plataforma”) é disponibilizada, através de site e
          aplicativo e todo o seu conteúdo foi desenvolvida e é operada e de
          titularidade da RITA ATIVIDADES DE TECNOLOGIA E SAUDE LTDA, NÚMERO DE
          INSCRIÇÃO CNPJ 40.181.094/0001-67, Endereço TR SIA TRECHO 03,
          COMPLEMENTO LOTE 625 635 695 LOJA 16 PARTE TERREO, CEP 71.200-030,
          BAIRRO/DISTRITO ZONA INDUSTRIAL (GUARA), BRASILIA - DF. Todos os
          direitos reservados. (“RITA SAÚDE”).
          <br /> <br /> A Plataforma é oferecida na modalidade Software como um
          Serviço (SaaS) e é acessada por meio de conexão pela internet. Estes
          Termos de Uso (“Termos”) descrevem os termos e as condições aplicáveis
          ao acesso e ao uso da Plataforma por você. Seus direitos e garantias
          relativos à privacidade de dados estão endereçados em nossa Política
          de Privacidade Pensando nisso, fizemos uma explicação dos Termos para
          você entender tudo antes da gente começar, preciso que você leia tudo
          antes assinar, caso concorde é claro. Estas condições gerais do Termo
          de licença de uso dos Aplicativos da RITA devem ser lidas com atenção
          antes de sua utilização.
        </p>
        <p>
          <strong>1. O que é o aplicativo?</strong> <br /> Rita é um aplicativo
          de celular que aproxima você de consultas a profissionais de saúde,
          farmácias e exames, com tudo isso em lugar só fica mais fácil para
          você chegar onde você quer com a sua saúde; isso é o que nós chamamos
          de uma plataforma de acesso a saúde. As consultas na nossa plataforma
          pode ser presenciais, daí você pode agendar pelo aplicativo ou por
          tele consulta e aí você conversa com o médico, enfermeiro pelo celular
          ou pelo computador. Suas informações de atendimento vão ficar conosco,
          se você autorizar é claro, de maneira que onde você for atendido basta
          pedir para consultar na plataforma que o atendimento, as receitas e os
          pedidos e resultados de exames vão estar todos lá. Com tudo em um
          lugar só fica mais fácil cuidar da sua saúde. E aqui você pode
          escolher entre navegar sozinho, ou seja, acompanhar suas consultas,
          medicamentos e exames pelo aplicativo apenas, ou então ter um apoio do
          nosso time de cuidado, um enfermeiro e um médico de família para te
          ajudar e acompanhar no dia a dia da saúde.
        </p>
        <p>
          <strong>
            2. POR ONDE EU POSSO ACESSAR MINHA CONTA NA PLATAFORMA?
          </strong>
          <br /> O acesso a plataforma pode ser feito através do computador,
          tablet ou telefone celular. Você vai precisar ter instalado na máquina
          um programa navegador e conexão de internet. É muito importante
          lembrar que você vai falar de dados sobre sua saúde, o que na
          legislação brasileira é considerada informação sensível, ou seja dados
          importantes, do seu interesse e que tratam da sua privacidade, por
          isso é muito importante saber que a conexão, bem como a manutenção de
          ambiente dos equipamentos seguros, com uso de ferramentas disponíveis
          como antivírus atualizados, são extremamente importantes e são de sua
          inteira responsabilidade.
        </p>
        <p>
          <strong>3. INFORMAÇÕES GERAIS E LICENÇA DE USO </strong>
          <br /> Primeiro passo para entrar na plataforma é o CADASTRO. Para
          fazer o seu cadastro e começar a utilizar os serviços você precisa ter
          mais de 18 (dezoito) anos de idade. Se você é mais jovem, vamos
          precisar que outra pessoa com essa idade, para te ajudar com o
          cadastro como responsável legal. Ainda nessa etapa vamos precisar que
          durante o cadastro você tire uma foto do seu CPF, e-mail e telefone
          celular. No momento do cadastro. Seu login será feito pelo número do
          seu CPF, você vai precisar também de uma senha, que será feita por
          você no momento do cadastro. É muito importante lembrar dos cuidados
          que você precisa ter no momento do acesso à Plataforma. A
          confidencialidade dos dados de login e senha criados por você, no
          momento do seu cadastro na Plataforma, são de sua responsabilidade.
          Você não pode transmitir a terceiros o seu login e senha, a
          responsabilidade sobre as atividades que ocorram na sua conta é única
          e exclusivamente sua. Para isso precisamos deixar registrado aqui a
          sua concordância em notificar a Plataforma imediatamente a suspeita de
          qualquer utilização não autorizada de seu login, senha ou conta. A
          Plataforma não será responsável por quaisquer perdas e danos
          resultantes de acessos não autorizados ou uso de sua conta, inclusive
          em caso de descuido ou negligência na confidencialidade do login e
          senha. Em caso de perda, extravio ou suspeita de utilização indevida
          de sua conta ou Informações de Acesso, a Plataforma deverá ser
          imediatamente comunicada para que sejam tomadas as medidas cabíveis, a
          fim de evitar mais problemas. Se porventura for identificada a
          duplicidade de contas, a Plataforma poderá inabilitar de forma
          definitiva todos os cadastros duplicados, independentemente de ter
          havido ou não uma notificação prévia. Então, ao usar a Plataforma,
          registramos aqui que você declara e garante que: (a) todas as
          informações enviadas para cadastro são verdadeiras, completas e
          exatas; (b) manterá as informações fornecidas para cadastro
          atualizadas; (c) ao usar a Plataforma, você não viola qualquer
          contrato, acordo, lei ou regulamento aplicável. Se qualquer informação
          fornecida por você for falsa, incorreta, desatualizada ou incompleta,
          ou caso a Plataforma tenha razões suficientes para suspeitar que tais
          informações do cadastro como sendo falsas, incorretas, desatualizadas
          ou incompletas, a Plataforma reserva-se o direito de suspender ou
          cancelar imediatamente, independente de notificação, a sua conta e
          recusar toda e qualquer utilização, presente ou futura dos Serviços,
          ou parte deles.
        </p>
        <p>
          <strong>
            {' '}
            4. PARA ACESSAR A PLATAFORMA VOCÊ PRECISA SABER DISSO:
          </strong>{' '}
          <br /> Temos uma equipe trabalhando incansavelmente para que a
          Plataforma esteja sempre disponível, sem erros nem interrupções. Não
          podemos garantir, no entanto, a operação da Plataforma em tempo
          integral, pois ela depende de serviços prestados por terceiros e
          disponibilidade de informações em sites de terceiros, como empresas de
          telecomunicações e provedores de acesso à internet. Situações como
          caso de ataques cibernéticos e outros que possam trazer algum prejuízo
          as funcionalidades da Plataforma ou até mesmo colocar em risco as
          informações dos usuários, são razões importantes para imediatamente
          suspenderemos o seu uso e acesso, bem como em outras situações de caso
          fortuito ou força maior. Sua privacidade é algo único e o respeito a
          isso é nossa prioridade inegociável. A divulgação de seus dados, só
          será feita nos termos estritamente permitidos pela Lei nº 13.709, de
          14 de agosto de 2018, ou de seu substituto. Precisamos de alertar que
          a transmissão de informações pela internet pode sofrer com questões
          alheias ao nosso controle, como fatores de operação e rede, o que
          impossibilita que a RITA SAÚDE ofereça a garantia completa aos dados
          dos dados transmitidos pelo usuário a plataforma. A transmissão é de
          exclusiva responsabilidade dos usuários, que assim concordarem com
          esses termos e reconhecerem e assumirem expressamente tal
          responsabilidade.
        </p>
        <p>
          <strong>
            {' '}
            5. COMO É FEITO O ATENDIMENTO POR PROFISSIONAIS DE SAÚDE NA
            PLATAFORMA?
          </strong>
          <br /> PARA ACESSO AO ATENDIMENTO POR PROFISSIONAL DE SAÚDE VIA
          TELEMEDICINA NA MODALIDADE DE TELECONSULTA VOCÊ DEVERÁ (i) SOLICITAR A
          CONSULTA A UM PROFISSIONAL DE SAÚDE NA PLATAFORMA; (ii) VERIFICAÇÃO DO
          TERMO DE CONSENTIMENTO; (iii) VERIFICAR SE SEUS DADOS CADASTRAIS ESTÃO
          ATUALIZADOS (iv) PARA A MODALIDADE DE ATENDIMENTO NÃO PROGRAMADO VOCÊ
          DEVE SELECIONAR A OPÇÃO DESEJO SER ATENDIDO AGORA (v) NOS CASOS EM QUE
          FOR REALIZADO O ATENDIMENTO NA MODALIDADE PROGRAMADO, SERÁ ENVIADO COM
          ANTECEDÊNCIA UM LINK PARA A CONEXÃO NA DATA E HORA DA CONSULTA. Os
          atendimentos agendados com profissionais de saúde através da função
          “CONSULTAS COM ESPECIALISTAS” serão feitas respeitando as seguintes
          regras (i) no ato do agendamento pelo aplicativo será necessário a
          suficiência de créditos na conta do usuário no aplicativo (ii) após a
          confirmação do agendamento pela clínica e/ou profissional o crédito
          correspondente ao valor do atendimento será bloqueado até o dia do
          atendimento (iii) no ato do atendimento o usuário deverá realizar na
          plataforma a verificação de sua presença na unidade em que agendou o
          atendimento (iv) após a verificação de entrada do paciente, e uma vez
          realizado o atendimento será feito pelo profissional de a saúde ou seu
          agente administrativo habilitado, a verificação de saída (v) uma fez
          realizada a verificação de entrada e saída do atendimento o valor
          correspondente a consulta será transferido ao profissional de saúde
          prestador do serviço (vi) em caso de não verificação da entrada o
          profissional pode recusar o atendimento e encaminhar o usuário de
          maneira seguir e responsável a outro profissional (vii) caso não
          ocorra a verificação de saída o valor será desbloqueado da conta do
          usuário 24 horas após o evento agendado que deu origem ao bloqueio.
        </p>
        <p>
          <strong>
            {' '}
            6. COMO FUNCIONA A CONCESSÃO DE CRÉDITOS APÓS OS ATENDIMENTOS?
          </strong>
          <br /> Assim que implantado o serviço de banco como serviço na
          plataforma (Baas), para cada atendimento realizado em uma das unidades
          participantes da plataforma será realizada a disponibilização de
          créditos em caráter de bonificação, para utilização na compra de
          serviços dentro da própria plataforma, exclusivamente. Ficam excluídos
          dessa regra os atendimentos feitos pela equipe e do Centro de Saúde
          Digital. Os créditos não utilizados em até seis meses após data de sua
          concessão expiram automaticamente.
        </p>
        <p>
          <strong> 7. SANÇÕES e PROIBIÇÕES </strong>
          <br /> Para que tenhamos uma parceria duradoura e produtiva é
          importante você saber o que consideramos proibido no ambiente da
          plataforma. (a) violar qualquer legislação ou regulação municipal,
          estadual, nacional ou internacional aplicável ao Brasil, ou ainda,
          que, por qualquer razão legal, deva ser no Brasil (b) praticar atos
          contrários à moral e aos bons costumes; (c) assumir a personalidade ou
          identidade de outra pessoa, física ou jurídica; (d) carregar,
          transmitir, divulgar, exibir, enviar, ou de qualquer outra forma
          tornar disponível qualquer conteúdo que seja ilegal, incluindo, mas
          sem se limitar a, conteúdo que seja ofensivo à honra e à privacidade
          de terceiros, pornográfico, obsceno, difamatório ou calunioso, vulgar,
          preconceituoso, racista, discriminatório, que faça apologia ao crime
          ou de qualquer forma censurável, ou que possa gerar qualquer
          responsabilidade civil ou criminal de acordo com a Lei; (e) carregar,
          transmitir, divulgar, exibir, enviar, ou de qualquer forma tornar
          disponível qualquer conteúdo que viole quaisquer direitos de terceiro,
          incluindo Direitos de Propriedade Intelectual (conforme definido
          abaixo); (f) carregar, transmitir, divulgar, exibir, enviar, ou de
          qualquer forma tornar disponível qualquer tipo de anúncio, propaganda
          ou material promocional não solicitado ou não autorizado pela
          Plataforma, tais como mensagens não solicitadas ou mensagens enviadas
          em massa (conhecidos como &quot;junk &quot;mail ou &quot;spam); (g)
          carregar, transmitir, divulgar, exibir, enviar, ou de qualquer forma
          tornar disponível qualquer conteúdo que contenha vírus ou qualquer
          outro código, arquivo ou programa de computador com o propósito de
          interromper, destruir ou limitar a funcionalidade de qualquer
          software, hardware ou equipamento; (i) violar direitos de sigilo e
          privacidade de terceiros; Praticar quaisquer atos que direta ou
          indiretamente, no todo ou em parte, possam causar prejuízo à
          Plataforma, a outros usuários ou a qualquer terceiro; (j) usar a
          Plataforma para além da finalidade autorizada por estes Termos. Em
          caso de uma dessas violações ser cometida a Plataforma reserva-se no
          direito unilateral de cancelar a sua conta e restringir seu acesso a
          um novo cadastro. É importante você saber também que assim como você
          poderá avaliar o profissional de saúde, ou estabelecimento que lhe
          atendeu em cada momento a sua participação também será avaliada por
          eles. Nesse caso a plataforma reserva-se o direito de aplicar sanções
          de suspensão de utilização ou restrições de uso caso seja constatado
          algum desequilíbrio nessa relação. Nós poderemos, a nosso exclusivo
          critério, cancelar qualquer conta e remover qualquer serviço ou
          conteúdo disponibilizado na Plataforma, a qualquer momento e por
          qualquer motivo, sem que isso gere a você qualquer direito de
          indenização. No entanto, você terá direito à portabilidade dos dados
          nos termos da legislação aplicável.
        </p>
        <p>
          <strong> 8. PROPRIEDADE INTELECTUAL </strong> <br />O direito de
          propriedade intelectual no Brasil prevê que todo o conteúdo disponível
          na plataforma como, gráficos, imagens, fotos, ilustrações, nome
          empresarial, marcas, logotipos, informações, código-fonte, layouts,
          look and feel, nomes de domínio, software, know-how, e outros
          materiais (desde que não postados ou fornecidos por você) são todos
          protegidos por lei e o uso deles é privativo a Plataforma, não podendo
          ser copiado, transmitido, divulgado, modificado ou reproduzido sem a
          prévia licença da Plataforma, que por lei é a detentora desses
          direitos. Sendo assim a transmissão, divulgação, reprodução,
          modificação ou exploração comercial dos conteúdos da plataforma. Não
          será possível adquirir qualquer Direito de Propriedade Intelectual
          sobre os conteúdos da Plataforma. Vale lembrar que a violação do
          Direito de Propriedade Intelectual da Plataforma, implica em você
          assumir toda e qualquer responsabilidade, de caráter civil e/ou
          criminal advindos dessa violação. Precisamos de suas sugestões para
          melhorar, assim se você tiver uma ideia, sugestão ou material
          criativo, anotação, desenho, conceito, comentário, sugestão de
          técnicas, informações sobre know-how, material publicitário, de vídeo
          ou outras informações (que não os dados pessoais e dados médicos)
          (“Envios”) poderá nos encaminhar por um canal específico, diferente do
          especificamente solicitado para o cadastro do usuário na Plataforma.
          Portanto, essas sugestões encaminhadas por esse canal não caracterizam
          propriedade intelectual de quem os sugeriu, uma vez que poderão ser
          usados em projetos desenvolvidos pelos profissionais da Plataforma em
          trabalhos criativos futuramente. Os envios recebidos pela Rita Saúde
          poderão ser usufruídos e tratados como não-confidenciais e
          não-proprietários, da forma como entender. É importante esclarecer
          aqui, que você reconhece que nada lhe será devido por conta do uso ou
          divulgação de tais envios. Suas declarações, depoimentos e comentários
          AO CONCORDAR COM ESTES TERMOS, O USUÁRIO AUTORIZA TAMBÉM QUE A RITA
          SAÚDE UTILIZE, COPIE, REPRODUZA, DISPONIBILIZE, TRANSMITA,
          COMPARTILHE, TRADUZA PARA OUTROS IDIOMAS, INSIRA EM OUTROS MATERIAIS
          (INCLUINDO, MAS NÃO SE LIMITANDO, À PLATAFORMA, VÍDEOS E MATERIAIS DE
          PUBLICIDADE) PARA QUAISQUER FINS, INCLUINDO PARA FINS COMERCIAIS, DE
          PUBLICIDADE E INSTITUCIONAIS, QUAISQUER DECLARAÇÕES, DEPOIMENTOS OU
          COMENTÁRIOS, NO TODO OU EM PARTE, RELACIONADOS À PLATAFORMA E/OU AOS
          SERVIÇOS DISPONIBILIZADOS PELA PLATAFORMA OU POR TERCEIROS, SEJA EM
          FERRAMENTA ESPECÍFICA DISPONIBILIZADA PARA TAIS FINS EM NOSSA
          PLATAFORMA, OU ENVIADOS POR E-MAIL, MENSAGEM DE TEXTO, OU POSTADOS EM
          REDES SOCIAIS, TAIS COMO FACEBOOK, TWITTER, INSTAGRAM, YOUTUBE E
          OUTROS. VOCÊ COMO USUÁRIO RECONHECEM AINDA QUE NÓS PODEREMOS UTILIZAR
          QUAISQUER REFERIDAS DECLARAÇÕES, DEPOIMENTOS OU COMENTÁRIOS EM
          ASSOCIAÇÃO AO SEU NOME COMPLETO E FOTOGRAFIA DE PERFIL DE REDES
          SOCIAIS OU ENVIADAS À PLATAFORMA.
        </p>
        <p>
          <strong> 9. PRAZO</strong> <br /> Estes termos terão efeito por todo o
          tempo em que: (i) os Serviços forem disponibilizados na Plataforma e
          não forem cancelados pela RITA SAÚDE e/ou substituídos por outros
          termos de uso; (ii) enquanto você estiver acessando a Plataforma; e
          (iii) enquanto você estiver cadastrado na Plataforma. No momento em
          que você estivar cadastrado conosco, você pode solicitar a remoção de
          sua conta e encerrar a sua participação a qualquer momento,
          independentemente do motivo, através de procedimento indicado na
          Plataforma. Caso você solicite a eliminação dos dados pessoais
          constantes da Plataforma, a RITA SAÚDE terá o direito de manter os
          seus dados armazenados para fins de defesa judicial, arbitral ou
          administrativa, bem como para cumprimento de obrigações legais e
          regulatórias. Além disso, a RITA SAÚDE poderá manter os seus dados
          anonimizados para analytics e desenvolvimento de produtos, desde que
          sem a sua identificação, o que desde já está autorizado.(eu sugeri
          essa inclusão porque a LGPD diz que o paciente deve autorizar
          expressamente para qualquer tratamento dados)
        </p>
        <p>
          <strong> 10. RESPONSABILIDADE </strong> <br /> Você concorda que
          possui como solução para quaisquer problemas ou insatisfação com os
          Serviços a possibilidade de desinstalar o aplicativo e parar de usar A
          Plataforma, seus responsáveis, sócios, funcionário, agentes,
          diretores, subsidiárias, afiliadas, sucessores, cessionários,
          fornecedores ou licenciadores, na medida do permitido por lei, não
          serão responsáveis por quaisquer perdas e danos, de qualquer natureza
          (incluindo diretos, punitivos ou lucros cessantes), em quaisquer
          circunstâncias, decorrentes do uso ou da incapacidade de utilizar os
          Serviços. A Plataforma é disponibilizada a você com base nas condições
          aqui estabelecidas levando-se em consideração os parâmetros econômicos
          da Plataforma. Qualquer alteração no padrão de responsabilidade poderá
          gerar um desequilíbrio econômico nos Serviços no âmbito desta
          Plataforma. A Plataforma não terá nenhuma responsabilidade por
          qualquer perda ou dano incorrido em decorrência de quaisquer
          informações fornecidas/armazenadas por você ou por terceiros, bem como
          por qualquer perda decorrente de falha de sinal das operadoras de
          celular, falha nas conexões Wi-Fi ou fatores similares que impeçam o
          uso da Plataforma. A Plataforma também não será responsável por: (a)
          informações falsas, equivocadas/erradas ou não atualizadas fornecidas
          por você; (b) qualquer decisão tomada por você com base nas
          informações disponíveis por meio da Plataforma; (c) eventuais serviços
          e/ou produtos oferecidos por terceiros, incluindo parceiros comerciais
          da Plataforma; (d) por danos causados por qualquer conteúdo que
          contenha vírus ou qualquer outro código, arquivo ou programa de
          computador com o propósito de interromper, destruir ou limitar a
          funcionalidade de qualquer software, hardware ou equipamento; (e)
          fraudes, simulações e falsidade ideológica provocada por você seja
          durante o processo de cadastramento ou durante o uso da Plataforma.
          (f) por consequências relacionadas direta ou indiretamente com ação ou
          inatividade tomada com base em informações do site e/ou uso da
          Plataforma.
        </p>
        <p>
          <strong> 11. GARANTIA A Plataforma </strong> <br /> Seus licenciantes
          ou fornecedores não prestam qualquer declaração ou garantia
          relacionada a qualquer conteúdo incluído ou acessado por meio da
          Plataforma. A RITA SAUDE não terá nenhuma obrigação, tampouco será
          responsável pela exatidão, observância de direitos autorais,
          legalidade ou atualização dos materiais contidos na Plataforma. A RITA
          SAUDE, seus licenciantes e fornecedores não prestam nenhuma declaração
          ou garantia sobre a sugestões ou recomendações de serviços ou produtos
          oferecidos ou adquiridos por meio dos Serviços. VOCÊ RECONHECE E
          CONCORDA QUE A PLATAFORMA FOI DESENVOLVIDA PARA USO GERAL E NÃO FOI
          CUSTOMIZADO ÀS SUAS NECESSIDADES. PORTANTO, NA EXTENSÃO MÁXIMA
          PERMITIDA PELAS LEIS APLICÁVEIS, A PLATAFORMA É DISPONIBILIZADA A VOCÊ
          NO ESTADO EM QUE SE ENCONTRA, SEM GARANTIAS DE QUALQUER TIPO,
          EXPRESSAS OU TÁCITAS, INCLUINDO, SEM LIMITAÇÃO, GARANTIAS DE ADEQUAÇÃO
          A UMA FINALIDADE ESPECÍFICA, OU DE QUE A PLATAFORMA E/OU OS SERVIÇOS
          SERÃO USADOS ININTERRUPTAMENTE OU ESTARÃO LIVRES DE ERROS.
        </p>
        <p>
          <strong> 12. INDENIZAÇÃO </strong> <br /> Você concorda em isentar e
          indenizar, defender e manter a RITA SAÚDE e seus respectivos
          diretores, agentes, sócios e funcionários indenes de qualquer
          prejuízo, responsabilidade, ação judicial ou demanda, incluindo
          honorários advocatícios, devidos ou decorrentes do uso da Plataforma,
          de violação por você destes Termos de Uso ou da Política de
          Privacidade, de falhas em seu equipamento, e da utilização indevida
          das informações ou materiais da Plataforma.
        </p>
        <p>
          <strong> 13. DECLARAÇÕES ADICIONAIS DO USUÁRIO </strong> <br /> Você
          declara e garante que: (i) você é o legítimo proprietário das
          informações fornecidas na Plataforma; (ii) as informações prestadas
          não violam a privacidade, publicidade, os Direitos de Propriedade
          Intelectual ou outros direitos de qualquer terceiro; (iii) ao prestar
          as informações, você não viola as obrigações de confidencialidade, não
          divulgação ou contratual de qualquer terceiro; e (iv) todas as
          informações prestadas são verdadeiras, atualizadas e completas.
        </p>
        <p>
          <strong> 14. COMUNICAÇÕES </strong> <br /> Você, ao aceitar estes
          Termos, autoriza a Plataforma a comunicar-se com ele através de
          quaisquer meios eletrônicos, tais como celular, mensagem, e-mail, e,
          ainda, correspondência física. Fica ressaltado que a principal via de
          informação para você é via Plataforma.
        </p>
        <p>
          <strong> 15. COMO ATUALIZAMOS ESTES TERMOS DE USO? </strong>
          <br /> Você será comunicado de quaisquer alterações mediante a
          publicação dos Termos atualizados na Plataforma. Falamos isso, porque
          os nossos Serviços estão em constante aprimoramento e melhoramento; o
          que faz com que a qualquer momento podemos modificar estes Termos, a
          nosso exclusivo critério, para a atualizarmos de acordo com as
          melhorias que desejamos implementar. Para você não seja incomodado,
          informaremos ao Usuário em caso de alteração dos Termos e a data da
          última revisão será incluída no topo dos termos. No caso de alterações
          relevantes que necessitem do seu consentimento enquanto Usuário,
          apresentaremos os novos Termos para obtenção desse consentimento.
          Recomendamos que toda vez que você acessar a Plataforma, preste
          atenção às novas atualizações, pois o seu acesso e uso da Plataforma
          estarão imediatamente influenciados por quaisquer alterações destes
          Termos. O fato de você aceitar estes Termos ou de continuar a acessar
          a Plataforma após uma atualização significa que você concordou com as
          alterações destes Termos. SE VOCÊ NÃO CONCORDAR COM TODOS OS TERMOS
          ALTERADOS, NÃO PODERÁ CONTINUAR A UTILIZAR OU ACESSAR A PLATAFORMA.
        </p>
        <p>
          <strong> 16. LEI APLICÁVEL E JURISDIÇÃO </strong> <br /> Os presentes
          Termos de Uso serão interpretados de acordo com as leis da República
          Federativa do Brasil. Fica eleito o Foro da Comarca de Brasília,
          Distrito Federal, para dirimir qualquer divergência oriunda dos
          presentes Termos de Uso e da Política de Privacidade, com renúncia
          expressa a qualquer outro, por mais privilegiado que seja.
        </p>
        <p>
          <strong> 17. DISPOSIÇÕES GERAIS </strong> <br /> Se qualquer
          disposição destes Termos de Uso tornar-se inválida ou inexequível, tal
          disposição será anulada e as demais disposições serão mantidas. Os
          títulos são apenas para efeitos de referência e de forma alguma
          definem, limitam, determinam a interpretação ou descrevem o âmbito ou
          extensão da respectiva seção. A omissão da Plataforma com relação a
          qualquer falha sua ou de outros em cumprir com estes Termos de Uso não
          significa renúncia dos direitos da Plataforma. Pelo presente
          instrumento, você outorga à RITA SAÚDE o direito de adotar as
          providências que a RITA SAÚDE entender razoavelmente necessárias ou
          apropriadas para a execução e/ou verificação do cumprimento de
          qualquer disposição destes Termos de Uso.
        </p>
        <p>
          <strong> 18. DÚVIDAS </strong> <br /> Caso tenha qualquer dúvida em
          relação aos presentes Termos de Uso, favor entrar em contato com a
          Plataforma, por meio do e-mail ou através dos números disponíveis no
          site www.ritasaude.com.br, com horário de funcionamento: de segunda a
          sexta - 8h00 às 18h00 (funcionamos apenas em dias úteis).
        </p>
      </TextGroup>
      <ButtonPrimary onClick={onReadAndAcceptTerms}>
        Li e Aceito os termos de uso
      </ButtonPrimary>
    </Container>
  )
}
