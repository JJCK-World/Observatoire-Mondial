# Procédure de sauvegarde — Observatoire Mondial

## 1. Objectif

Préserver les fichiers et les données nécessaires à la continuité
du projet et permettre leur restauration après une erreur ou un incident.

## 2. Éléments à sauvegarder

Selon les ressources réellement utilisées, identifier :

- les fichiers du site ;
- les articles et dossiers ;
- les images, vidéos et fichiers sources originaux ;
- les documents de référence ;
- les configurations nécessaires à la restauration ;
- les données non reproductibles ;
- les éléments nécessaires à la récupération des services.

Les secrets doivent être sauvegardés uniquement dans un emplacement
sécurisé et adapté. Ils ne doivent pas être ajoutés aux archives publiques.

## 3. Sources de sauvegarde

L'historique Git constitue un moyen de suivi des versions, mais ne
remplace pas à lui seul une sauvegarde indépendante.

Lorsque cela est possible, conserver une copie distincte du dépôt
et des fichiers importants.

Une sauvegarde ne doit pas dépendre exclusivement du support qu'elle
est censée protéger.

## 4. Fréquence

Définir une fréquence adaptée à l'activité, au volume de modifications
et à la possibilité de recréer les données.

Les fichiers modifiés fréquemment ou difficiles à reproduire peuvent
nécessiter des sauvegardes plus rapprochées.

Aucune fréquence ne doit être déclarée appliquée sans preuve.

## 5. Procédure

Avant une modification importante :

1. identifier les fichiers concernés ;
2. créer une sauvegarde cohérente ;
3. vérifier que les fichiers sont présents ;
4. calculer des empreintes SHA-256 lorsque cela est utile ;
5. conserver la sauvegarde dans un emplacement distinct ;
6. documenter sa date et son périmètre.

Les empreintes permettent de détecter certaines modifications, mais
ne garantissent pas à elles seules l'authenticité ou la disponibilité
de la sauvegarde.

## 6. Protection

Limiter l'accès aux sauvegardes contenant des données privées.

Protéger les supports contre la perte, la détérioration et les accès
non autorisés.

Ne pas publier de fichiers confidentiels dans une archive destinée
au dépôt public.

## 7. Restauration

Avant de restaurer :

- identifier la version à récupérer ;
- vérifier l'intégrité des fichiers disponibles ;
- préserver l'état actuel lorsque cela est possible ;
- déterminer les conséquences du retour arrière ;
- vérifier les autorisations nécessaires.

Restaurer d'abord dans un environnement de test lorsque le risque
ou la complexité le justifie.

## 8. Vérification

Contrôler périodiquement qu'une sauvegarde peut effectivement être lue
et que les fichiers essentiels peuvent être restaurés.

La présence d'une archive ne prouve pas que sa restauration fonctionne.

## 9. Registre

Pour chaque sauvegarde importante, conserver si possible :

- la date ;
- le périmètre ;
- l'emplacement protégé ;
- la méthode ;
- le résultat du contrôle d'intégrité ;
- la date du dernier test de restauration ;
- les éventuelles anomalies.

Ne pas inscrire de mots de passe ou de clés secrètes dans ce registre.

## 10. Incident

En cas de perte ou de corruption, préserver les copies restantes,
identifier la dernière version fiable et documenter les opérations
de restauration.
