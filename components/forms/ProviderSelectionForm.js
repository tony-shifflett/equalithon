import React from 'react'
import { View, Pressable, Image, Text, StyleSheet } from 'react-native'

const ProviderSelectionForm = () => {
  return (
    <View style={styles.form}>
        <Pressable style={styles.specialistType}>
            <Image style={styles.img}
            source={require('../../assets/therapist.jpg')}/>
            <Text style={styles.txt}>Therapist</Text>
        </Pressable>
        <Pressable style={styles.specialistType}>
            <Image style={styles.img}
            source={require('../../assets/chef.jpg')}/>
            <Text style={styles.txt}>Chef</Text>
        </Pressable>
        <Pressable style={styles.specialistType}>
            <Image style={styles.img}
            source={require('../../assets/pelvic-floor-specialist.jpg')}/>
            <Text style={styles.txt}>Pelvic Floor</Text><Text style={styles.txt}>Therapist</Text>
        </Pressable>
        <Pressable style={styles.specialistType}>
            <Image style={styles.img}
            source={require('../../assets/doula.jpg')}/>
            <Text style={styles.txt}>Postpartum</Text><Text style={styles.txt}>Doula</Text>
        </Pressable>
        <Pressable style={styles.specialistType}>
            <Image style={styles.img}
            source={require('../../assets/nanny.jpg')}/>
            <Text style={styles.txt}>Nanny</Text>
        </Pressable>
        <Pressable style={styles.specialistType}>
            <Image style={styles.img}
            source={require('../../assets/cleaning-services.jpg')}/>
            <Text style={styles.txt}>Home</Text><Text style={styles.txt}>Cleaning</Text>
        </Pressable>
        <Pressable style={styles.specialistType}>
            <Image style={styles.img}
            source={require('../../assets/lactation-specialist.jpg')}/>
            <Text style={styles.txt}>Lactation</Text><Text style={styles.txt}>Specialist</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    form: {
        height:379, 
        width: 343,
        flexDirection: 'row', 
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    specialistType: {
        width: 95,
        marginTop: 56,
    },
    img: {
        height: 75,
        width: 95,
        borderRadius: 100/16
    },
    txt: {
        fontSize: 16,
        alignSelf: 'center',
        fontWeight: '600',
    },
})
export default ProviderSelectionForm