import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, ImageBackground, Dimensions, Image, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button } from '@rneui/themed';
import { useFonts } from 'expo-font';
import moment from "moment";
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const Home = () => {
    const [userName, setUserName] = useState('');
    const [perRubber, setPerRubber] = useState('');
    const [priceR, setPriceR] = useState('');
    const [error, setError] = useState('');
    const result = calculatePercentage(userName, perRubber);



    //const modper = calculateModper(result);
    const sumprice = calculateSumprice(result, priceR);
    const [fontsLoaded] = useFonts({
        Promp: require("../assets/fonts/Prompt-Regular.ttf"),
        PrompS: require("../assets/fonts/Prompt-SemiBold.ttf"),
        KD: require("../assets/fonts/K2D-SemiBold.ttf"),
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    // Calendar fucntion
    const date = new Date;
    const datee = date.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    })

    function calculatePercentage(value, total) {
        const percentage = (value * total) / 100;
        const percentage1 = `${percentage}`.match(new RegExp(`^-?\\d+(?:\.\\d{0,${1}})?`))[0];
        return percentage1;
    }

    // function calculateModper(mod) {
    //     const modp = mod / 100;
    //     return modp.toFixed(1);
    // }

    function calculateSumprice(privalue, suntotal) {
        const sumresult = privalue * suntotal;
        return sumresult.toFixed(2);
    }

    const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

    const handleReset = () => {
        // Clear the input and result values
        setUserName('');
        setPerRubber('');
        setPriceR('');
    };



    return (
        // <SafeAreaView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={{ flex: 1 }}>
                {/* <View style={styles.appbarShape} >  style={[styles.appbarShape, styles.appbarZIndex]} */}
                {/* <Text style={{ fontFamily: "Promp", fontSize: 30, alignItems: 'center', }}>Rubbercal</Text> */}
                <View>
                    <ImageBackground source={require('./img/sun-tornado1.png')}
                        style={styles.appbarImage} >
                        <Ionicons name="calendar" style={styles.icondate} color="black">
                            <Text style={styles.textfront}> {datee}</Text>
                        </Ionicons>
                        <View style={{ alignItems: 'center', bottom: 20 }}>
                            <Text style={{ fontFamily: "KD", fontSize: 50, alignItems: 'center', fontWeight: '800', color: '#2f6657', }}>ค่ายาง</Text>
                        </View>

                    </ImageBackground>

                </View>
                {/* <ImageBackground source={require('./img/sun-tornado1.png')} style={styles.image}> */}
                <View style={styles.container}>
                    <View style={styles.conProp}>
                        <Text style={{ fontFamily: "Promp", fontSize: 16, color: '#d45' }}>***กรุณากรอกข้อมูลในช่องว่างให้ครบ</Text>
                        <TextInput
                            value={userName}
                            onChangeText={(num) => {
                                const numericInput = num.replace(/[^0-9.]/g, '');
                                setUserName(numericInput);
                                setError(numericInput !== num ? '*กรุณากรอกน้ำหนักยาง' : '');
                            }}
                            placeholder={' น้ำหนัก'}
                            style={styles.input}
                            keyboardType="numeric"
                        />
                        {error !== '' && <Text style={{ fontFamily: "Promp", fontSize: 14, color: '#d45', marginRight: 180 }}>{error}</Text>}
                        <Text style={{ fontFamily: "Promp", fontSize: 22, color: '#1B645E', marginTop: 15 }}>น้ำหนักยางสุทธิ: {userName}</Text>
                        <TextInput
                            value={perRubber}
                            onChangeText={(perRubber) => setPerRubber(perRubber)}
                            placeholder={' เปอร์เซ็นต์น้ำยาง'}
                            style={styles.input}
                            keyboardType="decimal-pad"
                        />
                        <Text style={{ color: '#739B90', fontFamily: "Promp", marginRight: 210 }}>{ perRubber !== '' ? 'เปอร์เซ็นต์น้ำยาง' : '' }</Text>
                        <Text style={{ fontFamily: "Promp", fontSize: 22, marginBottom: 10, color: '#1B645E' }}>{ perRubber !== '' ? `น้ำยางแห้งทั้งหมด ${result}%` : '' }</Text>
                        {/* <Text>{`น้ำยางแห้ง: ${modper}%`}</Text> */}



                        <TextInput
                            value={priceR}
                            onChangeText={(priceR) => setPriceR(priceR)}
                            placeholder={' ราคาน้ำยาง'}
                            style={styles.input}
                        //keyboardType="decimal-pad"
                        />
                        <Text style={{ color: 'blue' }}>{priceR}</Text>

                        <Text style={{ fontFamily: "Promp", fontSize: 24, marginTop: 28 }}>
                            {`ยอดเงินที่ได้รับทั้งหมด: ${parseFloat(sumprice, 10).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} บาท`}
                        </Text>
                        <Button
                            ViewComponent={LinearGradient}
                            linearGradientProps={{
                                colors: ['#0CA848', '#44FFEE'],
                                start: { x: 0, y: 0.5 },
                                end: { x: 1, y: 0.5 },
                            }}
                            buttonStyle={{
                                borderRadius: 5,
                                marginTop: 100
                            }}
                            onPress={handleReset}
                        >
                            <Text style={{ fontFamily: "Promp", fontSize: 22, color: '#fff' }}>ล้างข้อมูลทั้งหมด</Text>
                        </Button>

                    </View>

                </View>

            </View>
        </TouchableWithoutFeedback>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //marginTop: 0,
        backgroundColor: '#fff',

    },
    conProp: {
        //flex: 1,
        alignItems: 'center',
        backgroundColor: '#e3f4f0',
        width: Dimensions.get('window').width,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        bottom: 100,
        height: Dimensions.get('window').height,
        //height: "auto",
        //borderWidth: 2,
        //borderColor: '#fff',
        //borderTopWidth: 3,
        shadowColor: '#000',
        elevation: 40,
        shadowOpacity: 0.20,
    },
    input: {
        width: '80%',
        height: 48,
        padding: 10,
        marginTop: 30,
        marginBottom: 0,
        backgroundColor: '#FFFFFF',
        fontFamily: "Promp",
        fontSize: 20,
        borderRadius: 10,
        shadowOpacity: 0.10,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    appbarImage: {
        height: 290,
        width: Dimensions.get('window').width,
        //justifyContent: 'center',
        //alignSelf: "stretch",
    },
    appbarShape: {
        height: 290,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignSelf: "stretch",
        backgroundColor: "#33467897",
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
    },
    imageAppbar: {
        flex: 1,
        resizeMode: 'cover',
        //justifyContent: 'center',
        //position: 'absolute',
    },
    icondate: {
        fontSize: 25,
        fontFamily: "Promp",
        marginTop: 60,
        margin: 30,
        color: '#2f6657',
    },
    textfront: {
        fontFamily: "Promp",
        fontSize: 20,
        marginLeft: 30,
        fontWeight: 'bold'

    }
});

export default Home;
