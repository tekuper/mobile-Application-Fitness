import { StyleSheet, Text, SafeAreaView, View, Image, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import FitnessCards from '../components/FitnessCards'
import { FitnessItems } from '../Context'

const HomeScreen = () => {
    const {
        completed,
        setCompleted,
        minutes,
        setMinutes,
        calories,
        setCalories,
        setWorkout,
        workout,
    } = useContext(FitnessItems);
    return (
        <ScrollView style={{ marginTop: 50, }}>

            <View
                style={{
                    backgroundColor: "#6CB4FE",
                    padding: 10,
                    height: 220,
                    width: "100%",
                }}>
                <Text
                    style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 18,
                    }}>
                    HOME WORKOUT</Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 20,
                    }}>
                    <View>
                        <Text
                            style={{
                                textAlign: "center",
                                fontWeight: "bold",
                                color: "white",
                                fontSize: 18,
                            }}>
                            {workout}
                        </Text>
                        <Text
                            style={{
                                color: "#D0D0D0",
                                fontSize: 17,
                                marginTop: 6,
                            }}>
                            WORKOUTS</Text>


                    </View>
                    <View>
                        <Text
                            style={{
                                textAlign: "center",
                                fontWeight: "bold",
                                color: "white",
                                fontSize: 18,
                            }}>
                            {calories}
                        </Text>
                        <Text
                            style={{
                                color: "#D0D0D0",
                                fontSize: 17,
                                marginTop: 6,
                            }}>
                            KCAL</Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                textAlign: "center",
                                fontWeight: "blod",
                                color: "white",
                                fontSize: 18,
                            }}>
                            {minutes}
                        </Text>
                        <Text
                            style={{
                                color: "#D0D0D0",
                                fontSize: 17,
                                marginTop: 6,
                            }}>
                            MINS</Text>

                    </View>

                </View>

                <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                }}>

                    <Image
                        style={{
                            width: "95%",
                            height: 90,
                            marginTop: 20,
                            borderRadius: 7,
                        }}

                        source={{
                            uri: "https://previews.123rf.com/images/zelmabrezinska/zelmabrezinska2211/zelmabrezinska221100073/193437816-femme-en-forme-faisant-des-exercices-de-yoga-pose-de-pont-et-regardant-des-tutoriels-en-ligne-sur.jpg"
                        }}
                    />


                </View>
            </View>
            <View>
                <FitnessCards />
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})