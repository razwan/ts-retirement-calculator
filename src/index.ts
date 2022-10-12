import readline from "readline";
import { getRetirementAgeStatement, getRetirementYearStatement } from "./utils";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const prompt: ( question: string ) => Promise<string> = ( question ) => {
    return new Promise( resolve => {
        rl.question( question, (answer: string) => {
            resolve( answer );
        });
    } );
}

(async () => {
    const age = Number( await prompt( 'What is your current age? ' ) );
    const retirementAge = Number( await prompt( 'At what age would you like to retire? ' ) );

    console.log( getRetirementAgeStatement( age, retirementAge ) );
    console.log( getRetirementYearStatement( age, retirementAge) );

    process.exit();
})()