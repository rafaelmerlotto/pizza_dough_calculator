import { View, Text, StyleSheet, Image, TextInput, Pressable} from 'react-native'
import React, { useState } from 'react'
import logo from "../assets/images/logo.png"
import { useForm, Controller } from "react-hook-form";
import DoughResult from './DoughResult';
import Loading from './Loading';



export default function Main() {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            quantityBalls: "",
            weightBalls: "",
            hydration: "",
            salt: ""
        }
    });

    const [total, setTotal] = useState(0)
    const [flour, setFlour] = useState(0)
    const [water, setWater] = useState(0)
    const [salt, setSalt] = useState(0)
    const [yeast, setYeast] = useState(0)
    const [loading, setLoading] = useState(false)


    const onSubmit = (data) => {
        setLoading(true)
        setTimeout(() => {
            let start = (data.quantityBalls * data.weightBalls);
            let flour;
            switch (Number(data.hydration)) {
                case 60:
                    flour = (start * data.hydration) / 94;
                    break;
                case 61:
                    flour = (start * data.hydration) / 96
                    break;
                case 62:
                    flour = (start * data.hydration) / 96;
                    break;
                case 63:
                    flour = (start * data.hydration) / 100.8;
                    break;
                case 64:
                    flour = (start * data.hydration) / 103;
                    break;
                case 65:
                    flour = (start * data.hydration) / 105.2;
                    break;
                case 66:
                    flour = (start * data.hydration) / 107.4;
                    break;
                case 67:
                    flour = (start * data.hydration) / 109.7;
                    break;
                case 68:
                    flour = (start * data.hydration) / 112.1;
                    break;
                case 69:
                    flour = (start * data.hydration) / 114.4;
                    break;
                case 70:
                    flour = (start * data.hydration) / 116.7;
                    break;
                case 71:
                    flour = (start * data.hydration) / 119.2
                    break;
                case 72:
                    flour = (start * data.hydration) / 121.5;
                    break;
                case 73:
                    flour = (start * data.hydration) / 124.1;
                    break;
                case 74:
                    flour = (start * data.hydration) / 126.3;
                    break;
                case 75:
                    flour = (start * data.hydration) / 129;
                    break;
                case 76:
                    flour = (start * data.hydration) / 131.4;
                    break;
                case 77:
                    flour = (start * data.hydration) / 133.9;
                    break;
                case 78:
                    flour = (start * data.hydration) / 136.4;
                    break;
                case 79:
                    flour = (start * data.hydration) / 138.9;
                    break;
                case 80:
                    flour = (start * data.hydration) / 141.6;
                    break;
                default:
                    0;
                    break
            }


            let salt = (data.salt * Number(flour)) / 100;
            let yeast = (start * 0.2) / 100;
            let water = (data.hydration * Number(flour)) / 100
            let totalWater = (water + salt) - salt;
            let total = Number(flour) + totalWater - salt;
            setTotal(total)
            setFlour(flour)
            setWater(totalWater)
            setSalt(salt)
            setYeast(yeast)
            setLoading(false)
        }, 1500)

    }

    return (
      
                <View style={styles.container}>
                 
                    <Image source={logo} style={styles.img} />
                    <Text style={styles.title}>Pizza Dough Calculator</Text>
                    <View style={styles.form}>
                        <Controller
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={styles.contentForm}>
                                    <Text style={styles.text}>Quantity of balls</Text>
                                    <TextInput
                                        style={styles.input}
                                        keyboardType='numeric'
                                        onblur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                    {errors.salt && <Text style={{ fontSize: 8, height: 10 }}>This is required.</Text>}
                                </View>
                            )}
                            name='quantityBalls'
                        />

                        <Controller
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={styles.contentForm}>
                                    <Text style={styles.text}>Weight of balls</Text>
                                    <TextInput
                                        style={styles.input}
                                        keyboardType='numeric'
                                        onblur={onBlur}
                                        onChangeText={onChange}
                                        value={value}

                                    />
                                    {errors.salt && <Text style={{ fontSize: 8, height: 10 }}>This is required.</Text>}
                                </View>
                            )}
                            name='weightBalls'
                        />


                        <Controller
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={styles.contentForm}>
                                    <Text style={styles.text}>Hydration %</Text>
                                    <TextInput
                                        style={styles.input}
                                        keyboardType='numeric'
                                        onblur={onBlur}
                                        onChangeText={onChange}
                                        value={value}

                                    />
                                    {errors.salt && <Text style={{ fontSize: 8, height: 10 }}>This is required.</Text>}
                                </View>
                            )}
                            name='hydration'
                        />


                        <Controller
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={styles.contentForm}>
                                    <Text style={styles.text}>Salt %   </Text>
                                    <TextInput
                                        style={styles.input}
                                        keyboardType='numeric'
                                        onblur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                    {errors.salt && <Text style={{ fontSize: 8, height: 10 }}>This is required.</Text>}
                                </View>
                            )}
                            name='salt'
                        />

                    </View>
                    <Pressable style={styles.btn} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.btnText}>Calculate</Text>
                    </Pressable>
                    {loading ? <Loading /> : <DoughResult dough={{ total, flour, water, salt, yeast }} />}


                </View>


    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        marginTop: 10
    },
    title: {
        fontSize: 20,
        color: "#29252c",
        height: 70,
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
        fontSize: 22,
        color: "#29252c",

    },
    text: {
        color: "#29252c",
        width: 140,
        textAlign: "center"
    },
    form: {
        width: "100%",
        height: 210,
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
