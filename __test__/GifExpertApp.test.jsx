import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en GifExpertApp', () => { 

    test('Prueba 1', () => { 

        render( <GifExpertApp /> );
        // screen.debug();
        const title = screen.getByRole("heading", { level: 1 });
        expect( title ).toBeTruthy();
     });

     //Pendiente pruebas unitarias funcion no evaluada

 });