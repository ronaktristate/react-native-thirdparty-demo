import React from "react";
import { Text, View, StatusBar, StyleSheet, TouchableOpacity, Image, Platform, Keyboard, ImageBackground } from 'react-native';
import { getStatusBarHeight } from './iPhoneXHelper';
import { colors, constants, images } from "../common";

// /**custom header componet */
// const Header = ({
//    backButton,
//    onBackButtonPress,
//    rightIcon,
//    rightImage,
//    middleText,
//    leftIcon,
//    leftIconPress,
//    mainStyle,
//    middleTextStyle,
//    onPressRightIcon,
//    rightImageStyle
// }) => {
//    return (
//       <View style={[styles.container, mainStyle,]} >
//          <>
//             <View style={styles.firstView}>
//                {
//                   backButton ?
//                      <View
//                         style={[styles.backButton]}
//                      >
//                         <TouchableOpacity
//                            onPress={() => {
//                               if (onBackButtonPress) onBackButtonPress();
//                               else NavigationService.goBack();
//                            }}
//                            delayPressIn={0}
//                         >
//                            <Text>{"Back"}</Text>
//                         </TouchableOpacity>
//                      </View>
//                      :
//                      leftIcon ?
//                         <View
//                            style={[styles.backButton]}
//                         >
//                            <TouchableOpacity
//                               onPress={() => leftIconPress && leftIconPress()}
//                               delayPressIn={0}
//                               hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
//                            >
//                               <Image source={leftIcon} />
//                            </TouchableOpacity>
//                         </View>
//                         :
//                         null
//                }
//             </View>
//             <View
//                style={[styles.middleView]}>
//                {middleText ?
//                   <Text numberOfLines={1} style={[styles.middleTextStyle, middleTextStyle, {}]}> {middleText}</Text>
//                   :
//                   null}
//             </View>
//             {rightIcon ?
//                <View style={[styles.lastView]}>
//                   <TouchableOpacity activeOpacity={0.8} onPress={onPressRightIcon}>
//                      {rightImage ?
//                         <Image source={rightImage} style={rightImageStyle} />
//                         : null
//                      }
//                   </TouchableOpacity>
//                </View>
//                :
//                <View style={[styles.lastView]} />
//             }
//          </>
//       </View>
//    )
// }

class HeaderComponent extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
   }

   render() {
      let {
         backButton,
         onBackButtonPress,
         rightIcon,
         rightImage,
         middleText,
         leftIcon,
         leftIconPress,
         mainStyle,
         middleTextStyle,
         onPressRightIcon,
         rightImageStyle
      } = this.props;

      return (
         <View style={[styles.container, mainStyle,]} >
            <>
               <View style={styles.firstView}>
                  {
                     backButton ?
                        <View
                           style={[styles.backButton]}
                        >
                           <TouchableOpacity
                              onPress={() => {
                                 if (onBackButtonPress) onBackButtonPress();
                                 else NavigationService.goBack();
                              }}
                              delayPressIn={0}
                           >
                              <Text>{"Back"}</Text>
                           </TouchableOpacity>
                        </View>
                        :
                        leftIcon ?
                           <View
                              style={[styles.backButton]}
                           >
                              <TouchableOpacity
                                 onPress={() => leftIconPress && leftIconPress()}
                                 delayPressIn={0}
                                 hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
                              >
                                 <Image source={leftIcon} />
                              </TouchableOpacity>
                           </View>
                           :
                           null
                  }
               </View>
               <View
                  style={[styles.middleView]}>
                  {middleText ?
                     <Text numberOfLines={1} style={[styles.middleTextStyle, middleTextStyle, {}]}> {middleText}</Text>
                     :
                     null}
               </View>
               {rightIcon ?
                  <View style={[styles.lastView]}>
                     <TouchableOpacity activeOpacity={0.8} onPress={onPressRightIcon}>
                        {rightImage ?
                           <Image source={rightImage} style={rightImageStyle} />
                           : null
                        }
                     </TouchableOpacity>
                  </View>
                  :
                  <View style={[styles.lastView]} />
               }
            </>
         </View>
      );
   }
}

export default HeaderComponent;

/**component styling */
const styles = StyleSheet.create({
   container: {
      paddingTop: Platform.OS === 'android'
         ? 25 :
         (getStatusBarHeight(true) + 10),
      flexDirection: 'row',
      paddingBottom: 15,
   },
   backButton: {
   },
   middleView: {
      alignItems: 'center',
      flex: 3.5,
   },
   middleTextStyle: {
      fontSize: 20,
      color: "black",
   },
   firstView: {
      paddingLeft: 20,
      flex: 0.3
   },
   lastView: {
      alignItems: 'flex-end',
      paddingRight: 20,
      flex: 0.3
   },
})


import React, { Component } from 'react';
import { View, Text } from 'react-native';

