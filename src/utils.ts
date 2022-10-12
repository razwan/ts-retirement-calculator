export const getYearsLeft = ( currentAge: number, retirementAge: number ) => {
    if ( currentAge < 1 || retirementAge < 1 ) {
        throw new Error( 'Invalid age' );
    }
    
    return retirementAge - currentAge;
}

export const getCurrentYear = () => {
    const todaysDate = new Date();
    return todaysDate.getFullYear();
}

export const getRetirementAgeStatement = ( age: number, retirementAge: number ) => {
    const yearsLeft = getYearsLeft( age, retirementAge );

    if ( yearsLeft < 0 ) {
        return `Seems like you already retired ${ -1 * yearsLeft } years ago.`;
    }

    return `You have ${ yearsLeft } years left until you can retire.`;
}

export const getRetirementYearStatement = ( age: number, retirementAge: number ) => {
    const yearsLeft = getYearsLeft( age, retirementAge );
    const currentYear = getCurrentYear();
    const retirementYear = currentYear + yearsLeft;
  
    if ( yearsLeft < 0 ) {
        return `It's ${ currentYear }, you retired in ${ retirementYear }.`;
    }

    return `It's ${ currentYear }, so you can retire in ${ retirementYear }.`;
}