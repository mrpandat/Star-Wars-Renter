To install the project : npm run setup
To launch the project : npm start
Open a browser and go to localhost:8080

##### DESCRIPTION OF THE PROJECT #####

# La flotte de la République
## Un exercice de l’espace

La République galactique a besoin de vous. Si ! Son immense flotte de vaisseaux prend la poussière et rouille dans les parcs de stationnement sidéraux. La faute à un système de réservation vétuste que tout le monde boude. Du travail de Gungan distrait, finalement !

## Spécifications
- L’application fait appel à l’API publique Star Wars (swapi.co)
- A l’initialisation, l’application charge la liste des véhicules Star Wars et les affiche sous la forme de fiches disposées sur une grille.
- Chaque fiche de la grille doit contenir les informations suivantes : nom du véhicule,  marque, prix, nombre de places.
- Le coût est exprimé en Crédit Galactique Républicain (propriété cost_in_credits).
- Au clic sur une des fiches, on affiche les détails du vaisseau.
- La fiche contient un bouton (« Réserver » ou un bouton « Annuler ma réservation »).
- Si la valeur cost_in_credits vaut « unkown » , ne pas faire apparaître les boutons. Afficher un message indiquant que la voiture n’est pas disponible à la location.
- Un panier toujours visible à l’écran doit afficher le total de la commande.
- Un appui sur « Réserver » ajoute le vaisseau au panier.
- Un appui sur « Annuler ma réservation  » supprime le vaisseau du panier.
- Le panier affichera le montant total.

## Contraintes
- L’application doit être écrite en Javascript. Vous êtes libre de choisir framework et bibliothèques.
- Utiliser l’API : http://swapi.co/api/vehicles/.
- Il n’est pas nécessaire de paginer les résultats.
- L’API ne propose pas les images. Nous vous les fournissons (10 véhicules).


Bon Javascript !
