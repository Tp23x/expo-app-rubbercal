import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput } from 'react-native';


const Home = () => {
    const [userName, setUserName] = useState('');
    const [perRubber, serPerRubber] = useState('');
    const [priceR, serPriceR] = useState('');
    const result = calculatePercentage(userName, perRubber);
    
    
    const modper = calculateModper(result);
    const sumprice = calculateSumprice(result, priceR);

    let number = 4.9677;
    let decimal = Math.trunc(number);
    let toFixed1 = (number,2);
    const toFixed =  `${number}`.match(new RegExp(`^-?\\d+(?:\.\\d{0,${1}})?`))[0];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>Insert any text in below input</Text>
                <TextInput
                    value={userName}
                    onChangeText={(userName) => setUserName(userName)}
                    placeholder={'น้ำหนัก'}
                    style={styles.input}
                />
                <Text style={{ color: 'blue' }}>{userName}</Text>
                <TextInput
                    value={perRubber}
                    onChangeText={(perRubber) => serPerRubber(perRubber)}
                    placeholder={'เปอร์เซ็นต์น้ำยาง'}
                    style={styles.input}
                />
                <Text style={{ color: 'blue' }}>{perRubber}</Text>

                <Text>{`The result is: ${result}%`}</Text>
                <Text>{`น้ำยางแห้งทั้งหมด: ${modper}%`}</Text>
                <Text>{`ทดสอบ: ${decimal}%`}</Text>
                <Text>{`ทดสอบ1: ${toFixed}%`}</Text>


                <TextInput
                    value={priceR}
                    onChangeText={(priceR) => serPriceR(priceR)}
                    placeholder={'ราคาน้ำยาง'}
                    style={styles.input}
                />
                <Text style={{ color: 'blue' }}>{priceR}</Text>

                <Text>{`ยอดเงินที่ได้รับทั้งหมด: ${sumprice}บาท`}</Text>
            </View>
        </SafeAreaView>
    )
}

function calculatePercentage(value, total) {
    const percentage = (value * total) / 100;
    //const percentage = ((value * total) / 100) * 100;
    //const per = percentage.toFixed(1)/100;
    // return per.toFixed(1);
    const percentage1 = parseFloat(percentage).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return percentage1;
}

function calculateModper(mod) {
    const modp = mod / 100;
    return modp.toFixed(1);
}

function calculateSumprice(privalue, suntotal) {
    const sumresult = privalue * suntotal;
    return sumresult.toFixed(2);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#ffffff',
    },
    input: {
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#e8e8e8'
    },
});

export default Home;
