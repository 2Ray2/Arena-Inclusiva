# Arena Inclusiva — Esporte Sem Limites

Aplicação web estática que apresenta modalidades paradesportivas, uma loja de equipamentos adaptados com redirecionamento para sites externos, uma agenda de campeonatos e um questionário de recomendação de modalidades, com recursos de acessibilidade integrados. Projeto desenvolvido como trabalho acadêmico.

---

## Sumário

1. [Visão Geral](#visão-geral)
2. [Objetivos](#objetivos)
3. [Funcionalidades](#funcionalidades)
4. [Tecnologias Utilizadas](#tecnologias-utilizadas)
5. [Estrutura do Projeto](#estrutura-do-projeto)
6. [Pré-requisitos](#pré-requisitos)
7. [Instalação e Configuração](#instalação-e-configuração)
8. [Execução](#execução)
9. [Banco de Dados](#banco-de-dados)
10. [Uso](#uso)
11. [Limitações e Melhorias Futuras](#limitações-e-melhorias-futuras)
12. [Contexto Acadêmico](#contexto-acadêmico)
13. [Licença](#licença)

---

## Visão Geral

O projeto simula o site institucional da **ONG Arena Inclusiva**, cujo objetivo é aproximar pessoas com deficiência, familiares, apoiadores e voluntários do esporte adaptado.

O problema abordado é a dificuldade de encontrar, em um único lugar, informações organizadas sobre esportes paralímpicos e adaptados: quais modalidades existem, para quais tipos de deficiência são indicadas, onde adquirir equipamentos específicos e quais são as principais competições. A aplicação reúne essas informações e oferece uma primeira orientação por meio de um questionário.

A aplicação é **exclusivamente front-end**. Todo o conteúdo está no próprio código, e não há servidor, banco de dados nem integração com APIs. Por isso, cadastro, login, envio de mensagens e doações funcionam como **demonstração de interface**, sem processamento real.

---

## Objetivos

### Objetivo geral

Desenvolver uma plataforma web acessível que apresente o esporte adaptado e facilite a escolha de modalidades por pessoas com deficiência e seus apoiadores.

### Objetivos específicos

- Catalogar modalidades paradesportivas, informando categoria (coletiva ou individual) e tipos de deficiência indicados.
- Oferecer um questionário que sugere modalidades de acordo com o perfil informado.
- Direcionar o usuário à compra de equipamentos adaptados em sites externos.
- Divulgar campeonatos e notícias do esporte adaptado.
- Implementar recursos de acessibilidade: leitura por voz, ajuste de fonte, alto contraste e tema escuro. A interface indica preocupação com as diretrizes WCAG, mas o projeto não passou por auditoria de conformidade.
- Permitir cadastro, login e um perfil básico do usuário (simulados).

---

## Funcionalidades

As funcionalidades abaixo foram verificadas no código-fonte de `index.html`.

### Navegação

- Doze páginas (rotas internas): Início, Sobre, Notícias, Catálogo, Loja Inclusiva, Campeonatos, Contato, Doar, Entrar, Cadastro, Questionário/Recomendações e Perfil.
- Menu horizontal em telas grandes e menu em formato hambúrguer em telas menores.
- As páginas **Questionário** e **Perfil** só são exibidas para usuários logados; sem login, a aplicação mostra a tela de login.

### Página inicial

Apresenta a chamada principal do projeto, botão de acesso (cadastro ou perfil) e três pilares: Loja Inclusiva, Agenda de Campeonatos e Recomendador.

### Sobre

Texto institucional, lista de três diferenciais, uma citação e um vídeo incorporado do YouTube.

### Notícias

Duas notícias **estáticas**, escritas diretamente no código, sobre o Campeonato Brasileiro de Basquete em Cadeira de Rodas e os Jogos Paralímpicos de Los Angeles 2028.

### Catálogo de Esportes

Exibe seis modalidades. Cada cartão mostra imagem ilustrativa, categoria, deficiência indicada e descrição curta. O botão **Ver Detalhes** abre uma janela modal com descrição, categoria e público-alvo.

| Modalidade | Categoria | Deficiências indicadas (conforme filtro do questionário) |
|---|---|---|
| Basquete em Cadeira de Rodas | Coletivo | Física |
| Vôlei Sentado | Coletivo | Física e múltipla |
| Goalball | Coletivo | Visual |
| Futebol de 5 | Coletivo | Visual |
| Bocha | Individual | Física e múltipla |
| Atletismo | Individual | Física, visual e intelectual |

### Loja Inclusiva

Lista nove produtos (cadeiras de rodas esportivas, cadeira de rugby, luvas de propulsão, bola com guizos, tapa-olhos, kit de bolas de bocha, calha de lançamento, prótese de fibra de carbono e raquete adaptada). Cada item exibe nome, modalidade relacionada e preço em texto. O botão **Comprar no Site Externo** abre, em nova aba, uma busca no Mercado Livre. O site não tem carrinho, pagamento nem controle de estoque.

### Campeonatos

Exibe cinco competições: Jogos Paralímpicos (LA28), Copa Loterias Caixa, Campeonato Brasileiro de Basquete em Cadeira de Rodas, Paralimpíadas Escolares e Campeonato Brasileiro de Goalball. Cada cartão mostra local, modalidades e descrição. O botão de detalhes exibe um alerta fixo sobre inscrições.

### Questionário de Recomendação

Fluxo em quatro telas:

1. Introdução.
2. Seleção do tipo de deficiência: física/motora, visual, intelectual, múltipla ou "não possuo deficiência".
3. Seleção da preferência: individual ou coletivo.
4. Resultado: lista de modalidades compatíveis com as respostas, cada uma com o indicador "Compatibilidade: 98%".

A seleção é feita por regras fixas (deficiência × categoria). Se nenhuma modalidade atender exatamente aos critérios, o sistema exibe até duas modalidades alternativas. **Não há inteligência artificial nem aprendizado de máquina**, e o percentual de compatibilidade é um valor fixo no código. O botão **Refazer Teste** reinicia o questionário.

### Cadastro, Login e Perfil (simulados)

- **Cadastro**: valida nome (mínimo de 3 caracteres), e-mail (deve conter `@` e `.`), tipo de perfil (Atleta PCD, Familiar/Apoiador ou Voluntário), senha (mínimo de 6 caracteres) e confirmação de senha. Os erros são exibidos abaixo de cada campo.
- **Login**: valida o formato do e-mail e o tamanho mínimo da senha (6 caracteres). **Não há verificação em banco de dados**: qualquer e-mail e senha que atendam a essas regras autenticam o usuário, e o nome exibido é derivado da parte antes do `@`.
- **Perfil**: mostra nome, e-mail e tipo de perfil, além de atalho para o questionário e botão **Sair da Conta**.
- A sessão permanece no navegador até o logout.

### Contato

Formulário com validação de nome (mínimo de 3 caracteres), e-mail (deve conter `@`) e mensagem (mínimo de 10 caracteres). Ao enviar dados válidos, a aplicação exibe um alerta de sucesso e volta à página inicial. **A mensagem não é enviada a nenhum destinatário.**

### Doações

Exibe uma chave PIX do tipo e-mail e o botão **Copiar Chave**. Esse botão apenas exibe um alerta; ele não copia o conteúdo para a área de transferência. O projeto não processa doações.

### Acessibilidade e personalização

A barra superior reúne os seguintes recursos:

| Recurso | Função |
|---|---|
| Ouvir Voz e Mouse | Ativa a leitura em voz alta (Web Speech API, idioma pt-BR). Ao navegar, lê o conteúdo da página; ao passar o cursor sobre um elemento, lê o seu rótulo ou texto após cerca de 500 ms. |
| Repetir leitura | Lê novamente o conteúdo da página atual, quando a leitura por voz está ativa. |
| A- / A / A+ | Diminui, restaura ou aumenta o tamanho da fonte entre 13 px e 22 px. |
| Alto Contraste | Aplica fundo preto com textos e bordas em amarelo e branco. |
| Tema | Alterna entre o tema claro e o escuro. |

Além disso, o projeto inclui link "Pular para o conteúdo principal", anúncios para leitores de tela (`aria-live`), rótulos `aria-label` em botões, indicador de foco visível, fechamento da janela modal com a tecla Esc e marcação `aria-invalid` nos campos com erro. As preferências de fonte, tema e contraste são mantidas no navegador.

---

## Tecnologias Utilizadas

| Tecnologia | Versão | Papel no projeto |
|---|---|---|
| HTML5 | — | Estrutura da página única (`index.html`). |
| CSS3 | — | Estilos próprios, incluídos em um bloco `<style>` dentro de `index.html`. |
| JavaScript (ES6+, sem frameworks) | — | Renderização das páginas com template strings, roteamento interno, validação de formulários, controle de estado e recursos de acessibilidade. |
| Tailwind CSS | Carregado de `cdn.tailwindcss.com`, sem versão fixada | Estilização por classes utilitárias, responsividade e tema escuro (`darkMode: 'class'`). |
| Lucide Icons | Carregado de `unpkg.com/lucide@latest`, sem versão fixada | Ícones vetoriais. |
| Web Speech API | Nativa do navegador | Leitura de texto em voz alta (`speechSynthesis`). |
| `localStorage` | Nativo do navegador | Persistência de sessão e preferências no próprio navegador. |
| SVG | — | Logotipo e ilustrações das modalidades e dos produtos. |
| YouTube (incorporado) | — | Vídeo na página "Sobre". |

Não são utilizados Node.js, npm, frameworks como React ou Vue, nem linguagens ou bibliotecas de back-end.

---

## Estrutura do Projeto

```text
arena_inclusiva_codigos/
├── index.html            # Aplicação principal: marcação, CSS e JavaScript
├── images/               # Logotipo e ilustrações em SVG
│   ├── logo-arena.svg    # Logotipo (cabeçalho, rodapé e favicon)
│   ├── atletismo.svg
│   ├── basquete.svg
│   ├── bocha.svg
│   ├── futebol5.svg
│   ├── goalball.svg
│   ├── volei.svg
│   └── prod-1.svg … prod-9.svg   # Imagens dos produtos da loja
├── css/
│   └── styles.css        # Não utilizado pelo index.html (ver Limitações)
├── js/
│   ├── app.js            # Não utilizado pelo index.html (ver Limitações)
│   └── data.js           # Não utilizado pelo index.html (ver Limitações)
├── images.zip            # Cópia compactada da pasta images/ (conteúdo idêntico)
├── logo-arena.jpg.jpg    # Logotipo em JPEG; não referenciado pelo index.html
└── README.md
```

### Função dos componentes

- **`index.html`** é o único arquivo necessário para executar a aplicação. Internamente, o bloco `<script>` está organizado em:
  - **Dados**: constantes `SPORTS` (modalidades), `STORE_PRODUCTS` (produtos) e `CHAMPIONSHIPS` (campeonatos).
  - **Estado e rotas**: objeto `state`, função `navigate()` e renderização do menu (`renderNav()`) e da página principal (`renderMain()`).
  - **Validações**: `validateLogin()`, `validateRegister()` e `validateContact()`.
  - **Páginas**: funções `view*()` que retornam o HTML de cada página.
  - **Questionário**: `startQuiz()`, `setQuizDeficiencia()`, `setQuizCategoria()` e o filtro de modalidades em `viewRecommendations()`.
  - **Modal**: `openSportModal()` e `closeSportModal()`.
  - **Acessibilidade**: `toggleAudioReader()`, `readCurrentScreen()`, `speakText()` e `announceToScreenReader()`.
  - **Preferências**: `toggleDarkMode()`, `toggleHighContrast()`, `adjustFont()` e `resetFont()`.
- **`images/`** contém os ativos visuais usados pelas páginas Catálogo, Loja, Questionário e pelo logotipo.
- **`css/`, `js/` e `logo-arena.jpg.jpg`** são arquivos de uma versão anterior da interface, não carregados pela aplicação atual.

---

## Pré-requisitos

- **Navegador moderno** com JavaScript habilitado. A leitura por voz depende do suporte à Web Speech API e de uma voz em português instalada no sistema operacional.
- **Conexão com a internet**, necessária para carregar o Tailwind CSS, o Lucide Icons e o vídeo do YouTube.
- **Opcional**: Visual Studio Code com a extensão **Live Server**, para abrir o projeto por um servidor local.

Não são necessários Node.js, npm, banco de dados ou qualquer linguagem de back-end.

---

## Instalação e Configuração

1. Obtenha a pasta `arena_inclusiva_codigos` descompactando o arquivo `.zip` do projeto.
2. Não há dependências a instalar: as bibliotecas externas são carregadas pela internet a partir de CDNs.
3. Não há arquivos de configuração nem variáveis de ambiente. Parâmetros como textos, preços e links estão definidos diretamente em `index.html`.

---

## Execução

### Opção 1: abrir diretamente no navegador

Dê um duplo clique em `index.html` ou arraste o arquivo para a janela do navegador.

### Opção 2: servidor local com Live Server

1. Abra a pasta do projeto no VS Code.
2. Clique com o botão direito em `index.html` e selecione **Open with Live Server**.

### Primeiro acesso

1. A página inicial é carregada automaticamente.
2. Para acessar o questionário, crie uma conta em **Cadastro** (ou faça login em **Entrar**) e, em seguida, abra **Questionário / Recomendações**.

---

## Banco de Dados

**O projeto não utiliza banco de dados.** Não há tabelas, esquemas, migrações ou scripts SQL.

Os dados das modalidades, dos produtos e dos campeonatos estão em arrays JavaScript dentro de `index.html`. A única persistência é feita no navegador, por meio de `localStorage`:

| Chave | Conteúdo | Gravação e remoção |
|---|---|---|
| `arena_user` | Objeto JSON com `name`, `email` e `type` | Gravada no login e no cadastro; removida no logout. |
| `arena_dark` | `"true"` ou `"false"` | Atualizada ao alternar o tema. |
| `arena_contrast` | `"true"` ou `"false"` | Atualizada ao alternar o alto contraste. |
| `arena_font` | Número inteiro (tamanho da fonte em px) | Atualizada ao usar os botões A-, A e A+. |

A senha informada no cadastro **não é gravada**. Os dados ficam restritos ao navegador usado, e não são compartilhados entre dispositivos ou usuários. Para reiniciar a aplicação, faça logout ou limpe o armazenamento local do site pelas ferramentas de desenvolvedor do navegador.

---

## Uso

### Explorar o catálogo

1. Abra **Catálogo** no menu.
2. Clique em **Ver Detalhes** em uma modalidade para ver a janela com categoria e público-alvo.
3. Feche a janela pelo botão ✕ ou pela tecla Esc.

### Obter uma recomendação de modalidade

1. Crie uma conta em **Cadastro** ou faça login em **Entrar**.
2. Abra **Questionário / Recomendações** e clique em **Iniciar Questionário**.
3. Escolha o tipo de deficiência e a preferência (individual ou coletivo).
4. Consulte as modalidades sugeridas e clique em **Ver Detalhes** para cada uma.

### Comprar equipamentos

1. Abra **Loja Inclusiva**.
2. Clique em **Comprar no Site Externo** no produto desejado. A compra é concluída no site externo, que é aberto em nova aba.

### Consultar campeonatos

1. Abra **Campeonatos** para ver as competições listadas.

### Entrar em contato ou apoiar a ONG

1. Em **Contato**, preencha nome, e-mail e mensagem e clique em **Enviar Mensagem**. A mensagem não é transmitida (ver Limitações).
2. Em **Doar**, a chave PIX é exibida para transferência feita pelo usuário em seu próprio aplicativo bancário.

### Usar os recursos de acessibilidade

- Para ouvir o conteúdo, clique em **Ouvir Voz e Mouse**. Ao navegar, a página é lida; ao passar o cursor sobre elementos, eles são lidos individualmente. Para desligar, clique novamente no botão.
- Ajuste o tamanho do texto com **A-**, **A** e **A+**.
- Ative o **Alto Contraste** ou o **Tema** escuro conforme a necessidade.

---

## Limitações e Melhorias Futuras

### Limitações da versão atual

**Funcionalidades simuladas ou incompletas**

- **Autenticação simulada.** O login não verifica credenciais; a senha não é armazenada nem comparada. Qualquer e-mail e senha que atendam às regras de formato autenticam o usuário.
- **Um único usuário por navegador.** O cadastro substitui o registro anterior em `localStorage`.
- **Contato não enviado.** O formulário apenas valida os campos e exibe um alerta.
- **Doações não processadas.** O botão "Copiar Chave" apenas exibe um alerta e não copia o valor.
- **Campeonatos com detalhe fixo.** O botão de detalhes exibe sempre o mesmo alerta.
- **Recomendador baseado em regras.** Não há inteligência artificial; o percentual de compatibilidade (98%) é fixo.
- **Modal de detalhes resumido.** A janela exibe apenas descrição curta, categoria e público-alvo.

**Conteúdo estático**

- Modalidades, produtos, preços, campeonatos e notícias estão escritos no código. Preços são textos ("A partir de R$ …") e não são atualizados automaticamente.
- Os links da loja apontam para páginas de busca do Mercado Livre, que podem mudar com o tempo.
- As afirmações das notícias e da página "Sobre" são textuais e não citam fontes no código.

**Navegação e acessibilidade**

- As páginas são trocadas dinamicamente, sem alterar a URL. Por isso, o botão de voltar do navegador não retorna à página anterior e não é possível compartilhar um link direto para uma seção.
- O alto contraste altera apenas um conjunto específico de classes do Tailwind; elementos fora dessa lista mantêm as cores originais.
- Os botões de tema e alto contraste não atualizam o atributo `aria-pressed`, que só é atualizado no botão de leitura por voz.
- A leitura por voz depende do navegador e da voz em português instalada.
- Não há auditoria formal de conformidade com as diretrizes WCAG.

**Dependências e qualidade**

- Tailwind CSS e Lucide Icons são carregados sem versão fixada. Mudanças nessas bibliotecas podem alterar o visual ou quebrar a interface.
- A aplicação depende de internet para carregar estilos, ícones e vídeo.
- Não há testes automatizados.
- Não há controle de versão ou arquivo de dependências.

**Arquivos não utilizados e inconsistências**

- `css/styles.css`, `js/app.js`, `js/data.js` e `logo-arena.jpg.jpg` não são referenciados pelo `index.html`. Eles pertencem a uma versão anterior da interface, que usava modalidades diferentes e chaves de armazenamento diferentes (`arena_theme`, `arena_contrast` com valores `normal`/`high`).
- `images.zip` duplica a pasta `images/`, com conteúdo idêntico.
- O arquivo `js/data.js` contém informações detalhadas de cada modalidade (história, regras, equipamentos, acessibilidade e benefícios) que não são exibidas pela versão atual.
- A loja inclui produtos de modalidades que não estão no catálogo (Rugby em cadeira de rodas e Tênis de Mesa).
- A página inicial afirma que "a IA sugere" modalidades, o que não corresponde à implementação descrita acima.

### Melhorias futuras (sugestões, não implementadas)

- Implementar back-end com autenticação real, armazenamento seguro de senhas (hash) e banco de dados para usuários e mensagens.
- Enviar as mensagens do formulário de contato a um destinatário real.
- Usar as informações detalhadas de `js/data.js` na janela de detalhes das modalidades, ou remover o arquivo se ele não for necessário.
- Substituir a lógica do questionário por critérios documentados e validados por profissionais da área.
- Fixar versões das bibliotecas externas ou incluí-las localmente.
- Atualizar o histórico do navegador ao trocar de página, usando a API de histórico ou URLs com fragmentos.
- Copiar de fato a chave PIX com `navigator.clipboard`.
- Remover os arquivos não utilizados e o `images.zip` redundante.
- Realizar testes automatizados e uma auditoria de acessibilidade com ferramentas como axe ou Lighthouse.
