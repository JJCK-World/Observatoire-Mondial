# Politique de sécurité — Observatoire Mondial

## 1. Objectif

Protéger l'intégrité, la disponibilité et la confidentialité des éléments
d'Observatoire Mondial contre les erreurs, les accès non autorisés
et les incidents techniques.

## 2. Périmètre

Cette politique concerne notamment :

- le dépôt GitHub ;
- le site Internet ;
- les workflows de publication ;
- les comptes Facebook et TikTok ;
- les postes et outils utilisés pour le projet ;
- les fichiers sources et sauvegardes ;
- les données personnelles éventuellement traitées ;
- les services externes connectés.

## 3. Principes de sécurité

Appliquer les principes suivants :

- moindre privilège ;
- authentification renforcée lorsque disponible ;
- séparation des données publiques et privées ;
- protection des secrets ;
- mises à jour adaptées ;
- vérification des dépendances ;
- sauvegardes indépendantes ;
- contrôle avant toute opération risquée ;
- journalisation proportionnée ;
- préparation à la restauration.

## 4. Dépôt GitHub

Les permissions doivent être limitées aux personnes autorisées.

Examiner les paramètres de branches, les workflows et les permissions
des jetons lorsqu'ils sont utilisés.

Les secrets ne doivent pas être inscrits dans le code, les exemples,
les journaux de publication ou les fichiers de configuration publics.

Les changements importants doivent être examinés et testés avant
leur publication.

## 5. Site Internet

Vérifier les liens, les ressources externes, les scripts et les
configurations de publication.

Éviter d'intégrer des scripts provenant de sources non fiables.

Ne pas collecter de données personnelles sans nécessité et sans
examiner les obligations applicables.

## 6. Comptes sociaux

Protéger les comptes Facebook et TikTok avec les mécanismes de sécurité
disponibles.

Limiter les personnes autorisées à publier ou à administrer les comptes.

Conserver les procédures de récupération dans un emplacement sécurisé,
distinct du dépôt public.

## 7. Dépendances et outils

Avant d'ajouter une bibliothèque, un outil ou un service :

- identifier son origine ;
- examiner sa maintenance ;
- vérifier sa licence ;
- rechercher les risques connus ;
- limiter les permissions ;
- comprendre les données qu'il traite ;
- documenter les changements importants.

## 8. Données et confidentialité

Ne collecter et ne conserver que les données nécessaires à une finalité
définie.

Limiter l'accès aux données privées et déterminer des règles de conservation
adaptées.

Les données sensibles ne doivent pas être copiées dans des outils externes
sans autorisation et examen des risques.

## 9. Modifications risquées

Avant une suppression, un remplacement global, une migration ou une
reconfiguration importante :

1. examiner l'état existant ;
2. identifier les conséquences possibles ;
3. sauvegarder les données concernées ;
4. obtenir l'autorisation nécessaire ;
5. prévoir une méthode de retour arrière ;
6. tester le résultat ;
7. documenter les opérations effectuées.

## 10. Incidents

Tout soupçon sérieux de fuite, de compromission ou de corruption doit
être examiné selon la procédure de gestion des incidents.

La priorité est de limiter les conséquences et de protéger les éléments
nécessaires à l'analyse.

## 11. Contrôles

Les contrôles doivent être adaptés au risque et à la fréquence des changements.

Un résultat doit préciser ce qui a été vérifié, à quelle date,
avec quelle méthode et avec quelles limites.

## 12. Révision

Cette politique doit être révisée lorsque l'architecture, les comptes,
les outils ou les risques changent de manière significative.
