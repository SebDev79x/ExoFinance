import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';

const incomesValidationSchema = yup.object().shape({

    firstname: yup
        .string()
        .min(3, ({ min }) => `Minimum ${min} caractères`)
        .max(10, ({ min }) => `Minimum ${min} caractères`)
        .required('Requis')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Prénom invalide"
        ),
    lastname: yup
        .string()
        .min(3, ({ min }) => `Minimum ${min} caractères`)
        .max(10, ({ min }) => `Minimum ${min} caractères`)
        .required('Requis')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Nom invalide"
        ),
    date: yup
        .string()
        .required('Requis')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Date invalide"
        ),
    category: yup
        .string()
        .min(8, ({ min }) => `Minimum ${min} caractères`)
        .required('Requis'),
    comment: yup
        .string()
        .min(5, ({ min }) => `Minimum ${min} caractères`)
        .max(50, ({ min }) => `Minimum ${min} caractères`)
        .required('Requis')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Commentaire invalide"
        )
});
const AddIncomes = () => {
    return (
        <View>
            <Formik
                initialValues={{ firstname: '', lastname: '', date: '', category: '', comment: '' }}
                validateOnMount={true}
                onSubmit={() => {

                }
                }
                validationSchema={incomesValidationSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, touched, isValid, errors }) => (
                    <View>
                        <View>
                            <View style={styles.center}>
                                <Text style={styles.label}>Prénom</Text>
                            </View>
                            <View>
                                <TextInput
                                    style={styles.input}
                                    mode="flat"
                                    placeholder="Prénom"
                                    placeholderTextColor={'grey'}
                                    onChangeText={handleChange('firstname')}
                                    onBlur={handleBlur('firstname')}
                                    value={values.firstname}
                                />
                            </View>
                            {(touched.firstname && errors.firstname) && <Text style={styles.errors}>{errors.firstname}</Text>}
                        </View>
                        <View style={{ height: 30 }}>ESPACE</View>
                        <View>
                            <View style={styles.center}>
                                <Text style={styles.label}>Nom</Text>
                            </View>
                            <View>
                                <TextInput
                                    style={styles.input}
                                    mode="flat"
                                    placeholder="Nom"
                                    placeholderTextColor={'grey'}
                                    onChangeText={handleChange('lastname')}
                                    onBlur={handleBlur('lastname')}
                                    value={values.lastname}
                                />
                            </View>
                            {(touched.lastname && errors.lastname) && <Text style={styles.errors}>{errors.lastname}</Text>}
                        </View>
                        <View style={{ height: 30 }}>ESPACE</View>
                        {/*       <View>
                    <View style={styles.center}>
                        <Text style={styles.label}>Date</Text>
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            mode="flat"
                            placeholder="Choisissez une date"
                            placeholderTextColor={'grey'}
                            onChangeText={handleChange('date')}
                            onBlur={handleBlur('date')}
                            value={values.email}
                        />
                    </View>
                    {(touched.date && errors.date) && <Text style={styles.errors}>{errors.date}</Text>}
                </View>
                <View style={{ height: 30 }}>ESPACE</View>
                <View>
                    <View style={styles.center}>
                        <Text style={styles.label}>Catégorie</Text>
                    </View>
                    <View>
                        <TextInput

                        />
                    </View>
                    {(touched.category && errors.category) && <Text style={styles.errors}>{errors.category}</Text>}
                </View> */}
                        <View style={{ height: 30 }}>ESPACE</View>
                        <View>
                            <View style={styles.center}>
                                <Text style={styles.label}>Commentaire</Text>
                            </View>
                            <View>
                                <TextInput
                                    style={styles.input}
                                    multiline
                                    numberOfLines={10}
                                    mode="flat"
                                    placeholder="Commentaire"
                                    placeholderTextColor={'grey'}
                                    onChangeText={handleChange('comment')}
                                    onBlur={handleBlur('comment')}
                                    value={values.comment}
                                />
                            </View>
                            {(touched.comment && errors.comment) && <Text style={styles.errors}>{errors.comment}</Text>}
                        </View>
                        <View style={styles.center2}>
                            <TouchableOpacity
                                style={styles.btnPass}
                                disabled={!isValid}
                                onPress={handleSubmit} title="Submit"                    >
                                <Text style={styles.textPass}>Valider</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8CC0DE',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    input: {
/*     height: 40,
*/    backgroundColor: '#fcf5d9',
        color: 'black',
        fontSize: 18,
        borderRadius: 10,
        padding: 10
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        marginBottom: 10,
        color: '#FAF0D7',
        fontWeight: 'bold',
        fontSize: 20,

    },

    inputs: {
/*     marginBottom: 10,
*/    flexDirection: 'column',
        justifyContent: 'space-around',
    },
    btnValidate: {
        /* '#306ec2' */
        backgroundColor: 'yellow',
        padding: 10,
        width: 150,
        alignItems: 'center',
        borderRadius: 10

    },
    textValidate: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    errors: {
        color: 'red'
    },
    align: {
        flexDirection: 'row'
    },
    center: {
        alignItems: 'center'
    },
    center2: {
        alignItems: 'center',
        marginTop: 15
    },
    btnPass: {
        /* '#306ec2' */
        backgroundColor: '#FFA8A8',
        padding: 10,
        width: 150,
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 18
    },
    textPass: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    /* end :{
    alignItems:'flex-end'
    } */
    /*   pic: {
    width: 180,
    height: 180,
    resizeMode: 'contain'
    },
    picContainer: {
    flex: .4,
    
    }, */
});

export default AddIncomes;