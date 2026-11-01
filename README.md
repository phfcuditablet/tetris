# 🧱 Tetris — um ponto por linha

Jogo de Tetris clássico feito em um único arquivo HTML, sem dependências e sem instalação. Funciona no computador, no tablet e no celular.

**🎮 Jogar online:** https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/

## Regras de pontuação

- O tabuleiro tem **10 colunas × 20 linhas**.
- Cada linha que a peça desce soma **1 ponto** no contador.
  - Queda normal e botão ▼: 1 ponto por linha descida.
  - Queda instantânea (espaço ou ⤓): soma todas as linhas percorridas de uma vez.
- Linhas completas são eliminadas para abrir espaço, mas não dão pontos extras.
- A velocidade aumenta a cada 5 linhas eliminadas.
- O jogo termina quando as peças chegam ao topo.

## Controles

| Ação | Teclado | Tela de toque |
|---|---|---|
| Mover | ← → | Botões ◀ ▶ ou arrastar no tabuleiro |
| Girar | ↑ | Botão ⟳ ou tocar no tabuleiro |
| Descer | ↓ | Botão ▼ ou arrastar para baixo |
| Queda instantânea | Espaço | Botão ⤓ |
| Pausar | P | — |
| Começar | Enter | Tocar na tela |

Os botões laterais aparecem automaticamente em telas de toque e telas menores, e ◀ ▶ ▼ repetem o movimento ao segurar.

## Como rodar localmente

Não precisa instalar nada. Baixe o repositório e abra o arquivo `index.html` no navegador.

```bash
git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
cd NOME-DO-REPOSITORIO
# abra o index.html no navegador (duplo clique)
```

## Estrutura do projeto

```
.
├── index.html   # jogo completo (HTML + CSS + JavaScript)
├── README.md    # esta documentação
└── LICENSE      # licença MIT
```

## Como funciona (resumo técnico)

- **Renderização:** `<canvas>` 2D, desenhado com `requestAnimationFrame`.
- **Peças:** as 7 peças clássicas (I, O, T, S, Z, J, L), sorteadas por sistema de "saco" para evitar longas sequências repetidas.
- **Rotação:** matriz girada 90°, com pequenos deslocamentos laterais quando a peça encosta na parede.
- **Entrada:** teclado, botões na tela (com repetição ao segurar) e gestos de toque.
- **Peça fantasma:** mostra onde a peça vai cair.

## Publicar com GitHub Pages

1. No repositório, abra **Settings → Pages**.
2. Em **Build and deployment**, escolha **Deploy from a branch**.
3. Selecione a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
4. Aguarde cerca de 1 a 2 minutos. O endereço do jogo aparece no topo da mesma página.

## Contribuindo

Sugestões e melhorias são bem-vindas:

1. Faça um fork do repositório.
2. Crie uma branch: `git checkout -b minha-melhoria`.
3. Faça o commit: `git commit -m "Descreve a melhoria"`.
4. Envie: `git push origin minha-melhoria`.
5. Abra um Pull Request.

Ideias para o futuro: recorde salvo no navegador, bônus por linha eliminada, níveis, sons e tema claro.

## Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE).
