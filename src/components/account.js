import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, View, FlatList, Button, Image, TouchableOpacity } from 'react-native';
import Data from '../../file.json'

console.log(Data)

const Account = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={Data}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) =>
                    <View>
                        <View style={styles.alignRow}>
                            <Text>ID : {item._id}</Text>
                            <Text> Utilisateur : {item.user}</Text>
                        </View>

                        <View>
                            <Text>Liste des opérations :</Text>
                        </View>
                        <FlatList
                            data={item.incomes}
                            keyExtractor={(item) => item._id_income}

                            renderItem={({ item: item2 }) =>
                                <View>
                                    <View>
                                    <Text>______________________</Text>
                                    </View>
                                    <View style={styles.alignRow}>
                                        <Text>Date : {item2.date}</Text>
                                        <Text>Montant : {item2.amount}</Text>
                                        <Text>Cat : {item2.category}</Text>

                                    </View>
                                    <View style={styles.alignColumn}>
                                        <Text>Commentaire : {item2.comments}</Text>
                                        <Text>Opération N° : {item2._id_income}</Text>

                                    </View>



                                </View>
                            }
                        />
                        <View>ESPACE d'au moins 10 cm</View>
                        <FlatList
                            data={item.expenses}
                            keyExtractor={(item) => item._id_expenses}

                            renderItem={({ item: item3 }) =>
                                <View>
                                    <View style={styles.alignRow}>
                                        <Text>Date : {item3.date}</Text>
                                        <Text>Montant : {item3.amount}</Text>
                                        <Text>Cat : {item3.category}</Text>
                                    </View>
                                    <View style={styles.alignColumn}>
                                        <Text>Commentaire : {item3.comments}</Text>
                                        <Text>Opération N° : {item3._id_expense}</Text>
                                    </View>


                                </View>
                            }
                        />
                    </View>

                }
            />
        </SafeAreaView>
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
    alignRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    alignColumn: {
        flexDirection: 'column',
        justifyContent: 'space-between'


    }
});

export default Account;
