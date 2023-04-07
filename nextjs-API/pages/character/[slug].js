import unfetch from 'isomorphic-unfetch';
import slug from 'slug';
  
const CharacterDetail = ({character})=>{
    return(
        <div>
            <h1>Charachter Details Page</h1>
            {/*props vasitesile characterin adini cekdik*/}
            <div>{character.name}</div>

            {/*props vasitesile characterin seklini cekdik*/}
            <fiqure>
                <img src={character.image} alt={character.name} />
            </fiqure>
        </div>
    )
}

export async function getStaticPaths() {
    const data = await fetch("https://rickandmortyapi.com/api/character/");
    const characters = await data.json();

  return {
        paths:characters.results.map(character => {
                return {params:{slug:`${slug(character.name)}-${character.id}`}}
        }),
        fallback: false 
  };
}

export async function getStaticProps({params}) {
    // data fetch

   // gelen deyerleri split - (-) qoyulanlari secir, slice - ise character sozunden sonra enbasdan 0-ci indexden baslayir goturmeye.
   const id = params.slug.split('-').slice(-1)[0]
   const data = await unfetch("https://rickandmortyapi.com/api/character/"+id);
    const character = await data.json();
  return {
    props: {
      character
    }
  }
}

export default CharacterDetail