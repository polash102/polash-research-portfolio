# Deploy as a NEW GitHub repository

Create a new public repository named:

`polash-research-portfolio`

Do NOT use or modify `polash102.github.io`.

Your public site will be:

`https://polash102.github.io/polash-research-portfolio/`

## First push

```powershell
git init
git branch -M main
git add .
git commit -m "Initial research portfolio"
git remote add origin https://github.com/polash102/polash-research-portfolio.git
git push -u origin main
```

Then go to:

Settings -> Pages -> Source -> GitHub Actions

The included workflow deploys the site automatically.
