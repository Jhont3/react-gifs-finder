import { getAllByRole, render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');
//Also to create library's thirds

describe('Pruebas en <GifGrid />', () => { 
    
    const category = 'One punch';

    test('Debe mostrar el Loading ', () => { 

        useFetchGifs.mockReturnValue( {
            images: [],
            isLoading: true
        });
        
        render( <GifGrid category={ category }/>)
        // screen.debug();
        expect( screen.getByText( 'Loading...') );
        expect( screen.getByText( category ) );

     });

     test('Debe mostrar los items cuando se cargan las imagenes ', () => { 
        
        const gifs = [
            {   
                id: 'ABC',
                title: 'Saitama',
                url:'https//saitama.jpg'
            },
            {   
                id: '123',
                title: 'Goku',
                url:'https//goku.jpg'
            },
         ]

        useFetchGifs.mockReturnValue( {
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category }/>)

        // screen.debug();
        expect( screen.getAllByRole('img').length ).toBe(2);

      });

 });