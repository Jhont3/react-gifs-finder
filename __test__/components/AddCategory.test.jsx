import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas AddCategory', () => { 

    test('Debe cambiar valor de caja de texto', () => { 

        render( <AddCategory onNewCategory={ () => {} }/>)
        // screen.debug();
        const input = screen.getByRole('textbox');

        fireEvent.input ( input, { target: { value: 'Saitama' }} );

        expect( input.value ).toBe( 'Saitama' );
        // screen.debug();
     });

     test('Debe llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = 'one punch';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input ( input, { target: { value: inputValue } });
        fireEvent.submit ( form );
        // screen.debug();
        expect( input.value ).toBe( '' );

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
        
      });

      test('No debe llamar el OnNewCategory si el input esta vacio', () => { 

        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const form = screen.getByRole('form');
        fireEvent.submit ( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
        

      });


 });
