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
                        <Text>{item._id}</Text>
                        <Text>{item.user}</Text>

                <FlatList
                data={item.incomes}
                keyExtractor={(item) => item._id_income}

                renderItem={({ item :item2}) =>
                <View> 
<Text>{item2.date}</Text>
<Text>{item2.amount}</Text>
<Text>{item2.category}</Text>
<Text>{item2.comments}</Text>
<Text>{item2._id_income}</Text>


                </View>
    }
                />
                <View>ESPACE d'au moins 10 cm</View>
                <FlatList
                data={item.expenses}
                keyExtractor={(item) => item._id_expenses}

                renderItem={({ item :item3}) =>
                <View> 
<Text>{item3.date}</Text>
<Text>{item3.amount}</Text>
<Text>{item3.category}</Text>
<Text>{item3.comments}</Text>
<Text>{item3._id_expenses}</Text>


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
});

export default Account;
