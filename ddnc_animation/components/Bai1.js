import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const leftToRight = useRef(new Animated.Value(0)).current;  // Initial value for opacity: 0  
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 10,
        duration: 10000,
      }
    ).start();
  }, [fadeAnim]);

  
  useEffect(() => {
    Animated.timing(
      leftToRight,{
        toValue: 200,
        duration:10000,

      }
    ).start();
  }, [leftToRight])


  return (
    <Animated.View style={{position:'absolute', left:leftToRight}}>
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
    </Animated.View>
  );
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default function Bai1({ navigation })  {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <FadeInView style={{width: 250, height: 20, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 15, textAlign: 'center', margin: 10}}>Welcome to Animation React Native </Text>
      </FadeInView>
    </View>
  )
}