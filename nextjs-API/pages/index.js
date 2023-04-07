import Head from 'next/head';
import unfetch from 'isomorphic-unfetch';
import Link from 'next/link';
import slug from 'slug';

function HomePage({characters}) {
    return (<div>
        <Head>
            <title>Home</title>
        </Head>
  
<h1>Rick and Morty</h1>

  {/*ul ve li teqleri vasitesile Rick and Morty characterlerinin hamisinin adlarini siyahiya aliriq.*/}
  <ul>
      {/*map (dongu) vasitesile characterler icerisinden characteri cekirik.*/}
      {characters.results.map(character=>(
          <li key={character.id}>

              {/*slug - bildiyimiz kimi linklerin adlarinda hec vaxt bosluq ola bilmez. Slug linklerde
              ola bilecek bosluqlarin yerini mueyyen isarelerle ( _, -, ve s.) doldurur ve bize
              duzgun sekilde link verir.*/}
              {/*href - linkin yolu, slug - getdiyi ver, as - ise gonderilen url-dir.*/}
              <Link href="/character/[slug]" as={`/character/${slug(character.name)}-${character.id}`}>
              {/*characterlerin adlarini props vasitesile cekib ekrana getirdik ve bu adlari linklendirdik.
              Ona gore linklendirdik ki, characterlerin her birinin adinin ustune basanda sehifede hemin
              characterin adi ve sekli eks olunsun.*/}    
              <a > {character.name}</a>
              </Link>
              </li>
        ))}
  </ul>
      
  </div> )
  }

  // getStaticProps - u elde ele
  export async function getStaticProps() {
      // await - Eyni anda JavaScripte coxlu sayda sorgu gonderilir. Gonderilen bu sorgularin nizamli 
      // sekilde yerine yetirilmesi ucun ise await-den istifade olunur. Yeni datanin gelisini nizamlayir.
      const data = await unfetch("https://rickandmortyapi.com/api/character/"); //-- rickandmorty kartinda
      // olan character-leri(adlarini, sekillerini ve s.) cekeceyik.

      // character-leri datadan json frmati ile cekmek.
      const characters = await data.json();

    return {
      // propsla characterleri cekirik.  
      props: {
        characters
      }
    }
  }
  
  export default HomePage