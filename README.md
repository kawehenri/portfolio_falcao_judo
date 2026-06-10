# Portfólio Rodrigo Falcão — Judô

Site institucional premium para o atleta de Judô Rodrigo Falcão, desenvolvido com React, Vite, TypeScript e Tailwind CSS.

## Tecnologias

- React 19 + Vite 6
- TypeScript
- Tailwind CSS 4
- Framer Motion
- React Icons
- SEO otimizado (meta tags dinâmicas)

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173/portfolio_falcao_judo/`

## Build

```bash
npm run build
npm run preview
```

## Deploy — GitHub Pages

Repositório: `portfolio_falcao_judo`

### Opção 1: GitHub Actions (recomendado)

1. Crie o repositório `portfolio_falcao_judo` no GitHub
2. Em **Settings → Pages**, selecione **GitHub Actions** como source
3. Faça push da branch `main` — o workflow `.github/workflows/deploy.yml` publica automaticamente

### Opção 2: gh-pages manual

```bash
npm run deploy
```

## Personalização

### Dados do atleta

Edite os arquivos em `src/data/`:

| Arquivo | Conteúdo |
|---------|----------|
| `athlete.json` | Dados pessoais, bio, contatos |
| `stats.json` | Estatísticas animadas |
| `timeline.json` | Linha do tempo |
| `achievements.json` | Conquistas |
| `competitions.json` | Resultados |
| `gallery.json` | Galeria de fotos |
| `sponsors.json` | Patrocinadores |

### Imagens

| Arquivo | Uso |
|---------|-----|
| `src/assets/imgs/perfil.jpeg` | Foto principal do Hero |
| `src/assets/imgs/fundo.jpeg` | Imagem de fundo animada no Hero |

### Galeria

Adicione itens em `gallery.json`:

```json
{
  "id": "t-06",
  "category": "treinos",
  "src": "/portfolio_falcao_judo/imagens/foto.jpg",
  "alt": "Descrição da imagem",
  "caption": "Legenda exibida no hover"
}
```

Use `src: null` para placeholders.

### Domínio próprio

Crie `public/CNAME` com seu domínio e atualize `SITE_URL` em `src/lib/constants.ts`.

## Estrutura

```
src/
├── assets/imgs/     # Foto de perfil e fundo do Hero
├── components/      # UI, layout, galeria
├── sections/        # Seções da página
├── hooks/           # Hooks customizados
├── data/            # JSONs editáveis
├── pages/           # Páginas
├── styles/          # CSS global
└── types/           # TypeScript
```

## Licença

Todos os direitos reservados — Rodrigo Octávio Falcão Souza Jordão Ramos.
