## Entrega

### 4: Arquitetura

## FRONTEND
Ao navegar, percebi que já utilizam React como tecnologia de frontend. O React é bastante performático
e ajuda na agilidade do desenvolvimento. Na minha visão, com o React conseguimos acelerar alguns pontos como:
validações, formulários, listeners..Além de obtermos reutilização de métodos e componentes através dos conceitos trazidos 
pela tecnologia. Ainda assim, sugiro a adoção da tecnologia Next JS. Essa tecnologia é basicamente um wrapper do React que 
permite criarmos uma aplicação Server Side Rendering com React. Assim, a aplicação é renderizado antes de ser entregue 
ao cliente final. Isso acontece por meio de uma camada de Node JS que constrói a página, antes dela ser entregue para o cliente.
Com essa característica o Next JS oferece algumas vantagens consideráveis: 
1. A pré renderização vai abrir portas para perfomance em SEO (uma melhor integração com Google Analytics, Bing, Crawlers). 
2. Experiência do usuário: ele nunca vai esperar alguma interpretação de javascript para a página carregar. 
3. Escalabilidade c/ baixo custo: O conceito de static generation do Next JS permite amenizar o consumo de APIs e consequentemente
o esforço, demanda e gargalos de um servidor de dados (o que parece ser muito importante para o Serasa). 
Percebi também que durante as navegações miutas requests são feitas para algumas apis como Google Maps, tags, etc;
Mas algumas delas falham, então talvez seria interessante a implementação do Sentry para análise desses "bugs" frequentes. 
4. Revalidação das páginas: O NEXT permite de forma eficiente a atualização das informações da página estática depois 
de um tempo definido.

# BANCO DE DADOS
Acredito que uma base de dados não relacional (MongoDB) seja mais apropriada para guardar dados pessoais e financeiros
de muitas pessoas. Talvez dois a quatro documentos com chave primária baseada no CPF e alguns relacionamentos de 
chave estrangeira resolveriam boa parte dos dados necessários para analises. 
Mas também não descartaria uma base de dados relacional como SQL Server, MySQL ou POSTGRES.

Para eficiencia na busca de muitos dados sugiro a criação de Cubos com Integration Service ou Views no próprio banco, 
talvez gerar alguns JOBS ou Crons para atualizar as views de tempos em tempo. 

Para agilizar também em uma busca sem muita mudança de comportamento temporal, sugiro a utilização do Redis, como um
banco de cacheamento de endpoints, onde uma vez que o frontend realiza uma request de API, essa request fica cacheada
para uma resposta quase que instantanea por um determinado período de tempo. 

Uma vez que é extremamente importante o controle de versão da base de dados, sugiro a utilização de ferramentas
de migrations das tabelas. 

### BACKEND
Acredito que qualquer tecnologia como .NET, Python (FASTApi, entre outros), Golang e Node JS são bastante performáticos
e escaláveis para a criação de serviços de API Rest. Eu sugiro um desenvolvimento baseado em microserviços onde tais
podem ser distribuidos em containers e tenham fácil manutenção. Exemplo: serviço de autenticação, serviços de consultas
em determinados data warehouses, serviço financeiros com X bancos, de forma separada.  

### INFRAESTRUTURA
Utilizar serviços em Nuvem para ter uma boa estabilidade, disponibilidade e escalabilidade controlável. Utilizar os sistemas de 
cacheamento e logs da AWS. Espelhar algumas máquinas com a aplicação, criar clusters c/ diversos containers se necessário. 
Uma máquina de staging para testes e merges de branchs de features na branch de desenvolvimento.
Jenkins para Integração Continua, execução de testes e fácil deployment ou GitHub Actions. 

### MANUTENÇÃO, VERSIONAMENTO E EXPERIÊNCIA
-Versionamento de código com Git e seguindo o Gitflow
-Aplicação da ferramenta Sentry principalmente na camada de frontend da aplicação.
-Camada de disparo de logs no backend. 
-Desenvolvimento Orientado a Testes - Utilizando JEST para testes unitários e no frontend, testes end-to-end com
Webdriver.io
-Sugiro o Google Analytics para coleta de métricas e comportamento dos usuários 
-Google Tag Manager
-Facebook Pixel 
-Hotjar ou amplitude para coletar mais dados sobre experiencia do usuário e dar mais inteligencia para os dados


#### Projetos e artigos

Durante a faculdade e profissionalmente nunca escrevi artigos, sempre foquei mais em evoluir soft skills, 
mas sou um bom leitor de artigos na Medium e acompanho muitos artigos no Linkedin. 
---

### Nos deixe um feedback!

Gostei bastante de resolver os exercícios e achei a proposta da Serasa um pouco diferente de outras empresas que já passei pelo processo seletivo.
Achei que o foco é em ser um solucionador de problemas e eu sinto muita falta disso no mercado. Já tive alguns companheiros de trabalho que não 
possuiam um olhar analítico e criativo para resolver os problemas, independente da forma e com o que você tem de recursos, no momento. Então, gostei e me identifiquei bastante! Espero ter realmente compreendido e cumprido o desafio conforme esperado! 
Desde já agradeço muito pela oportunidade, com certeza evolui meu conhecimento durante o processo! 
as necessidades 
