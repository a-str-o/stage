const publicationReducer = (
  state = {
    publications: [],
    activePublication:9,
    currentPublication: {alt:"Vendre avec un agent immobilier",
date:"26 Mai 2021",
description:"Quand on doit vendre son appartement, sa maison ou tout autre type de bien, une question se pose : faire appel à un agent immobilier ou se passer d’intermédiaire ?",
id:9,
image:"https://firebasestorage.googleapis.com/v0/b/agenz-website-prod.appspot.com/o/Images-articles%2Fvente-agent-immobilier-4.jpg?alt=media&token=1af0cdae-8b58-4fed-980a-611fa6660dbf",
link:"vente-agent-immobilier",
text:"<div class='head--block'>     <p class='head--paragrapg'>Vendre sa maison, son appartement ou tout autre type de bien, est une expérience à laquelle bon nombre d’entre nous sont confrontés au moins une fois dans leur vie. Si certains n’ont aucun doute sur la façon de procéder, le plus souvent, une question importante se pose :         <strong> vais-je gérer cette vente seul ou avec l’aide d’un agent immobilier ? </strong> </br>         Question bien légitime, puisqu’il s’agit d’un processus qui peut être plus ou moins complexe et parfois contraignant. </br>         Il n’y a, bien sûr, pas de réponse toute faite à cette question. Mais peser le pour et le contre de chacune des options, vous permettra de faire un choix éclairé ! </br>         Agenz vous apporte ses lumières sur le sujet 💡         </p> </div> <div class='img--block'>     <h2 class='img--block-title'>Vendre son bien sans intermédiaire</h2>     <p class='head--paragrapg'> S’occuper de la vente de son bien, tout seul, pourquoi pas ? Tour d’horizon des principaux avantages et inconvénients.     </p>     <h3 class='img--block-subtitle'>Des avantages évidents </h3>         <p class='head--paragrapg'> En quelques mots, vendre en solo c’est être libre de procéder comme on le souhaite et faire des économies.         </p>     <div class='sub--block'>         <h4 class='img--block-subtitle-h4'>Moins de frais </h4>         <p class='sub--block-head-part'>             En outre, on ne débourse pas de frais d’agence. Ces derniers s’élèvent autour de 2,5% HT du montant de la vente. Une économie qui peut être non négligeable, pour autant qu’on parvienne à la vente.         </p>         <h4 class='img--block-subtitle-h4'>Moins de frais </h4>     <p class='sub--block-head-part'>         En outre, on ne débourse pas de frais d’agence. Ces derniers s’élèvent autour de 2,5% HT du montant de la vente. Une économie qui peut être non négligeable, pour autant qu’on parvienne à la vente.     </p> </div>      <h3 class='img--block-subtitle'>Mais aussi des inconvénients  </h3>     <p class='head--paragrapg'> En revanche, cela présente aussi des contraintes qu’il est important d’appréhender avant de se lancer.     </p> <div class='sub--block'>     <h4 class='img--block-subtitle-h4'>Vendre, ça prend du temps </h4>     <p class='sub--block-head-part'>         Mettre son bien en vente, à moins d’avoir dans son réseau un acheteur déjà prêt à sauter le pas, c’est d’abord devoir communiquer sur son offre. Sites d’annonces, réseaux sociaux, bouche-à-oreille … les canaux sont nombreux. Il faut donc, évaluer les différentes options, les sélectionner, et travailler un minimum les annonces.  Il faut avoir à l’esprit que tout cela prend du temps !     </br> D’autant qu’il faudra bien évidemment répondre à tous ceux qui vont porter de l’attention à l’annonce. Et là encore, cela peut vite devenir chronophage, sans avoir la moindre garantie que l’intérêt manifesté soit réel. A cela s’ajoute le temps consacré aux visites des lieux.             </p>  <h4 class='img--block-subtitle-h4'>N’est pas vendeur qui veut  </h4> <p class='sub--block-head-part'>     Vente sous-entend aussi négociation ! Alors si l’on n’a pas la fibre commerciale, ça peut vite devenir un exercice périlleux. Gare à ceux qui feront face à un acheteur hors pairs qui parviendra peut-être à faire descendre le prix plus bas que prévu !</p>     <h4 class='img--block-subtitle-h4'>L’immobilier est un marché mouvant </h4> <p class='sub--block-head-part'>     Vous l’aurez compris, pour parvenir à la vente, il faut donc maîtriser un minimum les techniques de vente et avoir du temps. Mais pour cela, encore faut-il qu’il y ait des acheteurs potentiels. La définition du prix de vente sera déterminante pour attirer l’intérêt des acquéreurs. Nous vous en parlions déjà dans l’article à propos <a href='https://www.agenz.ma/publication/3-erreurs-a-ne-pas-faire-lors-de-la-mise-en-vente-de-son-appartement'> des erreurs à éviter lors d’une vente</a>     Un prix trop élevé, et le nombre de visites sera trop limité, voire nul. </br>     Au contraire, un prix trop bas, sera un manque à gagner ! Dommage, quand on s’est lancé tout seul pour minimiser les frais ! Il faut donc bien maîtriser les prix du marché et leur évolution. Pas toujours évident quand on n’est pas professionnel du secteur.  </br>Notez qu’avec Agenz vous pouvez consultez à tout moment la <a href='https://www.agenz.ma/prix-immobilier'>carte des prix de l’immobilier</a> par quartier et <a href='https://www.agenz.ma/estimation'>estimer votre bien.</a> </p>   <h4 class='img--block-subtitle-h4'>Attention aux données personnelles</h4> <p class='sub--block-head-part'>     Il faut savoir que sur les différentes plateformes d’annonces ou sur les réseaux sociaux, vos coordonnées ou encore les photos du bien peuvent être récupérées. On prend donc le risque de se retrouver accompagné par un intermédiaire qu’on n’aura pas choisi. </p> </div>     </div>        <div class='img--block'>         <h2 class='img--block-title'>Confier sa vente à un agent immobilier</h2>         <p class='head--paragrapg'>Qu’en est-il quand on opte pour la solution de l’intermédiaire ? Là encore, des bénéfices et des points d’attention.         </p>          <h3 class='img--block-subtitle'>Faire appel à un professionnel de l’immobilier : les avantages </h3>         <p class='head--paragrapg'> Quand on choisit de solliciter une agence immo, c’est avant tout pour la tranquillité d’esprit.         </p>            <div class='sub--block'>             <h4 class='img--block-subtitle-h4'>Une expertise immobilière </h4>             <p class='sub--block-head-part'>                 En tant que professionnel de l’immobilier, l’agent vous aidera à fixer le juste de prix pour votre bien. En fonction de ces caractéristiques, de son emplacement, des délais dans lesquels vous souhaitez céder ce bien et, bien sûr, en fonction des prix du marché.                 </p>                  <h4 class='img--block-subtitle-h4'>Un carnet d’adresse important   </h4>         <p class='sub--block-head-part'>             A travers sa pratique et son expérience de l’immobilier, l’agent immobilier dispose déjà d’un carnet d’adresse d’acheteurs potentiels. Il maîtrise aussi parfaitement les différents canaux et exploite tout son réseau pour en trouver d’autres.         </p>                  <h4 class='img--block-subtitle-h4'>Un négociateur professionnel  </h4>         <p class='sub--block-head-part'>             La « négo » fait partie intégrante du métier d’agent immobilier. Il maîtrise parfaitement les techniques commerciales, sait identifier les points forts des bien et les transformer en arguments de vente percutants. Et n’oublions pas, qu’il est commissionné sur la vente ! C’est la garantie qu’il se donnera les moyens de vendre votre bien au meilleur prix !           </p>                           <h4 class='img--block-subtitle-h4'>Un accompagnement global </h4>         <p class='sub--block-head-part'>             Vendre un bien implique également un certain nombre de procédures administratives. Un professionnel vous indiquera les démarches à suivre et/ou les fera pour vous. De quoi vous permettre d’aborder cette transaction sereinement.        </p>         </div>            <h3 class='img--block-subtitle'>Également quelques inconvénients  </h3>         <p class='head--paragrapg'>La crainte de payer des frais trop importants ou de ne pas trouver le bon intermédiaire constituent parfois un frein.         </p>            <div class='sub--block'>             <h4 class='img--block-subtitle-h4'>Des frais d’honoraires </h4>             <p class='sub--block-head-part'>                 Faire appel à un intermédiaire, c’est recourir à un service. Bien entendu, ce n’est pas gratuit. Le montant de la commission est souvent perçu comme un manque à gagner par le vendeur qui fait alors le choix de se lancer seul.            </p>                  <h4 class='img--block-subtitle-h4'>Trouver un partenaire de confiance  </h4>         <p class='sub--block-head-part'>             Les professionnels de l’immobilier sont relativement nombreux sur le marché marocain. Difficile alors pour le vendeur de s’y retrouver. C’est ainsi que certains propriétaires confient leur bien à un trop grand nombre d’agences, sans pour autant obtenir les résultats attendus.         </p>             <p class='sub--block-head-part'>              En outre, la règlementation encore floue dans le domaine, n’est pas très contraignante pour les acteurs de l’immobilier. Ceci impacte la confiance des vendeurs qui hésitent à faire appel à un professionnel.         </p>         <p class='sub--block-head-part'>             C’est pour cela que chez Agenz, nous prêtons la plus grande attention à la sélection des agences et partageons avec nos utilisateurs des informations fiables, leur permettant de choisir un professionnel en toute confiance.                     </p>                  </div>      </div>     <div class='img--block'>         <h2 class='img--block-title'>Au final, faut-il vendre seul ou avec un pro de l’immobilier ?</h2>         <p class='head--paragrapg'>A cette question, il n’y a pas de bonne ou de mauvaise réponse. Deux éléments sont déterminants pour faire le choix le plus adapté :         </p>           <h3 class='img--block-subtitle'>Penser global </h3>         <p class='head--paragrapg'>               C’est le conseil le plus important que nous pouvons vous apporter en la matière.<strong> Ne raisonnez pas à trop court terme.</strong> </br> Une économie de frais d’honoraires avec une vente au mauvais prix, pourra finalement vous coûter cher. A l’inverse, passer par un agent pourra vous permettre de vendre mieux. La commission ne sera pas un coût mais un investissement rentable !          </p>          <h3 class='img--block-subtitle'>Se poser les bonnes questions </h3>         <p class='head--paragrapg'>                           Pour vous décider, prenez le temps de vous demander :             <ul>                 <li>	Est-ce que je connais les prix actuels du marché ? </li>                 <li>	Ai-je déjà des acquéreurs potentiels dans mon réseau ?</li>                 <li>	Dans quel délai je souhaite vendre ?</li>                 <li>	Suis-je à l’aise dans la négociation commerciale ?</li>                 <li>	Ai-je déjà une expérience de vente immobilière ?</li>                 <li>	Ai-je suffisamment de temps pour gérer toutes les phases de la vente ?</li>                 <li>	Est-ce que je maîtrise les procédures administratives liées à la vente d’un bien ?</li>                                                </ul>         </p>         <p class='head--paragrapg'>               Répondre à ces questions vous permettra de déterminer quelle est la meilleure voie pour atteindre un objectif satisfaisant. C’est-à-dire une vente, au budget souhaité, dans les délais impartis !          </p>         <p class='head--paragrapg'>   Et, quel que soit le mode de vente pour lequel vous optez, pour connaître les prix du marché, estimer votre bien ou encore choisir une agence, Agenz sera toujours là pour vous aider ! 😉          </p>          </div>",
title:"Vendre un bien : faut-il y aller seul ou avec un agent immobilier ? ",
url : ""  
  }
}, 
  action) => {
    switch (action.type) {
      case 'SET_PUBLICATIONS': {
        state = {...state, publications: action.data};
        return state;
      }

      case 'SET_CURRENT_PUBLICATIONS': {
        state = {...state, currentPublication: action.data};
        return state;
      }
      case 'SET_PUBLICATION_ACTIVE': {
        state = {...state, activePublication: action.data};
        return state;
      }
      default:
        return state;
    }
};

export default publicationReducer;