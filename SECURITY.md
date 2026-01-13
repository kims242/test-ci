# Gestion de la Sécurité (CI/CD Project)

Ce document détaille les pratiques de sécurité appliquées pour protéger l'application et le pipeline.

## 1. Gestion des Secrets GitHub
Conformément aux bonnes pratiques DevOps, aucun secret n'est stocké en clair dans le code source. Les variables suivantes **doivent impérativement** être configurées dans les "Repository Secrets" de GitHub :

| Secret | Description | Valeur conseillée (Production) |
| :--- | :--- | :--- |
| `DATABASE_URL` | Chaîne de connexion PostgreSQL | `****` |
| `JWT_SECRET` | Clé pour la signature des tokens auth | *Une chaîne aléatoire complexe* |

## 2. Protection de l'Infrastructure
- **Isolation réseau** : L'utilisation de Docker Compose crée un réseau isolé où seule l'application est exposée, la base de données n'étant pas accessible depuis l'extérieur.
- **Surface d'attaque réduite** : Nous utilisons l'image de base `node:18-bullseye-slim` pour minimiser le nombre de vulnérabilités présentes dans le conteneur.
- **Principe du moindre privilège** : Le fichier `.env` est listé dans le `.gitignore` pour éviter toute fuite accidentelle sur le dépôt public.

## 3. Analyse de Qualité
Le pipeline GitHub Actions intègre une étape de **Linting (ESLint)** pour détecter les erreurs de code et les mauvaises pratiques de sécurité avant tout déploiement.

## 4. Politique de mise à jour
En cas de vulnérabilité détectée sur une dépendance, un collaborateur doit mettre à jour le `package.json` et reconstruire l'image Docker via le pipeline.
