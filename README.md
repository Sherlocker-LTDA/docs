# sherlocker-docs

Documentação da API Sherlocker — plataforma de inteligência investigativa.

Publicada em **[docs.sherlocker.com.br](https://docs.sherlocker.com.br)** · Construída com [Mintlify](https://mintlify.com).

## Estrutura

```
├── docs.json                  # Configuração principal (navegação, tema, API)
├── introduction.mdx
├── authentication.mdx
├── custos.mdx
├── async-jobs.mdx
├── guias/                     # Integração, Postman, SDK, MCP
├── casos-de-uso/              # Background check, due diligence, etc.
├── areas/                     # Contatos, patrimônio, jurídico
├── entidades/                 # Schemas de cada entidade da API
├── openapi/                   # Specs OpenAPI por módulo
└── sherlocker-postman-collection.json
```

## Módulos cobertos

| Tab | Módulos |
|-----|---------|
| **Cadastro** | Perfil, Pessoas, Empresas, Telefones, Emails, Dívidas, Benefícios, Licitações |
| **Patrimônio** | Imóveis urbanos, Rurais, Veículos, Aeronaves, Patentes |
| **Jurídico** | Processos, Documentos públicos |

## Desenvolvimento local

```bash
npm install -g mintlify
mintlify dev
```

Acesse em `http://localhost:3000`.

## Deploy

O deploy é feito automaticamente via Docker no Dokploy ao fazer push na branch `main`.

```
Dockerfile   — nginx proxy (:3200) → mintlify dev (:3201)
nginx.conf   — reescreve X-Forwarded-Proto para evitar redirect loop com Cloudflare SSL Flexible
```

## Postman

A collection completa está em `sherlocker-postman-collection.json` e pode ser baixada em:

```
https://221b-api.sherlocker.com.br/download/postman
```
