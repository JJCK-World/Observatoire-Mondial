# Procédure de gestion des incidents — Observatoire Mondial

## 1. Objectif

Définir une méthode de réponse aux incidents pouvant affecter
la sécurité, l'intégrité, la disponibilité ou la confidentialité
des ressources d'Observatoire Mondial.

## 2. Exemples d'incidents

Un incident peut notamment être :

- un compte compromis ;
- un secret exposé ;
- une publication non autorisée ;
- une modification technique inattendue ;
- une perte ou une corruption de fichiers ;
- un lien malveillant ;
- une dépendance compromise ;
- une fuite de données ;
- une suppression accidentelle ;
- une usurpation d'identité ;
- une utilisation non autorisée d'un contenu.

## 3. Détection et signalement

Consigner les faits disponibles :

- date et heure de découverte ;
- ressource concernée ;
- description du problème ;
- conséquences observées ;
- actions déjà réalisées ;
- éléments techniques utiles.

Éviter de diffuser publiquement des informations qui faciliteraient
une exploitation de l'incident.

## 4. Évaluation

Évaluer, selon les informations disponibles :

- l'étendue du problème ;
- les comptes ou fichiers concernés ;
- les données potentiellement exposées ;
- les risques pour les personnes ;
- la persistance éventuelle de l'accès non autorisé ;
- les conséquences sur les publications ;
- les obligations de notification applicables.

Distinguer les faits confirmés des hypothèses.

## 5. Contention

Prendre des mesures proportionnées pour limiter les conséquences.

Selon le cas, cela peut inclure :

- révoquer un jeton compromis ;
- réinitialiser un accès ;
- suspendre une publication ;
- désactiver temporairement un service ;
- isoler un fichier ou un système ;
- limiter les permissions ;
- préserver les journaux disponibles.

Ne pas détruire inutilement les éléments qui pourraient aider à comprendre
l'incident.

## 6. Préservation des preuves

Conserver les journaux, captures ou fichiers pertinents lorsque cela
est légal et nécessaire.

Limiter l'accès aux éléments contenant des données privées ou des secrets.

Documenter les actions réalisées sans recopier inutilement les secrets
dans le rapport.

## 7. Rétablissement

Avant de rétablir un service :

- identifier une version fiable ;
- corriger la cause connue ;
- renouveler les secrets compromis ;
- vérifier les permissions ;
- tester les fonctions essentielles ;
- surveiller les signes de récidive.

Une restauration ne doit pas être considérée comme sûre uniquement
parce que le service répond de nouveau.

## 8. Données personnelles

Si des données personnelles ont pu être compromises, examiner les
obligations légales applicables et les démarches nécessaires auprès
des autorités ou des personnes concernées.

Ne pas affirmer qu'une notification est obligatoire ou inutile sans
avoir évalué la situation et le cadre juridique applicable.

## 9. Communication

Toute communication publique doit être exacte, proportionnée et fondée
sur les faits confirmés.

Ne pas minimiser un incident, attribuer une responsabilité sans preuve
ou divulguer des détails techniques sensibles.

## 10. Retour d'expérience

Après le traitement, documenter :

- la cause identifiée ou les incertitudes restantes ;
- les conséquences ;
- les mesures appliquées ;
- les contrôles effectués ;
- les améliorations nécessaires ;
- les actions restant à réaliser.

## 11. Clôture

L'incident peut être considéré comme traité lorsque les risques immédiats
ont été maîtrisés, que les vérifications nécessaires ont été effectuées
et que les actions restantes sont documentées.

Si des incertitudes subsistent, elles doivent être explicitement signalées.
