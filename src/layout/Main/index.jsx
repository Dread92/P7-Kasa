import React from 'react'
import "./Main.scss";


//Main qui prend un paramètre "children" (les composants enfants passés à l'intérieur de la balise Main).
// Il enveloppe le contenu enfant et applique la classe CSS "main" pour la mise en forme ou le positionnement spécifique défini dans le fichier de styles.
function Main ({  children}){
  return <div className='main'>{children}</div>;
}

export default Main