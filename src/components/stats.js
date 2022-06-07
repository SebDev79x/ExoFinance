import * as React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';



const Stats = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View>
                {/* <Image style={styles.validate}
                    source={require('../../assets/hw.png')}
                /> */}
            </View>
            <View style={styles.btns}>
                <View>

                    {/* <TouchableOpacity
                        style={styles.btnConnection}
                        onPress={() => navigation.navigate('Connexion')}

                    >
                        <Text style={styles.textConnection}>Se connecter</Text>
                    </TouchableOpacity> */}
                </View>
                <View>
{/*                     <Logo />
 */}                </View>
                <View>
                    {/* <TouchableOpacity
                        style={styles.btnRegister}
                        onPress={() => navigation.navigate('Inscription')}

                    >
                        <Text style={styles.textRegister}>S'inscrire</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
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
    btns:{
        justifyContent:'center',
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
        marginBottom:15,
        borderRadius:10

    },
    btnRegister: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#F4BFBF',
        padding: 10,
        width: 150,
        alignItems: 'center',
        borderRadius:10
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
