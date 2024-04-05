import { View, Text, StyleSheet, Image, TextInput, Pressable, Button, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import logo from "../assets/images/logo.png"
import { useForm, Controller } from "react-hook-form";
import DoughResult from './DoughResult';
import Loading from './Loading';
import { db } from '../config/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

interface DataDough {
    quantityBalls: number;
    weightBalls: number;
    hydration: number;
    salt: number;
}



export default function Main() {

    const { control, handleSubmit, formState: { errors } } = useForm<DataDough>({
        defaultValues: {
            quantityBalls: 0,
            weightBalls: 0,
            hydration: 0,
            salt: 3
        }
    });

    const [total, setTotal] = useState<number>(0)
    const [flour, setFlour] = useState<number>(0)
    const [water, setWater] = useState<number>(0)
    const [salt, setSalt] = useState<number>(0)
    const [yeast, setYeast] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)
    const [modalLoading, setModalLoading] = useState<boolean>(false)
    const [saveDoughName, setSaveDoughName] = useState<string>("")
    const [modalVisible, setModalVisible] = useState(false);


    const onSubmit = (data: DataDough) => {

        if (data.quantityBalls === 0) {
            return errors.quantityBalls
        }
        if (data.hydration === 0) {
            return errors.hydration
        }
        if (data.weightBalls === 0) {
            return errors.weightBalls
        }


        setLoading(true)
        setTimeout(() => {
            let start: number = (data.quantityBalls * data.weightBalls);
            let flour: number;
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


            let salt: number = (data.salt * Number(flour)) / 100;
            let yeast: number = (start * 0.2) / 100;
            let water: number = (data.hydration * Number(flour)) / 100
            let totalWater: number = (water + salt) - salt;
            let total: number = Number(flour) + totalWater - salt;
            setTotal(total)
            setFlour(flour)
            setWater(totalWater)
            setSalt(salt)
            setYeast(yeast)
            setLoading(false)
        }, 1500)
    }

    const createRecord = async () => {

        if (saveDoughName !== "") {
            await addDoc(collection(db, "dough"), {
                name: saveDoughName,
                createdAt: new Date().toLocaleString("it-IT", {
                    hour12: false, hour: "numeric", minute: "numeric", year: 'numeric', month: 'numeric', day: 'numeric'
                }),
                flour: flour.toFixed(),
                water: water.toFixed(),
                salt: salt.toFixed(),
                yeast: yeast.toFixed(1),
                total: total.toFixed()
            })
            setModalVisible(!modalVisible)
        }
    }

    const verifyFields = () => {
        if (flour === 0) {
            return setModalVisible(false)
        }
        if (water === 0) {
            return setModalVisible(false)
        }
        if (yeast === 0) {
            return setModalVisible(false)
        }
        return setModalVisible(true)
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
                                onBlur={onBlur}
                                onChangeText={onChange}
                            // value={value.toString()}
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
                                onBlur={onBlur}
                                onChangeText={onChange}
                            // value={value.toString()}

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
                                onBlur={onBlur}
                                onChangeText={onChange}
                            // value={value.toString()}

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
                            <Text style={styles.text}>Salt % </Text>
                            <TextInput
                                style={styles.input}
                                keyboardType='numeric'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                //  value={value}
                                defaultValue={"3"}

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

            <Pressable style={styles.btnSaveDough} onPress={() => verifyFields()}>
                <Text ><Entypo name="add-to-list" size={30} color="#29252c" /></Text>
            </Pressable>
            {loading ? <Loading /> : <DoughResult dough={{ total, flour, water, salt, yeast }} />}


            <View style={styles.centeredView}>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Pressable style={styles.btnExit} onPress={() => setModalVisible(!modalVisible)}>
                                <Feather name="x-circle" size={30} color="#29252c" />
                            </Pressable>
                            <TextInput style={styles.inputModal} onChangeText={(name) => setSaveDoughName(name)} />
                            <Text style={styles.modalText}>Flour: {flour.toFixed()}g</Text>
                            <Text style={styles.modalText}>Water: {water.toFixed()}g</Text>
                            <Text style={styles.modalText}>Salt: {salt.toFixed()}g</Text>
                            <Text style={styles.modalText}>Yeast: {yeast.toFixed(1)}g</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => createRecord()}>
                                <Text style={styles.textStyle}>Save <Image source={logo} style={styles.btnImg} /></Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

            </View>


        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
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
        backgroundColor: "rgba(41, 37, 44, 0.8)",
        borderRadius: 5
    },
    btnText: {
        color: "#a64942",
        fontSize: 16
    },
    btnSaveDough: {
        marginTop: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: 300,
        margin: 20,
        backgroundColor: '#fdf3f3',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,

    },
    button: {
        borderRadius: 10,
        // padding: 10,
        // elevation: 2,
    },

    buttonClose: {
        width: "100%",
        height: 35,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#a64942",
        marginTop: 15,
        borderRadius: 5,

    },
    textStyle: {
        color: "#29252c",
        fontSize: 18,
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: "#29252c",
    },
    inputModal: {
        borderWidth: 1,
        borderColor: "#29252c",
        width: 240,
        height: 40,
        borderRadius: 5,
        textAlign: "center",
        fontSize: 16,
        color: "#29252c",
        margin: 15
    },
    btnImg: {
        height: 20,
        width: 20,
    },
    btnExit: {
        padding: 5,
        top: 0,
        right: 0,
        position: "absolute"
    }
});
