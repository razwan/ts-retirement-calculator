import * as utils from '../utils';

test( 'errors are thrown when invalid ages are used', () => {
    const invalidAges = [-10, 0];
    const validAges = [30, 100];

    validAges.forEach( age1 => {

        invalidAges.forEach( age2 => {
            expect( () => { utils.getYearsLeft( age1, age2 ) } ).toThrow();
            expect( () => { utils.getYearsLeft( age2, age1 ) } ).toThrow();
        } );

        validAges.forEach( age2 => {
            expect( () => { utils.getYearsLeft( age1, age2 ) } ).not.toThrow();
            expect( () => { utils.getYearsLeft( age2, age1 ) } ).not.toThrow();
        } );
    } )
} )

test( 'difference between ages is calculated properly', () => {
    const useCases = [
        [10, 20, 10], // future
        [40, 40, 0], // present
        [100, 20, -80], // past
    ]

    useCases.forEach( useCase => {
        expect( utils.getYearsLeft( useCase[0], useCase[1] ) ).toBe( useCase[2] );
    } )
} );

test( 'proper age of retirement message is displayed for future date', () => {
    const statement = utils.getRetirementAgeStatement( 10, 20 );
    expect( statement ).toBe( `You have 10 years left until you can retire.` );
} )

test( 'proper age of retirement message is displayed for past date', () => {
    const statement = utils.getRetirementAgeStatement( 20, 10 );
    expect( statement ).toBe( `Seems like you already retired 10 years ago.` );
} )

describe( 'proper year of retirement message is displayed', () => {

    beforeAll( () => {
        jest.spyOn( utils, 'getCurrentYear' );
        ( utils.getCurrentYear as jest.Mock ).mockImplementation(() => 2010)
    } )

    afterAll( () => {
        ( utils.getCurrentYear as jest.Mock ).mockRestore()
    } )

    test( 'proper year of retirement message is displayed for future date', () => {
        const statement = utils.getRetirementYearStatement( 10, 20 );
        expect( statement ).toBe( `It's 2010, so you can retire in 2020.` );
    } )
    
    test( 'proper year of retirement message is displayed for past date', () => {
        const statement = utils.getRetirementYearStatement( 20, 10 );
        expect( statement ).toBe( `It's 2010, you retired in 2000.` );
    } )
} )
