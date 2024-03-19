import { View, Text, StyleSheet, Image, TextInput, Button, Pressable } from 'react-native'
import React from 'react'
import logo from "../assets/images/logo.png"
import { useForm, Controller } from "react-hook-form";


export default function Main() {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            quantityBalls: '',
            weightBalls: '',
            hydration: '',
            salt: ''
        }
    });

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.img} />
            <Text style={styles.title}>Dough Pizza Calculator</Text>
            <View style={styles.form}>
                <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onchange, onblur, value } }) => (
                        <View style={styles.contentForm}>
                            <Text style={styles.text}>Quantity of balls</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType='numeric'
                                onblur={onblur}
                                onChangeText={onchange}
                            />
                        </View>
                    )}
                    name='quantityBalls'
                />
                {errors.quantityBalls && <Text>This is required.</Text>}
                <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onchange, onblur, value } }) => (
                        <View style={styles.contentForm}>
                            <Text style={styles.text}>Weight of balls</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType='numeric'
                                onblur={onblur}
                                onChangeText={onchange}
                            />
                        </View>
                    )}
                    name='weightBalls'
                />
                {errors.quantityBalls && <Text>This is required.</Text>}

                <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onchange, onblur, value } }) => (
                        <View style={styles.contentForm}>
                            <Text style={styles.text}>Hydration %</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType='numeric'
                                onblur={onblur}
                                onChangeText={onchange}
                            />
                        </View>
                    )}
                    name='hydration'
                />
                {errors.hydration && <Text>This is required.</Text>}

                <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onchange, onblur, value = 3 } }) => (
                        <View style={styles.contentForm}>
                            <Text style={styles.text}>Salt %</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType='numeric'
                                onblur={onblur}
                                onChangeText={onchange}
                                defaultValue={value}

                            />
                        </View>
                    )}
                    name='salt'
                />
                {errors.salt && <Text>This is required.</Text>}
            </View>
            <Pressable style={styles.btn}>
                <Text style={styles.btnText}>Calculate</Text>
            </Pressable>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        color: "#29252c",
        marginBottom: 30
    },
    img: {
        height: 70,
        width: 70,
    },
    input: {
        borderWidth: 1,
        borderColor: "#29252c",
        width: 140,
        height: 60,
        borderRadius: 5,
        textAlign: "center",
        fontSize: 22
    },
    text: {
        // color: "#29252c",
        width: 140,
        textAlign: "center"
    },
    form: {
        width: "100%",
        height: 400,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 15
    },
    contentForm: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
    },
    btn: {
        width: 200,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#29252c",
        borderRadius: 5
    },
    btnText: {
        color: "#a64942",
        fontSize: 16
    }
});
