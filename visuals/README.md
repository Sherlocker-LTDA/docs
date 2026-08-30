# Mapa de ilustrações da documentação Sherlocker

## Decisão de uso

Uma ilustração entra no topo quando explica pelo menos uma destas coisas:

- relação entre pessoas, empresas, ativos ou documentos;
- transformação de uma entrada em um resultado;
- sequência de estados ou acontecimentos;
- diferença entre dois modos de consulta;
- consolidação de várias fontes.

Ela não entra quando a página é predominantemente configuração, preço, erro ou referência de campos. Nesses casos, o desenho compete com a tarefa do leitor.

## Inventário

- 102 páginas editoriais presentes na navegação;
- 91 páginas de endpoint geradas a partir de OpenAPI;
- 17 páginas editoriais existentes fora da navegação;
- 24 páginas pedem uma composição principal própria;
- 58 páginas podem reutilizar uma composição ou uma variação parametrizada;
- 37 páginas editoriais não deveriam receber ilustração;
- as 91 páginas de endpoint não deveriam receber ilustração.

## Componentes-base

| Componente | Representa |
| --- | --- |
| `CompanyList` | lista composta apenas por empresas |
| `MixedEntityList` | lista de pessoas e empresas |
| `PersonNode` | pessoa dentro de um grafo |
| `CompanyNode` | empresa dentro de um grafo |
| `AssetNode` | imóvel, veículo, aeronave, patente ou outro patrimônio |
| `Document` | relatório, certidão, NFe ou dossiê consolidado |
| `Timeline` | eventos ou mudanças ao longo do tempo |
| `StatusRail` | ciclo de vida de um trabalho assíncrono |
| `Scanner` | triagem ou análise em andamento |
| `Result` | aprovação, alerta, classificação ou conclusão |
| `Connection` | vínculo entre entidades ou passagem entre etapas |
| `MaskedValue` | telefone, email, IP ou identificador protegido |
| `ChannelGrid` | redes, fontes ou canais verificados |
| `SourceLane` | comparação entre fontes ou modos de consulta |

## 24 páginas com composição principal própria

| Página | Cena | Composição recomendada |
| --- | --- | --- |
| `introduction.mdx` | Ecossistema Sherlocker | grafo de pessoas e empresas conectado a perfis cadastral, patrimonial e jurídico |
| `areas/contatos.mdx` | Perfil cadastral | `PersonNode` e `CompanyNode` ligados a telefone, email, endereço e vínculos |
| `areas/patrimonio.mdx` | Perfil patrimonial | pessoa e empresa no centro, cercadas por `AssetNode` de imóvel, rural, veículo, aeronave e patente |
| `areas/juridico.mdx` | Perfil jurídico | pessoas e empresas entrando em processos e uma timeline de movimentações |
| `cadastro/performance-acuracia.mdx` | Base x D+0 | duas `SourceLane`: base consolidada e confirmação atual, convergindo para o mesmo resultado |
| `cadastro/certidoes.mdx` | Emissão de certidão | solicitação, fontes oficiais, processamento e `Document` final |
| `casos-de-uso/background-check.mdx` | Verificação de candidato | pessoa atravessando identidade, jurídico e financeiro até um resultado consolidado |
| `casos-de-uso/enriquecimento-leads.mdx` | Enriquecimento | telefone, email ou documento inicial se expandindo para um perfil conectado |
| `casos-de-uso/segmentacao-patrimonial.mdx` | Segmentação | lista de pessoas atravessando sinais patrimoniais e chegando a faixas ordenadas |
| `casos-de-uso/due-diligence.mdx` | Due diligence | empresa e sócios entrando em várias trilhas de risco e formando um resultado único |
| `casos-de-uso/levantamento-patrimonial.mdx` | Levantamento | grafo familiar e empresarial se conectando a ativos e a um relatório consolidado |
| `casos-de-uso/localizacao-partes.mdx` | Localização | pessoa conectada a endereços, empresas, parentes, telefones e emails, com uma pista destacada |
| `casos-de-uso/graus-de-conexao.mdx` | Graus de conexão | um grafo crescendo do grau zero ao segundo grau |
| `processos/base-vs-tempo-real.mdx` | Fontes processuais | base histórica e consulta em tempo real em duas trilhas comparáveis |
| `processos/vinculo-nome-documento.mdx` | Documento x nome | vínculo exato por documento ao lado de correspondências possíveis por nome |
| `motores/introducao.mdx` | Família de motores | dois fluxos: pessoas/empresas e borderôs, ambos chegando a decisões |
| `motor-analise/introducao.mdx` | Triagem cadastral | `CompanyList → Scanner → CompanyList`, com uma empresa sendo analisada |
| `credito/introducao.mdx` | Triagem de borderô | títulos e NFe entrando numa validação cruzada e chegando a um resultado |
| `monitoramento/introducao.mdx` | Mudança detectada | `MixedEntityList + Timeline`, com o alerta aparecendo no evento e no item correspondente |
| `plataforma/introducao.mdx` | Visão da Plataforma | uma única moldura de Plataforma contendo Dossiê, Rastro, Board/Mapa e Lente, sem conexões cruzadas |
| `plataforma/dossie.mdx` | Consolidação | grafo de pessoas e empresas convergindo para um `Document` estruturado |
| `plataforma/rastro.mdx` | Presença digital | pessoa, `ChannelGrid` e `MaskedValue` de telefone, email, IP e identificadores |
| `plataforma/board-mapa.mdx` | Investigação visual | nós de pessoa e empresa organizados num canvas que alterna entre rede e mapa |
| `plataforma/lente.mdx` | Análise visual | imagem entrando e alternando entre localização estimada e comparação facial |

## 58 páginas que podem reutilizar cenas ou variações

### Integração e conceitos gerais

| Páginas | Cena reutilizada |
| --- | --- |
| `guias/integracao-api.mdx`, `guias/postman.mdx`, `guias/mcp.mdx` | cliente → Sherlocker → resposta, variando apenas o canal de entrada |
| `guias/sdk.mdx` | mesma cena de integração com o SDK como camada intermediária; arquivo fora da navegação atual |
| `padrao-de-dados.mdx` | pessoa e empresa com documentos, telefones e endereços usando nós tipados |
| `async-jobs.mdx` | requisição → `StatusRail` → resultado; arquivo fora da navegação atual |

### Perfis existentes fora da navegação

| Página | Cena reutilizada |
| --- | --- |
| `areas/comportamento.mdx` | pessoa cercada por sinais comportamentais; fora da navegação atual |
| `areas/credito.mdx` | reutiliza a triagem de borderô; fora da navegação atual |
| `areas/financeiro.mdx` | pessoa ou empresa conectada a dívidas, benefícios e registros; fora da navegação atual |
| `perfis/rh-candidato.mdx` | reutiliza o fluxo de background check; fora da navegação atual |

### Entidades: uma cena parametrizada por tipo

Todas usam `EntityNode + Connection` e mostram apenas as relações que ajudam a interpretar o objeto.

| Páginas |
| --- |
| `entidades/pessoa.mdx`, `entidades/empresa.mdx`, `entidades/linha-do-tempo.mdx` |
| `entidades/telefone.mdx`, `entidades/email.mdx`, `entidades/endereco.mdx` |
| `entidades/divida.mdx`, `entidades/beneficio.mdx`, `entidades/licitacao.mdx`, `entidades/doacao-politica.mdx` |
| `entidades/propriedade-urbana.mdx`, `entidades/propriedade-rural.mdx`, `entidades/veiculo.mdx`, `entidades/aeronave.mdx`, `entidades/patente.mdx` |
| `entidades/processo.mdx`, `entidades/parte.mdx`, `entidades/advogado.mdx`, `entidades/documento.mdx` |
| `entidades/dominio.mdx`, `entidades/registro-bancario.mdx`, `entidades/registro-comercial.mdx`, `entidades/registro-digital.mdx` |
| `entidades/imovel.mdx`, `entidades/rural.mdx`, `entidades/patrimonio.mdx` |
| `entidades/nfe.mdx`, `entidades/operacao-credito.mdx`, `entidades/engine-credito.mdx` |

Os dez arquivos de entidade que não estão na navegação atual só devem receber a cena caso voltem a ser publicados: `dominio`, `engine-credito`, `imovel`, `nfe`, `operacao-credito`, `patrimonio`, `registro-bancario`, `registro-comercial`, `registro-digital` e `rural`.

### Categorias jurídicas: um classificador com variante

As sete páginas reutilizam o mesmo processo entrando num classificador; muda apenas a trilha destacada.

- `categorias/recuperacao-judicial.mdx`
- `categorias/falencia.mdx`
- `categorias/execucao-fiscal.mdx`
- `categorias/execucao-civel.mdx`
- `categorias/trabalhista.mdx`
- `categorias/criminal.mdx`
- `categorias/familia-sucessoes.mdx`

`guias/recuperacoes-falencias.mdx` reutiliza a mesma cena com duas trilhas ativas; está fora da navegação atual.

### Motores de Análise

| Página | Cena reutilizada |
| --- | --- |
| `motores/ciclo-de-vida.mdx` | `StatusRail` de criação, processamento, conclusão e falha |
| `motores/engines.mdx` | lista de regras alimentando o `Scanner` e compondo um resultado |
| `motor-analise/blocos.mdx` | lista de blocos com aprovação, reprovação e ausência de cobertura |
| `motor-analise/quickstart.mdx` | versão reduzida da triagem cadastral, com começo, espera e resultado |
| `credito/quickstart.mdx` | versão reduzida da triagem de borderô |
| `credito/titulos-e-nfe.mdx` | títulos ligados às respectivas NFe antes da validação |

### Monitoramento

| Página | Cena reutilizada |
| --- | --- |
| `monitoramento/quickstart.mdx` | versão sequencial: cadastrar alvo → detectar mudança → reconhecer |
| `monitoramento/ciclo-de-vida.mdx` | `StatusRail` do acompanhamento e uma timeline separada de mudanças |
| `monitoramento/temas-monitorados.mdx` | `MixedEntityList` com diferentes tipos de alerta aparecendo na timeline |

### Plataforma

| Página | Cena reutilizada |
| --- | --- |
| `plataforma/quickstart.mdx` | versão compacta de `EntityGraph → Document` usada no Dossiê |
| `plataforma/estados-resultados.mdx` | quatro `StatusRail` paralelos, um para cada recurso da Plataforma |

## 37 páginas editoriais que não deveriam ter desenho

### Acesso, configuração e custo

- `api/access.mdx`
- `authentication.mdx`
- `custos.mdx`
- `motor-analise/autenticacao.mdx`
- `motores/idempotencia.mdx`
- `motores/cobranca.mdx`
- `monitoramento/autenticacao.mdx`
- `monitoramento/idempotencia.mdx`
- `monitoramento/cobranca.mdx`
- `plataforma/autenticacao.mdx`
- `plataforma/idempotencia.mdx`
- `plataforma/cobranca.mdx`
- `support.mdx`

Nessas páginas, exemplos, tabelas e chamadas de atenção respondem melhor à necessidade do leitor.

### Erros

- `motor-analise/erros.mdx`
- `plataforma/erros.mdx`
- todos os 22 arquivos em `problems/*.mdx`

Erros devem começar pelo código, significado, causa e correção. Um desenho no topo atrasaria a resposta.

## 91 páginas OpenAPI que não deveriam ter desenho

Todas as páginas geradas para `GET`, `POST`, `PATCH` e `DELETE` devem continuar sem ilustração. Elas já têm alta densidade de informação — método, rota, parâmetros, corpo, resposta e playground — e a cena do recurso fica na página conceitual imediatamente anterior.

## Implementação

- `sketch-system.mjs` concentra os componentes-base, estilos, animações e exportação SVG;
- `scene-catalog.mjs` compõe as cenas e mantém o vínculo entre página e desenho;
- `scripts/render-sketches.mjs` gera os arquivos em `images/sketches` e os inclui nas páginas;
- os SVGs usam fundo transparente para se integrar ao tema da documentação sem moldura;
- 77 cenas foram renderizadas para 82 páginas elegíveis;
- as 37 páginas editoriais excluídas e as 91 páginas OpenAPI permanecem sem desenho.

### Artigos de visão

Os artigos de valor usam quatro cenas editoriais adicionais, sem grafos ou
conexões entre nós. Cada desenho sustenta uma única ideia:

- `vision-infra-pain`: o custo acumulado de resolver cada pergunta com outra pilha;
- `vision-infra-foundation`: capacidades diferentes sobre uma base comum;
- `vision-team-pain`: o trabalho invisível de copiar, reconciliar e redigir;
- `vision-team-shared`: um caso preservado no Sherlocker ou na plataforma própria via API.

Para reconstruir todos os SVGs e reaplicar o catálogo:

```bash
node scripts/render-sketches.mjs
```
