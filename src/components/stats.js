import * as React from 'react';
import { Dimensions } from "react-native";
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import {
    LineChart
} from 'react-native-chart-kit'
import Data from '../../file.json'

// Total dépenses
const totalCountExpenses = (json) => {
    return json.map((e) => e.expenses.map((e) => e.amount)).map((e) => {
        return e.map((e) => +(e.replace(/[€,]/g, '')))
    })
}
const expenses = totalCountExpenses(Data)
console.log('dépenses',expenses)
// Total revenus
const totalCountIncomes = (json) => {
    return json.map((e) => e.incomes.map((e) => e.amount)).map((e) => {
        return e.map((e) => +(e.replace(/[€,]/g, '')))
    })
}
const incomes = totalCountIncomes(Data)
console.log('revenus',incomes)

// Méthode Dates Dépenses
const datesExpenses = (json) => {
    return json.map((e) => e.expenses.map((e) => e.date)).map((e) => e.map((e) => e.substring(0, 10)))
}

// CONST Dates Dépenses
const realDatesExpenses = datesExpenses(Data)
// Tri des dates , de la + ancienne à la plus récente
const sortedDatesExpenses = realDatesExpenses[0].sort((a,b)=>a>b)
// Formatage des dates
const frSortedDatesExpenses = sortedDatesExpenses.map((e)=>{
e = new Date(e)    
return e.toLocaleDateString("fr")
})
const objects = Data.map((e)=>{
return e.expenses

})
console.log("obj",objects[0]);
const youpi = objects[0].map((e)=>{
    console.log(e);
})
//TENTATIVES
/* const createAnObjetDatesAndExpenses = (array1,array2) =>{
    let obj = {}
 array1.forEach((e,i)=>{
obj[e] = array2[i]
})
return obj
}
console.log(realDatesExpenses,expenses[0]);
 let myNewTruc = createAnObjetDatesAndExpenses(realDatesExpenses,expenses[0])
console.log(myNewTruc);
// Tri des dates , de la + ancienne à la plus récente
const sortedDatesExpenses = realDatesExpenses[0].sort((a,b)=>a>b) */
/* const indices = Array.from(realDatesExpenses.keys())
                     .sort( (a,b) => realDatesExpenses[a].localeCompare(realDatesExpenses[b]) )

                     const sortedExpensesFnDates = indices.map(i => expenses[i]) 
                     console.log(sortedExpensesFnDates) */
/* const indices = Array.from(realDatesExpenses.keys())
                     .sort( (a,b) => realDatesExpenses[a].localeCompare(realDatesExpenses[b]) )

                     sortedAge = indices.map(i => age[i])     
console.log("frSortedDates",frSortedDatesExpenses) */
/* console.log(realDatesExpenses, 'pas triées')
console.log(sortedDates, 'triées') */
// Méthode Dates Revenus
const datesIncomes = (json) => {
    return json.map((e) => e.incomes.map((e) => e.date)).map((e) => e.map((e) => e.substring(0, 10)))
}

// CONST Dates Revenus
const realDatesIncomes = datesIncomes(Data)
// Mémo : les 2e,3e et4e valeurs dans le graph ne sont pas les bonnes valeurs mais la courbe semble ok elle, écart de 490 entre 1er et 2e, 2e et 3e etc.
//https://github.com/indiespirit/react-native-chart-kit/issues/21 NORMAL A PRIORIS
const Stats = ({ navigation }) => {

// Voir pour les revenus et correler dates avec dépenses/revenus
    const dataExpenses = {
        labels: frSortedDatesExpenses,
        datasets: [{
            data: expenses[0]
        }],
    };


    const dataIncomes = {
        labels: realDatesIncomes[0],
        datasets: [{
            data: incomes[0]
        }],
    };

    return (
        <View style={styles.container}>
            <Text>
                Courbe DÉPENSES :
            </Text>
            <LineChart
                data={dataExpenses}
                // from react-native
                width={400}
                height={220}
                xAxisLabel={''}
                yAxisLabel={''}
                chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
            <Text>
                Courbe REVENUS :
            </Text>
            <LineChart
                data={dataIncomes}
                // from react-native
                width={400}
                height={220}
                xAxisLabel={''}
                yAxisLabel={''}
                chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        backgroundColor: '#FAF0D7',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    btns: {
        justifyContent: 'center',
    },
    validate: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    /*   btns: {
          justifyContent: 'center',
          alignItems: 'center',
      }, */


    btnConnection: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#306ec2',

        /* '#306ec2' */
        backgroundColor: '#FFD9C0',
        padding: 10,
        width: 150,
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: 10

    },
    btnRegister: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#F4BFBF',
        padding: 10,
        width: 150,
        alignItems: 'center',
        borderRadius: 10
    },
    textConnection: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    textRegister: {
        color: 'grey',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default Stats;
