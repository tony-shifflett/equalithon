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
            <Text style={styles.txt}>Pelvic Floor Therapist</Text>
        </Pressable>
        <Pressable style={styles.specialistType}>
            <Image style={styles.img}
            source={require('../../assets/doula.jpg')}/>
            <Text style={styles.txt}>Postpartum Doula</Text>
        </Pressable>
        <Pressable style={styles.specialistType}>
            <Image style={styles.img}
            source={require('../../assets/nanny.jpg')}/>
            <Text style={styles.txt}>Nanny</Text>
        </Pressable>
        <Pressable style={styles.specialistType}>
            <Image style={styles.img}
            source={require('../../assets/cleaning-services.jpg')}/>
            <Text style={styles.txt}>Home Cleaning</Text>
        </Pressable>
        <Pressable style={styles.specialistType}>
            <Image style={styles.img}
            source={require('../../assets/lactation-specialist.jpg')}/>
            <Text style={styles.txt}>Lactation Specialist</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    form: {
        height:379, 
        width: 343,
    },
    specialistType: {
        borderWidth: 1,
    },
    img: {
        height: 95,
        width: 75,
    },
    txt: {
        fontSize: 16,
    },
})
export default ProviderSelectionForm