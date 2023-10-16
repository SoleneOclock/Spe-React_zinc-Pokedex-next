# Next

Framework pour React : 

- permet le serveur side rendering (server component : rendu coté serveur)
- systeme de routage basé sur les nom de fichier et arborescence (replace reac-router-dom)

## CSR : client side rendering

On envoie au client une page html vide et du JS, le JS s'execute dans le navigateur du client pour "remplir" la page : faire le rendu des composant.

## SSR : server side rendering

Executer le render des composants coté serveur pour envoyer des pages toutes construites au client.

Petite vidéo sympa à regarder :
https://www.youtube.com/watch?v=KHRwgK2dnFc&amp;ab_channel=Melvynx%E2%80%A2Apprendre%C3%A0coder

## Install de Next :

https://nextjs.org/docs/getting-started/installation
on utilise l'installeur `create-next-app` avec cette commande :

`npx create-next-app@latest`

## Routage par dossiers

### page.tsx

Chaque fichier nommé `page.tsx` sera une page avec une route. La route sera definie en fonction des dossiers dans lequel la page se trouve.

Exemple : 

une page dans un dossier about : `about/page.tsx`
sera rendu si on va sur l'URL `/about`

### layout.tsx

Chaque page va avoir un layout, elle utilisera le plus proche d'elle (si y'en a qu'un à la racine du dossier app se sera le meme pour toutes les pages, et si y'en a un dans un sous dossier par exemple dans about/layout.tsx ce sera celui la qui sera utilisé pour la page about)

## Eslint

De base avec l'installeur next on a une config très legerer, si on veut reprendre celle qu'on connait de air bnb , on doit installer des packages en plus 

`npm install -D eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks`
`npm install -D eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser`

et configurer toutça dans le fichier eslintrs.json : 

```json
{
  "extends": [
    "airbnb",
    "next/core-web-vitals"
  ],
  "parser": "@typescript-eslint/parser",
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "parserOptions": {
        "project": ["./tsconfig.json"]
      }
    }
  ],
  "rules": {
    "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "@next/next/no-img-element": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ],
   "react/jsx-props-no-spreading": "off"
  }
}
```

