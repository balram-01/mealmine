import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import Svg, {Image, ClipPath, Ellipse} from 'react-native-svg';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  withTiming,
  withDelay
} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');
export default function Login() {
  const imagePosition = useSharedValue(1);
  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 2, 0],
    );
  return({
    transform:[{translateY:withTiming(interpolation,{duration:1000})}]
  })


})
const buttonAnimatedStyle = useAnimatedStyle(() => {
  const interpolation = interpolate(
    imagePosition.value,
    [0, 1],
    [250, 0],
  );
return {
  opacity:withTiming(imagePosition.value,{duration:500}),
  transform:[{translateY:withTiming(interpolation,{duration:1000})}]
};
});

const closeButtonContainerStyle=useAnimatedStyle(()=>{
  const interpolation=interpolate(imagePosition.value,[0,1],[180,360],);
  return(
    {
      opacity:withTiming(imagePosition.value===1?0:1,{duration:800}),
      transform:[{rotate:withTiming(interpolation +"deg",{duration:1000})}]
    }
  )
})

 const formAnimationStyle=useAnimatedStyle(()=>{
  return(
{
  opacity:imagePosition.value===0?withDelay(400,withTiming(1,{duration:800}) ):(withTiming(0,{duration:300}))
}

  )
 })
   
  const loginHandler = () => {
    imagePosition.value = 0;
  };

  const registerHandler = () => {
    imagePosition.value = 0;
  };
  return (
    <>
    <View style={styles.container}>
  
        <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <KeyboardAvoidingView>
          <Svg height={height} width={width + 10}>
            <ClipPath id="clipPath">
              <Ellipse cx={width / 2} rx={height} ry={height} />
            </ClipPath>
            
            <Image
              href={require('../../assets/login-background.jpg')}
              height={height}
              width={width}
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#clipPath)"></Image>
           
          </Svg>
          
          <Animated.View style={[styles.closeButtonContainer,closeButtonContainerStyle]}>
            <Text style={{color: 'black'}} onPress={()=>imagePosition.value=1}>X</Text>
        </Animated.View>
        </KeyboardAvoidingView>
          </Animated.View>
          </View>
         <View/>
        <View style={styles.bottomContainer}>
          <Animated.View style={buttonAnimatedStyle}>
          <Pressable style={styles.button} onPress={loginHandler}>
            <Text style={styles.btnText}>REGISTER AS AN EATER</Text>
          </Pressable>
          </Animated.View>
          <Animated.View style={buttonAnimatedStyle}>
          <Pressable style={styles.button} onPress={loginHandler}>
            <Text style={styles.btnText}>REGISTER AS A MESS</Text>
          </Pressable>
          </Animated.View>
        
          <Animated.View style={[formAnimationStyle,styles.formInputContainer]}>
          
          <TextInput placeholder='Email' placeholderTextColor="black" style={styles.textInput}/>
          <TextInput placeholder='Phone Number'placeholderTextColor="black" style={styles.textInput}/>
          <TextInput placeholder='Password'placeholderTextColor="black" style={styles.textInput}/>
          <View style={styles.formButton}>
    <Text style={styles.btnText}>LOG IN </Text>
        </View> 
       
        </Animated.View>
       
       
        </View>
      
      
        
       
     
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    height: 55,
    backgroundColor: 'rgba(123,104,238,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  btnText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.5,
  },

  bottomContainer: {
    height: height / 3,
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 25,
    borderTopColor: 'rgba(0,0,0,0.2)',
    height: 50,
    paddingLeft: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    fontWeight: '800',
    fontFamily:'Montserrat',
    fontSize:14,
    
    color:'#325CA3',
  },
  formButton: {
    height: 55,
    backgroundColor: 'rgba(123,104,238,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
 
  closeButtonContainer: {
    height: 40,
    width: 40,
    top:-10,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
      
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
  },
  formInputContainer:{
    marginBottom:80,
    ...StyleSheet.absoluteFill,
    zIndex:-1,
  justifyContent:'center'
  },
  
});
