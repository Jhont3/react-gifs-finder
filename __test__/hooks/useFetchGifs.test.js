import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en Hook useFetch', () => { 

    test('Debe regresar el estado incial', () => { 
        
        // useFetchGifs(); no se puede desestructurar y evaluar aislado cmtes
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        // console.log(result);
        const { images, isLoading } = result.current;

        expect( images.length ).toBe( 0 );
        expect( isLoading ).toBeTruthy();
    
     });

    test('Debe retornar un arreglo de imagenes y el isLoading en false', async() => { 
        
        const { result } = renderHook( () => useFetchGifs('One Punch') );
       
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            {
                timeout: 1500
            }
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan( 0 );
        expect( isLoading ).toBeFalsy();
    
     });
 });