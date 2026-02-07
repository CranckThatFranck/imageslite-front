# 🖼️ ImageLite Frontend

## 📋 Sobre o Projeto

**ImageLite Frontend** é a interface de usuário (UI) desenvolvida em Next.js para a aplicação **ImageLite**, uma plataforma de gerenciamento de imagens. Este projeto complementa a [ImageLite API](https://github.com/CranckThatFranck/imagelite) e fornece uma experiência visual intuitiva para usuários interagirem com o sistema de upload, armazenamento e busca de imagens.

O frontend permite:
- ✅ Interface responsiva e moderna com Tailwind CSS
- ✅ Upload interativo de imagens com pré-visualização
- ✅ Busca avançada de imagens por extensão e query
- ✅ Galeria de imagens com visualização em tempo real
- ✅ Integração seamless com a API REST do backend
- ✅ Experiência otimizada para desktop e mobile

---

## 🏗️ Arquitetura e Estrutura do Projeto

O projeto segue a estrutura padrão do Next.js App Router com organização modular:

```
imagelite/
│
├── src/
│   └── app/
│       ├── layout.tsx              # Layout raiz com metadados
│       ├── page.tsx                # Página inicial (Home)
│       └── globals.css             # Estilos globais + Tailwind
│
├── public/                          # Arquivos estáticos
├── node_modules/                    # Dependências instaladas
├── next.config.js                   # Configuração do Next.js
├── tailwind.config.js               # Configuração do Tailwind CSS
├── postcss.config.js                # Configuração do PostCSS
├── tsconfig.json                    # Configuração do TypeScript
├── package.json                     # Dependências e scripts
└── README.md                        # Este arquivo
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **Next.js** | 16.1.6 | Framework React para produção |
| **React** | 19.2.4 | Biblioteca de UI |
| **TypeScript** | 5.9.3 | Tipagem estática para JavaScript |
| **Tailwind CSS** | 4.1.18 | Framework CSS utilitário |
| **@tailwindcss/postcss** | 4.1.18 | Plugin PostCSS para Tailwind v4 |
| **PostCSS** | 8.5.6 | Processador de CSS |
| **Autoprefixer** | 10.4.24 | Adiciona prefixos de vendors automaticamente |
| **Node.js** | LTS | Runtime JavaScript |

---

## 🎯 Componentes da Aplicação

### **1. Layout (`layout.tsx`)**
- Define a estrutura HTML principal da aplicação
- Configura metadados da página (title, description)
- Importa a fonte **Inter** do Google Fonts
- Aplica estilos globais através de `globals.css`
- Renderiza conteúdo das páginas filhas

### **2. Páginas (`src/app`)**
- **Home (`page.tsx`)**: ponto de entrada com chamadas para template e navegação
- **Formulario (`formulario/page.tsx`)**: formulário de upload com validação via Formik
- **Galeria (`galeria/page.tsx`)**: listagem de imagens renderizadas como cards

### **3. Componentes reutilizáveis (`src/components`)**
- **Template (`Template.tsx`)**: estrutura base de layout com header e container
- **ImageCard (`ImageCard.tsx`)**: card para exibir imagem, metadados e ações
- **Button (`button/Button.tsx`)**: botão estilizado com variações de cor
- **InputText (`input/InputText.tsx`)**: campo de texto controlado para formulários
- **Barrels (`index.ts`)**: exportações centralizadas de componentes

### **4. Estilos Globais (`globals.css`)**
- Importa todas as camadas do Tailwind CSS
- Define variáveis CSS customizadas (--foreground-rgb, --background-rgb)
- Implementa tema light/dark automático
- Estilos base para body e gradient de fundo

---

## 🚀 Como Executar o Projeto

### **Pré-requisitos**
- Node.js (versão 18+) instalado
- npm ou yarn instalado
- Projeto backend (ImageLite API) rodando em `http://localhost:8080`

### **Passo 1: Clonar o Repositório**
```bash
git clone https://github.com/CranckThatFranck/imagelite-frontend.git
cd imagelite
```

### **Passo 2: Instalar Dependências**
```bash
npm install
```

### **Passo 3: Executar em Desenvolvimento**
```bash
npm run dev
```

A aplicação estará disponível em: `http://localhost:3000`

---

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento com hot reload
npm run dev

# Build para produção
npm run build

# Executar versão de produção compilada
npm start

# Verificar código com ESLint
npm run lint
```

---

## 🔧 Configurações Principais

### **next.config.js**
- Configuração base do Next.js
- Preparado para otimizações e plugins adicionais

### **tailwind.config.js**
- Define o conteúdo a escanear para classes Tailwind
- Configurações de tema e cores
- Extensões customizadas

```javascript
content: [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
]
```

### **postcss.config.js**
- Processa CSS com `@tailwindcss/postcss`
- Adiciona prefixos automáticos com Autoprefixer

### **tsconfig.json**
- Configuração de TypeScript em modo strict
- Alias de path: `@/*` aponta para `./src/*`
- Suporte a JSX

---

## 🎨 Design e Responsividade

O projeto utiliza **Tailwind CSS v4** para:
- ✅ Design system consistente
- ✅ Responsividade automática (mobile-first)
- ✅ Tema claro/escuro baseado em preferências do sistema
- ✅ Componentes reutilizáveis com classes utilitárias
- ✅ Performance otimizada (purificação de CSS)

---

## 🔗 Integração com a API

O frontend se comunica com a **ImageLite API** através de endpoints REST:

### **Upload de Imagem**
```javascript
POST http://localhost:8080/v1/images/
Content-Type: multipart/form-data

Body:
- file: File
- name: string
- tags: string (separadas por vírgula)
```

### **Buscar Imagens**
```javascript
GET http://localhost:8080/v1/images/?extension=JPEG&query=termo
```

### **Recuperar Imagem**
```javascript
GET http://localhost:8080/v1/images/{id}
```

---

## 🗂️ Alias de Path

O projeto usa alias de path configurado no `tsconfig.json`:

```typescript
// Ao invés de:
import { Component } from '../../../components/Component'

// Use:
import { Component } from '@/components/Component'
```

---

## 📱 Responsividade

O Tailwind CSS v4 fornece breakpoints padrão:

| Breakpoint | CSS | Prefixo |
|-----------|-----|---------|
| Mobile | < 640px | - |
| Small | ≥ 640px | `sm:` |
| Medium | ≥ 768px | `md:` |
| Large | ≥ 1024px | `lg:` |
| Extra Large | ≥ 1280px | `xl:` |
| 2XL | ≥ 1536px | `2xl:` |

---

## 🌙 Tema Claro/Escuro

O projeto detecta automaticamente a preferência do usuário:

```css
@media (prefers-color-scheme: dark) {
  /* Estilos para modo escuro */
}
```

---

## 📦 Dependências Principais

### **Produção**
- `next`: Framework React
- `react`: Biblioteca UI
- `tailwindcss`: CSS framework
- `@tailwindcss/postcss`: Plugin PostCSS para Tailwind v4

### **Desenvolvimento**
- `typescript`: Tipagem estática
- `@types/node`: Tipos para Node.js
- `@types/react`: Tipos para React
- `@types/react-dom`: Tipos para React DOM

---

## 🐛 Troubleshooting

### Erro: "tailwindcss não é um plugin PostCSS válido"
**Solução**: Confirme que `@tailwindcss/postcss` está instalado:
```bash
npm install @tailwindcss/postcss
```

E que o `postcss.config.js` está correto:
```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### CSS não está sendo aplicado
**Solução**: Reinicie o servidor de desenvolvimento:
```bash
npm run dev
```

### Porta 3000 já está em uso
**Solução**: Use uma porta diferente:
```bash
npm run dev -- -p 3001
```

### Erro de conexão com a API
**Solução**: Verifique se a ImageLite API está rodando em `http://localhost:8080`

---

## 🎓 Próximas Funcionalidades a Implementar

- [ ] Componente de Upload com drag-and-drop
- [ ] Galeria de imagens com carregamento lazy
- [ ] Barra de busca com filtros avançados
- [ ] Sistema de autenticação (se necessário)
- [ ] Paginação de resultados
- [ ] Edição de metadados de imagens
- [ ] Compartilhamento de imagens
- [ ] Sistema de favoritos
- [ ] Testes automatizados (Jest, React Testing Library)
- [ ] Otimização de performance com code splitting

---

## 🚢 Deploy

### **Vercel (Recomendado)**
```bash
# Instale o CLI da Vercel
npm install -g vercel

# Faça o deploy
vercel
```

### **Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📚 Recursos Adicionais

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Next.js App Router Guide](https://nextjs.org/docs/app)

---

## 🔗 Links Relacionados

- **Backend (ImageLite API)**: [GitHub](https://github.com/CranckThatFranck/imagelite)
- **API Documentação**: [Endpoints disponíveis](http://localhost:8080/v1/images/)

---

## 👨‍💻 Autor

Desenvolvido como frontend complementar ao curso de Spring Boot.

---

## 📄 Licença

Este projeto é livre para uso educacional.

---

## 💡 Dicas de Desenvolvimento

1. **Use o Chrome DevTools** para debug de React com [React Developer Tools](https://chrome.google.com/webstore)
2. **Instale a extensão Tailwind CSS IntelliSense** para melhor experience no VSCode
3. **Utilize `@` para imports** para código mais legível
4. **Mantenha componentes pequenos e reutilizáveis**
5. **Use TypeScript rigorosamente** para evitar bugs

---

**Desenvolvido com ❤️ para o curso de Spring Boot**
