import { getGifs } from "../../src/Helpers/getGifs";

describe('Tests getGif()', () => { 

    test('should retornar arreglo de gifs', async() => { 
        
        const gifs = await getGifs('Valorant');
        // console.log(gifs);
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ). toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        })

     });

 });