import React, {useEffect, useState, useRef} from "react";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";
import { Camera, CameraType } from "expo-camera";
import Button from "./Button";

export default function Scan() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(()=> {
    (async ()=>{
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

   return(
    <View style={styles.container}>
       <Camera
          style={styles.camera}
          type={type}
          flashMode={flash}
          ref={cameraRef}
       >
       <View style={styles.camBtnContainer}>
          <Button icon={'retweet'} onPress={()=>{
            setType(type === CameraType.back ? CameraType.front : CameraType.back);
          }}/>
          <Button icon={'flash'}
            color={flash === Camera.Constants.FlashMode.off ? 'gray' : 'yellow'}
            onPress={() => {
              setFlash(flash === Camera.Constants.FlashMode.off 
                ? Camera.Constants.FlashMode.on
                : Camera.Constants.FlashMode.off)
            }}
          />
       </View>
       </Camera>
    </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingBottom: 20
  },
  camera:{
    flex: 1,
    borderRadius: 20,
  },
  camBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
})