# Gestion des accès — Observatoire Mondial

## 1. Objectif

Définir les règles de création, d'utilisation, de contrôle et de retrait
des accès aux ressources du projet.

## 2. Comptes concernés

Les accès peuvent concerner :

- GitHub ;
- les paramètres du site et de sa publication ;
- Facebook ;
- TikTok ;
- les services externes ;
- les espaces de sauvegarde ;
- les outils de production ;
- les systèmes contenant des données privées.

## 3. Comptes individuels

Lorsque le service le permet, utiliser des comptes individuels plutôt
que partager un même identifiant entre plusieurs personnes.

Les comptes doivent être attribués à des personnes autorisées et
correspondre à leurs responsabilités réelles.

## 4. Authentification

Utiliser un mot de passe unique et suffisamment robuste pour chaque
service.

Activer l'authentification multifacteur lorsqu'elle est disponible
et adaptée.

Conserver les codes de récupération dans un emplacement sécurisé.
Ne pas les publier dans le dépôt ou dans des documents partagés
sans contrôle d'accès.

## 5. Permissions

Accorder uniquement les permissions nécessaires.

Les droits d'administration doivent être limités aux personnes
qui en ont besoin.

Réexaminer les permissions après un changement de rôle ou la fin
d'une collaboration.

## 6. Jetons et clés

Les jetons d'accès, clés API, clés privées et secrets doivent être
stockés dans un gestionnaire de secrets ou un emplacement protégé
adapté au service utilisé.

Ne pas les placer dans :

- un dépôt public ;
- un article ;
- une capture d'écran publique ;
- un fichier de documentation accessible à tous ;
- un journal de commande partagé.

## 7. Exposition accidentelle

Si un secret est exposé, considérer qu'il peut être compromis.

Révoquer ou renouveler le secret depuis le service concerné, examiner
les accès associés et vérifier les journaux disponibles.

Supprimer le texte visible ne suffit pas nécessairement : le secret
peut subsister dans l'historique du dépôt, des copies ou des journaux.

## 8. Récupération des comptes

Les méthodes de récupération doivent être à jour et conservées
dans un emplacement sûr.

Les adresses de récupération et les numéros associés ne doivent pas
être reproduits dans la documentation publique lorsqu'ils sont privés.

## 9. Fin d'accès

Lorsqu'une personne n'a plus besoin d'un accès :

- retirer les permissions concernées ;
- révoquer les jetons devenus inutiles ;
- examiner les clés partagées ;
- récupérer les éléments appartenant au projet ;
- documenter les actions nécessaires.

## 10. Contrôle périodique

Examiner régulièrement les comptes actifs, les permissions et les
mécanismes de récupération, selon le niveau de risque.

Ne pas déclarer un contrôle effectué sans l'avoir réellement réalisé.
