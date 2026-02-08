# Portfólio João Barbalho

Site portfólio minimalista para editor de vídeo.

## Configuração do Formulário de Contato

### Web3Forms (Gratuito e Simples)

1. Acesse [web3forms.com](https://web3forms.com)
2. Digite seu email e clique em "Create Access Key"
3. Copie a chave que aparece (ex: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)
4. No arquivo `index.html`, substitua `YOUR_ACCESS_KEY_HERE` pela sua chave:
   ```html
   <input type="hidden" name="access_key" value="sua-chave-aqui">
   ```
5. Pronto! Os emails chegarão na sua caixa de entrada

**Vantagens:**
- ✅ Sem cadastro necessário
- ✅ Gratuito para sempre (250 envios/mês)
- ✅ Funciona imediatamente
- ✅ Sem limite de formulários

## Recursos

- ✅ Design minimalista e responsivo
- ✅ Modo claro/escuro
- ✅ Seletor de idioma (PT/EN/ES)
- ✅ Detecção automática de idioma
- ✅ Formulário de contato funcional
- ✅ Animações suaves

## Tecnologias

- HTML5
- CSS3 (CSS Variables)
- JavaScript (Vanilla)
- Web3Forms (para formulário)

## Como usar

1. Configure o formulário de contato (veja acima)
2. Substitua as imagens placeholder pelas suas
3. Atualize os links das redes sociais
4. Personalize os textos e informações
5. Hospede em qualquer serviço (Netlify, Vercel, GitHub Pages, etc.)

## Personalização

- **Logo**: Edite o texto no header
- **Vídeo**: Substitua o link do YouTube no iframe
- **Projetos**: Adicione/remova itens na seção Work
- **Bio**: Atualize os textos na seção About
- **Cores**: Modifique as CSS variables em `:root` e `[data-theme="dark"]`

## Contato

Para dúvidas sobre o site, entre em contato através do formulário.