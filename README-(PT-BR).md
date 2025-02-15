# 🚀 Landing Builder

Landing Page Builder é uma aplicação desenvolvida em **Angular** que permite a criação de páginas de destino personalizadas, oferecendo controle total sobre cores, fontes, botões, imagens e muito mais. Com uma interface intuitiva e reativa, o usuário pode visualizar as alterações em tempo real.

## 🎯 Funcionalidades

✅ **Editor Visual Interativo** – Modifique sua landing page em tempo real.  
✅ **Controle de Estilos** – Ajuste cores, fontes e botões com facilidade.  
✅ **Gerenciamento de Carrossel** – Adicione até 4 imagens ao carrossel.  
✅ **Configuração de Fontes Dinâmicas** – Carregamento automático do Google Fonts.  
✅ **Download do Código HTML** – Exporte a página gerada para uso externo.  

---

## 🏗️ Estrutura do Projeto

```
landing-page-builder/
│── src/
│   ├── app/
│   │   ├── core/               # Coração da aplicação
│   │   │   ├── builder/        # Painel de edição
│   │   │   │   ├── controls/   # Controles para personalização
│   │   │   │   ├── preview/    # Visualização da landing page
│   │   │   │   ├── sidebar/    # Barra lateral de configuração
│   │   │   ├── client/         # Componentes da Landing Page
│   │   │   │   ├── navbar/     # Barra de navegação
│   │   │   │   ├── hero/       # Seção principal
│   │   │   │   ├── carousel/   # Carrossel de imagens
│   │   │   │   ├── features/   # Seção de recursos
│   │   │   │   ├── footer/     # Rodapé
│   │   │   ├── services/       # Serviços de configuração
│   │   ├── pages/              # Páginas da aplicação
│   ├── index.html              # Página principal
│   ├── main.ts                 # Arquivo principal Angular
│   ├── styles.css              # Estilos globais
```

---

## 🛠️ Tecnologias Utilizadas

- **Angular** – Framework principal do projeto  
- **Tailwind CSS** – Para estilização rápida e responsiva  
- **Signals do Angular** – Para gerenciamento de estado reativo  
- **Google Fonts API** – Para carregamento dinâmico de fontes  

---

## 🚀 Como Executar o Projeto

1️⃣ **Clone o repositório**  
```sh
git clone https://github.com/DrBooleani/LandingBuilder.git
cd LandingBuilder
```

2️⃣ **Instale as dependências**  
```sh
npm install
```

3️⃣ **Inicie o servidor de desenvolvimento**  
```sh
ng serve
```

4️⃣ **Acesse no navegador**  
```
http://localhost:4200
```

---

## 📜 Licença

Este projeto está sob a licença **MIT**.

---

Feito com 💙 por [DrBooleani](https://github.com/DrBooleani)