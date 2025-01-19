# 🚫 DiscordProtectBot

Bienvenue sur **DiscordProtectBot** ! 🎉 Ce bot Discord a pour objectif de protéger un serveur contre les comportements nuisibles, tels que le spam, les raids et les bots. Il offre des fonctionnalités automatisées pour gérer ces problèmes de manière efficace et avec des logs détaillés.

## ✨ Fonctionnalités

- **Anti-Spam** : Détecte et met en timeout les utilisateurs qui envoient trop de messages en peu de temps.
- **Anti-Raid** : Expulse les bots en cas de raid (arrivée massive de membres).
- **Anti-Bot** : Expulse les nouveaux membres qui sont des bots.
- **Logs détaillés** : Les actions sont enregistrées dans des salons spécifiques avec des embeds d'informations détaillées.
- **Personnalisable** : Vous pouvez facilement configurer le bot en utilisant le fichier `config.json` pour activer ou désactiver les fonctionnalités.

## 🔧 Technologies Utilisées

- **Node.js** – Le langage principal utilisé.
- **Discord.js** – Pour interagir avec l'API de Discord.
- **JavaScript** – Pour la logique et la gestion des événements.

## 🛠️ Installation et Utilisation

### Prérequis

Assurez-vous d'avoir **Node.js** installé sur votre système. Si ce n'est pas le cas, téléchargez et installez-le depuis le [site officiel de Node.js](https://nodejs.org/).

### Étapes d'Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/Quravat/DiscordProtectBot.git
   cd DiscordProtectBot
   ```

2. Installez les dépendances nécessaires :
   ```bash
   npm install
   ```

3. Remplacez `'token'` dans le fichier `config.json` par le token de votre propre bot Discord.

### Comment Lancer

1. Démarrez le bot :
   ```bash
   node bot.js
   ```

2. Le bot se connectera et commencera à surveiller les messages, expulser les bots et gérer les actions de sécurité sur le serveur.

## 📝 Fonctionnement

- **Anti-Spam** : Dès qu'un utilisateur envoie trop de messages en peu de temps, le bot supprime ses messages et le met en timeout pour 1 minute.
- **Anti-Raid** : Le bot détecte les raids et expulse les bots en masse.
- **Anti-Bot** : Le bot expulse automatiquement les nouveaux membres qui sont des bots.
- **Logs** : Chaque action est enregistrée dans les salons de logs définis dans le fichier `config.json` avec des détails comme l'utilisateur concerné, l'action effectuée, et le salon où l'action a eu lieu.

## 🤝 Contribuer

Nous accueillons toutes les contributions pour améliorer ce bot ! Si vous souhaitez ajouter des fonctionnalités ou signaler des bugs, suivez ces étapes :

1. Forkez ce dépôt.
2. Créez une nouvelle branche (`feature-branch`).
3. Commitez vos changements.
4. Poussez sur votre dépôt forké.
5. Créez une pull request.

## 💬 Questions ou Retours ?

N'hésitez pas à ouvrir une issue si vous avez des questions ou des retours. Vos contributions sont très appréciées !

## 📝 Crédits

- **Développeur** : Quravat 💻  
- **Créé en** : 2025 🗓️  

## ❤️ Contribuez au Projet !

N'hésitez pas à ouvrir des issues ou soumettre des pull requests. Toutes les contributions sont les bienvenues ! 🙌  
Si ce projet vous est utile, merci de **l'étoiler** sur GitHub ⭐ – votre soutien compte beaucoup pour moi !