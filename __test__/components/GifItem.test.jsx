import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";


describe('Tarea', () => { 
    const title = 'Mi prueba';
    const url = 'https://a423432.com/'

    test('Match con Snapshot', () => { 
        const { container } = render(<GifItem title={ title } url={ url } />);
        expect( container ).toMatchSnapshot();
     });
    

     test('Debe mostrar la url y la imagen indicada', () => { 
        render(<GifItem title={ title } url={ url } />);
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('Debe mostrar el titulo en el componente', () => { 
        render(<GifItem title={ title } url={ url } />);
        expect( screen.getByText( title )).toBeTruthy();
     });


 });


