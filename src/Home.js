import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';


const Home = () => {
    const [userName, setUserName] = useState('');
    const [perRubber, serPerRubber] = useState('');
    const [priceR, serPriceR] = useState('');
    const result = calculatePercentage(userName, perRubber);


    //const modper = calculateModper(result);
    const sumprice = calculateSumprice(result, priceR);
    const [fontsLoaded] = useFonts({
        Promp: require("../assets/fonts/Prompt-Regular.ttf"),
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('./img/sun-tornado1.png')} style={styles.image}>
                <View style={styles.container}>

                    <Text style={{ fontFamily: "Promp", fontSize: 30 }}>ทดสอบแอพคำนวณน้ำยาง</Text>
                    <TextInput
                        value={userName}
                        onChangeText={(userName) => setUserName(userName)}
                        placeholder={'น้ำหนัก'}
                        style={styles.input}
                        //keyboardType="numeric"
                    />
                    <Text style={{ color: 'blue',  fontFamily: "Promp" }}>{userName}</Text>
                    <TextInput
                        value={perRubber}
                        onChangeText={(perRubber) => serPerRubber(perRubber)}
                        placeholder={'เปอร์เซ็นต์น้ำยาง'}
                        style={styles.input}
                        //keyboardType="decimal-pad"
                    />
                    <Text style={{ color: 'blue',  fontFamily: "Promp" }}>{perRubber}</Text>

                    <Text style={{ fontFamily: "Promp", fontSize: 20 }}>{`น้ำยางแห้งทั้งหมด: ${result}%`}</Text>
                    {/* <Text>{`น้ำยางแห้ง: ${modper}%`}</Text> */}



                    <TextInput
                        value={priceR}
                        onChangeText={(priceR) => serPriceR(priceR)}
                        placeholder={'ราคาน้ำยาง'}
                        style={styles.input}
                        //keyboardType="decimal-pad"
                    />
                    <Text style={{ color: 'blue' }}>{priceR}</Text>

                    <Text style={{ fontFamily: "Promp", fontSize: 20 }}>{`ยอดเงินที่ได้รับทั้งหมด: ${sumprice}บาท`}</Text>

                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 0,
        // backgroundColor: '#ffffff',
    },
    input: {
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#e8e8e8',
        fontFamily: "Promp"
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});

export default Home;
